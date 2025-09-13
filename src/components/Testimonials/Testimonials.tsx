import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="card-shadow rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-8 right-8 w-24 h-24 text-gray-200 dark:text-gray-700" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                  {/* Avatar and Info */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 ring-4 ring-primary/20"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 brand-gradient-primary rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary font-medium">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].company}
                      </p>
                      <div className="flex justify-center lg:justify-start mt-2">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <blockquote className="text-lg md:text-xl leading-relaxed text-center lg:text-left mb-6 text-gray-700 dark:text-gray-300">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {testimonials[currentIndex].project}
                      </span>
                      <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        {testimonials[currentIndex].industry}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center -translate-y-1/2">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Client Logos */}
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
      </div>
    </section>
  );
};

export default Testimonials;