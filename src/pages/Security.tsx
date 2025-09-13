import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from 'lucide-react';

const Security: React.FC = () => {
  const securityMeasures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Comprehensive data protection measures',
      features: [
        'End-to-end encryption for all data transmission',
        'AES-256 encryption for data at rest',
        'Regular security audits and penetration testing',
        'GDPR and CCPA compliance',
        'Secure data backup and recovery procedures'
      ]
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Strict access control and authentication',
      features: [
        'Multi-factor authentication (MFA) required',
        'Role-based access control (RBAC)',
        'Regular access reviews and updates',
        'Secure password policies',
        'Session management and timeout controls'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure and hosting',
      features: [
        'AWS/Azure enterprise-grade security',
        'Network segmentation and firewalls',
        'DDoS protection and monitoring',
        'Regular security patches and updates',
        'Intrusion detection and prevention systems'
      ]
    },
    {
      icon: Eye,
      title: 'Monitoring & Compliance',
      description: '24/7 security monitoring and compliance',
      features: [
        'Real-time security monitoring',
        'Automated threat detection',
        'Security incident response procedures',
        'Compliance with industry standards',
        'Regular security training for staff'
      ]
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', description: 'Security, availability, and confidentiality' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'GDPR Compliant', description: 'European data protection regulation' },
    { name: 'CCPA Compliant', description: 'California consumer privacy act' },
    { name: 'HIPAA Ready', description: 'Healthcare information protection' },
    { name: 'PCI DSS', description: 'Payment card industry standards' }
  ];

  const securityPractices = [
    {
      title: 'Secure Development',
      practices: [
        'Secure coding standards and practices',
        'Code review and static analysis',
        'Dependency vulnerability scanning',
        'Security testing in CI/CD pipeline'
      ]
    },
    {
      title: 'Data Handling',
      practices: [
        'Data minimization principles',
        'Secure data storage and transmission',
        'Regular data purging and retention policies',
        'Privacy by design implementation'
      ]
    },
    {
      title: 'Incident Response',
      practices: [
        '24/7 security operations center',
        'Incident response team and procedures',
        'Regular security drills and testing',
        'Transparent communication during incidents'
      ]
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
              Security & <span className="gradient-text">Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your security is our top priority. We implement enterprise-grade security measures 
              to protect your data and ensure compliance with industry standards.
            </p>
          </motion.div>

          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '256-bit', label: 'Encryption' },
              { number: '24/7', label: 'Monitoring' },
              { number: '0', label: 'Data Breaches' },
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

      {/* Security Measures */}
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
              Security <span className="gradient-text">Measures</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive security controls designed to protect your data and applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
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
                    <div className="w-16 h-16 brand-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-orbitron font-semibold mb-4">
                      {measure.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {measure.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {measure.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & <span className="gradient-text">Compliance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We maintain industry-leading certifications and comply with global security standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl text-center hover:glow transition-all duration-300"
              >
                <div className="w-16 h-16 brand-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-orbitron font-semibold mb-2">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
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
              Security <span className="gradient-text">Practices</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive approach to security covers every aspect of development and operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl"
              >
                <h3 className="text-xl font-orbitron font-semibold mb-6 text-primary">
                  {practice.title}
                </h3>
                <ul className="space-y-3">
                  {practice.practices.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl text-center"
          >
            <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              Security <span className="gradient-text">Concerns</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If you discover a security vulnerability or have security-related questions, 
              please contact our security team immediately.
            </p>
            <div className="space-y-4 mb-8">
              <p><strong>Security Email:</strong> security@brijtech.com</p>
              <p><strong>Emergency Hotline:</strong> +1 (555) 123-4567</p>
              <p><strong>Response Time:</strong> Within 24 hours</p>
            </div>
            <motion.button
              className="brand-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Report Security Issue
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;