import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // This route handles new appointment submissions from the frontend
  app.post("/api/appointments", async (req, res) => {
    try {
      // 1. Validate the data coming from the form
      const appointmentData = insertAppointmentSchema.parse(req.body);

      // 2. Save it to our database (Supabase via Drizzle)
      const appointment = await storage.createAppointment(appointmentData);

      // 3. Return the new appointment to the frontend as confirmation
      res.status(201).json(appointment);
    } catch (error) {
      // THIS IS THE KEY: This will print the exact error to your Replit Console
      console.error("--- DETAILED BOOKING ERROR ---");
      console.error(error);
      console.error("------------------------------");

      // If the data is missing or incorrect, return a 400 error
      res.status(400).json({ 
        message: "Invalid appointment data provided.",
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  return httpServer;
}