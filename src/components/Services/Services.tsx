import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Brain, Palette, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Scalable enterprise solutions built with cutting-edge technologies and best practices for maximum performance and reliability.',
      features: ['Full-stack Development', 'Microservices Architecture', 'API Integration', 'Performance Optimization'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Cross-platform applications using React, Next.js, React Native, and Flutter for seamless user experiences across all devices.',
      features: ['Responsive Design', 'Cross-platform Apps', 'PWA Development', 'App Store Publishing'],
      gradient: 'from-secondary to-accent'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'AWS, Azure, and GCP implementations with Kubernetes, CI/CD pipelines, and infrastructure automation for scalable deployments.',
      features: ['Cloud Migration', 'Container Orchestration', 'Infrastructure as Code', 'Automated Deployment'],
      gradient: 'from-accent to-primary'
    },
    {
      icon: Brain,
      title: 'AI/ML & Automation',
      description: 'Intelligent solutions including predictive analytics, chatbots, and automated workflows powered by machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
      gradient: 'from-primary to-accent'
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Strategy',
      description: 'Futuristic design thinking and product strategy focused on user-centric experiences that drive engagement and conversion.',
      features: ['User Research', 'Design Systems', 'Prototyping', 'Usability Testing'],
      gradient: 'from-secondary to-primary'
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive software solutions designed to accelerate your digital transformation 
            and drive sustainable business growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="glass p-8 rounded-3xl h-full hover:glow transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-semibold mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className="group/btn flex items-center text-primary hover:text-secondary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">Learn More</span>
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