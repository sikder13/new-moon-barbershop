import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";

// --- BUSINESS LOGIC CONSTANTS ---

// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
const BUSINESS_HOURS = {
  0: { start: "10:00", end: "19:30" }, // Sunday
  1: { start: "10:00", end: "20:00" }, // Monday
  2: { start: "11:00", end: "19:00" }, // Tuesday
  3: { start: "10:00", end: "20:00" }, // Wednesday
  4: { start: "10:00", end: "20:00" }, // Thursday
  5: { start: "10:00", end: "20:00" }, // Friday
  6: { start: "10:00", end: "20:00" }, // Saturday
};

// Durations in minutes (Base service time + 10 min padding)
const SERVICE_DURATIONS: Record<string, number> = {
  "Men's Haircut ($30)": 40,
  "Kid's Haircut ($25)": 40,
  "Senior Citizen Cut ($20)": 40,
  "Hot Towel Shave ($25)": 55,
};

// Helper functions for time math
function timeToMinutes(timeString: string): number {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // --- NEW: ROUTE TO GET AVAILABLE TIME SLOTS ---
  app.get("/api/availability", async (req, res) => {
    try {
      const dateStr = req.query.date as string; // Expected format: YYYY-MM-DD
      const service = req.query.service as string;

      if (!dateStr || !service) {
        return res.status(400).json({ message: "Date and service are required to check availability." });
      }

      const duration = SERVICE_DURATIONS[service] || 40; // Default to 40 if not found

      // Get the day of the week to find business hours
      // We parse the date manually to avoid timezone shifting issues
      const [year, month, day] = dateStr.split("-").map(Number);
      const dateObj = new Date(year, month - 1, day);
      const dayOfWeek = dateObj.getDay();

      const hours = BUSINESS_HOURS[dayOfWeek as keyof typeof BUSINESS_HOURS];

      // If no hours exist for this day (or if we set a day off in the future)
      if (!hours) {
        return res.json({ availableSlots: [] }); 
      }

      const openMinutes = timeToMinutes(hours.start);
      const closeMinutes = timeToMinutes(hours.end);

      // Fetch existing appointments from the database for this exact date
      const existingAppts = await storage.getAppointmentsByDate(dateStr);

      // Convert existing appointments into number ranges (e.g., 600 to 640) for easy math
      const bookedRanges = existingAppts.map(appt => ({
        start: timeToMinutes(appt.time),
        end: timeToMinutes(appt.endTime)
      }));

      const availableSlots: string[] = [];

      // Step through the day in 10-minute increments to find valid start times
      for (let current = openMinutes; current + duration <= closeMinutes; current += 10) {
        const slotStart = current;
        const slotEnd = current + duration;

        // Check if this potential slot overlaps with ANY booked appointment
        const hasOverlap = bookedRanges.some(booked => {
          // A slot overlaps if it starts BEFORE a booking ends AND ends AFTER a booking starts
          return slotStart < booked.end && slotEnd > booked.start;
        });

        if (!hasOverlap) {
          availableSlots.push(minutesToTime(slotStart));
        }
      }

      res.json({ availableSlots });

    } catch (error) {
      console.error("Availability Check Error:", error);
      res.status(500).json({ message: "Failed to calculate availability" });
    }
  });


  // --- UPDATED: ROUTE TO SAVE NEW APPOINTMENTS ---
  app.post("/api/appointments", async (req, res) => {
    try {
      const body = req.body;

      // Calculate the exact endTime based on the selected service before saving
      const duration = SERVICE_DURATIONS[body.service] || 40;
      if (body.time) {
        const startMins = timeToMinutes(body.time);
        body.endTime = minutesToTime(startMins + duration);
      }

      // 1. Validate the data coming from the form matches our schema
      const appointmentData = insertAppointmentSchema.parse(body);

      // 2. Save it to our database (Supabase via Drizzle)
      const appointment = await storage.createAppointment(appointmentData);

      // 3. Return the new appointment to the frontend as confirmation
      res.status(201).json(appointment);
    } catch (error) {
      console.error("--- DETAILED BOOKING ERROR ---");
      console.error(error);
      console.error("------------------------------");

      res.status(400).json({ 
        message: "Invalid appointment data provided.",
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  return httpServer;
}