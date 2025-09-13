import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Brain, Cloud, Lightbulb, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: Rocket,
      title: 'Fast & Scalable Development',
      description: 'Agile methodologies and modern frameworks ensure rapid delivery without compromising on quality or scalability.',
      stat: '3x Faster',
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security protocols, encryption, and compliance standards protect your data and users.',
      stat: '99.9% Secure',
      color: 'secondary'
    },
    {
      icon: Brain,
      title: 'AI-Driven Innovation',
      description: 'Leverage cutting-edge artificial intelligence and machine learning to create intelligent solutions.',
      stat: '50+ AI Projects',
      color: 'accent'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native & Future-Ready',
      description: 'Built for the cloud with auto-scaling, high availability, and future-proof architecture.',
      stat: '100% Uptime',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: 'Proven Success Stories',
      description: 'Track record of delivering projects that drive measurable business growth and ROI.',
      stat: '500+ Projects',
      color: 'secondary'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-First Approach',
      description: 'Stay ahead of the curve with emerging technologies and forward-thinking solutions.',
      stat: '95% Innovation',
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary to-primary/80';
      case 'secondary':
        return 'from-secondary to-secondary/80';
      case 'accent':
        return 'from-accent to-accent/80';
      default:
        return 'from-primary to-secondary';
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose <span className="gradient-text">Brijtech</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven expertise to deliver 
            solutions that drive innovation and accelerate business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
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
                  className="card-shadow p-8 rounded-2xl h-full transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {advantage.stat}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  {/* Hover effect indicator */}
                  <motion.div
                    className="h-1 bg-primary rounded-full mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-primary px-12 py-4 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;