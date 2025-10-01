const Location = () => {
  return (
    <section id="map" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at our office in Hyderabad
            </p>
          </div>

          {/* Map Container */}
          <div className="rounded-lg overflow-hidden shadow-elevated border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160092891!2d78.24323194999999!3d17.412608699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Lakshmi Associates Location"
            ></iframe>
          </div>

          {/* Address Details */}
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Address:</strong> Sri Lakshmi Associates, Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
