import { users, appointments, type User, type InsertUser, type Appointment, type InsertAppointment } from "@shared/schema";
import { db } from "./db"; // This will be created automatically by the Replit environment
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  // NEW: Added method to fetch appointments for a specific day
  getAppointmentsByDate(date: string): Promise<Appointment[]>; 
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createAppointment(insertAppt: InsertAppointment): Promise<Appointment> {
    const [appointment] = await db.insert(appointments).values(insertAppt).returning();
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return await db.select().from(appointments);
  }

  // NEW: Implementation to query the database by date
  async getAppointmentsByDate(date: string): Promise<Appointment[]> {
    return await db.select().from(appointments).where(eq(appointments.date, date));
  }
}

export const storage = new DatabaseStorage();