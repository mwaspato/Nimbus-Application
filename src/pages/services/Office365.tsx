import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Calendar, Users, Cloud, CheckCircle, ArrowRight } from "lucide-react";

const Office365 = () => {
  const features = [
    "Professional email with your domain",
    "Online calendars and scheduling",
    "Video conferencing and Teams",
    "Document collaboration in real-time",
    "OneDrive cloud storage",
    "Mobile app integration",
    "Advanced security features",
    "Migration from legacy systems"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-foreground/10 p-4 rounded-full w-fit mx-auto mb-6">
              <Mail className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Office 365 Email & Apps</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Experience secure and reliable access to email, contacts, calendars, video calls, 
              and customized business apps from anywhere in the world.
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
                <h2 className="text-3xl font-bold mb-6 text-foreground">Microsoft 365 Solutions</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Experience secure and reliable access to email, contacts, calendars, video calls, 
                    and customized business apps from anywhere in the world. As a certified Microsoft 
                    partner, we specialize in migrating companies from older systems to Office 365.
                  </p>
                  <p>
                    Microsoft 365 (formerly Office 365) provides your business with enterprise-grade 
                    productivity tools that enable collaboration, improve efficiency, and enhance security. 
                    Your team can work from anywhere while maintaining seamless access to all their 
                    essential business applications.
                  </p>
                  <p>
                    Our migration services ensure a smooth transition from your current email and 
                    productivity systems to Microsoft 365, with minimal downtime and comprehensive 
                    training for your team.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Email & Exchange</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Professional email with 50GB mailboxes</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Calendar & Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Shared calendars and meeting scheduling</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Teams & Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Video meetings and team collaboration</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Cloud Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">OneDrive with 1TB per user</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Features List */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Microsoft 365 Features</CardTitle>
                <CardDescription className="text-center">
                  Complete productivity suite for modern businesses
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

            {/* Applications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Included Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Mail className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Communication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Outlook email client</li>
                      <li>• Exchange Online</li>
                      <li>• Microsoft Teams</li>
                      <li>• Skype for Business</li>
                      <li>• Shared mailboxes</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Cloud className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Productivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Word, Excel, PowerPoint</li>
                      <li>• OneNote and Planner</li>
                      <li>• OneDrive file storage</li>
                      <li>• SharePoint collaboration</li>
                      <li>• Forms and Lists</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Business Apps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Power Platform tools</li>
                      <li>• Business intelligence</li>
                      <li>• Advanced security</li>
                      <li>• Compliance center</li>
                      <li>• Admin controls</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Migration Services */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Migration & Implementation</CardTitle>
                <CardDescription>
                  Seamless transition from your current systems to Microsoft 365
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">What We Migrate</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Email accounts and data</li>
                      <li>• Contacts and calendars</li>
                      <li>• Files and documents</li>
                      <li>• User accounts and permissions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Our Process</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Pre-migration assessment</li>
                      <li>• Domain verification</li>
                      <li>• Data migration execution</li>
                      <li>• User training and support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Why Choose Microsoft 365?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Always Up-to-Date</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Automatic updates ensure you always have the latest features
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Work Anywhere</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Access your files and apps from any device, anywhere
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Better Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Real-time collaboration on documents and projects
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Enterprise Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Advanced security and compliance features built-in
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Upgrade to Microsoft 365?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our certified Microsoft partners help you migrate to a modern, cloud-based productivity platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Start Migration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/managed-it">
                    View Managed IT Services
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

export default Office365;