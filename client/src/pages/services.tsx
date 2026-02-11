import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Men's Haircut",
      price: "$30",
      description: "Complete consultation, haircut, styling, and hot lather neck shave.",
      initial: "M"
    },
    {
      title: "Kid's Haircut",
      price: "$25",
      description: "For children under 12. Patient, friendly barbers who make it fun.",
      initial: "K"
    },
    {
      title: "Senior Citizen Cut",
      price: "$20",
      description: "Special rate for our neighbors 65 and older. Mon-Thu only.",
      initial: "S"
    },
    {
      title: "Hot Towel Shave",
      price: "$25",
      description: "Traditional straight razor shave with hot towels and facial massage.",
      initial: "H"
    },
    {
      title: "Shape Up / Line Up",
      price: "$15",
      description: "Crisp lines around the hairline and beard. Perfect for in-between cuts.",
      initial: "L"
    },
    {
      title: "Beard Trim",
      price: "$15",
      description: "Sculpting and trimming of the beard with scissor and clipper work.",
      initial: "B"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Quality cuts at fair prices. We take our time to make sure you leave looking your best.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 p-8 rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
              <div className="w-full sm:w-24 h-24 shrink-0 rounded-full bg-grain flex items-center justify-center shadow-inner mx-auto sm:mx-0">
                <span className="text-3xl font-serif italic text-primary/20">{service.initial}</span>
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-3 gap-2">
                  <h3 className="text-2xl font-serif font-bold text-primary">{service.title}</h3>
                  <span className="text-lg font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{service.price}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link href="/book">
                  <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-medium">
                    Book This Service
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-muted/30 p-10 rounded-2xl text-center border border-border/50">
          <h3 className="text-3xl font-serif font-bold text-primary mb-4">Don't see what you need?</h3>
          <p className="text-muted-foreground mb-8 text-lg">Give us a call. We're happy to accommodate special requests.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12" asChild>
            <a href="tel:7182062927">Call (718) 206-2927</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
