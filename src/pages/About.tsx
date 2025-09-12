import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Globe, Lightbulb, TrendingUp } from 'lucide-react';

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

  const achievements = [
    { icon: Award, number: '500+', label: 'Projects Delivered', color: 'primary' },
    { icon: Globe, number: '25+', label: 'Countries Served', color: 'secondary' },
    { icon: Users, number: '100+', label: 'Expert Developers', color: 'accent' },
    { icon: TrendingUp, number: '98%', label: 'Client Satisfaction', color: 'primary' }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Visionary leader with 15+ years in software development and business strategy.'
    },
    {
      name: 'Sarah Chen',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Technology expert specializing in AI, cloud architecture, and scalable systems.'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Head of Design',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Creative director with expertise in UX/UI design and digital product strategy.'
    },
    {
      name: 'Emily Davis',
      position: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Engineering leader focused on building high-performance, scalable applications.'
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
              About <span className="gradient-text">Brijtech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking software development company specializing in creating 
              innovative, scalable solutions that transform businesses and accelerate digital transformation
            </p>
          </motion.div>

          {/* Company Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl mb-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="space-y-4"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br from-${achievement.color} to-${achievement.color}/80 rounded-2xl flex items-center justify-center mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground">{achievement.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts brings together decades of experience in 
              software development, design, and business strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="glass p-6 rounded-3xl text-center hover:glow transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-orbitron font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Brijtech emerged from a simple yet powerful vision: 
                  to bridge the gap between ambitious ideas and cutting-edge technology solutions. 
                  Our founders, seasoned veterans in software development and business strategy, 
                  recognized the need for a development partner that could truly understand 
                  both technical complexity and business objectives.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a 
                  global technology partner, serving clients across 25+ countries. We've 
                  delivered over 500 projects, ranging from innovative startups to 
                  enterprise-level transformations.
                </p>
                <p>
                  Today, Brijtech stands at the forefront of technological innovation, 
                  specializing in AI/ML solutions, cloud-native architectures, and 
                  next-generation web and mobile applications. Our commitment to excellence 
                  and innovation continues to drive us forward as we shape the future of software development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Journey"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-orbitron font-semibold mb-4">
                  Innovation at Our Core
                </h3>
                <p className="text-muted-foreground">
                  From our headquarters in San Francisco to our global team, 
                  we're united by a shared passion for creating technology 
                  that makes a difference.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;