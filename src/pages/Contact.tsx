
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
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
  
  const faqs = [
    {
      question: "How do I sign up for Tatva BeOne?",
      answer: "Signing up is easy! Simply click the 'Sign Up' button in the navigation bar, fill out the registration form, select your role, and you'll be ready to start using Tatva BeOne."
    },
    {
      question: "What roles are available on the platform?",
      answer: "Tatva BeOne supports four main roles: Students, Teachers, Parents, and Administrators. Each role has access to different features and dashboards tailored to their specific needs."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer mobile apps for both iOS and Android platforms. You can download them from the respective app stores to access your Tatva BeOne account on the go."
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
    },
    {
      question: "Can I use Tatva BeOne for my entire school?",
      answer: "Absolutely! Tatva BeOne is designed to scale from individual classrooms to entire school districts. Contact our sales team for information about enterprise pricing and implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-tatva-dark to-tatva-dark-lighter">
      <Navigation />
      <main className="pt-32 pb-20" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
              Get in Touch
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions or need support? We're here to help. Reach out to our team
              using any of the methods below.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-white"
              >
                Contact Us
              </motion.h2>
              
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-tatva-purple p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">support@tatvabeone.com</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-tatva-purple p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (800) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-tatva-purple p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Live Chat</h3>
                    <p className="text-gray-300">Available 24/7 for premium users</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-tatva-purple p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Office</h3>
                    <p className="text-gray-300">123 Education Lane, London</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-tatva-dark-lighter p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name" 
                    className="bg-tatva-dark border-gray-700 text-white"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email" 
                    className="bg-tatva-dark border-gray-700 text-white"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Enter subject" 
                    className="bg-tatva-dark border-gray-700 text-white"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Type your message here" 
                    className="bg-tatva-dark border-gray-700 text-white min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-tatva-purple hover:bg-tatva-purple-light btn-hover">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-20"
          >
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-tatva-dark-lighter rounded-xl overflow-hidden">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 text-white hover:bg-tatva-dark-lighter hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
