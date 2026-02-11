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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "We'll call you shortly to confirm your appointment time.",
      duration: 5000,
    });
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
                  cell: "h-10 w-10 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground",
                }}
              />
            </div>
            <div className="mt-8 p-4 bg-blue-50 text-primary rounded-lg text-sm">
              <p className="font-bold mb-1">Note:</p>
              <p>For same-day appointments, please call us directly at <a href="tel:7182062927" className="underline font-bold">(718) 206-2927</a> for the fastest service.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Your Details</h2>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mens-cut">Men's Haircut ($30)</SelectItem>
                        <SelectItem value="kids-cut">Kid's Haircut ($25)</SelectItem>
                        <SelectItem value="senior-cut">Senior Citizen Cut ($20)</SelectItem>
                        <SelectItem value="shave">Hot Towel Shave ($25)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="(555) 555-5555" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                        <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Requests (Optional)</Label>
                    <Textarea id="notes" placeholder="Any specific barber request?" />
                  </div>

                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12">
                    Request Appointment
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
