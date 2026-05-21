"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    alert("Thank you for your message! We will be in touch soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/30 rounded-full px-4 py-2 mb-6">
              <Mail className="h-4 w-4 text-navy" />
              <span className="text-sm font-medium text-navy">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Contact Us
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our platform? Want to volunteer or get involved? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Campaign Donations</option>
                    <option value="press">Press Inquiry</option>
                    <option value="policy">Policy Question</option>
                    <option value="event">Event Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-navy focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-navy hover:bg-navy-dark text-background font-bold">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Campaign Headquarters</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      1600 Pennsylvania Avenue NW<br />
                      Washington, D.C. 20500
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">(202) 555-WONG</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@wong2028.com</p>
                  </div>
                </div>
              </div>
              
              {/* Get Involved */}
              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Join thousands of Americans who are making a difference. Volunteer your time, spread the word, or contribute to the campaign.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-navy" />
                    <span>Knock on doors in your neighborhood</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-navy" />
                    <span>Make phone calls to voters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-navy" />
                    <span>Host a fundraising event</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-navy" />
                    <span>Share our message on social media</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
