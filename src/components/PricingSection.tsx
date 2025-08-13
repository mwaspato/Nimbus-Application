import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: "🏢",
      title: "Enterprise Network Optimization",
      price: "$299",
      period: "month",
      description: "Boost your network speed and reliability with structured cabling, advanced routing, and real-time monitoring solutions.",
      features: [
        "Network design & optimization",
        "Structured cabling installation",
        "Advanced routing configuration",
        "Real-time monitoring",
        "Performance optimization",
        "24/7 technical support",
        "Monthly performance reports",
        "Scalability planning"
      ]
    },
    {
      icon: "🔒",
      title: "Cybersecurity Audits & Compliance",
      price: "$449",
      period: "month",
      description: "Comprehensive security audits and implementation of custom security protocols to meet regulatory compliance and mitigate threats.",
      features: [
        "In-depth security audits",
        "Custom security protocols",
        "Regulatory compliance",
        "Threat mitigation strategies",
        "Vulnerability assessments",
        "Security policy development",
        "Staff training programs",
        "Compliance reporting",
        "24/7 security monitoring"
      ],
      popular: true
    },
    {
      icon: "📱",
      title: "Smart Surveillance & Access Control",
      price: "$399",
      period: "month",
      description: "Intelligent cameras, motion tracking, and access control systems for comprehensive real-time security insights.",
      features: [
        "IP camera installation",
        "Motion tracking systems",
        "Access control integration",
        "Real-time monitoring",
        "Mobile app access",
        "Video analytics",
        "Cloud storage options",
        "Remote system management"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Premium IT Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions designed for modern businesses. From network optimization 
              to cybersecurity, we provide the technology infrastructure your business needs to thrive.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <CardTitle className="text-xl text-foreground">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      plan 
                        ? 'bg-gradient-primary hover:shadow-glow' 
                        : 'bg-gradient-secondary hover:bg-secondary/80'
                    } transition-all duration-300`}
                    size="lg"
                  >
                    <Link to="/checkout">
                      Enroll Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-card p-6 rounded-lg shadow-card">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock monitoring and expert technical assistance</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg shadow-card">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-foreground mb-2">Expert Installation</h3>
              <p className="text-sm text-muted-foreground">Professional setup and configuration by certified technicians</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg shadow-card">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-foreground mb-2">Scalable Solutions</h3>
              <p className="text-sm text-muted-foreground">IT infrastructure that grows with your business needs</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg shadow-card">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-foreground mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">Industry-leading security protocols and compliance standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;