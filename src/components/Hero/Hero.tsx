import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, x: -50 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full px-4 py-2 text-sm font-medium hover-lift"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="w-4 h-4 animate-pulse-slow" />
              <span>Bridging Technology Gaps with AI</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AI-Powered Software{' '}
              <span className="brand-text-gradient animate-glow">Development</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional AI solutions for businesses seeking innovative software development. 
              We bridge technology gaps with cutting-edge AI-driven solutions.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                'AI-driven development solutions',
                'Professional tech-forward approach',
                'Innovative software architecture',
                'Business-focused AI integration'
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2 hover-lift"
                  initial={{ opacity: 0, x: -20 }}
                  animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent animate-pulse-slow" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="brand-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300 hover-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <span>Start Your AI Project</span>
                <ArrowRight className="w-5 h-5 animate-pulse-slow" />
              </motion.button>

              <motion.button
                className="brand-gradient-secondary text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300 hover-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Play className="w-5 h-5 animate-pulse-slow" />
                <span>View AI Solutions</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              className="card-shadow rounded-2xl p-8 bg-white dark:bg-gray-800 hover-lift"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="space-y-4">
                <motion.h3 
                  className="text-xl font-semibold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  AI-Powered Development Team
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Our professional developers leverage AI technologies to bridge technology gaps and deliver innovative software solutions.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: Users, number: '500+', label: 'AI Solutions Delivered' },
            { icon: Award, number: '98%', label: 'Client Satisfaction' },
            { icon: TrendingUp, number: '50+', label: 'Businesses Transformed' },
            { icon: CheckCircle, number: '24/7', label: 'AI Support Available' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center hover-lift"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2 animate-pulse-slow" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 dark:text-white"
                  initial={{ scale: 0 }}
                  animate={statsVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;