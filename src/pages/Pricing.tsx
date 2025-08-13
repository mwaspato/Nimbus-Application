import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Training Programs</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Advance your career with comprehensive digital training courses designed for African professionals. 
              Transform your skills and accelerate your career growth.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />
      
      <Footer />
    </div>
  );
};

export default Pricing;