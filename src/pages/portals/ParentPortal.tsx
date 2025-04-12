
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, FileText, MessageCircle, AlertCircle, Users, Clock } from 'lucide-react';

const ParentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data for charts and cards
  const attendanceData = [
    { name: 'Mon', value: 100 },
    { name: 'Tue', value: 100 },
    { name: 'Wed', value: 0 },
    { name: 'Thu', value: 100 },
    { name: 'Fri', value: 100 },
    { name: 'Mon', value: 100 },
    { name: 'Tue', value: 0 },
    { name: 'Wed', value: 100 },
    { name: 'Thu', value: 100 },
    { name: 'Fri', value: 100 },
  ];
  
  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: 'April 18, 2025', time: '3:30 PM', location: 'Room 201' },
    { id: 2, title: 'Science Fair', date: 'April 25, 2025', time: '10:00 AM', location: 'School Auditorium' },
    { id: 3, title: 'End of Term Assessments', date: 'May 10-14, 2025', time: 'All Day', location: 'Various Classrooms' },
  ];
  
  const recentGrades = [
    { id: 1, subject: 'Mathematics', assignment: 'Algebra Quiz', grade: 'A-', date: 'Apr 8, 2025' },
    { id: 2, subject: 'Science', assignment: 'Lab Report', grade: 'B+', date: 'Apr 5, 2025' },
    { id: 3, subject: 'English', assignment: 'Essay', grade: 'A', date: 'Apr 3, 2025' },
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
            Parent Portal
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Welcome back! Monitor your child's progress, communicate with teachers, and stay updated with school activities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Child</p>
                <p className="text-white text-xl font-bold">Emma Wilson</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <Calendar className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Attendance</p>
                <p className="text-white text-2xl font-bold">90%</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <FileText className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Overall Grade</p>
                <p className="text-white text-2xl font-bold">A-</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tatva-dark-lighter border-gray-700">
            <CardContent className="flex items-center p-6">
              <div className="bg-tatva-dark p-3 rounded-full mr-4">
                <MessageCircle className="h-8 w-8 text-tatva-purple" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Messages</p>
                <p className="text-white text-2xl font-bold">3 New</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-tatva-dark-lighter">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="text-tatva-purple" />
                    Recent Grades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentGrades.map(item => (
                    <div key={item.id} className="mb-4 pb-4 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">{item.subject}: {item.assignment}</h3>
                        <span className={`font-medium ${
                          item.grade.startsWith('A') ? 'text-emerald-500' : 
                          item.grade.startsWith('B') ? 'text-blue-500' : 
                          item.grade.startsWith('C') ? 'text-yellow-500' : 
                          'text-red-500'
                        }`}>{item.grade}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {item.date}
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full mt-2 text-tatva-purple hover:text-tatva-purple-light hover:bg-tatva-dark">
                    View All Grades
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-tatva-dark-lighter border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Calendar className="text-tatva-purple" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="mb-4 pb-4 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0">
                      <h3 className="font-medium text-white">{event.title}</h3>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{event.date}</span>
                        <span className="text-tatva-purple">{event.time}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {event.location}
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full mt-2 text-tatva-purple hover:text-tatva-purple-light hover:bg-tatva-dark">
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="text-tatva-purple" />
                  Attendance History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={attendanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }}
                        itemStyle={{ color: '#F9FAFB' }}
                        labelStyle={{ color: '#F9FAFB' }}
                        formatter={(value) => [`${value}%`, 'Attendance']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#8B5CF6" 
                        strokeWidth={2}
                        dot={{ fill: '#8B5CF6', r: 6 }}
                        activeDot={{ r: 8 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertCircle className="text-tatva-purple" />
                  Important Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-tatva-dark border border-amber-600/30">
                    <p className="text-white font-medium mb-1">Tuition Payment Due</p>
                    <p className="text-sm text-gray-400">The second semester tuition payment is due by April 30, 2025.</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-tatva-dark border border-blue-600/30">
                    <p className="text-white font-medium mb-1">Field Trip Permission</p>
                    <p className="text-sm text-gray-400">Please sign the permission slip for the Science Museum trip scheduled for May 5, 2025.</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-tatva-dark border border-green-600/30">
                    <p className="text-white font-medium mb-1">Summer Program Registration</p>
                    <p className="text-sm text-gray-400">Registration for summer enrichment programs is now open. Early bird pricing ends April 20.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="academics">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Academic Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample academic progress interface would go here */}
                  <p className="text-gray-300">This tab would contain detailed academic information including grades, assignments, and teacher feedback.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="attendance">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Attendance Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample attendance tracking interface would go here */}
                  <p className="text-gray-300">This tab would provide detailed attendance records and the ability to report absences.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="communication">
            <Card className="bg-tatva-dark-lighter border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Communication Center</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample messaging interface would go here */}
                  <p className="text-gray-300">This tab would provide tools to communicate with teachers and school administrators.</p>
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

export default ParentPortal;
