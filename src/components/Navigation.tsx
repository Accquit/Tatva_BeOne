
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BookOpen className="h-8 w-8 text-tatva-purple" />
            </motion.div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
                Tatva
              </span>
              <span className="text-2xl font-bold text-white">BeOne</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/classes">Classes</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-tatva-purple hover:bg-tatva-purple-light text-white btn-hover">
                <Link to="/login">Login / Sign Up</Link>
              </Button>
            </motion.div>
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="md:hidden py-4 flex flex-col space-y-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MobileNavLink href="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
              <MobileNavLink href="/classes" onClick={toggleMobileMenu}>Classes</MobileNavLink>
              <MobileNavLink href="/about" onClick={toggleMobileMenu}>About</MobileNavLink>
              <MobileNavLink href="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
              <MobileNavLink href="/dashboard" onClick={toggleMobileMenu}>Dashboard</MobileNavLink>
              <motion.div 
                variants={menuItemVariants}
                className="pt-2"
              >
                <Button className="bg-tatva-purple hover:bg-tatva-purple-light w-full btn-hover">
                  <Link to="/login" className="w-full block" onClick={toggleMobileMenu}>
                    Login / Sign Up
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ href, children }) => (
  <Link 
    to={href} 
    className="relative text-white hover:text-tatva-purple-light transition-colors overflow-hidden group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tatva-purple transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ href, onClick, children }) => (
  <motion.div variants={menuItemVariants}>
    <Link 
      to={href} 
      onClick={onClick}
      className="block text-white hover:text-tatva-purple-light transition-colors py-2 border-b border-gray-700"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navigation;
