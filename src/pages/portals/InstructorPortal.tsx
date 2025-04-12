
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, CheckCircle, Calendar, FileText } from 'lucide-react';

const InstructorPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data for charts and cards
  const classPerformanceData = [
    { name: 'Class A', average: 82 },
    { name: 'Class B', average: 75 },
    { name: 'Class C', average: 88 },
    { name: 'Class D', average: 70 },
  ];
  
  const upcomingClasses = [
    { id: 1, name: 'Advanced Mathematics', time: '10:00 AM', date: 'Today', room: 'Room 203', students: 24 },
    { id: 2, name: 'Calculus 101', time: '1:30 PM', date: 'Today', room: 'Room 154', students: 18 },
    { id: 3, name: 'Statistics', time: '9:15 AM', date: 'Tomorrow', room: 'Room 301', students: 22 },
  ];
  
  const pendingTasks = [
    { id: 1, title: 'Grade Math Assignments', dueDate: 'Apr 15, 2025', class: 'Advanced Mathematics', count: 22 },
    { id: 2, title: 'Prepare Quiz', dueDate: 'Apr 18, 2025', class: 'Calculus 101', count: null },
    { id: 3, title: 'Review Project Proposals', dueDate: 'Apr 20, 2025', class: 'Statistics', count: 15 },
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
            Instructor Portal
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Welcome back, Professor Johnson! Manage your classes, assignments, and track student progress.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Students</p>
                <p className="text-white text-2xl font-bold">86</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <BookOpen className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Classes</p>
                <p className="text-white text-2xl font-bold">4</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <FileText className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Pending Reviews</p>
                <p className="text-white text-2xl font-bold">28</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <CheckCircle className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Completion Rate</p>
                <p className="text-white text-2xl font-bold">92%</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-tatva-dark-lighter">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="classes">My Classes</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Calendar className="text-tatva-purple" />
                    Upcoming Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingClasses.map(course => (
                    <div key={course.id} className="mb-4 pb-4 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">{course.name}</h3>
                        <span className="text-tatva-purple">{course.time}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{course.date} | {course.room}</span>
                        <span>{course.students} students</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full mt-2 text-tatva-purple hover:text-tatva-purple-light hover:bg-tatva-dark">
                    View Schedule
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="text-tatva-purple" />
                    Pending Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {pendingTasks.map(task => (
                    <div key={task.id} className="mb-4 pb-4 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0">
                      <h3 className="font-medium text-white">{task.title}</h3>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{task.class}</span>
                        {task.count && <span className="text-amber-500">{task.count} items</span>}
                      </div>
                      <div className="text-sm text-gray-400">
                        Due: {task.dueDate}
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full mt-2 text-tatva-purple hover:text-tatva-purple-light hover:bg-tatva-dark">
                    View All Tasks
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="text-tatva-purple" />
                    Recent Student Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-tatva-dark border border-gray-700">
                      <p className="text-white font-medium">Jane Smith</p>
                      <p className="text-sm text-gray-400">Submitted Assignment #3</p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-tatva-dark border border-gray-700">
                      <p className="text-white font-medium">Michael Brown</p>
                      <p className="text-sm text-gray-400">Requested feedback on project</p>
                      <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-tatva-dark border border-gray-700">
                      <p className="text-white font-medium">Alex Johnson</p>
                      <p className="text-sm text-gray-400">Asked a question in forum</p>
                      <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Class Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={classPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }}
                        itemStyle={{ color: '#F9FAFB' }}
                        labelStyle={{ color: '#F9FAFB' }}
                      />
                      <Bar dataKey="average" fill="#8B5CF6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="classes">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">My Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample class management interface would go here */}
                  <p className="text-gray-300">This tab would contain all your active classes, student lists, and class management tools.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="assignments">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Assignment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample assignment management interface would go here */}
                  <p className="text-gray-300">This tab would allow you to create, edit, and grade assignments for your classes.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="students">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Student Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample student management interface would go here */}
                  <p className="text-gray-300">This tab would provide tools to manage, track, and communicate with your students.</p>
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

export default InstructorPortal;
