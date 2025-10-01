import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "Excellent service! They handled my international shipment with great care. The pickup was prompt and delivery was faster than expected.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Most reliable courier service in Hyderabad. I've been using their services for 5 years now. Never had any issues with my parcels.",
      rating: 5,
    },
    {
      name: "Mohammed Ali",
      role: "Export Business",
      content: "Great pricing and professional service. The team is very responsive and helpful. Highly recommend for international shipping.",
      rating: 5,
    },
    {
      name: "Lakshmi Devi",
      role: "Homemaker",
      content: "I regularly send food items and pickles to my son abroad. They pack everything so well and it always reaches fresh. Thank you!",
      rating: 5,
    },
    {
      name: "Suresh Reddy",
      role: "Medical Professional",
      content: "Trust them completely with urgent medicine deliveries. They understand the importance of time-sensitive shipments.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "Artist",
      content: "Shipped my artwork internationally multiple times. They handle fragile items with exceptional care. Very satisfied!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative hover:shadow-elevated transition-all duration-300 border-border hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-card border border-border">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-accent text-accent" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Rated 5/5 by Our Customers
            </h3>
            <p className="text-muted-foreground">
              Join 50,000+ satisfied customers who trust us with their deliveries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
