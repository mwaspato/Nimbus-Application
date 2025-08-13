import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Network, Smartphone } from "lucide-react";
import heroImage from "@/assets/tech-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium IT Services for Modern Businesses
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            At Nimbus, we provide advanced IT solutions, enterprise-grade support, and
            tailored network infrastructure design to empower businesses with secure,
            scalable, and high-performance technology systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover:shadow-glow transition-all duration-300"
            >
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:shadow-glow transition-all duration-300"
            >
              <Link to="/services/network-design">
                Explore Our Offerings
              </Link>
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4 backdrop-blur-sm">
                <Network className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Networking Expertise</h3>
              <p className="text-sm opacity-80">Tailored network planning, setup, and ongoing management</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4 backdrop-blur-sm">
                <Shield className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
              <p className="text-sm opacity-80">Robust cybersecurity and reliable backup strategies</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4 backdrop-blur-sm">
                <Smartphone className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Always-On Support</h3>
              <p className="text-sm opacity-80">24/7 monitoring with expert technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;