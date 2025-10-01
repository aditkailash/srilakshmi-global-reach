import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                SRI LAKSHMI ASSOCIATES
              </h3>
              <p className="text-muted-foreground text-sm">
                International Couriers and Cargo
              </p>
              <p className="text-muted-foreground text-sm">
                20+ years of trusted excellence in courier and cargo services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("why-choose-us")}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@srilakshmi.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@srilakshmi.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Hyderabad, Telangana
                  </span>
                </li>
              </ul>
            </div>

            {/* Partners & Social */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Our Partners
              </h4>
              <div className="space-y-2 mb-6">
                <p className="text-primary font-semibold text-sm">FedEx</p>
                <p className="text-accent font-semibold text-sm">DHL</p>
                <p className="text-primary font-semibold text-sm">UPS</p>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sri Lakshmi Associates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
