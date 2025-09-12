import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.',
      content: 'Artificial Intelligence is transforming every aspect of software development...',
      author: 'Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Machine Learning', 'Development']
    },
    {
      id: 2,
      title: 'Cloud-Native Architecture: Best Practices for 2025',
      excerpt: 'A comprehensive guide to building scalable, resilient applications using cloud-native principles.',
      content: 'Cloud-native architecture has become the standard for modern applications...',
      author: 'Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Cloud',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Cloud', 'Architecture', 'DevOps']
    },
    {
      id: 3,
      title: 'React 19: What\'s New and How It Changes Everything',
      excerpt: 'Deep dive into the latest React features and how they improve developer experience and application performance.',
      content: 'React 19 introduces several groundbreaking features that will change how we build web applications...',
      author: 'Emily Davis',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Frontend', 'JavaScript']
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of Remote Work',
      excerpt: 'Essential security practices and tools for protecting your applications and data in a distributed workforce.',
      content: 'The shift to remote work has fundamentally changed the cybersecurity landscape...',
      author: 'Alex Johnson',
      date: '2025-01-08',
      readTime: '15 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Security', 'Remote Work', 'Best Practices']
    },
    {
      id: 5,
      title: 'Building Scalable APIs with GraphQL and Node.js',
      excerpt: 'Learn how to create efficient, flexible APIs that can grow with your application needs.',
      content: 'GraphQL has emerged as a powerful alternative to REST APIs...',
      author: 'David Kumar',
      date: '2025-01-05',
      readTime: '11 min read',
      category: 'Backend',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['GraphQL', 'Node.js', 'API']
    },
    {
      id: 6,
      title: 'The Rise of Low-Code/No-Code Platforms',
      excerpt: 'Examining the impact of low-code solutions on traditional software development and when to use them.',
      content: 'Low-code and no-code platforms are democratizing software development...',
      author: 'Lisa Thompson',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Trends',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Low-Code', 'No-Code', 'Trends']
    }
  ];

  const categories = ['All', 'AI/ML', 'Cloud', 'Frontend', 'Backend', 'Security', 'Trends'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Tech <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest thoughts on technology trends, 
              best practices, and innovative solutions shaping the future of software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'glass hover:glow'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
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
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-orbitron font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="flex items-center space-x-1 text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <motion.button
                      className="group/btn flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              Stay Updated with <span className="gradient-text">Tech Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest articles, tutorials, 
              and industry insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;