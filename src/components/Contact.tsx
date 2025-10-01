import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickupAddress: "",
    shipmentDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a success message
    // Later this can be connected to Lovable Cloud
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly to arrange the pickup.",
    });

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      pickupAddress: "",
      shipmentDetails: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@srilakshmi.com",
      link: "mailto:info@srilakshmi.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Hyderabad, Telangana",
      link: "#map",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Sat: 9AM-7PM",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book your free pickup or reach out for any inquiries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elevated border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Request Free Pickup</CardTitle>
                <CardDescription className="text-base">
                  Fill in your details and we'll arrange a pickup at your convenience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickupAddress">Pickup Address *</Label>
                    <Textarea
                      id="pickupAddress"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      placeholder="Enter complete pickup address"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shipmentDetails">Shipment Details *</Label>
                    <Textarea
                      id="shipmentDetails"
                      name="shipmentDetails"
                      value={formData.shipmentDetails}
                      onChange={handleChange}
                      placeholder="Describe what you're shipping (e.g., documents, medicines, gifts)"
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="shadow-card border-border hover:shadow-elevated transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-primary shadow-elevated border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    Quick Contact via WhatsApp
                  </h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Get instant assistance and quotes
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
