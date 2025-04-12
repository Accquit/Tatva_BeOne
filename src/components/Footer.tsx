
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tatva-dark-lighter py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
                Tatva
              </span>
              <span className="text-white ml-1">BeOne</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering education through innovative technology and collaborative tools.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tatva-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tatva-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tatva-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tatva-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-tatva-purple transition-colors">Home</Link></li>
              <li><Link to="/classes" className="text-gray-300 hover:text-tatva-purple transition-colors">Classes</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-tatva-purple transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-tatva-purple transition-colors">Contact</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-tatva-purple transition-colors">Book a Class</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><Link to="/portal/student" className="text-gray-300 hover:text-tatva-purple transition-colors">Student Login</Link></li>
              <li><Link to="/portal/instructor" className="text-gray-300 hover:text-tatva-purple transition-colors">Teacher Portal</Link></li>
              <li><Link to="/portal/parent" className="text-gray-300 hover:text-tatva-purple transition-colors">Parent Dashboard</Link></li>
              <li><Link to="/portal/admin" className="text-gray-300 hover:text-tatva-purple transition-colors">Admin Console</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-tatva-purple transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-tatva-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-tatva-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-300 hover:text-tatva-purple transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="text-gray-300 hover:text-tatva-purple transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-tatva-purple transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Tatva BeOne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
