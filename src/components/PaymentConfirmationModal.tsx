import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Receipt, Calendar } from "lucide-react";

interface PaymentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  serviceName?: string;
  amount?: number;
}

const PaymentConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onContinue,
  serviceName = "Enterprise Network Optimization",
  amount = 299
}: PaymentConfirmationModalProps) => {
  
  const transactionId = "TXN-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const currentDate = new Date().toLocaleDateString();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-background border rounded-xl shadow-lg">
        <DialogHeader className="text-center space-y-6 pt-6">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-green-600">
            Payment Successful!
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-center px-4">
            Your payment has been processed successfully. You will receive a confirmation email shortly.
          </p>
        </DialogHeader>

        {/* Transaction Details */}
        <div className="bg-gray-50 dark:bg-gray-950/20 rounded-lg p-6 mx-6 mb-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Receipt className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Transaction Details</h3>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="font-medium text-foreground">{serviceName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-medium text-foreground">${amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transaction ID:</span>
              <span className="font-medium text-foreground">{transactionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium text-foreground">{currentDate}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 mx-6 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">What's Next?</h4>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Our team will contact you within 24 hours to schedule your service implementation.
          </p>
        </div>

        {/* Continue Button */}
        <div className="px-6 pb-6">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            onClick={onContinue}
          >
            Continue to Dashboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentConfirmationModal;