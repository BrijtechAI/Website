import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Globe, Award } from 'lucide-react';

const Careers: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'Join our engineering team to build cutting-edge web applications using React, Node.js, and cloud technologies.',
      requirements: ['5+ years of full-stack development experience', 'Proficiency in React, Node.js, and TypeScript', 'Experience with cloud platforms (AWS/Azure)', 'Strong problem-solving skills'],
      benefits: ['Competitive salary and equity', 'Health, dental, and vision insurance', 'Flexible work arrangements', 'Professional development budget']
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140k - $200k',
      description: 'Lead the development of AI-powered solutions and machine learning models that drive innovation across our client projects.',
      requirements: ['PhD or Masters in Computer Science/AI', 'Experience with TensorFlow, PyTorch', 'Strong background in machine learning', 'Published research papers preferred'],
      benefits: ['Top-tier compensation', 'Research publication opportunities', 'Conference attendance budget', 'Flexible schedule']
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Create beautiful, intuitive user experiences for web and mobile applications that delight users and drive business results.',
      requirements: ['3+ years of UI/UX design experience', 'Proficiency in Figma, Adobe Creative Suite', 'Strong portfolio of web/mobile designs', 'Understanding of design systems'],
      benefits: ['Creative freedom', 'Latest design tools and software', 'Design conference tickets', 'Collaborative work environment']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $160k',
      description: 'Build and maintain scalable infrastructure, CI/CD pipelines, and deployment systems that power our applications.',
      requirements: ['4+ years of DevOps experience', 'Expertise in Docker, Kubernetes', 'Experience with AWS/Azure/GCP', 'Infrastructure as Code (Terraform)'],
      benefits: ['Remote-first culture', 'Home office setup budget', 'Certification reimbursement', 'Flexible hours']
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Drive product strategy and roadmap for our client solutions, working closely with engineering and design teams.',
      requirements: ['5+ years of product management experience', 'Technical background preferred', 'Experience with agile methodologies', 'Strong analytical skills'],
      benefits: ['Product ownership', 'Cross-functional collaboration', 'Growth opportunities', 'Stock options']
    },
    {
      id: 6,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80k - $120k + Commission',
      description: 'Identify and develop new business opportunities, build relationships with potential clients, and drive revenue growth.',
      requirements: ['3+ years of B2B sales experience', 'Technology industry background', 'Strong communication skills', 'Track record of meeting sales targets'],
      benefits: ['Uncapped commission', 'Travel opportunities', 'Sales training programs', 'Career advancement']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-life balance'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented professionals from around the world'
    },
    {
      icon: Award,
      title: 'Growth & Learning',
      description: 'Professional development budget and conference attendance'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and encourage creative problem-solving'
    },
    {
      title: 'Collaborative Spirit',
      description: 'We believe in the power of teamwork and open communication'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage skill development'
    },
    {
      title: 'Work-Life Balance',
      description: 'We support flexible work arrangements and personal well-being'
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
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Be part of a dynamic team that's shaping the future of software development. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Team Members' },
              { number: '25+', label: 'Countries' },
              { number: '4.9/5', label: 'Employee Rating' },
              { number: '95%', label: 'Retention Rate' },
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

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Why Work <span className="gradient-text">With Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer more than just a job - we provide a platform for growth, 
              innovation, and making a meaningful impact in the tech industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                    className="glass p-6 rounded-3xl text-center hover:glow transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Company Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h4 className="text-lg font-orbitron font-semibold mb-3 text-primary">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
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
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our current job openings and find the perfect role to advance your career
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="glass p-8 rounded-3xl hover:glow transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-orbitron font-semibold mb-2">
                        {job.title}
                      </h3>
                      <span className="text-sm bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 text-accent" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{job.department}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
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
              Don't See Your <span className="gradient-text">Perfect Role</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Resume
              </motion.button>
              <motion.button
                className="glass px-8 py-4 rounded-2xl font-semibold hover:glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;