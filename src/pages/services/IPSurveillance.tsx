import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Lock, Monitor, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

const IPSurveillance = () => {
  const features = [
    "HD IP camera systems",
    "Digital door lock integration",
    "Remote monitoring capabilities",
    "Mobile device access",
    "Motion detection alerts",
    "Night vision capabilities",
    "Cloud storage options",
    "Professional installation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full w-fit mx-auto mb-6">
              <Camera className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IP Surveillance & Security</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Advanced security systems with digital door locks and IP surveillance that can be 
              safely monitored from any computer or mobile device worldwide.
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
                <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Security Systems</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We are certified and experienced at designing, installing and maintaining digital door locks 
                    as well as IP surveillance systems and video servers. Our advanced security systems can be 
                    safely monitored from any computer or mobile device in the world.
                  </p>
                  <p>
                    Our IP surveillance solutions provide crystal-clear video quality, reliable recording, 
                    and intelligent analytics to help protect your business premises, assets, and personnel. 
                    With remote access capabilities, you can monitor your facility from anywhere, anytime.
                  </p>
                  <p>
                    From small office installations to large enterprise deployments, we design custom security 
                    solutions that meet your specific requirements and budget.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">IP Cameras</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">High-definition surveillance cameras</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Digital Locks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Smart access control systems</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Video Servers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Centralized recording and management</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Remote Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Monitor from anywhere in the world</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Features List */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">System Features</CardTitle>
                <CardDescription className="text-center">
                  Advanced surveillance capabilities for comprehensive security
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

            {/* System Components */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">System Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Camera className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">IP Cameras</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 4K Ultra HD resolution</li>
                      <li>• Night vision capabilities</li>
                      <li>• Motion detection alerts</li>
                      <li>• Weather-resistant housing</li>
                      <li>• Wide-angle lens options</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Lock className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Access Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Digital door locks</li>
                      <li>• Keycard access systems</li>
                      <li>• Biometric scanners</li>
                      <li>• Remote unlock capabilities</li>
                      <li>• Access logs and reporting</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Monitor className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Management System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Centralized video management</li>
                      <li>• Cloud storage integration</li>
                      <li>• Mobile app access</li>
                      <li>• Real-time notifications</li>
                      <li>• Video analytics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Why Choose Our Surveillance Solutions?</CardTitle>
                <CardDescription>
                  Professional-grade security systems designed for business protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Professional Installation</h3>
                    <p className="text-muted-foreground mb-4">
                      Our certified technicians ensure proper installation and configuration for optimal performance.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">Remote Monitoring</h3>
                    <p className="text-muted-foreground">
                      Access your security system from anywhere using computers, tablets, or smartphones.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Scalable Solutions</h3>
                    <p className="text-muted-foreground mb-4">
                      Systems can be expanded as your business grows, adding cameras and features as needed.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">Integration Ready</h3>
                    <p className="text-muted-foreground">
                      Seamlessly integrates with your existing network infrastructure and security systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Enhance Your Security Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Protect your business with our advanced IP surveillance and access control systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Schedule Site Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/ip-phone">
                    View Phone Systems
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

export default IPSurveillance;