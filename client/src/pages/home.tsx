import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, MapPin, BadgeCheck, Scissors, User, Baby, Sparkles, Droplet, Moon } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

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

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const moonX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const moonY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Gradient & Hand-painted Sign Look */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Warm Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCFCFA] via-[#F4F4F0] to-[#E8E8E0]" />
        <div className="absolute inset-0 bg-grain opacity-30" />
        
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-12 items-center py-12 md:py-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-8 border border-primary/10">
              <BadgeCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">Est. 2000 in Jamaica, NY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[0.9] mb-8 text-primary tracking-tight drop-shadow-sm">
              New Moon <br/>
              <span className="text-secondary italic font-medium">Barbershop</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-light">
              More than a haircut—a neighborhood tradition. Clean cuts, hot towel shaves, and good conversation for 26 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all text-white text-lg h-14 px-8 w-full sm:w-auto shadow-[0_0_20px_-5px_hsl(var(--secondary))] hover:shadow-[0_0_30px_-5px_hsl(var(--secondary))] cursor-scissors">
                  Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg h-14 px-8 w-full sm:w-auto hover:scale-105 active:scale-95 transition-all bg-transparent shadow-[0_0_15px_-5px_rgba(0,51,102,0.1)] hover:shadow-[0_0_20px_-5px_rgba(0,51,102,0.2)]" asChild>
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
             {/* Animated Moon Emblem with Parallax */}
             <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                {/* Outer Glow Ring */}
                <motion.div 
                  animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border border-secondary/20 bg-secondary/5 blur-2xl"
                />
                
                {/* Parallax Container */}
                <motion.div style={{ x: moonX, y: moonY }} className="relative z-10 flex flex-col items-center">
                   {/* Crescent Moon */}
                   <motion.div 
                     animate={{ rotate: [0, 5, -5, 0] }}
                     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <Moon className="w-48 h-48 text-secondary fill-secondary/20 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] stroke-[1.5]" />
                   </motion.div>
                   
                   {/* Floating Text */}
                   <motion.div 
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8"
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <div className="bg-background/80 backdrop-blur-sm border border-secondary/30 px-6 py-2 rounded-full shadow-lg">
                       <span className="text-2xl font-serif font-bold text-primary tracking-widest whitespace-nowrap">Est. 2000</span>
                     </div>
                   </motion.div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-border/50 relative z-20 shadow-[0_0_50px_-20px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex gap-1 text-secondary">
                <Star className="fill-current w-6 h-6 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                <Star className="fill-current w-6 h-6 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                <Star className="fill-current w-6 h-6 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                <Star className="fill-current w-6 h-6 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
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
              className="flex items-center gap-4 bg-secondary/10 px-6 py-3 rounded-lg border border-secondary/20 shadow-[0_0_15px_-5px_rgba(212,175,55,0.1)]"
            >
              <div className="bg-secondary p-2 rounded-full text-white shadow-lg shadow-secondary/20">
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
              <div className="bg-primary/10 p-2 rounded-full text-primary shadow-lg shadow-primary/10">
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
              <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider shadow-md shadow-secondary/20">
                Recommended
              </div>
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-border">
                 <Scissors className="w-10 h-10 text-secondary" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Men's Haircut</h3>
                <span className="bg-primary/5 text-primary font-bold px-4 py-1 rounded-full text-sm">$30</span>
              </div>
              <p className="text-muted-foreground mb-8">Classic cuts, fades, and trims. Includes a hot towel finish.</p>
              <Link href="/book">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all group-hover:ring-2 ring-offset-2 ring-primary cursor-scissors">
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
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-border">
                 <Baby className="w-10 h-10 text-secondary" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Kid's Haircut</h3>
                <span className="bg-primary/5 text-primary font-bold px-4 py-1 rounded-full text-sm">$25</span>
              </div>
              <p className="text-muted-foreground mb-8">Patient and friendly service for the little ones. Lollipops included!</p>
              <Link href="/book">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all group-hover:ring-2 ring-offset-2 ring-primary cursor-scissors">
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
              <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider shadow-md shadow-secondary/20">
                Recommended
              </div>
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-border">
                 <User className="w-10 h-10 text-secondary" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Senior Citizen</h3>
                <span className="bg-primary/5 text-primary font-bold px-4 py-1 rounded-full text-sm">$20</span>
              </div>
              <p className="text-muted-foreground mb-8">Special discounted rates for our respected elders. (65+)</p>
              <Link href="/book">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all group-hover:ring-2 ring-offset-2 ring-primary cursor-scissors">
                  Book This Service
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
             <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-bold hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                View All Services
              </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
           <span className="text-[400px] font-serif italic leading-none">"</span>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-12 h-12 text-secondary mx-auto mb-8 fill-current drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
            <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-relaxed mb-10 max-w-4xl mx-auto drop-shadow-md">
              "I've been coming here for 15 years. It's not just a haircut, it's about checking in with friends. The cleanest shop in Jamaica."
            </blockquote>
            <cite className="text-xl font-bold not-italic block font-serif tracking-wide text-secondary">— Michael R., Neighbor</cite>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
