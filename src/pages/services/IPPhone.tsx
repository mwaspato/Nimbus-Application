import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Headphones, Cloud, CheckCircle, ArrowRight } from "lucide-react";

const IPPhone = () => {
  const features = [
    "Keep your existing phone numbers",
    "Crystal clear HD voice quality",
    "Online voicemail management",
    "Advanced call forwarding",
    "Fax-to-email service",
    "Mobile app integration",
    "Conference calling",
    "Auto-attendant features"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full w-fit mx-auto mb-6">
              <Phone className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IP Phone & Fax Service</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Cut the cord with traditional phone companies. Experience crystal clear call quality, 
              convenient online access, and cost-saving features without changing your numbers.
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
                <h2 className="text-3xl font-bold mb-6 text-foreground">Modern Communication Solutions</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cut the cord with the phone company today and switch to our IP phone and fax services 
                    without changing numbers. Experience crystal clear call quality, convenient online access 
                    to voicemail and call forwarding, and cost-saving fax-via-email.
                  </p>
                  <p>
                    Our VoIP (Voice over Internet Protocol) solutions provide enterprise-grade communication 
                    features at a fraction of the cost of traditional phone systems. With advanced features 
                    like mobile integration and cloud-based management, your team can stay connected anywhere.
                  </p>
                  <p>
                    Say goodbye to expensive phone bills and hello to a more flexible, feature-rich 
                    communication system that grows with your business.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">VoIP Phones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Crystal clear HD voice quality</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Fax to Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Paperless fax solutions</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Headphones className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Voicemail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Online voicemail management</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Cloud Based</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Scalable cloud infrastructure</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Features List */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Service Features</CardTitle>
                <CardDescription className="text-center">
                  Advanced communication features for modern businesses
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

            {/* Service Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Communication Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Phone className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">VoIP Phone System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• HD voice quality</li>
                      <li>• Number portability</li>
                      <li>• Call forwarding</li>
                      <li>• Conference calling</li>
                      <li>• Auto-attendant</li>
                      <li>• Call recording</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Mail className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Fax Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Fax to email delivery</li>
                      <li>• Email to fax sending</li>
                      <li>• Online fax management</li>
                      <li>• Secure transmission</li>
                      <li>• Digital signatures</li>
                      <li>• Archive and search</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Headphones className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Advanced Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Mobile app integration</li>
                      <li>• Web-based management</li>
                      <li>• Call analytics</li>
                      <li>• Voicemail transcription</li>
                      <li>• Multi-location support</li>
                      <li>• CRM integration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cost Savings */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Cost Savings & Benefits</CardTitle>
                <CardDescription>
                  Significant savings compared to traditional phone systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Reduced Costs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lower monthly phone bills</li>
                      <li>• Eliminate long-distance charges</li>
                      <li>• Reduce equipment costs</li>
                      <li>• No maintenance contracts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Enhanced Productivity</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Work from anywhere</li>
                      <li>• Unified communications</li>
                      <li>• Instant setup for new users</li>
                      <li>• Advanced call handling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Migration Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Easy Migration Process</h2>
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
                      Evaluate your current phone system and requirements
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <CardTitle className="text-lg">Number Port</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Transfer your existing phone numbers seamlessly
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg">Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Install and configure your new IP phone system
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <CardTitle className="text-lg">Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Train your team on the new system features
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Cut the Cord?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Upgrade to our modern IP phone and fax services and start saving money while gaining features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/web-design">
                    View Web Services
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

export default IPPhone;