import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechVenture Inc.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'NeoTech transformed our entire digital infrastructure. Their AI-powered solutions increased our operational efficiency by 300%. The team\'s expertise in cloud technologies is unmatched.',
      project: 'Enterprise AI Platform',
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder & CEO',
      company: 'GreenEnergy Solutions',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Working with Brijtech was a game-changer. They built our IoT platform from scratch – futuristic, scalable, and secure. Our energy management system now serves over 10,000 customers seamlessly.',
      project: 'IoT Energy Management Platform',
      industry: 'Clean Energy'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'VP of Digital Innovation',
      company: 'HealthFirst Medical',
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'The healthcare platform Brijtech developed for us revolutionized patient care. Real-time monitoring and AI diagnostics have improved patient outcomes by 40%. Outstanding work!',
      project: 'Healthcare AI Diagnostics',
      industry: 'Healthcare'
    },
    {
      id: 4,
      name: 'David Kumar',
      position: 'Head of Technology',
      company: 'FinanceForward',
      avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Brijtech delivered a sophisticated fintech solution that handles millions of transactions daily. Their attention to security and scalability is exceptional. Highly recommended!',
      project: 'Fintech Trading Platform',
      industry: 'Financial Services'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Chief Digital Officer',
      company: 'RetailNext',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'The e-commerce platform with AR features that Brijtech created exceeded all expectations. Customer engagement increased by 250% and sales conversion improved dramatically.',
      project: 'AR E-commerce Platform',
      industry: 'Retail'
    }
  ];

  const nextTestimonial = () => {
    const next = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(next);
  };

  const prevTestimonial = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prev);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our clients about their transformative experiences and 
            the impact of our innovative solutions on their businesses
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                {/* Background Quote */}
                <Quote className="absolute -top-8 -left-8 w-32 h-32 text-primary/10 dark:text-primary/5 pointer-events-none" />
                
                {/* Main Card */}
                <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-center mb-8 text-gray-800 dark:text-gray-200 font-medium">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20 shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 brand-gradient-primary rounded-full flex items-center justify-center shadow-md">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {testimonials[currentIndex].company}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 brand-gradient-primary text-white rounded-full text-xs font-medium shadow-sm">
                          {testimonials[currentIndex].project}
                        </span>
                        <span className="px-3 py-1 brand-gradient-secondary text-white rounded-full text-xs font-medium shadow-sm">
                          {testimonials[currentIndex].industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Elegant Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary shadow-lg'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
                      layoutId="activeDot"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold mb-8 text-gray-600 dark:text-gray-400">
            Trusted by Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="text-2xl font-bold text-gray-400 dark:text-gray-500"
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {testimonial.company.replace(/\s+/g, '')}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
