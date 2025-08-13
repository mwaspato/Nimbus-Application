import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Clock, Shield, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const ManagedIT = () => {
  const services = [
    "24/7 network monitoring and alerts",
    "Remote troubleshooting and support",
    "Proactive maintenance and updates",
    "On-site technical support when needed",
    "Hardware and software monitoring",
    "Security threat monitoring",
    "Backup verification and testing",
    "Performance optimization"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full w-fit mx-auto mb-6">
              <Monitor className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">24/7 Managed IT Services</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Round-the-clock monitoring and support to keep your business running smoothly 
              with proactive IT management and rapid issue resolution.
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
                <h2 className="text-3xl font-bold mb-6 text-foreground">Comprehensive IT Management</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We offer 24/7 remote monitoring of your vital network hardware, with automatic 
                    notifications at the first sign of trouble. Whether on-call or on a monthly contract, 
                    our technicians are ready to respond to any issues, both in-person and via remote access.
                  </p>
                  <p>
                    Our managed IT services provide proactive monitoring, maintenance, and support to 
                    prevent problems before they impact your business. We handle everything from routine 
                    updates to emergency support, allowing you to focus on your core business activities.
                  </p>
                  <p>
                    With our comprehensive approach, we become your dedicated IT department, providing 
                    enterprise-level technology management at a fraction of the cost of hiring internal staff.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">24/7 Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Round-the-clock network surveillance</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Proactive Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Automatic notifications for issues</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Remote Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Fast remote troubleshooting</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">On-Site Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Local technician visits when needed</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services List */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">What's Included</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive IT management and support services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Levels */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Service Levels</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Basic Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Network uptime monitoring</li>
                      <li>• Basic alert notifications</li>
                      <li>• Monthly reporting</li>
                      <li>• Business hours support</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card border-2 border-primary">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Monitor className="h-8 w-8 text-primary" />
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">POPULAR</span>
                    </div>
                    <CardTitle className="text-xl">Complete Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 24/7 monitoring and alerts</li>
                      <li>• Remote support included</li>
                      <li>• Proactive maintenance</li>
                      <li>• On-site visits included</li>
                      <li>• Security monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Enterprise Plus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Everything in Complete Care</li>
                      <li>• Priority support response</li>
                      <li>• Advanced security features</li>
                      <li>• Strategic IT consulting</li>
                      <li>• Dedicated account manager</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Monitoring Dashboard */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Real-Time Monitoring</CardTitle>
                <CardDescription>
                  Advanced monitoring tools provide comprehensive visibility into your IT infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">What We Monitor</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Server performance and uptime</li>
                      <li>• Network connectivity and speed</li>
                      <li>• Storage capacity and health</li>
                      <li>• Security threats and vulnerabilities</li>
                      <li>• Backup success and failures</li>
                      <li>• Application performance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Response Times</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Critical issues: &lt; 15 minutes</li>
                      <li>• High priority: &lt; 2 hours</li>
                      <li>• Medium priority: &lt; 4 hours</li>
                      <li>• Low priority: &lt; 24 hours</li>
                      <li>• Emergency on-site: &lt; 4 hours</li>
                      <li>• Scheduled maintenance: Planned</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Benefits of Managed IT</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Reduced Downtime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Proactive monitoring prevents issues before they impact your business
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Cost Savings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Lower than hiring full-time IT staff with predictable monthly costs
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Monitor className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Expert Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Access to experienced technicians and latest technology expertise
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Peace of Mind</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Focus on your business while we handle all your IT needs
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready for Worry-Free IT?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our managed IT services keep your technology running smoothly while you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">
                    Learn About Our Company
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

export default ManagedIT;