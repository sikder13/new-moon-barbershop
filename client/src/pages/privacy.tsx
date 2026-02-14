import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-secondary py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">How we handle your data at New Moon Barbershop.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Card>
          <CardContent className="pt-8 space-y-6 text-slate-700">
            <section>
              <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
              <p>We collect your name, email address, and phone number solely for the purpose of scheduling and managing your barber appointments.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">2. How We Use Your Data</h2>
              <p>Your data is used to send booking confirmations, appointment reminders, and occasional service updates. We do not sell or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">3. Data Security</h2>
              <p>We use secure industry-standard systems (Supabase) to store and protect your information. You can request to have your data removed from our system at any time by contacting us.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">4. Contact Us</h2>
              <p>If you have any questions about this policy, please call us at (718) 206-2927.</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}