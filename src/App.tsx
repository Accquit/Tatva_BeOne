import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import StudentPortal from "./pages/portals/StudentPortal";
import InstructorPortal from "./pages/portals/InstructorPortal";
import AdminPortal from "./pages/portals/AdminPortal";
import ParentPortal from "./pages/portals/ParentPortal";

const App = () => {
  // Move the QueryClient instantiation inside the component to fix the React hooks error
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Dashboard and Portal Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portal/student" element={<StudentPortal />} />
            <Route path="/portal/instructor" element={<InstructorPortal />} />
            <Route path="/portal/admin" element={<AdminPortal />} />
            <Route path="/portal/parent" element={<ParentPortal />} />
            
            {/* 404 Page - Keep this as the last route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
