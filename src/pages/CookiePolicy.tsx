import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: ['Authentication tokens', 'Session management', 'Security features', 'Load balancing'],
      canDisable: false
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      examples: ['Google Analytics', 'Page views', 'User behavior', 'Performance metrics'],
      canDisable: true
    },
    {
      icon: Cookie,
      title: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: ['Language preferences', 'Theme selection', 'Form data', 'User preferences'],
      canDisable: true
    },
    {
      icon: Shield,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      examples: ['Ad targeting', 'Conversion tracking', 'Social media integration', 'Remarketing'],
      canDisable: true
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
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Learn about how we use cookies and similar technologies to improve 
              your experience on our website.
            </p>
            <div className="glass p-4 rounded-2xl inline-block">
              <p className="text-sm text-muted-foreground">
                Last updated: January 15, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl mb-12"
          >
            <h2 className="text-3xl font-orbitron font-semibold mb-6">
              What Are Cookies?
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and enabling certain functionality.
              </p>
              <p>
                We use both first-party cookies (set by our website) and third-party cookies 
                (set by external services we use). Cookies can be session cookies (deleted when 
                you close your browser) or persistent cookies (remain on your device for a set period).
              </p>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-orbitron font-semibold mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-muted-foreground">
                We categorize cookies based on their purpose and functionality
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-3xl"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 brand-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-orbitron font-semibold">
                          {type.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Can be disabled:</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        type.canDisable 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {type.canDisable ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl mt-12"
          >
            <h2 className="text-2xl font-orbitron font-semibold mb-6">
              Managing Your Cookie Preferences
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>You have several options for managing cookies:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Browser Settings</h3>
                  <p>Most browsers allow you to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>View and delete cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear all cookies when you close the browser</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cookie Consent Banner</h3>
                  <p>
                    When you first visit our website, you'll see a cookie consent banner 
                    where you can choose which types of cookies to accept or reject.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Opt-out Links</h3>
                  <p>For specific services, you can opt out directly:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
                    <li>Google Ads: <a href="https://adssettings.google.com" className="text-primary hover:underline">Google Ads Settings</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl mt-8"
          >
            <h2 className="text-2xl font-orbitron font-semibold mb-6">
              Third-Party Services
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>We use the following third-party services that may set cookies:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Google Analytics</h3>
                    <p className="text-sm">Tracks website usage and performance</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Google Fonts</h3>
                    <p className="text-sm">Provides web fonts for better typography</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Cloudflare</h3>
                    <p className="text-sm">Content delivery and security services</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Social Media</h3>
                    <p className="text-sm">Social sharing and integration features</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl mt-8"
          >
            <h2 className="text-2xl font-orbitron font-semibold mb-6">
              Questions About Cookies?
            </h2>
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> brijtech2025@gmail.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> San Francisco, CA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;