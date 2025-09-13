import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Service Agreement',
      content: `By accessing and using Brijtech's services, you agree to be bound by these Terms of Service:
      
      • These terms constitute a legally binding agreement between you and Brijtech
      • You must be at least 18 years old to use our services
      • You represent that you have the authority to enter into this agreement
      • These terms apply to all users, clients, and visitors of our services
      • We reserve the right to modify these terms at any time with notice`
    },
    {
      icon: Scale,
      title: 'Scope of Services',
      content: `Brijtech provides software development and technology consulting services including:
      
      • Custom software development and programming
      • Web and mobile application development
      • Cloud infrastructure and DevOps services
      • AI/ML solution development and implementation
      • UI/UX design and digital strategy consulting
      • Technical consulting and code review services
      • Ongoing maintenance and support services`
    },
    {
      icon: AlertTriangle,
      title: 'Client Responsibilities',
      content: `As our client, you agree to:
      
      • Provide accurate and complete project requirements
      • Supply necessary access, credentials, and resources
      • Respond to requests for feedback and approvals in a timely manner
      • Respect intellectual property rights of third parties
      • Pay all fees according to the agreed payment schedule
      • Maintain confidentiality of proprietary information
      • Use our services in compliance with applicable laws`
    },
    {
      icon: CheckCircle,
      title: 'Intellectual Property',
      content: `Intellectual property rights are handled as follows:
      
      • Client retains ownership of their pre-existing intellectual property
      • Brijtech retains ownership of our pre-existing tools and methodologies
      • Custom code developed specifically for client becomes client's property upon full payment
      • Open source components remain subject to their respective licenses
      • Brijtech may use general knowledge and experience gained from projects
      • Both parties respect and protect confidential information`
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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              These terms govern your use of Brijtech's services and establish 
              the rights and responsibilities of both parties.
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
                Payment Terms
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>Payment terms and conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Project fees are outlined in individual service agreements</li>
                  <li>Payment schedules are typically milestone-based</li>
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Work may be suspended for overdue payments</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                </ul>
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
                Limitation of Liability
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  To the maximum extent permitted by law, Brijtech's liability is limited to the amount 
                  paid for the specific service that gave rise to the claim. We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Third-party claims or actions</li>
                  <li>Force majeure events beyond our control</li>
                  <li>Client's failure to follow our recommendations</li>
                </ul>
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
                Termination
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>Either party may terminate services under the following conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With 30 days written notice for ongoing services</li>
                  <li>Immediately for material breach of terms</li>
                  <li>For non-payment of fees after notice period</li>
                  <li>For violation of intellectual property rights</li>
                </ul>
                <p>Upon termination, all outstanding fees become immediately due and payable.</p>
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
                  For questions about these Terms of Service, please contact us:
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

export default TermsOfService;