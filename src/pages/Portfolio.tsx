import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Calendar, Users, TrendingUp } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const projects = [
    {
      id: 1,
      title: 'FinTech AI Dashboard',
      category: 'ai',
      industry: 'Financial Technology',
      description: 'Advanced AI-powered financial analytics platform with real-time market insights and predictive modeling capabilities.',
      challenge: 'Complex financial data visualization and real-time processing of market data from multiple sources.',
      solution: 'Implemented microservices architecture with ML pipelines, real-time data streaming, and interactive dashboards.',
      result: '300% increase in user engagement, 40% faster decision making, and $2M+ in cost savings for the client.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      gradient: 'brand-gradient-primary',
      duration: '12 months',
      teamSize: '8 developers',
      clientSatisfaction: '98%'
    },
    {
      id: 2,
      title: 'Healthcare IoT Platform',
      category: 'enterprise',
      industry: 'Healthcare',
      description: 'Comprehensive IoT platform connecting medical devices with cloud-based analytics for real-time patient monitoring.',
      challenge: 'Real-time data processing from multiple IoT devices while maintaining HIPAA compliance and security.',
      solution: 'Edge computing architecture with cloud integration, encrypted data transmission, and compliance frameworks.',
      result: '50% reduction in response time, improved patient outcomes, and seamless integration with existing systems.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'MongoDB', 'AWS IoT', 'React', 'Docker'],
      gradient: 'brand-gradient-secondary',
      duration: '10 months',
      teamSize: '6 developers',
      clientSatisfaction: '96%'
    },
    {
      id: 3,
      title: 'E-Commerce Mobile App',
      category: 'mobile',
      industry: 'Retail',
      description: 'Cross-platform mobile application with AR features for virtual product visualization and seamless shopping experience.',
      challenge: 'Complex AR integration, payment processing, and maintaining performance across different devices.',
      solution: 'React Native with ARKit/ARCore integration, secure payment gateways, and optimized performance.',
      result: '200% increase in mobile conversions, enhanced user experience, and 4.8-star app store rating.',
      image: 'https://images.pexels.com/photos/4968664/pexels-photo-4968664.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'ARKit', 'Stripe', 'Firebase', 'Redux'],
      gradient: 'brand-gradient-primary',
      duration: '8 months',
      teamSize: '5 developers',
      clientSatisfaction: '99%'
    },
    {
      id: 4,
      title: 'Smart City Management',
      category: 'web',
      industry: 'Government',
      description: 'Comprehensive platform for smart city operations including traffic management, energy optimization, and citizen services.',
      challenge: 'Integration of multiple city systems, real-time data processing, and scalable architecture for growing cities.',
      solution: 'Microservices architecture with real-time dashboards, IoT integration, and citizen-facing mobile applications.',
      result: '35% improvement in city operations efficiency, reduced energy consumption, and enhanced citizen satisfaction.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
      gradient: 'brand-gradient-secondary',
      duration: '14 months',
      teamSize: '12 developers',
      clientSatisfaction: '97%'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      category: 'ai',
      industry: 'Marketing',
      description: 'Advanced AI-powered content generation platform for marketing teams with natural language processing capabilities.',
      challenge: 'Natural language generation, content optimization, and maintaining brand voice consistency across different content types.',
      solution: 'GPT integration with custom training models, brand voice analysis, and content optimization algorithms.',
      result: '400% increase in content production speed, improved content quality, and significant cost reduction.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenAI API', 'React', 'PostgreSQL', 'Redis'],
      gradient: 'brand-gradient-primary',
      duration: '6 months',
      teamSize: '4 developers',
      clientSatisfaction: '95%'
    },
    {
      id: 6,
      title: 'Logistics Management System',
      category: 'enterprise',
      industry: 'Logistics',
      description: 'End-to-end logistics management platform with route optimization, real-time tracking, and automated scheduling.',
      challenge: 'Complex route optimization, real-time tracking across multiple vehicles, and integration with existing systems.',
      solution: 'AI-powered routing algorithms, GPS integration, predictive analytics, and comprehensive dashboard system.',
      result: '25% reduction in delivery costs, improved customer satisfaction, and streamlined operations.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Google Maps API', 'Apache Kafka'],
      gradient: 'brand-gradient-primary',
      duration: '9 months',
      teamSize: '7 developers',
      clientSatisfaction: '94%'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our collection of innovative projects that showcase our expertise 
              in delivering cutting-edge solutions across various industries
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '25+', label: 'Industries Served' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Countries Reached' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'brand-gradient-primary text-white'
                    : 'glass hover:glow'
                }`}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="glass rounded-3xl overflow-hidden hover:glow transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <motion.button
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </motion.button>
                        <motion.button
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Github className="w-6 h-6 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-orbitron font-semibold">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {project.industry}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-2xl">
                      <div className="text-center">
                        <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-semibold">{project.duration}</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-5 h-5 text-secondary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Team Size</p>
                        <p className="text-sm font-semibold">{project.teamSize}</p>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Satisfaction</p>
                        <p className="text-sm font-semibold">{project.clientSatisfaction}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">Solution:</h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-1">Result:</h4>
                        <p className="text-sm text-muted-foreground">{project.result}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      className="group/btn w-full brand-gradient-primary text-white px-6 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="case-studies" className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              Ready to Create Your <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our growing list of satisfied clients and transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="brand-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="glass px-8 py-4 rounded-2xl font-semibold hover:glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;