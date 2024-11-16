import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Smart Services</h3>
            <p className="text-sm">
              Premium laptop & computer repair services in GTB Nagar, New Delhi.
              Professional repairs with guaranteed satisfaction.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/repairs" className="hover:text-blue-400 transition-colors">
                  Repairs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Laptop Repair</li>
              <li>MacBook Repair</li>
              <li>PC Repair</li>
              <li>Data Recovery</li>
              <li>Custom PC Build</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+919971952271" className="hover:text-blue-400 transition-colors">
                  +91 9971952271
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:blissful949@gmail.com" className="hover:text-blue-400 transition-colors">
                  blissful949@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>GTB Nagar, New Delhi</span>
              </li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}