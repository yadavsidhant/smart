import { motion } from 'framer-motion';
import { Award, Star, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const achievements = [
    { icon: Clock, title: '15+ Years', description: 'Industry Experience' },
    { icon: Users, title: '5000+', description: 'Satisfied Customers' },
    { icon: Award, title: 'Certified', description: 'Professional Expert' },
    { icon: Star, title: '4.9/5', description: 'Customer Rating' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3" />
            <img
              src="https://drive.google.com/drive-viewer/AKGpihbreMJBTBwIFZbBXzKor6HHw9rWT2EJ5J5IxlgHr5kbSYQyVUJ8dJAodFuYmLS3sRau205Ma4aiim113CLIo7UqihosD8x12Qk=w885-h812-rw-v1"
              alt="Mr. Anand Kumar"
              className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert
              <span className="block text-blue-600 mt-2">Mr. Anand Kumar</span>
            </h1>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                With over 15 years of experience in computer and laptop repairs, Mr. Anand Kumar
                is the driving force behind Smart Services. His passion for technology and
                commitment to excellence has made him one of the most trusted computer repair
                experts in Delhi.
              </p>
              
              <p className="text-lg">
                Starting his journey in 2008, he has successfully helped thousands of
                customers with their technology needs, from simple repairs to complex
                system recoveries. His expertise spans across all major brands and
                platforms, including specialized knowledge in Apple products.
              </p>

              <p className="text-lg">
                Mr. Kumar's philosophy is simple: provide honest, professional service
                with guaranteed results. This commitment to quality and customer
                satisfaction has earned Smart Services its reputation as a premier
                computer repair center in GTB Nagar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((item, index) => (
                <Card key={index} className="bg-white/50 backdrop-blur border-none">
                  <CardContent className="p-4">
                    <item.icon className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Professional Certifications & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Hardware Expert</h3>
              <p className="text-gray-600">
                Specialized in motherboard-level repairs and component replacement
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Software Specialist</h3>
              <p className="text-gray-600">
                Expert in OS optimization and software troubleshooting
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Data Recovery Pro</h3>
              <p className="text-gray-600">
                Certified in advanced data recovery techniques
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}