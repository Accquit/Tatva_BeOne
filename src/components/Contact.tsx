
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app this would send the form data to a server
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };
  
  const faqs = [
    {
      question: "How do I create a new class?",
      answer: "To create a new class, log in to your teacher account, navigate to the 'Classes' section in your dashboard, and click on 'Create New Class'. Fill in the class details and click 'Save'."
    },
    {
      question: "Can parents see their child's assignments?",
      answer: "Yes, parents can view all assignments assigned to their child, along with submission status and grades. This information is available in the 'Assignments' section of the parent dashboard."
    },
    {
      question: "How do students submit assignments?",
      answer: "Students can submit assignments by going to the 'Assignments' tab, selecting the relevant assignment, uploading their work, and clicking 'Submit'. Multiple file formats are supported."
    },
    {
      question: "Can I use Tatva BeOne on my mobile device?",
      answer: "Yes, Tatva BeOne is fully responsive and works on all devices including smartphones, tablets, laptops, and desktop computers."
    },
    {
      question: "How can I reset my password?",
      answer: "You can reset your password by clicking on 'Forgot Password' on the login page. An email with password reset instructions will be sent to your registered email address."
    }
  ];

  return (
    <section className="section" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact & Support</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-tatva-dark-lighter p-8 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your question or issue..." 
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tatva-purple hover:bg-tatva-purple-light"
                  disabled={formSubmitted}
                >
                  {formSubmitted ? 'Message Sent!' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="mailto:support@tatvabeone.com" className="bg-tatva-dark-lighter p-4 rounded-xl flex flex-col items-center text-center hover:bg-tatva-purple/10 transition-colors">
                <Mail className="h-8 w-8 mb-2 text-tatva-purple" />
                <span className="text-sm">Email Us</span>
              </a>
              <a href="tel:+1234567890" className="bg-tatva-dark-lighter p-4 rounded-xl flex flex-col items-center text-center hover:bg-tatva-purple/10 transition-colors">
                <Phone className="h-8 w-8 mb-2 text-tatva-purple" />
                <span className="text-sm">Call Us</span>
              </a>
              <a href="https://wa.me/1234567890" className="bg-tatva-dark-lighter p-4 rounded-xl flex flex-col items-center text-center hover:bg-tatva-purple/10 transition-colors">
                <MessageSquare className="h-8 w-8 mb-2 text-tatva-purple" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div className="bg-tatva-dark-lighter p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">Still have questions?</p>
              <Button className="bg-tatva-purple hover:bg-tatva-purple-light">
                View Full FAQ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
