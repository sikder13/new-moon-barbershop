import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Star, Scissors, CheckCircle, MapPin, User } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@/assets/images/hero-shop.jpg";
import haircutImage from "@/assets/images/service-haircut.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Interior of New Moon Barbershop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Serving Jamaica, Queens since 2000</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              A Classic Cut for the <br/>
              <span className="text-secondary-foreground italic">Modern Neighbor.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Experience the tradition, skill, and friendly atmosphere that has made us a neighborhood staple for 26 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg h-14 px-8 w-full sm:w-auto">
                  Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary text-lg h-14 px-8 w-full sm:w-auto backdrop-blur-sm" asChild>
                <a href="tel:7182062927">Call (718) 206-2927</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-border">
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
                <span className="text-2xl font-bold text-primary">4.4 Stars</span>
                <span className="text-sm text-muted-foreground">on Google Reviews</span>
              </div>
            </div>
            
            <div className="h-12 w-px bg-border hidden md:block" />
            
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="text-green-700 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary">Walk-ins Welcome</p>
                <p className="text-sm text-muted-foreground">Wait times may vary</p>
              </div>
            </div>

            <div className="h-12 w-px bg-border hidden md:block" />

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary">Locally Owned</p>
                <p className="text-sm text-muted-foreground">Est. 2000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cuts and shaves for the whole family. We take pride in our precision and cleanliness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all border border-border">
              <div className="h-64 overflow-hidden">
                <img 
                  src={haircutImage} 
                  alt="Men's Haircut" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">Men's Haircut</h3>
                  <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-full text-sm">$30</span>
                </div>
                <p className="text-muted-foreground mb-6">Classic cuts, fades, and trims. Includes a hot towel finish.</p>
                <Link href="/book">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Book Now</Button>
                </Link>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all border border-border">
              <div className="h-64 bg-slate-100 flex items-center justify-center">
                <Scissors className="w-16 h-16 text-primary/20" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">Kid's Haircut</h3>
                  <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-full text-sm">$25</span>
                </div>
                <p className="text-muted-foreground mb-6">Patient and friendly service for the little ones. Lollipops included!</p>
                <Link href="/book">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Book Now</Button>
                </Link>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all border border-border">
              <div className="h-64 bg-slate-100 flex items-center justify-center">
                <User className="w-16 h-16 text-primary/20" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">Senior Citizen</h3>
                  <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-full text-sm">$20</span>
                </div>
                <p className="text-muted-foreground mb-6">Special discounted rates for our respected elders. (65+)</p>
                <Link href="/book">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                View All Services
              </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle texture or pattern could go here */}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 fill-current" />
          <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
            "I've been coming here for 15 years. It's not just a haircut, it's about checking in with friends. The cleanest shop in Jamaica."
          </blockquote>
          <cite className="text-lg font-bold not-italic block">— Michael R., Neighbor</cite>
        </div>
      </section>
    </Layout>
  );
}
