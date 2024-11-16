import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-600">
            Welcome to Smart Services! 🚀
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <p className="text-lg text-center mb-4">
            Visit our shop in GTB Nagar for exclusive offers on all repair services!
          </p>
          <div className="space-y-2 text-gray-600">
            <p className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Free Diagnostics
            </p>
            <p className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Expert Technicians
            </p>
            <p className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Quick Turnaround Time
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="font-semibold">Call us now:</p>
            <a
              href="tel:+919971952271"
              className="text-blue-600 hover:text-blue-700 font-bold text-lg"
            >
              +91 9971952271
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}