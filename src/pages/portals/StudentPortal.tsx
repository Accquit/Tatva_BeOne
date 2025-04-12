
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Book, Calendar, FileText, Bell, Clock } from 'lucide-react';

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data for charts and cards
  const performanceData = [
    { name: 'Jan', score: 65 },
    { name: 'Feb', score: 70 },
    { name: 'Mar', score: 75 },
    { name: 'Apr', score: 68 },
    { name: 'May', score: 82 },
    { name: 'Jun', score: 85 },
  ];
  
  const upcomingClasses = [
    { id: 1, name: 'Hatha Yoga', time: '10:00 AM', date: 'Tomorrow', instructor: 'Dr. Johnson' },
    { id: 2, name: 'Vinyasa Yoga', time: '1:30 PM', date: 'Tomorrow', instructor: 'Prof. Smith' },
    { id: 3, name: 'Yin Yoga', time: '9:15 AM', date: 'Wed, Apr 14', instructor: 'Ms. Davis' },
  ];
  
  const assignments = [
    { id: 1, title: 'Breathing Exercises', course: 'Hatha Yoga', dueDate: 'Apr 15, 2025', status: 'Pending' },
    { id: 2, title: 'Stretching', course: 'Vinyasa Yoga', dueDate: 'Apr 18, 2025', status: 'Not Started' },
    { id: 3, title: 'Flexibility Exercise', course: 'Yin Yoga', dueDate: 'Apr 25, 2025', status: 'In Progress' },
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
            Student Portal
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Welcome back, User! Track your classes, assignments, and academic progress.
          </p>
        </motion.div>
        
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-tatva-dark-lighter">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="classes">My Classes</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="grades">Grades</TabsTrigger>
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
                        <span>{course.date}</span>
                        <span>{course.instructor}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full mt-2 text-tatva-purple hover:text-tatva-purple-light hover:bg-tatva-dark">
                    View All Classes
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="text-tatva-purple" />
                    Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {assignments.map(assignment => (
                    <div key={assignment.id} className="mb-4 pb-4 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0">
                      <h3 className="font-medium text-white">{assignment.title}</h3>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{assignment.course}</span>
                        <span className={`${assignment.status === 'Pending' ? 'text-amber-500' : 
                                         assignment.status === 'Not Started' ? 'text-red-500' : 'text-green-500'}`}>
                          {assignment.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Due: {assignment.dueDate}
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full mt-2 text-tatva-purple hover:text-tatva-purple-light hover:bg-tatva-dark">
                    View All Assignments
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Bell className="text-tatva-purple" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-tatva-dark border border-gray-700">
                      <p className="text-white font-medium">Assignment Graded</p>
                      <p className="text-sm text-gray-400">Your Breathing Report has been graded. You received an A-.</p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-tatva-dark border border-gray-700">
                      <p className="text-white font-medium">Class Reminder</p>
                      <p className="text-sm text-gray-400">Don't forget your Yin Yoga class tomorrow at 10:00 AM.</p>
                      <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-tatva-dark border border-gray-700">
                      <p className="text-white font-medium">New Course Material</p>
                      <p className="text-sm text-gray-400">New study materials have been added to Hatha Yoga Course.</p>
                      <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="text-tatva-purple" />
                  Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }}
                        itemStyle={{ color: '#F9FAFB' }}
                        labelStyle={{ color: '#F9FAFB' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#8B5CF6" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="classes">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Book className="text-tatva-purple" />
                  My Enrolled Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-tatva-dark p-4 rounded-lg border border-gray-700"
                    >
                      <h3 className="text-white font-medium">
                        {['Hatha Yoga', 'Yin Yoga', 'Vinyasa Flow', 'Kundalini Yoga', 'Restorative Yoga', 'Ashtanga Yoga'][index]}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {['Dr. Johnson', 'Prof. Smith', 'Ms. Davis', 'Dr. Wilson', 'Mr. Brown', 'Ms. Taylor'][index]}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xs text-gray-500">
                          {['Mon & Wed', 'Tue & Thu', 'Wed & Fri', 'Mon & Thu', 'Tue & Fri', 'Wed & Thu'][index]}
                        </span>
                        <Button size="sm" variant="ghost" className="text-tatva-purple">
                          Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="assignments">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Assignments & Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample assignment cards would go here */}
                  <p className="text-gray-300">This tab would contain all assignments, submission statuses, and deadlines.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="grades">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Grade Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample grade tables would go here */}
                  <p className="text-gray-300">This tab would display detailed grade information for all courses.</p>
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

export default StudentPortal;
