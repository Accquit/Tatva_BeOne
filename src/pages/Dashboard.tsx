
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Users, BookOpen, UserCheck, Settings } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome to Dashboard",
      description: "Please select your portal to continue",
    });
  }, [toast]);
  
  const portalOptions = [
    {
      id: 'student',
      title: 'Student Portal',
      description: 'Access your classes, assignments, and connect with teachers.',
      icon: <Users size={32} className="text-tatva-purple" />,
      path: '/portal/student',
    },
    {
      id: 'instructor',
      title: 'Instructor Portal',
      description: 'Manage your classes, create assignments, and track student progress.',
      icon: <BookOpen size={32} className="text-tatva-purple" />,
      path: '/portal/instructor',
    },
    {
      id: 'parent',
      title: 'Parent Portal',
      description: 'Stay updated with your child\'s progress and communicate with teachers.',
      icon: <UserCheck size={32} className="text-tatva-purple" />,
      path: '/portal/parent',
    },
    {
      id: 'admin',
      title: 'Admin Portal',
      description: 'Oversee the entire system, manage users, and access analytics.',
      icon: <Settings size={32} className="text-tatva-purple" />,
      path: '/portal/admin',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-tatva-dark to-tatva-dark-lighter">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Select a portal to access specific features and functionality based on your role.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portalOptions.map((option) => (
            <motion.div 
              key={option.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-tatva-dark-lighter border-gray-700 hover:border-tatva-purple transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{option.icon}</div>
                  <CardTitle className="text-white">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <Button 
                    onClick={() => navigate(option.path)}
                    className="w-full bg-tatva-purple hover:bg-tatva-purple-light"
                  >
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
