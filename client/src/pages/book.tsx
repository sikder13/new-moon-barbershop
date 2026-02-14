import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Book() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [service, setService] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(e.currentTarget);

    // Prepare the data object for the API
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: service, // from state
      date: date?.toLocaleDateString(), // converts to readable date "MM/DD/YYYY"
      time: time, // from state
      notes: formData.get("notes") || "",
    };

    // Mandatory Field Validation
    if (!data.name || !data.email || !data.service || !data.time || !data.date) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields (Name, Email, Service, Date, and Time).",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Appointment Booked!",
          description: "Your spot is saved. We've sent a confirmation to your email!",
          duration: 5000,
        });
        // Optional: Reset form or redirect
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save appointment");
      }
    } catch (error) {
      toast({
        title: "Booking Error",
        description: "Something went wrong. Please call (718) 206-2927 to book directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="bg-secondary py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Book an Appointment</h1>
          <p className="text-lg opacity-90">Skip the wait. Schedule your next cut.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Select a Date</h2>
            <div className="border rounded-xl p-4 bg-white shadow-sm inline-block w-full">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-none w-full flex justify-center"
                classNames={{
                  head_cell: "text-muted-foreground font-normal text-[0.8rem] w-10",
                  cell: "h-10 w-10 text-center text-sm p-0 relative",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground",
                }}
              />
            </div>
            <div className="mt-8 p-4 bg-blue-50 text-primary rounded-lg text-sm">
              <p className="font-bold mb-1">Note:</p>
              <p>For same-day appointments, please call us directly at <a href="tel:7182062927" className="underline font-bold">(718) 206-2927</a>.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Your Details</h2>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select onValueChange={setService} value={service}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Men's Haircut ($30)">Men's Haircut ($30)</SelectItem>
                        <SelectItem value="Kid's Haircut ($25)">Kid's Haircut ($25)</SelectItem>
                        <SelectItem value="Senior Citizen Cut ($20)">Senior Citizen Cut ($20)</SelectItem>
                        <SelectItem value="Hot Towel Shave ($25)">Hot Towel Shave ($25)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" name="phone" placeholder="(555) 555-5555" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select onValueChange={setTime} value={time}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</SelectItem>
                        <SelectItem value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Requests (Optional)</Label>
                    <Textarea id="notes" name="notes" placeholder="Any specific barber request?" />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start space-x-2 py-2">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      required 
                      className="h-4 w-4 mt-1 rounded border-gray-300 cursor-pointer" 
                    />
                    <Label htmlFor="consent" className="text-xs opacity-80 cursor-pointer leading-relaxed">
                      I agree to receive appointment reminders and have read the{" "}
                      <a href="/privacy" target="_blank" className="underline font-bold text-primary">
                        Privacy Policy
                      </a>.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12">
                    Confirm Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}