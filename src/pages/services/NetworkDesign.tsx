import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Network, Server, Wifi, Cable, CheckCircle, ArrowRight } from "lucide-react";

const NetworkDesign = () => {
  const features = [
    "Complete network design and planning",
    "Professional Ethernet cable installation",
    "Wireless network setup and optimization",
    "Server configuration and deployment",
    "Network equipment recommendations",
    "Infrastructure documentation",
    "Performance testing and optimization",
    "Future scalability planning"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full w-fit mx-auto mb-6">
              <Network className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Network Design & Installation</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professional network infrastructure solutions designed to support your business growth 
              with reliable, scalable, and secure connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Complete Network Solutions</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Servers, data cabling, wireless – at nimbusnet we can handle your complete network 
                    installation, upgrade, or move. Our technicians are fully licensed for in-wall 
                    Ethernet installation and experienced in configuring your vital network infrastructure.
                  </p>
                  <p>
                    Whether you're setting up a new office, expanding your current network, or relocating 
                    your business, we ensure your network infrastructure is designed for optimal performance, 
                    security, and future growth.
                  </p>
                  <p>
                    Our comprehensive approach includes planning, design, installation, testing, and 
                    documentation to deliver a network that meets your specific business requirements.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Server className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Server Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Professional server installation and configuration</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Cable className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Data Cabling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Licensed in-wall Ethernet installation</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Wireless Networks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Enterprise-grade WiFi solutions</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Network className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Network Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Custom network architecture planning</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Features List */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">What's Included</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive network design and installation services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <CardTitle className="text-lg">Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We evaluate your current infrastructure and business requirements
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <CardTitle className="text-lg">Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Custom network design tailored to your specific needs
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg">Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Professional installation by licensed technicians
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <CardTitle className="text-lg">Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing and performance optimization
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Upgrade Your Network?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our experienced team design and install a network infrastructure that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/network-security">
                    View Network Security
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

export default NetworkDesign;