import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cpu, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

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
    <>
      {/* Top Contact Bar */}
      <div className="bg-tech-dark text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0722788570</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@nimbusnet.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Innovating Technology for Your Business</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card shadow-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Nimbus</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}
              >
                About
              </Link>

              <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`font-medium transition-colors hover:text-white ${location.pathname.startsWith("/services") ? "text-black" : "text-foreground"}`}
                  >
                    Services
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-popover shadow-tech border border-border">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link
                        to={service.path}
                        className="w-full px-4 py-3 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/pricing"
                className={`font-medium transition-colors hover:text-primary ${isActive("/pricing") ? "text-primary" : "text-foreground"}`}
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}
              >
                Contact
              </Link>

              <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border shadow-md">
            <Link to="/" className="block px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="w-full flex justify-between items-center px-4 py-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </Button>
              {isServicesOpen && (
                <div className="pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2"
                      onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="block px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" className="block px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/contact" className="block px-4 py-2 bg-gradient-primary text-white text-center rounded mt-2" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
