import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Smartphone, Search, Code, CheckCircle, ArrowRight } from "lucide-react";

const WebDesign = () => {
  const services = [
    "Custom website design and development",
    "Responsive mobile-friendly layouts",
    "Content management systems (CMS)",
    "E-commerce solutions",
    "Search engine optimization (SEO)",
    "Website migration services",
    "Ongoing maintenance and updates",
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
              <Globe className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design & Development</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Modern, engaging websites that represent your business professionally and 
              drive results for your organization.
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
                <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Web Solutions</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Whether a complete website design and build, migration of an old site to a new platform, 
                    or ongoing maintenance of existing content, we have years of experience in making sure 
                    your web presence is modern and engaging for your clients.
                  </p>
                  <p>
                    Our web development team creates responsive, fast-loading websites that work seamlessly 
                    across all devices. We focus on user experience, search engine optimization, and 
                    conversion optimization to help your business succeed online.
                  </p>
                  <p>
                    From simple brochure websites to complex e-commerce platforms, we deliver solutions 
                    that meet your specific business goals and budget requirements.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Custom Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Unique designs tailored to your brand</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Mobile Ready</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Responsive design for all devices</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Search className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">SEO Optimized</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Built for search engine visibility</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader className="pb-2">
                    <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">CMS Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Easy content management systems</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services List */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Our Web Services</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive web development solutions for your business
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

            {/* Service Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Web Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Website Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Custom visual design</li>
                      <li>• Brand identity integration</li>
                      <li>• User experience design</li>
                      <li>• Responsive layouts</li>
                      <li>• Modern aesthetics</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Code className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Clean, semantic code</li>
                      <li>• Fast loading speeds</li>
                      <li>• Cross-browser compatibility</li>
                      <li>• Security best practices</li>
                      <li>• Scalable architecture</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <Search className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Search engine optimization</li>
                      <li>• Performance optimization</li>
                      <li>• Conversion optimization</li>
                      <li>• Analytics integration</li>
                      <li>• Ongoing improvements</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Technology Stack */}
            <Card className="bg-gradient-card shadow-card mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technology & Platforms</CardTitle>
                <CardDescription>
                  We work with modern technologies and popular content management systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Content Management</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• WordPress development</li>
                      <li>• Custom CMS solutions</li>
                      <li>• E-commerce platforms</li>
                      <li>• User-friendly interfaces</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technologies</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• HTML5, CSS3, JavaScript</li>
                      <li>• PHP, MySQL databases</li>
                      <li>• Responsive frameworks</li>
                      <li>• Modern development tools</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <CardTitle className="text-lg">Discovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Understand your goals and requirements
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
                      Create wireframes and visual designs
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg">Develop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Build your website with clean code
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <CardTitle className="text-lg">Test</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Quality assurance and testing
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-card text-center">
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">5</span>
                    </div>
                    <CardTitle className="text-lg">Launch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Deploy and provide ongoing support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready for a New Website?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us create a modern, engaging website that represents your business professionally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/office-365">
                    View Office 365 Services
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

export default WebDesign;