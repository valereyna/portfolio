
import { useState } from 'react';
import { motion } from "framer-motion";
import { MessageSquare, Mail, Linkedin, Github, CheckCircle, AlertTriangle } from 'lucide-react';
import { ContactInfo } from "@/types/portfolio";
import PageSection from './PageSection';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ContactPageProps {
  data: ContactInfo;
}

const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'success' | 'error' | ''>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }
    
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
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

  return (
    <PageSection title="Get In Touch" icon={MessageSquare} id="contact-page" extraPadding={true}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Connect With Me</h3>
          <p className="text-slate-300 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <Card className="bg-slate-700 border-slate-600 group hover:bg-slate-600 transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center">
              <a href={`mailto:${data.email}`} className="flex items-center w-full">
                <Mail className="h-10 w-10 text-sky-400 group-hover:text-sky-300" />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Email Me</h4>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300">{data.email}</p>
                </div>
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-700 border-slate-600 group hover:bg-slate-600 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                <Linkedin className="h-10 w-10 text-sky-400 group-hover:text-sky-300" />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300">Connect professionally</p>
                </div>
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-700 border-slate-600 group hover:bg-slate-600 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                <Github className="h-10 w-10 text-sky-400 group-hover:text-sky-300" />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300">Explore my code</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-white mb-6">Or Send Me a Message</h3>
          <Card className="bg-slate-700/50 border-slate-600 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 bg-slate-800 border-slate-600 text-slate-200 placeholder-slate-500 focus-visible:ring-sky-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                  <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 bg-slate-800 border-slate-600 text-slate-200 placeholder-slate-500 focus-visible:ring-sky-500"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-300">Message</Label>
                  <Textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 bg-slate-800 border-slate-600 text-slate-200 placeholder-slate-500 focus-visible:ring-sky-500"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Email
                </Button>
                
                {formStatus === 'success' && (
                  <Alert variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">
                    <CheckCircle size={16} className="mr-1.5"/>
                    <AlertDescription>Message prepared for sending! Please check your email client.</AlertDescription>
                  </Alert>
                )}
                
                {formStatus === 'error' && (
                  <Alert variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                    <AlertTriangle size={16} className="mr-1.5"/>
                    <AlertDescription>Please fill out all fields.</AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </PageSection>
  );
};

export default ContactPage;
