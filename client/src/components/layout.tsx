import { Link, useLocation } from "wouter";
import { Phone, Calendar, Menu, MapPin, BadgeCheck, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  // Simple logic for Open/Closed status
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday
  const hour = now.getHours();
  let isOpenNow = false;
  let closingTime = "7:00 PM";

  if (day === 0) { // Sunday
     if (hour >= 10 && hour < 17) {
       isOpenNow = true;
       closingTime = "5:00 PM";
     }
  } else { // Mon-Sat
     if (hour >= 9 && hour < 19) {
       isOpenNow = true;
       closingTime = "7:00 PM";
     }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Top Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex flex-col group">
              <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-primary"
              }`}>
                New Moon
              </span>
              <span className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                isScrolled ? "text-primary/70" : "text-primary/70"
              }`}>
                Barbershop
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`text-sm font-medium hover:text-secondary transition-colors relative py-1 ${
                  location === link.href ? "text-secondary font-bold" : "text-primary/80"
                }`}>
                  {link.label}
                  {location === link.href && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary"
                    />
                  )}
                </a>
              </Link>
            ))}
            <div className="h-6 w-px bg-primary/10 mx-2"></div>
            <div className="flex flex-col items-end text-xs text-primary/80 mr-2">
              <span className="flex items-center gap-1 font-bold">
                <span className={`block w-2 h-2 rounded-full ${isOpenNow ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`}></span>
                {isOpenNow ? "Open Now" : "Closed"}
              </span>
              {isOpenNow && <span>Closes at {closingTime}</span>}
            </div>
            <Link href="/book">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 shadow-sm hover:shadow-md transition-all">
                Book Appointment
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-4">
             <div className="flex flex-col items-end text-[10px] text-primary/80 leading-tight">
              <span className="flex items-center gap-1 font-bold">
                <span className={`block w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-green-500' : 'bg-red-400'}`}></span>
                {isOpenNow ? "Open" : "Closed"}
              </span>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/5">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#FAF9F6] border-l-primary/10">
                <div className="flex flex-col h-full">
                  <div className="mt-8 mb-8">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-1">New Moon</h2>
                    <p className="text-sm text-primary/60 uppercase tracking-widest">Barbershop</p>
                  </div>
                  
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <a 
                          className={`text-xl font-medium hover:text-secondary transition-colors ${
                            location === link.href ? "text-secondary font-bold" : "text-primary/80"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </a>
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto mb-8">
                    <div className="bg-white/50 p-4 rounded-xl border border-primary/5 mb-6">
                      <div className="flex items-center gap-3">
                         <div className="bg-secondary/10 p-2 rounded-full">
                           <BadgeCheck className="w-5 h-5 text-secondary" />
                         </div>
                         <div>
                           <p className="font-bold text-primary font-serif">Est. 2000</p>
                           <p className="text-xs text-muted-foreground">Jamaica, NY</p>
                         </div>
                      </div>
                    </div>
                    <Link href="/book">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white" onClick={() => setIsOpen(false)}>
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-24 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">New Moon Barbershop</h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Serving the Jamaica, Queens community with pride, precision, and neighborhood spirit since 2000.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white/90 border border-white/20">
                <BadgeCheck className="w-3 h-3" /> Family Owned
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white/90 border border-white/20">
                <BadgeCheck className="w-3 h-3" /> Since 2000
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Visit Us</h4>
            <p className="flex items-start justify-center md:justify-start gap-3 mb-4 text-primary-foreground/80">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <span>169-06 Hillside Ave,<br/>Jamaica, NY 11432</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 text-primary-foreground/80">
              <Phone className="h-5 w-5 shrink-0" />
              <a href="tel:7182062927" className="hover:text-white transition-colors">(718) 206-2927</a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Hours</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li className="flex justify-between md:justify-start gap-8">
                <span className="w-20">Mon - Sat</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between md:justify-start gap-8">
                <span className="w-20">Sunday</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} New Moon Barbershop. All rights reserved.
        </div>
      </footer>

      {/* Mobile Sticky Bottom Nav - High Contrast */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-3 z-50 flex gap-3 shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.1)]">
        <Button 
          className="flex-1 bg-[#1A365D] hover:bg-[#1A365D]/90 text-white font-bold h-12 text-base rounded-lg shadow-md transition-transform active:scale-95"
          asChild
        >
          <a href="tel:7182062927">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Link href="/book" className="flex-1">
          <Button className="w-full bg-[#C19A6B] hover:bg-[#C19A6B]/90 text-white font-bold h-12 text-base rounded-lg shadow-md transition-transform active:scale-95">
            <Calendar className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
