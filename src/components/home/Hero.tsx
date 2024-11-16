import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = [
    {
      icon: Wrench,
      text: 'Expert Repair Services',
    },
    {
      icon: Shield,
      text: 'Guaranteed Repairs',
    },
    {
      icon: Clock,
      text: 'Quick Turnaround',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Premium Laptop & Computer{' '}
              <span className="text-blue-600">Repair Services</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Professional computer repair services in GTB Nagar, New Delhi. Fast, reliable,
              and guaranteed fixes for all your tech problems.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Book a Repair
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <feature.icon className="h-6 w-6 text-blue-600" />
                  <span className="font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-6" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=2070"
                  alt="Computer repair specialist at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;