import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Shield, Lock, HardDrive, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const NetworkSecurity = () => {
  const securityFeatures = [
    "Advanced firewall configuration",
    "Threat detection and prevention",
    "Business-class antivirus protection",
    "Real-time security monitoring",
    "Data encryption and backup",
    "Cloud backup solutions",
    "Disaster recovery planning",
    "Security compliance audits"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full w-fit mx-auto mb-6">
              <Shield className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Network Security & Backups</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Protect your business with comprehensive security solutions and reliable data backup systems 
              designed to keep your operations safe and running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Tabs Navigation */}
            <Tabs defaultValue="services" className="w-full">
              <TabsList className="w-full mb-8">
                <TabsTrigger value="services">Services</TabsTrigger>
              </TabsList>
              
              <TabsContent value="services" className="space-y-16">
            
            {/* Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Complete Security Solutions</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Secure your business with world-class data protection. We provide robust firewall devices 
                    with advanced threat detection and prevention, business-class antivirus for all of your 
                    workstations, as well as local & cloud backups of your vital company data.
                  </p>
                  <p>
                    In today's digital landscape, cybersecurity threats are constantly evolving. Our comprehensive 
                    security approach protects your business from malware, ransomware, data breaches, and other 
                    cyber threats while ensuring business continuity through reliable backup solutions.
                  </p>
                  <p>
                    We implement layered security strategies that protect your network perimeter, endpoints, 
                    and data, giving you peace of mind that your business assets are secure.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Firewall Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Advanced firewall with threat detection</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Antivirus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Business-class endpoint protection</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <HardDrive className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Local Backups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">On-site data backup solutions</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Cloud Backups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Secure offsite backup storage</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Security Features */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Security Features</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive protection for your business data and infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Security Layers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Multi-Layer Security Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Lock className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Perimeter Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Enterprise-grade firewalls</li>
                      <li>• Intrusion detection systems</li>
                      <li>• VPN access control</li>
                      <li>• Network segmentation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Endpoint Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Advanced antivirus software</li>
                      <li>• Real-time threat monitoring</li>
                      <li>• Automated patch management</li>
                      <li>• Device compliance policies</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <HardDrive className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Automated backups</li>
                      <li>• Data encryption</li>
                      <li>• Disaster recovery plans</li>
                      <li>• Business continuity solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Backup Solutions */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Backup & Recovery Solutions</CardTitle>
                <CardDescription>
                  Protect your critical business data with our comprehensive backup strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Local Backups</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• On-site backup appliances</li>
                      <li>• Fast data recovery times</li>
                      <li>• Automated scheduling</li>
                      <li>• Version history retention</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Cloud Backups</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Secure offsite storage</li>
                      <li>• Geographic redundancy</li>
                      <li>• Encrypted data transmission</li>
                      <li>• Scalable storage capacity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Secure Your Business Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't wait for a security incident. Protect your business with our comprehensive security and backup solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Get Security Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/ip-surveillance">
                    View Surveillance Solutions
                  </Link>
                </Button>
              </div>
            </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NetworkSecurity;
