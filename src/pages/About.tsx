import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Calendar, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About nimbusnet</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Providing exceptional IT service and support to Pacific Northwest businesses since 1995
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Since 1995, <strong className="text-primary">nimbusnet</strong> has been at the forefront of 
                    providing exceptional Information Technology service and support to a diverse range of 
                    businesses throughout the Pacific Northwest.
                  </p>
                  <p>
                    What started as a small IT consulting firm has grown into a comprehensive technology 
                    solutions provider, serving companies of all sizes with cutting-edge infrastructure, 
                    security, and support services.
                  </p>
                  <p>
                    Our commitment to excellence and customer satisfaction has made us a trusted partner 
                    for businesses looking to leverage technology for growth and efficiency.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader className="text-center pb-2">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-2xl font-bold text-primary">29+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">Years of Experience</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader className="text-center pb-2">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-2xl font-bold text-primary">500+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">Businesses Served</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader className="text-center pb-2">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-2xl font-bold text-primary">24/7</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">Support Available</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader className="text-center pb-2">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-2xl font-bold text-primary">100%</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-card shadow-card hover:shadow-tech transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To provide superior Information Technology products, service, support, and network design 
                    that empowers Pacific Northwest companies to achieve their business goals through reliable, 
                    secure, and innovative IT infrastructure.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card hover:shadow-tech transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Excellence in service delivery</li>
                    <li>• Proactive technology solutions</li>
                    <li>• Transparent communication</li>
                    <li>• Long-term partnerships</li>
                    <li>• Continuous innovation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Certifications & Partnerships */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Certifications & Partnerships</CardTitle>
                <CardDescription>
                  Our team maintains industry-leading certifications and partnerships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Microsoft Certified Partner</h3>
                    <p className="text-sm text-muted-foreground">Specialized in Office 365 and cloud solutions</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Licensed Technicians</h3>
                    <p className="text-sm text-muted-foreground">Fully licensed for in-wall Ethernet installation</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Security Certified</h3>
                    <p className="text-sm text-muted-foreground">Advanced certifications in cybersecurity</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you build a robust IT infrastructure that supports your business growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/network-design">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;