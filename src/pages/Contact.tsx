import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Shop</h1>
          <p className="text-xl text-gray-600">
            Get exclusive in-store offers and expert consultation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-600" />
                Call Us
              </CardTitle>
              <CardDescription>Direct line to our experts</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+919971952271"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700"
              >
                +91 9971952271
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                Email Us
              </CardTitle>
              <CardDescription>Send us your queries</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:blissful949@gmail.com"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700"
              >
                blissful949@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Business Hours
              </CardTitle>
              <CardDescription>When to visit us</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Our Location
                </CardTitle>
                <CardDescription>Visit us for the best service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Smart Services
                  <br />
                  GTB Nagar, New Delhi
                </p>
                <div className="space-y-4">
                  <p className="text-green-600 font-medium">
                    ✓ Walk-in Diagnostics Available
                  </p>
                  <p className="text-green-600 font-medium">
                    ✓ Exclusive In-Store Offers
                  </p>
                  <p className="text-green-600 font-medium">
                    ✓ Expert Consultation
                  </p>
                </div>
                <Button className="mt-6" size="lg" asChild>
                  <a
                    href="https://www.google.com/maps/dir//SMART+SERVICES"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.711794539571!2d77.2052385!3d28.6982667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd48b2540909%3A0xf73f3fcd67a1dbf4!2sSMART%20SERVICES!5e0!3m2!1sen!2sin!4v1731765390214!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}