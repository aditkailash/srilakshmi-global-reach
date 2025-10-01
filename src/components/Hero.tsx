import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-courier.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Global courier and cargo services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Company Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            SRI LAKSHMI ASSOCIATES
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-primary-foreground/90 font-medium">
            International Couriers and Cargo
          </p>

          {/* Trust Badge */}
          <div className="inline-block bg-accent px-6 py-3 rounded-full shadow-elevated">
            <p className="text-accent-foreground font-semibold text-lg">
              10+ Years of Trusted Excellence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Book a Pickup
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card/10 backdrop-blur-md p-6 rounded-lg border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Fast</h3>
              <p className="text-primary-foreground/80">Quick and reliable delivery worldwide</p>
            </div>
            <div className="bg-card/10 backdrop-blur-md p-6 rounded-lg border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Safe</h3>
              <p className="text-primary-foreground/80">Secure handling of all shipments</p>
            </div>
            <div className="bg-card/10 backdrop-blur-md p-6 rounded-lg border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Affordable</h3>
              <p className="text-primary-foreground/80">Competitive pricing for all services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
