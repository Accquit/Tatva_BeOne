
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Moon, Clock, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const ClassCard = ({ title, instructor, schedule, students, type, image, level }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden bg-tatva-dark-lighter border-none h-full">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-tatva-purple text-white px-3 py-1 rounded-full text-sm font-medium">
            {type}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <div className="flex items-center text-gray-300 mb-3">
            <Users size={16} className="mr-2" />
            <span className="text-sm">{instructor}</span>
          </div>
          <div className="flex items-center text-gray-300 mb-3">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{schedule}</span>
          </div>
          <div className="flex items-center text-gray-300 mb-4">
            <Clock size={16} className="mr-2" />
            <span className="text-sm">{level} level</span>
          </div>
          <Button className="w-full bg-tatva-purple hover:bg-tatva-purple-light btn-hover">
            Enroll Now
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Classes = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const yogaClasses = [
    {
      id: 1,
      title: "Hatha Yoga",
      instructor: "Dr. Sarah Johnson",
      schedule: "Mon, Wed, Fri - 10:00 AM",
      students: 24,
      type: "Live",
      level: "Beginner",
      category: "traditional",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Vinyasa Flow",
      instructor: "Maya Chen",
      schedule: "Tue, Thu - 2:00 PM",
      students: 18,
      type: "Hybrid",
      level: "Intermediate",
      category: "flow",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Yin Yoga",
      instructor: "Emily Williams",
      schedule: "Mon, Wed - 1:00 PM",
      students: 32,
      type: "Live",
      level: "All Levels",
      category: "restorative",
      image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Kundalini Yoga",
      instructor: "Grace Martinez",
      schedule: "Fri - 3:00 PM",
      students: 15,
      type: "Workshop",
      level: "Advanced",
      category: "spiritual",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Ashtanga Yoga",
      instructor: "Robert Lee",
      schedule: "Tue, Thu - 11:00 AM",
      students: 28,
      type: "Live",
      level: "Advanced",
      category: "traditional",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1526&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Restorative Yoga",
      instructor: "Sofia Rodriguez",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      students: 20,
      type: "Live",
      level: "Beginner",
      category: "restorative",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1470&auto=format&fit=crop"
    }
  ];
  
  const filteredClasses = activeTab === "all" 
    ? yogaClasses 
    : yogaClasses.filter(c => c.category === activeTab);
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
              Yoga Classes
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our wide range of yoga classes taught by expert instructors. Join live sessions, 
              participate in workshops, and deepen your practice.
            </p>
          </motion.div>
          
          <div className="mb-12">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-tatva-dark-lighter p-1 rounded-lg mb-8 flex justify-center">
                <TabsTrigger value="all" className="px-4 py-2">All Classes</TabsTrigger>
                <TabsTrigger value="traditional" className="px-4 py-2">Traditional</TabsTrigger>
                <TabsTrigger value="flow" className="px-4 py-2">Flow</TabsTrigger>
                <TabsTrigger value="restorative" className="px-4 py-2">Restorative</TabsTrigger>
                <TabsTrigger value="spiritual" className="px-4 py-2">Spiritual</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab}>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredClasses.map((classItem) => (
                    <motion.div key={classItem.id} variants={itemVariants}>
                      <ClassCard {...classItem} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          <motion.div 
            className="bg-tatva-dark-lighter p-8 rounded-2xl shadow-lg max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Can't find the yoga class you're looking for?</h2>
            <p className="text-gray-300 mb-6">
              We're constantly adding new yoga classes to our platform. 
              Request a specific style or level and our team will get back to you.
            </p>
            <Button className="bg-tatva-purple hover:bg-tatva-purple-light text-white px-8 py-6 text-lg btn-hover">
              Request a Class
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Classes;
