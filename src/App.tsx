import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Pricing from "./pages/Pricing";
import NetworkDesign from "./pages/services/NetworkDesign";
import NetworkSecurity from "./pages/services/NetworkSecurity";
import IPSurveillance from "./pages/services/IPSurveillance";
import IPPhone from "./pages/services/IPPhone";
import WebDesign from "./pages/services/WebDesign";
import Office365 from "./pages/services/Office365";
import ManagedIT from "./pages/services/ManagedIT";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/network-design" element={<NetworkDesign />} />
          <Route path="/services/network-security" element={<NetworkSecurity />} />
          <Route path="/services/ip-surveillance" element={<IPSurveillance />} />
          <Route path="/services/ip-phone" element={<IPPhone />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/office-365" element={<Office365 />} />
          <Route path="/services/managed-it" element={<ManagedIT />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
