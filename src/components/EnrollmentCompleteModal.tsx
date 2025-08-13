import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Mail } from "lucide-react";

interface EnrollmentCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
  userEmail?: string;
}

const EnrollmentCompleteModal = ({ 
  isOpen, 
  onClose, 
  courseName = "Digital Marketing Mastery",
  userEmail = "jamesn@gmail.com"
}: EnrollmentCompleteModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-background border rounded-xl shadow-lg">
        <DialogHeader className="text-center space-y-6 pt-6">
          {/* Graduation Cap Icon */}
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-green-600">
            Enrollment Complete!
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-center px-4">
            Thank you for enrolling in <span className="font-semibold">{courseName}</span>. 
            Please complete your payment in the new window that opened.
          </p>
        </DialogHeader>

        {/* Email Confirmation Section */}
        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 mx-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-600">Check Your Email</h3>
          </div>
          
          <p className="text-sm text-muted-foreground text-center mb-2">
            Confirmation and course details sent to:
          </p>
          
          <p className="font-semibold text-center text-foreground">
            {userEmail}
          </p>
        </div>

        {/* Continue Button */}
        <div className="px-6 pb-6">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            onClick={onClose}
          >
            Continue Purchasing
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentCompleteModal;