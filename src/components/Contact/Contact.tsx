import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'custom-development'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@neotech.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: '24/7 support available'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      description: 'Silicon Valley headquarters'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Let's Build the <span className="gradient-text">Future</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and create something extraordinary
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-orbitron font-semibold mb-8">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    >
                      <option value="custom-development">Custom Development</option>
                      <option value="web-mobile">Web & Mobile Apps</option>
                      <option value="cloud-devops">Cloud & DevOps</option>
                      <option value="ai-ml">AI/ML Solutions</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="consulting">Technology Consulting</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, requirements, and goals..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass p-6 rounded-3xl hover:glow transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-orbitron font-semibold text-lg mb-1">
                          {info.title}
                        </h4>
                        <p className="text-primary font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="glass p-8 rounded-3xl">
              <h4 className="font-orbitron font-semibold text-xl mb-6">
                Quick Actions
              </h4>
              <div className="space-y-4">
                <motion.button
                  className="w-full flex items-center space-x-3 p-4 hover:bg-muted/20 rounded-2xl transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Schedule a Free Consultation</span>
                </motion.button>
                
                <motion.button
                  className="w-full flex items-center space-x-3 p-4 hover:bg-muted/20 rounded-2xl transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <span>Start Live Chat</span>
                </motion.button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass p-8 rounded-3xl">
              <h4 className="font-orbitron font-semibold text-xl mb-4">
                Our Location
              </h4>
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;