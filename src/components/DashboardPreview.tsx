
import { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardCardProps {
  title: string;
  description: string;
  imageSrc: string;
  active: boolean;
  direction: number;
}

const DashboardCard = ({ title, description, imageSrc, active, direction }: DashboardCardProps) => (
  <AnimatePresence mode="wait">
    {active && (
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0, x: 50 * direction }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 * direction }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Card className="h-full overflow-hidden bg-tatva-dark-lighter border-none rounded-xl shadow-lg">
          <div className="p-6 pb-0">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
          </div>
          <div className="p-4 flex justify-center">
            <motion.img 
              src={imageSrc} 
              alt={`${title} Dashboard`} 
              className="rounded-lg shadow-lg max-w-full h-auto"
              initial={{ opacity: 0.8, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                // Fallback image if the primary image fails to load
                e.currentTarget.src = "https://via.placeholder.com/800x500?text=Dashboard+Preview";
              }}
            />
          </div>
        </Card>
      </motion.div>
    )}
  </AnimatePresence>
);

const DashboardPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const dashboards = [
    {
      title: "Student Dashboard",
      description: "Access your classes, assignments, and progress tracking.",
      // Fixed image URLs with fallbacks
      imageSrc: "https://cdn.dribbble.com/users/2376408/screenshots/8125229/media/4fa923e6fc9cd07fc7ee9b7e8a9e11be.png"
    },
    {
      title: "Teacher Dashboard",
      description: "Manage classes, create assignments, and track student performance.",
      imageSrc: "https://cdn.dribbble.com/users/2376408/screenshots/7243514/media/9dce74cdb12aa7f9a77e6d07f371b21d.png"
    },
    {
      title: "Parent Dashboard",
      description: "Monitor your child's academic journey and communicate with teachers.",
      imageSrc: "https://cdn.dribbble.com/users/2376408/screenshots/9809068/media/c5d138935dfa9e14d91cb2a0aef7d09b.png"
    },
    {
      title: "Admin Dashboard",
      description: "Oversee all school operations and access comprehensive analytics.",
      imageSrc: "https://cdn.dribbble.com/users/2376408/screenshots/9551299/media/93f2e876a9101516e7fe6b0094f2aece.png"
    }
  ];

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? dashboards.length - 1 : prevIndex - 1
    );
  }, [dashboards.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % dashboards.length);
  }, [dashboards.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [goToNext]);

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-gradient-to-b from-tatva-dark-lighter to-tatva-dark" id="dashboards">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text"
            variants={itemVariants}
          >
            Dashboard Previews
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore our intuitive dashboards designed for different user roles.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl w-full">
            <motion.div 
              className="relative h-[440px] mb-6 bg-tatva-dark-lighter/30 rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              {dashboards.map((dashboard, index) => (
                <DashboardCard
                  key={index}
                  title={dashboard.title}
                  description={dashboard.description}
                  imageSrc={dashboard.imageSrc}
                  active={index === activeIndex}
                  direction={direction}
                />
              ))}
            </motion.div>
            
            <motion.div 
              className="flex justify-center items-center space-x-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-tatva-dark-lighter border-tatva-purple-light hover:bg-tatva-purple hover:text-white"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </motion.div>
              
              <div className="flex space-x-2">
                {dashboards.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-tatva-purple' : 'bg-gray-500'
                    }`}
                    onClick={() => handleDotClick(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-tatva-dark-lighter border-tatva-purple-light hover:bg-tatva-purple hover:text-white"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
