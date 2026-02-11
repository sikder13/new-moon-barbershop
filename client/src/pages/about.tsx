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

          <div className="prose prose-lg mx-auto text-muted-foreground font-light leading-relaxed">
            <p className="text-2xl text-primary font-serif font-medium mb-8 text-center leading-normal">
              "Since opening our doors in 2000, New Moon Barbershop has been more than just a place to get a haircut. We’re a cornerstone of the Jamaica, Queens community."
            </p>
            <p className="mb-8">
              For 26 years, we've seen generations of families walk through our doors—fathers who brought their sons for their first haircut are now watching those sons bring their own children. That trust is something we earn every single day, with every single cut.
            </p>
            <p className="mb-6">
              Founded on the principles of traditional barbering, we believe in the value of a handshake, a good conversation, and a meticulous cut. We aren't trying to be a trendy salon or a high-tech grooming lounge. We are a barbershop—pure and simple.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="pt-8 text-center pb-8">
                <div className="text-5xl font-serif font-bold text-secondary mb-3">2000</div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Established</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="pt-8 text-center pb-8">
                <div className="text-5xl font-serif font-bold text-secondary mb-3">26</div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Years Serving You</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="pt-8 text-center pb-8">
                <div className="text-5xl font-serif font-bold text-secondary mb-3">10k+</div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Haircuts Given</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-24">
            <h2 className="text-4xl font-serif font-bold text-primary text-center mb-16">What Your Neighbors Say</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-xl shadow-sm relative">
                <span className="absolute top-6 left-6 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p className="text-lg text-muted-foreground italic mb-8 relative z-10 leading-relaxed">
                  "Best barbershop in Queens. The attention to detail is unmatched, and the atmosphere is always welcoming. Good vibes and great cuts."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold font-serif text-xl border border-blue-100">J</div>
                  <div>
                    <p className="font-bold text-primary font-serif text-lg">James W.</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Customer since 2010</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-xl shadow-sm relative">
                <span className="absolute top-6 left-6 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p className="text-lg text-muted-foreground italic mb-8 relative z-10 leading-relaxed">
                  "I bring my two boys here. The barbers are so patient with them. It's the only place they actually enjoy getting a haircut."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700 font-bold font-serif text-xl border border-green-100">S</div>
                  <div>
                    <p className="font-bold text-primary font-serif text-lg">Sarah M.</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Local Mom</p>
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
