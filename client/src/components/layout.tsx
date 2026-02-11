import { Link, useLocation } from "wouter";
import { Phone, Calendar, Menu, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
              New Moon Barbershop
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`text-sm font-medium hover:text-secondary transition-colors ${
                  location === link.href ? "text-secondary font-bold" : "text-primary/80"
                }`}>
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/book">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 shadow-sm">
                Book Appointment
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#FAF9F6]">
                <div className="flex flex-col gap-6 mt-10">
                  <Link href="/">
                    <a className="text-2xl font-serif font-bold text-primary mb-4">New Moon</a>
                  </Link>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a className="text-lg font-medium text-primary hover:text-secondary">
                        {link.label}
                      </a>
                    </Link>
                  ))}
                  <Link href="/book">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white mt-4">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 pb-20 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">New Moon Barbershop</h3>
            <p className="text-primary-foreground/80 mb-4">
              Serving the Jamaica, Queens community with pride and precision since 2000.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Visit Us</h4>
            <p className="flex items-center justify-center md:justify-start gap-2 mb-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              169-06 Hillside Ave, Jamaica, NY 11432
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/80">
              <Phone className="h-4 w-4" />
              (718) 206-2927
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <ul className="space-y-1 text-primary-foreground/80">
              <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
              <li>Sunday: 10:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} New Moon Barbershop. All rights reserved.
        </div>
      </footer>

      {/* Mobile Sticky Bottom Nav - More Compact */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-3 z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <Button 
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-10 text-base"
          asChild
        >
          <a href="tel:7182062927">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Link href="/book" className="flex-1">
          <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-10 text-base shadow-sm">
            <Calendar className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
