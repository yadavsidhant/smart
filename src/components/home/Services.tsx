import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Laptop, Cpu, HardDrive, Shield, Wrench, Database } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: Laptop,
    title: 'Laptop Repair',
    description: 'Expert repairs for all laptop brands with quick turnaround time',
  },
  {
    icon: Shield,
    title: 'MacBook Repair',
    description: 'Specialized Apple repairs with genuine parts and warranty',
  },
  {
    icon: Cpu,
    title: 'PC Repair',
    description: 'Complete desktop computer diagnostics and repair services',
  },
  {
    icon: HardDrive,
    title: 'Data Recovery',
    description: 'Professional data recovery from all storage devices',
  },
  {
    icon: Database,
    title: 'Virus Removal',
    description: 'Complete malware removal and system protection setup',
  },
  {
    icon: Wrench,
    title: 'Custom PC Build',
    description: 'Custom gaming and workstation PC building services',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Professional computer repair services for all your needs
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}