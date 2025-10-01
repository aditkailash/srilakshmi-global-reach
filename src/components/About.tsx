import { Shield, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in courier and cargo services for over two decades
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-3xl font-bold text-foreground">
                Over 20 Years of Excellence
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sri Lakshmi Associates has been serving customers with dedication and
                reliability since our inception. We pride ourselves on being the most
                trusted courier service in Hyderabad with a global reach.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to customer satisfaction, combined with our extensive
                network and partnership with industry leaders like FedEx, DHL, and UPS,
                makes us your ideal choice for all courier and cargo needs.
              </p>
              <div className="bg-gradient-primary p-6 rounded-lg shadow-elevated">
                <p className="text-primary-foreground text-xl font-semibold">
                  "Most reliable courier service in Hyderabad with global reach"
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">20+</h4>
                <p className="text-muted-foreground">Years of Trust</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                <Globe className="w-12 h-12 text-accent mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">195+</h4>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">50K+</h4>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">100%</h4>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
