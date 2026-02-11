import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, MapPin, BadgeCheck, Scissors, User, Baby, Sparkles, Droplet } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Hero Section - Gradient & Hand-painted Sign Look */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Warm Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#F0EAD6] to-[#E6DCC3] opacity-80" />
        <div className="absolute inset-0 bg-grain opacity-30" />
        
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-12 items-center py-12 md:py-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-[#1A365D]/5 px-4 py-2 rounded-full mb-8 border border-[#1A365D]/10">
              <BadgeCheck className="w-4 h-4 text-[#C19A6B]" />
              <span className="text-sm font-bold text-[#1A365D] tracking-wide uppercase">Est. 2000 in Jamaica, NY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[0.9] mb-8 text-[#1A365D] tracking-tight drop-shadow-sm">
              New Moon <br/>
              <span className="text-[#C19A6B] italic font-medium">Barbershop</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-light">
              More than a haircut—a neighborhood tradition. Clean cuts, hot towel shaves, and good conversation for 26 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C19A6B] hover:bg-[#C19A6B]/90 hover:scale-105 transition-all text-white text-lg h-14 px-8 w-full sm:w-auto shadow-lg shadow-[#C19A6B]/20">
                  Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white text-lg h-14 px-8 w-full sm:w-auto hover:scale-105 transition-all bg-transparent" asChild>
                <a href="tel:7182062927">Call (718) 206-2927</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 hidden md:flex justify-center"
          >
             {/* Abstract/Artistic representation of "New Moon" - Circular motif */}
             <div className="relative w-[400px] h-[400px] rounded-full border-[16px] border-[#1A365D] flex items-center justify-center bg-[#FAF9F6] shadow-2xl">
                <div className="absolute inset-0 rounded-full border border-[#C19A6B] m-4 opacity-50"></div>
                <div className="text-center transform -rotate-12">
                   <div className="text-[#1A365D] font-serif italic text-4xl mb-2">Since</div>
                   <div className="text-[#C19A6B] font-serif font-bold text-9xl leading-none">00</div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-border/50 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex gap-1 text-[#C19A6B]">
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
            </motion.div>
            
            <div className="h-12 w-px bg-border hidden md:block" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 bg-[#C19A6B]/10 px-6 py-3 rounded-lg border border-[#C19A6B]/20"
            >
              <div className="bg-[#C19A6B] p-2 rounded-full text-white">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary font-serif">Serving Since 2000</p>
                <p className="text-sm text-muted-foreground">26 Years of Trust</p>
              </div>
            </motion.div>

            <div className="h-12 w-px bg-border hidden md:block" />

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="bg-[#1A365D]/10 p-2 rounded-full text-[#1A365D]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary font-serif">Locally Owned</p>
                <p className="text-sm text-muted-foreground">Family Business</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview - Animated Grid */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
            >
              Our Services
            </motion.h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cuts and shaves for the whole family. We take pride in our precision and cleanliness.
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Card 1 - Men's */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all p-8 flex flex-col items-center text-center relative border border-border/50"
            >
              <div className="absolute top-4 right-4 bg-[#C19A6B] text-white text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider">
                Recommended
              </div>
              <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                 <Scissors className="w-10 h-10 text-[#C19A6B]" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Men's Haircut</h3>
                <span className="bg-[#1A365D]/5 text-[#1A365D] font-bold px-4 py-1 rounded-full text-sm">$30</span>
              </div>
              <p className="text-muted-foreground mb-8">Classic cuts, fades, and trims. Includes a hot towel finish.</p>
              <Link href="/book">
                <Button className="w-full bg-[#1A365D] hover:bg-[#1A365D]/90 text-white shadow-md hover:shadow-lg transition-all group-hover:ring-2 ring-offset-2 ring-[#1A365D]">
                  Book This Service
                </Button>
              </Link>
            </motion.div>

            {/* Service Card 2 - Kids */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all p-8 flex flex-col items-center text-center relative border border-border/50"
            >
              <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                 <Baby className="w-10 h-10 text-[#C19A6B]" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Kid's Haircut</h3>
                <span className="bg-[#1A365D]/5 text-[#1A365D] font-bold px-4 py-1 rounded-full text-sm">$25</span>
              </div>
              <p className="text-muted-foreground mb-8">Patient and friendly service for the little ones. Lollipops included!</p>
              <Link href="/book">
                <Button className="w-full bg-[#1A365D] hover:bg-[#1A365D]/90 text-white shadow-md hover:shadow-lg transition-all group-hover:ring-2 ring-offset-2 ring-[#1A365D]">
                  Book This Service
                </Button>
              </Link>
            </motion.div>

            {/* Service Card 3 - Seniors */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all p-8 flex flex-col items-center text-center relative border border-border/50"
            >
              <div className="absolute top-4 right-4 bg-[#C19A6B] text-white text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider">
                Recommended
              </div>
              <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                 <User className="w-10 h-10 text-[#C19A6B]" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Senior Citizen</h3>
                <span className="bg-[#1A365D]/5 text-[#1A365D] font-bold px-4 py-1 rounded-full text-sm">$20</span>
              </div>
              <p className="text-muted-foreground mb-8">Special discounted rates for our respected elders. (65+)</p>
              <Link href="/book">
                <Button className="w-full bg-[#1A365D] hover:bg-[#1A365D]/90 text-white shadow-md hover:shadow-lg transition-all group-hover:ring-2 ring-offset-2 ring-[#1A365D]">
                  Book This Service
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
             <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-bold hover:scale-105 transition-transform">
                View All Services
              </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-24 bg-[#1A365D] text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
           <span className="text-[400px] font-serif italic leading-none">"</span>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-12 h-12 text-[#C19A6B] mx-auto mb-8 fill-current" />
            <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-relaxed mb-10 max-w-4xl mx-auto">
              "I've been coming here for 15 years. It's not just a haircut, it's about checking in with friends. The cleanest shop in Jamaica."
            </blockquote>
            <cite className="text-xl font-bold not-italic block font-serif tracking-wide text-[#C19A6B]">— Michael R., Neighbor</cite>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
