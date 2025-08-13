import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Clock, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      
      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card hover:shadow-tech transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">About</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Since 1995, nimbusnet has been providing exceptional IT service and support to 
                  a variety of businesses throughout the Pacific Northwest.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-tech transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  From websites to data cabling, we offer a wide range of technical services to ensure 
                  you have the IT infrastructure your business needs to thrive.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/services/network-design">
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-tech transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Interested in hearing more about what nimbusnet can do for you? Drop us a line 
                  and we would be happy to answer any questions you have.
                </CardDescription>
                <Button asChild className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
