import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, BarChart3, ArrowRight, Code2, Smartphone, Cloud, Palette } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Scalable enterprise solutions built with cutting-edge technologies and best practices for maximum performance and reliability.',
      features: ['Full-stack Development', 'Microservices Architecture', 'API Integration', 'Performance Optimization'],
      gradient: 'brand-gradient-primary',
      percentage: '98%'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Cross-platform applications using React, Next.js, React Native, and Flutter for seamless user experiences across all devices.',
      features: ['Responsive Design', 'Cross-platform Apps', 'PWA Development', 'App Store Publishing'],
      gradient: 'brand-gradient-secondary',
      percentage: '95%'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'AWS, Azure, and GCP implementations with Kubernetes, CI/CD pipelines, and infrastructure automation for scalable deployments.',
      features: ['Cloud Migration', 'Container Orchestration', 'Infrastructure as Code', 'Automated Deployment'],
      gradient: 'brand-gradient-primary',
      percentage: '96%'
    },
    {
      icon: Brain,
      title: 'AI/ML & Automation',
      description: 'Intelligent solutions including predictive analytics, chatbots, and automated workflows powered by machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
      gradient: 'brand-gradient-secondary',
      percentage: '94%'
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Strategy',
      description: 'Futuristic design thinking and product strategy focused on user-centric experiences that drive engagement and conversion.',
      features: ['User Research', 'Design Systems', 'Prototyping', 'Usability Testing'],
      gradient: 'brand-gradient-primary',
      percentage: '97%'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools that drive business growth.',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Data Mining'],
      gradient: 'brand-gradient-secondary',
      percentage: '92%'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={servicesRef as React.RefObject<HTMLDivElement>}
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
            Our <span className="gradient-text">Services</span>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="relative bg-white dark:bg-card border border-border rounded-2xl p-8 h-full hover-lift overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon Container */}
                  <motion.div 
                    className={`relative w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  
                  {/* Performance Percentage */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold brand-text-gradient">{service.percentage}</span>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Performance</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={servicesVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Learn More Button */}
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