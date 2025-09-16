import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import CalendlyBooking from '../components/CalendlyBooking/CalendlyBooking';
import EmailService from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'custom-development',
    budget: '10k-25k',
    timeline: '1-3-months'
  });
  const [showCalendly, setShowCalendly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await EmailService.processProjectForm(formData);
      setSubmitStatus({
        type: result.success ? 'success' : 'error',
        message: result.message
      });

      if (result.success) {
        // Reset form on successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: 'custom-development',
          budget: '10k-25k',
          timeline: '1-3-months'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error processing your request. Please try again or contact us directly at brijtech2025@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
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
      value: 'brijtech2025@gmail.com',
      description: 'Send us an email anytime',
      link: 'mailto:brijtech2025@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: '24/7 support available',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      description: 'Silicon Valley headquarters',
      link: '#'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      value: '25+ Countries',
      description: 'Serving clients worldwide',
      link: '#'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
    { day: 'Sunday', hours: 'Emergency support only' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              Let's Build the <span className="gradient-text">Future</span> Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss your project and create something extraordinary that drives real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 rounded-3xl">
                <h2 className="text-3xl font-orbitron font-semibold mb-8">
                  Start Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
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
                        Email Address *
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
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

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      >
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k+">$100k+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      >
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, requirements, goals, and any specific challenges you're facing..."
                    />
                  </div>
                  
                  {/* Status Message */}
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-2xl flex items-start space-x-3 ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                          : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                      }`}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <p className={`text-sm ${
                        submitStatus.type === 'success'
                          ? 'text-green-800 dark:text-green-200'
                          : 'text-red-800 dark:text-red-200'
                      }`}>
                        {submitStatus.message}
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full brand-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ 
                      scale: isSubmitting ? 1 : 1.02,
                      boxShadow: isSubmitting ? "none" : "0 0 30px rgba(0, 212, 255, 0.6)"
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
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
                        <div className="w-12 h-12 brand-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-orbitron font-semibold text-lg mb-1">
                            {info.title}
                          </h4>
                          <a 
                            href={info.link}
                            className="text-primary font-medium mb-1 hover:text-secondary transition-colors block"
                          >
                            {info.value}
                          </a>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="glass p-8 rounded-3xl">
                <h4 className="font-orbitron font-semibold text-xl mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Office Hours
                </h4>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute consultation with our experts to discuss your project requirements and get personalized recommendations.
            </p>
            <motion.button
              onClick={() => setShowCalendly(true)}
              className="brand-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 mx-auto hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Free Consultation</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple web applications typically take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile methodology with regular client communication. Our process includes discovery, planning, design, development, testing, and deployment phases with continuous feedback loops."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support and maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We can integrate with your existing development team, provide consulting services, or work as an extended team to supplement your capabilities."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl"
              >
                <h3 className="font-orbitron font-semibold text-lg mb-3 text-primary">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Booking Modal */}
      <CalendlyBooking 
        isOpen={showCalendly} 
        onClose={() => setShowCalendly(false)} 
      />
    </div>
  );
};

export default Contact;