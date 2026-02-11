import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Scissors, Baby, User, Droplet, Sparkles, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Men's Haircut",
      price: "$30",
      description: "Complete consultation, haircut, styling, and hot lather neck shave.",
      icon: Scissors
    },
    {
      title: "Kid's Haircut",
      price: "$25",
      description: "For children under 12. Patient, friendly barbers who make it fun.",
      icon: Baby
    },
    {
      title: "Senior Citizen Cut",
      price: "$20",
      description: "Special rate for our neighbors 65 and older. Mon-Thu only.",
      icon: User
    },
    {
      title: "Hot Towel Shave",
      price: "$25",
      description: "Traditional straight razor shave with hot towels and facial massage.",
      icon: Droplet
    },
    {
      title: "Shape Up / Line Up",
      price: "$15",
      description: "Crisp lines around the hairline and beard. Perfect for in-between cuts.",
      icon: Sparkles
    },
    {
      title: "Beard Trim",
      price: "$15",
      description: "Sculpting and trimming of the beard with scissor and clipper work.",
      icon: UserCheck
    }
  ];

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
      <div className="bg-[#1A365D] py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Quality cuts at fair prices. We take our time to make sure you leave looking your best.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="flex flex-col sm:flex-row gap-6 p-8 rounded-xl bg-white shadow-sm transition-all hover:shadow-lg border border-border/50 group"
            >
              <div className="w-full sm:w-20 h-20 shrink-0 rounded-full bg-[#FAF9F6] flex items-center justify-center shadow-inner mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-[#C19A6B]" />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-3 gap-2">
                  <h3 className="text-2xl font-serif font-bold text-primary">{service.title}</h3>
                  <span className="text-lg font-bold text-[#C19A6B] bg-[#C19A6B]/10 px-3 py-1 rounded-full">{service.price}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link href="/book">
                  <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-medium transition-all hover:shadow-md">
                    Book This Service
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-muted/30 p-10 rounded-2xl text-center border border-border/50"
        >
          <h3 className="text-3xl font-serif font-bold text-primary mb-4">Don't see what you need?</h3>
          <p className="text-muted-foreground mb-8 text-lg">Give us a call. We're happy to accommodate special requests.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 shadow-lg" asChild>
            <a href="tel:7182062927">Call (718) 206-2927</a>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
