import { CheckCircle, Clock, DollarSign, Globe, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "Swift delivery with real-time tracking for complete peace of mind",
    },
    {
      icon: Shield,
      title: "Safe Handling",
      description: "Your shipments are handled with utmost care and security",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Most relevant and affordable rates in the industry",
    },
    {
      icon: TrendingUp,
      title: "10+ Years of Trust",
      description: "Two decades of excellence and customer satisfaction",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive international reach covering all major countries",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "100% commitment to service excellence and reliability",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with Sri Lakshmi Associates
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card p-8 rounded-lg shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon Background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-bl-full"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-primary p-12 rounded-lg shadow-elevated">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Ship with Confidence?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Join thousands of satisfied customers who trust us with their deliveries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
