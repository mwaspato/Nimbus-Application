import { Link } from "react-router-dom";
import { Cpu, Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Network Design & Installation", path: "/services/network-design" },
    { name: "Network Security & Backups", path: "/services/network-security" },
    { name: "IP Surveillance & Security", path: "/services/ip-surveillance" },
    { name: "IP Phone & Fax Service", path: "/services/ip-phone" },
    { name: "Web Design & Development", path: "/services/web-design" },
    { name: "Office 365 Email & Apps", path: "/services/office-365" },
    { name: "24/7 Managed IT Services", path: "/services/managed-it" },
  ];

  return (
    <footer className="bg-tech-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Nimbus</span>
            </div>
            <p className="text-lg md:text-sm mb-8 opacity-90 max-w-2xl mx-auto">
              At Nimbus, we provide advanced IT solutions, enterprise-grade support, and
              tailored network infrastructure design to empower businesses with secure,
              scalable, and high-performance technology systems.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/nimbusnet/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-glow transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-glow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-glow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-glow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-sm hover:text-primary-glow transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-sm">0722788570</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-glow" />
                <a 
                  href="mailto:info@nimbusnet.com" 
                  className="text-sm hover:text-primary-glow transition-colors"
                >
                  info@nimbusnet.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-glow mt-1" />
                <span className="text-sm">
                  Nairobi, Kenya<br />
                 Your Partner in Digital Transformation
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © 2025 Net-Serve, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
