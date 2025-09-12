import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Brain, Palette, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'custom-development',
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Scalable enterprise solutions built with cutting-edge technologies and best practices for maximum performance and reliability.',
      features: ['Full-stack Development', 'Microservices Architecture', 'API Integration', 'Performance Optimization'],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL'],
      gradient: 'from-primary to-secondary',
      price: 'Starting from $15,000',
      timeline: '8-16 weeks'
    },
    {
      id: 'web-mobile',
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Cross-platform applications using React, Next.js, React Native, and Flutter for seamless user experiences across all devices.',
      features: ['Responsive Design', 'Cross-platform Apps', 'PWA Development', 'App Store Publishing'],
      technologies: ['React Native', 'Flutter', 'Next.js', 'TypeScript'],
      gradient: 'from-secondary to-accent',
      price: 'Starting from $12,000',
      timeline: '6-12 weeks'
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'AWS, Azure, and GCP implementations with Kubernetes, CI/CD pipelines, and infrastructure automation for scalable deployments.',
      features: ['Cloud Migration', 'Container Orchestration', 'Infrastructure as Code', 'Automated Deployment'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      gradient: 'from-accent to-primary',
      price: 'Starting from $10,000',
      timeline: '4-8 weeks'
    },
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI/ML & Automation',
      description: 'Intelligent solutions including predictive analytics, chatbots, and automated workflows powered by machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python'],
      gradient: 'from-primary to-accent',
      price: 'Starting from $20,000',
      timeline: '10-20 weeks'
    },
    {
      id: 'ui-ux',
      icon: Palette,
      title: 'UI/UX Design & Strategy',
      description: 'Futuristic design thinking and product strategy focused on user-centric experiences that drive engagement and conversion.',
      features: ['User Research', 'Design Systems', 'Prototyping', 'Usability Testing'],
      technologies: ['Figma', 'Adobe XD', 'Framer', 'Principle'],
      gradient: 'from-secondary to-primary',
      price: 'Starting from $8,000',
      timeline: '4-8 weeks'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the system architecture and creates user-centric interfaces.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance throughout.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing maintenance and 24/7 technical support.'
    }
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive software solutions designed to accelerate your digital transformation 
              and drive sustainable business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
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
                    
                    <h3 className="text-2xl font-orbitron font-semibold mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground px-3 py-1 rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="flex justify-between items-center mb-6 p-4 bg-muted/20 rounded-2xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting Price</p>
                        <p className="font-semibold text-primary">{service.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-semibold text-secondary">{service.timeline}</p>
                      </div>
                    </div>
                    
                    <motion.button
                      className="group/btn w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery from concept to deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-orbitron font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                className="glass px-8 py-4 rounded-2xl font-semibold hover:glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;