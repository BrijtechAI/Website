import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To innovate and empower businesses with next-generation technology solutions that drive sustainable growth and competitive advantage.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the global leader in futuristic software development, shaping the digital landscape of tomorrow through cutting-edge innovation.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Trust, speed, scalability, and innovation form the foundation of everything we do, ensuring exceptional results for our clients.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse collective of visionary developers, designers, and strategists united by passion for technological excellence.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            About <span className="gradient-text">Brijtech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking software development company specializing in creating 
            innovative, scalable solutions that transform businesses and accelerate digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
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
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 glass p-12 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Years of Excellence' },
              { number: '100+', label: 'Expert Developers' },
              { number: '25+', label: 'Countries Served' },
              { number: '99.9%', label: 'Uptime Guarantee' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;