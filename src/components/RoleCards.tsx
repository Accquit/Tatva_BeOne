
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, BookOpen, UserCheck, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

const RoleCard = ({ title, description, icon, color, onClick }: RoleCardProps) => (
  <motion.div
    whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
    transition={{ duration: 0.3 }}
  >
    <Card 
      className={`p-6 h-full ${color} rounded-xl cursor-pointer`}
      onClick={onClick}
    >
      <div className="mb-4 text-tatva-dark-lighter">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-tatva-dark-lighter">{title}</h3>
      <p className="text-tatva-dark-lighter mb-4">{description}</p>
      <Button variant="ghost" className="group flex items-center text-tatva-dark-lighter hover:text-tatva-purple p-0">
        Learn more 
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </Card>
  </motion.div>
);

const RoleCards = () => {
  const [activeRole, setActiveRole] = useState('');
  const { toast } = useToast();
  
  const roles = [
    {
      id: 'students',
      title: 'For Students',
      description: 'Access your classes, assignments, and connect with teachers all in one place.',
      icon: <Users size={32} />,
      color: 'bg-tatva-blue',
    },
    {
      id: 'teachers',
      title: 'For Teachers',
      description: 'Manage your classes, create assignments, and track student progress easily.',
      icon: <BookOpen size={32} />,
      color: 'bg-tatva-green',
    },
    {
      id: 'parents',
      title: 'For Parents',
      description: 'Stay updated with your child\'s progress and communicate with teachers directly.',
      icon: <UserCheck size={32} />,
      color: 'bg-tatva-lavender',
    },
    {
      id: 'admins',
      title: 'For Admins',
      description: 'Oversee the entire school system, manage users, and access comprehensive analytics.',
      icon: <Settings size={32} />,
      color: 'bg-white',
    },
  ];

  const handleRoleClick = (roleId: string) => {
    setActiveRole(roleId);
    // In a real app, this would navigate to role-specific pages
    console.log(`Selected role: ${roleId}`);
    
    toast({
      title: `${roleId.charAt(0).toUpperCase() + roleId.slice(1)} Portal`,
      description: `Accessing the ${roleId} portal. This feature will be available soon!`,
    });
  };

  // Animation variants for container and items
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section" id="roles">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
            Find Your Role
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tatva BeOne offers tailored experiences for everyone involved in the education process.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {roles.map((role) => (
            <motion.div key={role.id} variants={itemVariants}>
              <RoleCard
                title={role.title}
                description={role.description}
                icon={role.icon}
                color={role.color}
                onClick={() => handleRoleClick(role.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoleCards;
