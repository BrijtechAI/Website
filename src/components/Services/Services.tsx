import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Brain, Palette, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Scalable enterprise solutions built with cutting-edge technologies and best practices for maximum performance and reliability.',
      features: ['Full-stack Development', 'Microservices Architecture', 'API Integration', 'Performance Optimization'],
      gradient: 'brand-gradient-primary'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Cross-platform applications using React, Next.js, React Native, and Flutter for seamless user experiences across all devices.',
      features: ['Responsive Design', 'Cross-platform Apps', 'PWA Development', 'App Store Publishing'],
      gradient: 'brand-gradient-secondary'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'AWS, Azure, and GCP implementations with Kubernetes, CI/CD pipelines, and infrastructure automation for scalable deployments.',
      features: ['Cloud Migration', 'Container Orchestration', 'Infrastructure as Code', 'Automated Deployment'],
      gradient: 'brand-gradient-primary'
    },
    {
      icon: Brain,
      title: 'AI/ML & Automation',
      description: 'Intelligent solutions including predictive analytics, chatbots, and automated workflows powered by machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
      gradient: 'brand-gradient-secondary'
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Strategy',
      description: 'Futuristic design thinking and product strategy focused on user-centric experiences that drive engagement and conversion.',
      features: ['User Research', 'Design Systems', 'Prototyping', 'Usability Testing'],
      gradient: 'brand-gradient-primary'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="brand-text-gradient animate-glow">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive software solutions designed to accelerate your digital transformation 
            and drive sustainable business growth
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="card-shadow p-8 rounded-2xl h-full hover-lift"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white animate-pulse-slow" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className="group/btn flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;