import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Users, Award, TrendingUp, Brain, Zap } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={heroRef as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, x: -50 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full px-4 py-2 text-sm font-medium hover-lift border border-primary/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Brain className="w-4 h-4 animate-pulse-slow" />
              <span>AI-Powered Software Development</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Bridging Technology Gaps with{' '}
              <span className="brand-text-gradient animate-glow">AI Solutions</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Innovative software development powered by artificial intelligence. 
              We transform businesses with cutting-edge AI-driven solutions.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                'Enterprise-grade security',
                'Agile development process',
                'Innovative software architecture',
                'Custom Software Development Solutions'
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 hover-lift p-3 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Zap className="w-5 h-5 text-accent animate-pulse-slow" />
                  <span className="text-foreground font-medium">{benefit}</span>
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
              {/* Start Your AI Project Button */}
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

              {/* View AI Solutions Button */}
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

          {/* Right Content - Futuristic Bridge Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-[1000px] h-full flex items-center justify-center">
              <motion.img
                src="/bridge img.png"
                alt="Futuristic AI Bridge - Bridging Technology Gaps with AI"
                className="w-full h-full max-w-4xl object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: Users, number: '500+', label: 'AI Solutions Delivered' },
            { icon: Award, number: '98%', label: 'Client Satisfaction' },
            { icon: TrendingUp, number: '50+', label: 'Businesses Transformed' },
            { icon: CheckCircle, number: '24/7', label: 'support & maintenance' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
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