
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  // Animation configuration for sections
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  // Setup IntersectionObserver animations
  const controls = useAnimation();
  
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-tatva-dark to-tatva-dark-lighter">
      <Navigation />
      <main>
        <Hero />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariant}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
