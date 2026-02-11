import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <Layout>
      <div className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-8">
            26 Years in the Neighborhood
          </h1>
          <div className="h-1 w-24 bg-secondary mx-auto mb-12"></div>

          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="lead text-xl md:text-2xl text-primary font-medium mb-6">
              Since opening our doors in 2000, New Moon Barbershop has been more than just a place to get a haircut. We're a cornerstone of the Jamaica, Queens community.
            </p>
            <p className="mb-6">
              Founded on the principles of traditional barbering, we believe in the value of a handshake, a good conversation, and a meticulous cut. We aren't trying to be a trendy salon or a high-tech grooming lounge. We are a barbershop—pure and simple.
            </p>
            <p className="mb-6">
              Our chairs have seen generations of families. Fathers who brought their sons in for their first haircut are now watching those sons bring their own children. That trust is something we earn every single day, with every single cut.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-white border-border shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-serif font-bold text-secondary mb-2">2000</div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Established</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-border shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-serif font-bold text-secondary mb-2">26</div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Serving You</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-border shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-serif font-bold text-secondary mb-2">10k+</div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Haircuts Given</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">What Your Neighbors Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border relative">
                <span className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</span>
                <p className="text-lg text-muted-foreground italic mb-6 relative z-10">
                  "Best barbershop in Queens. The attention to detail is unmatched, and the atmosphere is always welcoming. Good vibes and great cuts."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">J</div>
                  <div>
                    <p className="font-bold text-primary">James W.</p>
                    <p className="text-xs text-muted-foreground">Customer since 2010</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-border relative">
                <span className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</span>
                <p className="text-lg text-muted-foreground italic mb-6 relative z-10">
                  "I bring my two boys here. The barbers are so patient with them. It's the only place they actually enjoy getting a haircut."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">S</div>
                  <div>
                    <p className="font-bold text-primary">Sarah M.</p>
                    <p className="text-xs text-muted-foreground">Local Mom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
