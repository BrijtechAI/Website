import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot
} from 'lucide-react';
import { ChatbotService, ConversationContext, UserInfo } from '../../services/chatbotService';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

// UserInfo interface is now imported from chatbotService

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationStep, setConversationStep] = useState<'greeting' | 'info_collection' | 'project_details' | 'contact_ready'>('greeting');
  const [userInfo, setUserInfo] = useState<Partial<UserInfo>>({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    step: 'greeting',
    userInfo: {},
    conversationHistory: [],
    intent: 'general_inquiry'
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showTeaser, setShowTeaser] = useState(false);
  const [nudge, setNudge] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // First visit: show a teaser and optionally auto-open once per session
    const opened = sessionStorage.getItem('bt_chat_seen');
    if (!opened) {
      // Teaser bubble after short delay
      const teaserTimer = setTimeout(() => setShowTeaser(true), 1500);
      // Hide teaser later
      const hideTimer = setTimeout(() => setShowTeaser(false), 9000);
      // Light nudge every 20s if not opened
      const nudgeInterval = setInterval(() => {
        if (!isOpen) {
          setNudge(true);
          setTimeout(() => setNudge(false), 1200);
        }
      }, 20000);
      // Mark as seen after first cycle
      setTimeout(() => sessionStorage.setItem('bt_chat_seen', '1'), 4000);
      return () => {
        clearTimeout(teaserTimer);
        clearTimeout(hideTimer);
        clearInterval(nudgeInterval);
      };
    }

    if (isOpen && messages.length === 0) {
      // Initial greeting message
      setTimeout(() => {
        addBotMessage("Hello! 👋 I'm BrijTech's AI assistant. I'm here to help you learn about our AI-powered software development services and guide you through starting your next project. How can I assist you today?");
      }, 500);
    }
  }, [isOpen]);

  const addMessage = (type: 'user' | 'bot', content: string, isTyping = false) => {
    const message: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      isTyping
    };
    setMessages(prev => [...prev, message]);
  };

  const addBotMessage = (content: string, delay = 0) => {
    if (delay > 0) {
      setTimeout(() => {
        addMessage('bot', content);
      }, delay);
    } else {
      addMessage('bot', content);
    }
  };

  const simulateTyping = (callback: () => void, delay = 1000) => {
    addMessage('bot', '', true);
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      callback();
    }, delay);
  };

  const handleUserMessage = async (userMessage: string) => {
    // Extract user information from the message
    const extractedInfo = ChatbotService.extractUserInfo(userMessage, userInfo);
    const updatedUserInfo = { ...userInfo, ...extractedInfo };
    setUserInfo(updatedUserInfo);

    // Update conversation context
    const updatedContext: ConversationContext = {
      step: conversationStep,
      userInfo: updatedUserInfo,
      conversationHistory: [...conversationContext.conversationHistory, userMessage],
      intent: determineIntent(userMessage)
    };
    setConversationContext(updatedContext);

    // Get AI response
    const result = await ChatbotService.generateResponse(userMessage, updatedContext);
    
    // Update conversation step if needed
    if (result.nextStep && result.nextStep !== conversationStep) {
      setConversationStep(result.nextStep as any);
    }

    // If the response is the default fallback, try contextual response
    if (result.response.includes("Hello! I'm here to help you learn about BrijTech's AI-powered software development services. What brings you here today?")) {
      return ChatbotService.getContextualResponse(userMessage, updatedContext);
    }

    return result.response;
  };

  const determineIntent = (message: string): 'general_inquiry' | 'service_inquiry' | 'project_inquiry' | 'pricing_inquiry' | 'contact_request' => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('app') || lowerMessage.includes('website') || lowerMessage.includes('build')) {
      return 'project_inquiry';
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('capabilities')) {
      return 'service_inquiry';
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
      return 'pricing_inquiry';
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('email')) {
      return 'contact_request';
    }
    return 'general_inquiry';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    addMessage('user', userMessage);

    setIsLoading(true);
    simulateTyping(async () => {
      try {
        const botResponse = await handleUserMessage(userMessage);
        addBotMessage(botResponse);
        
        // Check if we should show contact form
        if (conversationStep === 'contact_ready' && userInfo.name && userInfo.email) {
          setTimeout(() => {
            setShowContactForm(true);
          }, 2000);
        }
      } catch (error) {
        addBotMessage("I'm having trouble processing that. Let me connect you with our team directly! 💬");
      } finally {
        setIsLoading(false);
      }
    });
  };

  // Deprecated helper retained for reference (no longer used)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', userInfo);
    
    addBotMessage("Perfect! I've collected your information. Our team will review your requirements and get back to you within 24 hours. 🚀");
    
    setTimeout(() => {
      addBotMessage("In the meantime, feel free to explore our portfolio or reach out directly at brijtech2025@gmail.com. Thank you for choosing BrijTech! ✨");
    }, 2000);
    
    setShowContactForm(false);
    setConversationStep('contact_ready');
  };

  const quickActions = ChatbotService.getQuickActions(conversationStep);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => { setIsOpen(!isOpen); setShowTeaser(false); }}
        aria-label="Open BrijTech chat assistant"
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group ${nudge ? 'animate-chatbot-nudge' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Attention badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 px-2 py-0.5 text-[10px] rounded-full bg-red-500 text-white shadow-md">New</span>
        )}
      </motion.button>

      {/* Teaser bubble */}
      {!isOpen && showTeaser && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-24 right-6 z-40 max-w-xs bg-white dark:bg-card border border-border/30 shadow-xl rounded-xl p-3"
        >
          <p className="text-sm text-foreground">Need help scoping your project? Chat with our assistant to get started.</p>
        </motion.div>
      )}

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] bg-white dark:bg-card rounded-2xl shadow-2xl border border-border/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">BrijTech Assistant</h3>
                    <p className="text-xs opacity-90">AI-Powered Support</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-primary to-accent' 
                        : 'bg-muted'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-primary to-accent text-white'
                        : 'bg-muted text-foreground'
                    }`}>
                      {message.isTyping ? (
                        <div className="flex space-x-1">
                          <motion.div
                            className="w-2 h-2 bg-current rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-current rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-current rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <div className="p-4 border-t border-border/20">
                <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setInputValue(action.text)}
                      className="text-xs p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{action.icon}</span>
                      <span>{action.text}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-card rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto"
            >
              <h3 className="text-xl font-semibold mb-4">Let's Get Started! 🚀</h3>
              <form onSubmit={handleContactFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={userInfo.name || ''}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={userInfo.email || ''}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <input
                    type="text"
                    value={userInfo.company || ''}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    value={userInfo.phone || ''}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Type</label>
                  <select
                    value={userInfo.projectType || ''}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, projectType: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="ai-ml">AI/ML Solution</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Description</label>
                  <textarea
                    value={userInfo.description || ''}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
