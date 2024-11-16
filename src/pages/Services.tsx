import { motion } from 'framer-motion';
import ServicesSection from '@/components/home/Services';

export default function Services() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServicesSection />
      </motion.div>
    </div>
  );
}