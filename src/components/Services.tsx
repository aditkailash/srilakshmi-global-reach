import { Package, Plane, Home, Shield, Zap, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Worldwide Courier Services",
      description: "We deliver to all countries across the globe with our extensive network and partnerships with FedEx, DHL, and UPS.",
    },
    {
      icon: Home,
      title: "Free Home Pickup & Packing",
      description: "Enjoy complimentary pickup service from your doorstep. We handle all packing requirements with care.",
    },
    {
      icon: Package,
      title: "All Items Delivered",
      description: "From medicines, food, pickles, documents, parcels to gifts - we handle all types of shipments safely.",
    },
    {
      icon: Shield,
      title: "Safe & Secure Delivery",
      description: "Your shipments are in safe hands with our reliable handling and tracking systems throughout the journey.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Time-sensitive deliveries are our specialty. We ensure your parcels reach on time, every time.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Most relevant and affordable pricing in the market without compromising on service quality.",
    },
  ];

  const partners = [
    { name: "FedEx", color: "text-primary" },
    { name: "DHL", color: "text-accent" },
    { name: "UPS", color: "text-primary" },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive courier and cargo solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 border-border hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partner Section */}
          <div className="text-center bg-card p-8 rounded-lg shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Trusted Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`text-4xl font-bold ${partner.color} hover:scale-110 transition-transform duration-300`}
                >
                  {partner.name}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              Partnered with world's leading logistics companies for seamless global delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
