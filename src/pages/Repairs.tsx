import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const repairServices = [
  {
    category: 'Laptop Repairs',
    items: [
      { service: 'Screen Replacement', price: '2500-6000', negotiable: true },
      { service: 'Keyboard Replacement', price: '1200-3000', negotiable: true },
      { service: 'Battery Replacement', price: '1500-4000', negotiable: true },
      { service: 'Motherboard Repair', price: '2000-8000', negotiable: true },
      { service: 'Hard Drive Replacement', price: '2000-5000', negotiable: true },
    ],
  },
  {
    category: 'MacBook Repairs',
    items: [
      { service: 'Screen Replacement', price: '8000-15000', negotiable: true },
      { service: 'Keyboard Replacement', price: '4000-8000', negotiable: true },
      { service: 'Battery Replacement', price: '4000-8000', negotiable: true },
      { service: 'Logic Board Repair', price: '5000-15000', negotiable: true },
      { service: 'SSD Upgrade', price: '4000-12000', negotiable: true },
    ],
  },
  {
    category: 'PC Repairs',
    items: [
      { service: 'Motherboard Repair', price: '2000-8000', negotiable: true },
      { service: 'Power Supply Replacement', price: '1500-4000', negotiable: true },
      { service: 'GPU Repair/Replacement', price: '3000-10000', negotiable: true },
      { service: 'RAM Upgrade', price: '1500-5000', negotiable: true },
      { service: 'CPU Replacement', price: '3000-15000', negotiable: true },
    ],
  },
];

export default function Repairs() {
  const [selectedCategory, setSelectedCategory] = useState('Laptop Repairs');

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Repair Services & Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Transparent pricing for all your repair needs
          </p>
        </div>

        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">Service Charge Notice</AlertTitle>
          <AlertDescription className="text-blue-700">
            A diagnostic fee of ₹299 applies if you choose not to proceed with our repair
            service after device inspection. This fee is waived if you proceed with the
            repair.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Select a repair category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {repairServices.map((category) => (
                  <Button
                    key={category.category}
                    variant={selectedCategory === category.category ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category.category)}
                  >
                    {category.category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>{selectedCategory}</CardTitle>
              <CardDescription>
                Estimated price ranges for various repair services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {repairServices
                  .find((cat) => cat.category === selectedCategory)
                  ?.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between w-full pr-4">
                          <span>{item.service}</span>
                          <span className="font-semibold">₹{item.price}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 text-gray-600">
                          {item.negotiable && (
                            <p className="flex items-center text-green-600">
                              <span className="mr-2">✓</span>
                              Price is negotiable based on specific model and repair
                              requirements
                            </p>
                          )}
                          <p className="flex items-center">
                            <span className="mr-2">✓</span>
                            Includes 3-month service warranty
                          </p>
                          <p className="flex items-center">
                            <span className="mr-2">✓</span>
                            Free diagnostic check
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our shop for exclusive offers and personalized service
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <a href="tel:+919971952271">Call Now: +91 9971952271</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Visit Our Shop</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}