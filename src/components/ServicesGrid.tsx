import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Network, 
  Shield, 
  Camera, 
  Phone, 
  Globe, 
  Mail, 
  Monitor,
  ArrowRight 
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Network,
      title: "Enterprise Network Optimization",
      description: "Boost your network speed and reliability with structured cabling, advanced routing, and real-time monitoring solutions.",
      path: "/services/network-design"
    },
    {
      icon: Shield,
      title: "Cybersecurity Audits & Compliance",
      description: "We perform in-depth audits and implement custom security protocols to meet regulatory compliance and mitigate threats.",
      path: "/services/network-security"
    },
    {
      icon: Camera,
      title: "Smart Surveillance & Access Control",
      description: "Integrate intelligent cameras, motion tracking, and access control systems for real-time security insights.",
      path: "/services/ip-surveillance"
    },
    {
      icon: Monitor,
      title: "Proactive IT Monitoring & Support",
      description: "Enjoy peace of mind with our proactive system checks, performance tuning, and dedicated 24/7 IT support.",
      path: "/services/managed-it"
    },
    {
      icon: Globe,
      title: "E-Commerce & Web Applications",
      description: "We design fast, scalable, and SEO-friendly web solutions tailored for digital commerce and business automation.",
      path: "/services/web-design"
    },
    {
      icon: Mail,
      title: "Cloud Productivity Tools Integration",
      description: "Streamline business operations by integrating Microsoft 365 with file sharing, collaboration, and workflow automation.",
      path: "/services/office-365"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cloud tools to secure communication platforms, our services cover the entire IT spectrum your business relies on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-tech transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-all"
                  >
                    <Link to={service.path}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;