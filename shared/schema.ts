import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// --- Keep the existing Users table ---
export const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// --- UPDATED APPOINTMENTS TABLE ---
export const appointments = pgTable("appointments", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),

  // Date and Time fields optimized for specific slots
  date: text("date").notNull(), // Expected format: YYYY-MM-DD for reliable sorting/searching
  time: text("time").notNull(), // Start time. Expected format: 24h string like "14:30"
  endTime: text("end_time").notNull(), // End time (Start time + service duration + 10m padding)

  notes: text("notes"),
  status: text("status").notNull().default("pending"),
  reminderSent: text("reminder_sent").notNull().default("false"),
});

// This helps validate the data when someone fills out the booking form
export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
  status: true,
  reminderSent: true,
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;