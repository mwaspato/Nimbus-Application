import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard } from "lucide-react";

interface PaymentProcessingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
}

const PaymentProcessingModal = ({ 
  isOpen, 
  onClose, 
  onPaymentComplete 
}: PaymentProcessingModalProps) => {
  
  const handleProcessPayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      onPaymentComplete();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-background border rounded-xl shadow-lg">
        <DialogHeader className="text-center space-y-6 pt-6">
          {/* Credit Card Icon */}
          <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-950/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-blue-600" />
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground">
            Processing Payment
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-center px-4">
            Please wait while we securely process your payment. This may take a few moments.
          </p>
        </DialogHeader>

        {/* Processing Animation */}
        <div className="flex justify-center py-8">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 mx-6 mb-6">
          <p className="text-sm text-green-700 dark:text-green-300 text-center">
            🔒 Your payment is secured with 256-bit SSL encryption
          </p>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 space-y-3">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            onClick={handleProcessPayment}
          >
            Complete Payment
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={onClose}
          >
            Cancel Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentProcessingModal;