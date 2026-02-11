import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, MapPin, BadgeCheck } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#F5F5DC]/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <div className="order-2 md:order-1 max-w-2xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6 border border-secondary/20">
              <BadgeCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-secondary tracking-wide uppercase">Est. 2000 in Jamaica, NY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-primary">
              A Classic Cut for the <br/>
              <span className="text-secondary italic">Modern Neighbor.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Experience the tradition, skill, and friendly atmosphere that has made us a neighborhood staple for 26 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg h-14 px-8 w-full sm:w-auto shadow-sm">
                  Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg h-14 px-8 w-full sm:w-auto" asChild>
                <a href="tel:7182062927">Call (718) 206-2927</a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] w-full bg-grain rounded-t-full border-b-4 border-secondary/20 flex items-center justify-center shadow-inner">
             <div className="text-center">
                <span className="text-9xl font-serif italic text-primary/10 select-none">NM</span>
                <p className="mt-4 font-serif text-primary/20 uppercase tracking-[0.2em] text-sm">New Moon Barbershop</p>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-1 text-yellow-500">
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6 opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary font-serif">4.4 Stars</span>
                <span className="text-sm text-muted-foreground">on Google Reviews</span>
              </div>
            </div>
            
            <div className="h-12 w-px bg-border hidden md:block" />
            
            <div className="flex items-center gap-4 bg-yellow-50/50 px-6 py-3 rounded-lg border border-yellow-100/50">
              <div className="bg-yellow-100 p-2 rounded-full">
                <BadgeCheck className="text-yellow-700 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary font-serif">Serving Since 2000</p>
                <p className="text-sm text-muted-foreground">26 Years of Trust</p>
              </div>
            </div>

            <div className="h-12 w-px bg-border hidden md:block" />

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary font-serif">Locally Owned</p>
                <p className="text-sm text-muted-foreground">Family Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cuts and shaves for the whole family. We take pride in our precision and cleanliness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-grain rounded-full flex items-center justify-center mb-6 shadow-inner">
                 <span className="text-3xl font-serif italic text-primary/20">M</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Men's Haircut</h3>
                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-full text-sm">$30</span>
              </div>
              <p className="text-muted-foreground mb-8">Classic cuts, fades, and trims. Includes a hot towel finish.</p>
              <Link href="/book">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-sm">Book Now</Button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-grain rounded-full flex items-center justify-center mb-6 shadow-inner">
                 <span className="text-3xl font-serif italic text-primary/20">K</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Kid's Haircut</h3>
                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-full text-sm">$25</span>
              </div>
              <p className="text-muted-foreground mb-8">Patient and friendly service for the little ones. Lollipops included!</p>
              <Link href="/book">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-sm">Book Now</Button>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-grain rounded-full flex items-center justify-center mb-6 shadow-inner">
                 <span className="text-3xl font-serif italic text-primary/20">S</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Senior Citizen</h3>
                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-full text-sm">$20</span>
              </div>
              <p className="text-muted-foreground mb-8">Special discounted rates for our respected elders. (65+)</p>
              <Link href="/book">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-sm">Book Now</Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-bold">
                View All Services
              </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
           <span className="text-[400px] font-serif italic leading-none">"</span>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-8 fill-current" />
          <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-relaxed mb-10 max-w-4xl mx-auto">
            "I've been coming here for 15 years. It's not just a haircut, it's about checking in with friends. The cleanest shop in Jamaica."
          </blockquote>
          <cite className="text-xl font-bold not-italic block font-serif tracking-wide">— Michael R., Neighbor</cite>
        </div>
      </section>
    </Layout>
  );
}
