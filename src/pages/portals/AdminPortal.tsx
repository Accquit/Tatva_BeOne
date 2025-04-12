
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { Users, School, BookOpen, FileText, Settings, UserPlus, Shield } from 'lucide-react';

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data for charts and statistics
  const userDistributionData = [
    { name: 'Students', value: 450 },
    { name: 'Teachers', value: 35 },
    { name: 'Parents', value: 280 },
    { name: 'Admins', value: 8 }
  ];
  
  const COLORS = ['#8B5CF6', '#EC4899', '#6366F1', '#F59E0B'];
  
  const recentActivities = [
    { id: 1, user: 'Alex Wilson', role: 'Teacher', action: 'Added a new course', time: '35 min ago' },
    { id: 2, user: 'Sarah Johnson', role: 'Admin', action: 'Updated system settings', time: '2 hours ago' },
    { id: 3, user: 'Michael Brown', role: 'Student', action: 'Submitted enrollment request', time: '3 hours ago' },
    { id: 4, user: 'Emily Davis', role: 'Parent', action: 'Updated contact information', time: '5 hours ago' }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-tatva-dark to-tatva-dark-lighter">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tatva-purple to-tatva-purple-light text-transparent bg-clip-text">
            Admin Portal
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Welcome back, Admin! Manage users, monitor system performance, and configure settings.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-white text-2xl font-bold">773</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <School className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Courses</p>
                <p className="text-white text-2xl font-bold">42</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <BookOpen className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Enrollments</p>
                <p className="text-white text-2xl font-bold">1,254</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <FileText className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">System Uptime</p>
                <p className="text-white text-2xl font-bold">99.8%</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-tatva-dark-lighter">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="text-tatva-purple" />
                    User Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={userDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {userDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="text-tatva-purple" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map(activity => (
                      <div key={activity.id} className="p-3 rounded-lg bg-tatva-dark border border-gray-700">
                        <div className="flex justify-between">
                          <p className="text-white font-medium">{activity.user}</p>
                          <span className="text-tatva-purple text-sm">{activity.role}</span>
                        </div>
                        <p className="text-sm text-gray-400">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    ))}
                    <Button variant="ghost" className="w-full mt-2 text-tatva-purple hover:text-tatva-purple-light hover:bg-tatva-dark">
                      View All Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="text-tatva-purple" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="bg-tatva-purple hover:bg-tatva-purple-light h-auto py-6 flex flex-col items-center gap-2">
                    <UserPlus className="h-6 w-6" />
                    <span>Add New User</span>
                  </Button>
                  <Button className="bg-tatva-purple hover:bg-tatva-purple-light h-auto py-6 flex flex-col items-center gap-2">
                    <School className="h-6 w-6" />
                    <span>Create Course</span>
                  </Button>
                  <Button className="bg-tatva-purple hover:bg-tatva-purple-light h-auto py-6 flex flex-col items-center gap-2">
                    <FileText className="h-6 w-6" />
                    <span>System Report</span>
                  </Button>
                  <Button className="bg-tatva-purple hover:bg-tatva-purple-light h-auto py-6 flex flex-col items-center gap-2">
                    <Settings className="h-6 w-6" />
                    <span>Configuration</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample user management interface would go here */}
                  <p className="text-gray-300">This tab would contain user management tools including user creation, role assignment, and account management.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Course Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample course management interface would go here */}
                  <p className="text-gray-300">This tab would provide tools for managing courses, class schedules, and curriculum.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample settings interface would go here */}
                  <p className="text-gray-300">This tab would contain system configuration options, security settings, and global preferences.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPortal;
