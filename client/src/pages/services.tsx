import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import haircutImage from "@/assets/images/service-haircut.jpg";
import shaveImage from "@/assets/images/service-shave.jpg";

export default function Services() {
  const services = [
    {
      title: "Men's Haircut",
      price: "$30",
      description: "Complete consultation, haircut, styling, and hot lather neck shave.",
      image: haircutImage
    },
    {
      title: "Kid's Haircut",
      price: "$25",
      description: "For children under 12. Patient, friendly barbers who make it fun.",
      image: null
    },
    {
      title: "Senior Citizen Cut",
      price: "$20",
      description: "Special rate for our neighbors 65 and older. Mon-Thu only.",
      image: null
    },
    {
      title: "Hot Towel Shave",
      price: "$25",
      description: "Traditional straight razor shave with hot towels and facial massage.",
      image: shaveImage
    },
    {
      title: "Shape Up / Line Up",
      price: "$15",
      description: "Crisp lines around the hairline and beard. Perfect for in-between cuts.",
      image: null
    },
    {
      title: "Beard Trim",
      price: "$15",
      description: "Sculpting and trimming of the beard with scissor and clipper work.",
      image: null
    }
  ];

  return (
    <Layout>
      <div className="bg-primary py-12 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl">Quality cuts at fair prices. We take our time to make sure you leave looking your best.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-all">
              {service.image ? (
                <div className="w-full md:w-32 h-32 shrink-0 rounded-lg overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full md:w-32 h-32 shrink-0 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                  <span className="font-serif italic opacity-50">New Moon</span>
                </div>
              )}
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  <span className="text-lg font-bold text-secondary">{service.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href="/book">
                  <Button variant="outline" className="w-full md:w-auto border-primary text-primary hover:bg-primary hover:text-white">
                    Book This Service
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted/50 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Don't see what you need?</h3>
          <p className="text-muted-foreground mb-6">Give us a call. We're happy to accommodate special requests.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
            <a href="tel:7182062927">Call (718) 206-2927</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
