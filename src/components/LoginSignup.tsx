
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { LogIn, UserPlus, Lock, Mail, User } from 'lucide-react';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const { toast } = useToast();
  
  const handleLogin = (e) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to Tatva BeOne!",
    });
  };
  
  const handleSignup = (e) => {
    e.preventDefault();
    toast({
      title: "Account Created",
      description: "Welcome to Tatva BeOne! Please check your email to verify your account.",
    });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="section bg-gradient-to-b from-tatva-dark to-tatva-dark-lighter relative overflow-hidden" id="auth">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div 
          className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-tatva-purple/10 blur-3xl" 
          style={{ animation: 'float 15s infinite alternate ease-in-out' }}
        ></div>
        <div 
          className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] rounded-full bg-tatva-purple-light/10 blur-3xl" 
          style={{ animation: 'float 12s infinite alternate-reverse ease-in-out' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
              Join Our Community
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="text-lg py-3 flex items-center justify-center gap-2">
                  <LogIn size={18} />
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="text-lg py-3 flex items-center justify-center gap-2">
                  <UserPlus size={18} />
                  Sign Up
                </TabsTrigger>
              </TabsList>
              
              <Card className="border-none bg-tatva-dark-lighter shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-white">
                    {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <TabsContent value="login" className="mt-0">
                    <form className="space-y-6" onSubmit={handleLogin}>
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <Label htmlFor="login-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="login-email" 
                            type="email" 
                            placeholder="your@email.com" 
                            className="pl-10 bg-tatva-dark border-gray-700"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <div className="flex items-center justify-between">
                          <Label htmlFor="login-password">Password</Label>
                          <a href="#" className="text-sm text-tatva-purple hover:text-tatva-purple-light">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="login-password" 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10 bg-tatva-dark border-gray-700"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <Label htmlFor="login-role">Select Role</Label>
                        <Select>
                          <SelectTrigger id="login-role" className="bg-tatva-dark border-gray-700">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent className="bg-tatva-dark-lighter border-gray-700">
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <Button 
                          type="submit" 
                          className="w-full bg-tatva-purple hover:bg-tatva-purple-light transition-transform hover:-translate-y-1"
                        >
                          <LogIn className="mr-2 h-4 w-4" />
                          Login
                        </Button>
                      </motion.div>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="signup" className="mt-0">
                    <form className="space-y-4" onSubmit={handleSignup}>
                      <motion.div 
                        className="grid grid-cols-2 gap-4"
                        variants={itemVariants}
                      >
                        <div className="space-y-2">
                          <Label htmlFor="signup-first-name">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              id="signup-first-name" 
                              placeholder="John" 
                              className="pl-10 bg-tatva-dark border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-last-name">Last Name</Label>
                          <Input 
                            id="signup-last-name" 
                            placeholder="Doe" 
                            className="bg-tatva-dark border-gray-700"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <Label htmlFor="signup-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="signup-email" 
                            type="email" 
                            placeholder="your@email.com" 
                            className="pl-10 bg-tatva-dark border-gray-700"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="signup-password" 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10 bg-tatva-dark border-gray-700"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <Label htmlFor="signup-role">Select Role</Label>
                        <Select>
                          <SelectTrigger id="signup-role" className="bg-tatva-dark border-gray-700">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent className="bg-tatva-dark-lighter border-gray-700">
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <Button 
                          type="submit" 
                          className="w-full bg-tatva-purple hover:bg-tatva-purple-light transition-transform hover:-translate-y-1"
                        >
                          <UserPlus className="mr-2 h-4 w-4" />
                          Sign Up
                        </Button>
                      </motion.div>
                    </form>
                  </TabsContent>
                </CardContent>
              </Card>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginSignup;
