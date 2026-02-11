import { Layout } from "@/components/layout";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">Stop by, give us a call, or find us on the map.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-full shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  169-06 Hillside Ave<br />
                  Jamaica, NY 11432
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Located right on Hillside Ave, near the 169th St F train station.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-green-100 p-3 rounded-full shrink-0">
                <Phone className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                <p className="text-lg text-muted-foreground mb-1">
                  (718) 206-2927
                </p>
                <p className="text-sm text-muted-foreground">
                  Call for appointments or walk-in availability.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-orange-100 p-3 rounded-full shrink-0">
                <Clock className="w-6 h-6 text-orange-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Hours</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li className="flex justify-between w-48"><span>Mon - Sat:</span> <span>9:00 AM - 7:00 PM</span></li>
                  <li className="flex justify-between w-48"><span>Sunday:</span> <span>10:00 AM - 5:00 PM</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.086246440263!2d-73.79469792426983!3d40.71353997139316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260f73c66f7f3%3A0x6b7200508687258!2s169-06%20Hillside%20Ave%2C%20Jamaica%2C%20NY%2011432!5e0!3m2!1sen!2sus!4v1709664000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(0%) contrast(100%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
