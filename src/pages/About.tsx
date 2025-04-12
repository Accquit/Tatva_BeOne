
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
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
    <div className="min-h-screen bg-gradient-to-b from-tatva-dark to-tatva-dark-lighter">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text"
              variants={itemVariants}
            >
              About Tatva BeOne
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-12 bg-tatva-dark-lighter p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                Tatva BeOne was founded with a vision to transform education by creating a seamless connection between students, teachers, parents, and administrators. We believe that education thrives when all stakeholders can collaborate effectively in a unified digital environment.
              </p>
              <p className="text-gray-300">
                Our platform is designed to break down communication barriers, streamline administrative tasks, and create a more engaging learning experience for everyone involved in the educational journey.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-12 bg-tatva-dark-lighter p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Approach</h2>
              <p className="text-gray-300 mb-4">
                We take a user-centered approach to educational technology. Each feature of our platform is carefully designed with the needs of students, teachers, parents, and administrators in mind.
              </p>
              <p className="text-gray-300 mb-4">
                By providing tailored dashboards and tools for each user role, we ensure that everyone has access to the information and features that are most relevant to them. This approach helps to create a more efficient and effective educational ecosystem.
              </p>
              <p className="text-gray-300">
                Our team of educators and technologists work together to continuously improve our platform based on feedback from real users and the latest research in educational technology.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center">
              <Button className="bg-tatva-purple hover:bg-tatva-purple-light text-white px-8 py-6 text-lg btn-hover">
                Join Our Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
