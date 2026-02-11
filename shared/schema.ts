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

// --- ADD THIS NEW SECTION BELOW ---
// This defines the "Appointments" table for your database
export const appointments = pgTable("appointments", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
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
