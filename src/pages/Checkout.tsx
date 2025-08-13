import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import EnrollmentCompleteModal from "@/components/EnrollmentCompleteModal";
import PaymentProcessingModal from "@/components/PaymentProcessingModal";
import PaymentConfirmationModal from "@/components/PaymentConfirmationModal";

const Checkout = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("visa");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const programs = [
    {
      id: "network-optimization",
      icon: "🏢",
      title: "Enterprise Network Optimization",
      price: 299,
      features: ["Network design & optimization", "Structured cabling installation", "Advanced routing configuration", "Real-time monitoring", "Performance optimization", "24/7 technical support"]
    },
    {
      id: "cybersecurity-audits",
      icon: "🔒",
      title: "Cybersecurity Audits & Compliance",
      price: 449,
      features: ["In-depth security audits", "Custom security protocols", "Regulatory compliance", "Threat mitigation strategies", "Vulnerability assessments", "24/7 security monitoring"]
    },
    {
      id: "smart-surveillance",
      icon: "📱",
      title: "Smart Surveillance & Access Control",
      price: 399,
      features: ["IP camera installation", "Motion tracking systems", "Access control integration", "Real-time monitoring", "Mobile app access", "Video analytics"]
    }
  ];

  const selectedProgramData = programs.find(p => p.id === selectedProgram);
  const subtotal = selectedProgramData ? selectedProgramData.price : 0;
  const platformFee = 25;
  const vat = Math.round((subtotal + platformFee) * 0.18);
  const total = subtotal + platformFee + vat;

  const paymentMethods = [
    { id: "visa", name: "Visa", icon: "💳" },
    { id: "mastercard", name: "Mastercard", icon: "💳" },
    { id: "mpesa", name: "M-Pesa", icon: "📱" },
    { id: "paypal", name: "PayPal", icon: "🏦" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">🏢 Complete Your Service Request</h1>
            <p className="text-lg opacity-90">
              Secure your premium IT service implementation with Nimbus
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Program Selection & Order Summary */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Step Indicator */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <span className="text-sm text-muted-foreground">Select Service</span>
                  </div>
                  <div className="w-8 h-0.5 bg-border"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <span className="text-sm text-muted-foreground">Business Info</span>
                  </div>
                  <div className="w-8 h-0.5 bg-border"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <span className="text-sm text-muted-foreground">Payment</span>
                  </div>
                </div>

                {/* Program Selection */}
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">🏢 Select Your IT Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {programs.map((program) => (
                        <div 
                          key={program.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedProgram === program.id 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedProgram(program.id)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-2xl">{program.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-foreground">{program.title}</h3>
                                <span className="text-xl font-bold text-primary">${program.price}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                {program.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-1">
                                    <CheckCircle className="h-3 w-3 text-primary" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Student Information */}
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">🏢 Business Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Contact First Name *</Label>
                        <Input id="firstName" placeholder="Enter contact first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Contact Last Name *</Label>
                        <Input id="lastName" placeholder="Enter contact last name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Business Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter business email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Business Phone Number *</Label>
                        <Input id="phone" placeholder="Enter business phone number" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="uganda">Uganda</SelectItem>
                            <SelectItem value="tanzania">Tanzania</SelectItem>
                            <SelectItem value="rwanda">Rwanda</SelectItem>
                            <SelectItem value="ethiopia">Ethiopia</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="south-africa">South Africa</SelectItem>
                            <SelectItem value="egypt">Egypt</SelectItem>
                            <SelectItem value="morocco">Morocco</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="education">Business Size *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Business Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small Business (1-10 employees)</SelectItem>
                            <SelectItem value="medium">Medium Business (11-50 employees)</SelectItem>
                            <SelectItem value="large">Large Business (51-200 employees)</SelectItem>
                            <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="experience">Industry Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Industry Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input id="company" placeholder="Enter your company name" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="goals">Project Requirements & Expectations</Label>
                        <Textarea id="goals" placeholder="Tell us about your IT requirements and project expectations" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">💳 Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                            selectedPayment === method.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedPayment(method.id)}
                        >
                          <div className="text-2xl mb-2">{method.icon}</div>
                          <div className="text-sm font-medium text-foreground">{method.name}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">🔒 Secure & Protected Payment</span>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" asChild className="flex-1">
                        <Link to="/pricing">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back to Programs
                        </Link>
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-primary hover:shadow-glow"
                        onClick={() => {
                          if (!selectedProgram) {
                            alert("Please select an IT service first");
                            return;
                          }
                          setShowPaymentModal(true);
                        }}
                        disabled={!selectedProgram}
                      >
                        Complete Service Request →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-card shadow-card sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">📋 Service Summary</CardTitle>
                    {!selectedProgram && (
                      <CardDescription>Please select an IT service</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {selectedProgramData ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-gradient-subtle rounded-lg">
                          <div className="text-2xl">{selectedProgramData.icon}</div>
                          <div>
                            <div className="font-semibold text-foreground">{selectedProgramData.title}</div>
                            <div className="text-sm text-muted-foreground">${selectedProgramData.price}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 pt-4 border-t">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">IT Service</span>
                            <span className="font-medium">${subtotal}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Setup & Configuration Fee</span>
                            <span className="font-medium">${platformFee}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">VAT (18%)</span>
                            <span className="font-medium">${vat}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t font-bold text-lg">
                            <span className="text-foreground">Total Amount</span>
                            <span className="text-primary">${total}</span>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                          <h4 className="font-semibold text-foreground mb-2">💡 What You Get:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Professional installation & setup</li>
                            <li>• 24/7 monitoring & support</li>
                            <li>• Industry compliance standards</li>
                            <li>• Performance optimization</li>
                            <li>• 1-year warranty coverage</li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-4xl mb-4">📚</div>
                        <p className="text-muted-foreground">Choose from our professional IT service options</p>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">IT Service</span>
                            <span className="font-medium">$0</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Setup & Configuration Fee</span>
                            <span className="font-medium">$25</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">VAT (18%)</span>
                            <span className="font-medium">$0</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t font-bold text-lg">
                            <span className="text-foreground">Total Amount</span>
                            <span className="text-primary">$25</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* 3-Modal Flow */}
      <PaymentProcessingModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPaymentComplete={() => {
          setShowPaymentModal(false);
          setShowConfirmationModal(true);
        }}
      />
      
      <PaymentConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onContinue={() => {
          setShowConfirmationModal(false);
          setShowEnrollmentModal(true);
        }}
        serviceName={selectedProgramData?.title}
        amount={total}
      />
      
      <EnrollmentCompleteModal
        isOpen={showEnrollmentModal}
        onClose={() => setShowEnrollmentModal(false)}
        courseName={selectedProgramData?.title}
        userEmail={userEmail || "business@company.com"}
      />
    </div>
  );
};

export default Checkout;