import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
      
      • Personal information (name, email address, phone number)
      • Company information (company name, job title, industry)
      • Technical information (IP address, browser type, device information)
      • Usage data (how you interact with our services)
      • Communication data (messages, feedback, support requests)`
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: `We use the information we collect to:
      
      • Provide, maintain, and improve our services
      • Process transactions and send related information
      • Send technical notices, updates, and support messages
      • Respond to your comments, questions, and customer service requests
      • Communicate with you about products, services, and events
      • Monitor and analyze trends, usage, and activities
      • Detect, investigate, and prevent fraudulent transactions`
    },
    {
      icon: Lock,
      title: 'Information Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information:
      
      • Encryption of data in transit and at rest
      • Regular security assessments and audits
      • Access controls and authentication mechanisms
      • Employee training on data protection
      • Incident response procedures
      • Compliance with industry security standards
      • Regular backup and disaster recovery procedures`
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties except:
      
      • With your explicit consent
      • To trusted service providers who assist in our operations
      • When required by law or to protect our rights
      • In connection with a merger, acquisition, or sale of assets
      • To prevent fraud or security threats
      • For legitimate business purposes with appropriate safeguards`
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <div className="glass p-4 rounded-2xl inline-block">
              <p className="text-sm text-muted-foreground">
                Last updated: January 15, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 brand-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-orbitron font-semibold">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Sections */}
          <div className="mt-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-orbitron font-semibold mb-6">
                Your Rights and Choices
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access: Request access to your personal information</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of your personal information</li>
                  <li>Portability: Request transfer of your information</li>
                  <li>Objection: Object to processing of your information</li>
                  <li>Restriction: Request restriction of processing</li>
                </ul>
                <p>To exercise these rights, please contact us at brijtech2025@gmail.com.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-orbitron font-semibold mb-6">
                Cookies and Tracking
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p>You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our services.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-orbitron font-semibold mb-6">
                Contact Information
              </h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> brijtech2025@gmail.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> San Francisco, CA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;