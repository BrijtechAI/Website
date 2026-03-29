// Chatbot Service for handling conversation logic and API calls

export interface UserInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

export interface ConversationContext {
  step: 'greeting' | 'info_collection' | 'project_details' | 'contact_ready';
  userInfo: Partial<UserInfo>;
  conversationHistory: string[];
  intent: 'general_inquiry' | 'service_inquiry' | 'project_inquiry' | 'pricing_inquiry' | 'contact_request';
}

export class ChatbotService {
  // Frontend must never hold secrets. Requests go to a backend proxy configured via env.
  private static readonly PROXY_URL = (import.meta as any).env.VITE_CHATBOT_PROXY_URL as string;

  static async testAPI(): Promise<boolean> {
    try {
      if (!this.PROXY_URL) {
        throw new Error('Chatbot proxy URL is not configured (VITE_CHATBOT_PROXY_URL)');
      }

      const response = await fetch(this.PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-70b-versatile',
          messages: [
            { role: 'system', content: 'You are a minimal tester.' },
            { role: 'user', content: 'Ping' }
          ],
          max_tokens: 10,
          temperature: 0,
        }),
      });
      
      return response.ok;
    } catch (error) {
      console.error('API test failed:', error);
      return false;
    }
  }

  static async generateResponse(
    userMessage: string, 
    context: ConversationContext
  ): Promise<{ response: string; nextStep?: string; shouldCollectInfo?: boolean }> {
    try {
      const systemPrompt = this.buildSystemPrompt(context);

      if (!this.PROXY_URL) {
        throw new Error('Chatbot proxy URL is not configured (VITE_CHATBOT_PROXY_URL)');
      }

      console.log('Calling chatbot proxy with message:', userMessage);
      
      const response = await fetch(this.PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-70b-versatile',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 600,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Chatbot proxy response:', data);
      
      const botResponse = data.choices?.[0]?.message?.content || this.getFallbackResponse(context.step);
      
      return {
        response: botResponse,
        nextStep: this.determineNextStep(userMessage, context),
        shouldCollectInfo: this.shouldCollectInfo(userMessage, context)
      };
    } catch (error) {
      console.error('Chatbot API error:', error);
      return {
        response: this.getFallbackResponse(context.step),
        nextStep: context.step,
        shouldCollectInfo: false
      };
    }
  }

  private static buildSystemPrompt(context: ConversationContext): string {
    const basePrompt = `You are BrijTech's AI assistant. You must be professional, crisp, and focused on business outcomes. Your primary goal is to collect the user's initial details and guide them to contact BrijTech, not to have long chats.

COMPANY INFORMATION:
- Name: BrijTech
- Vision: "Bridging Technology Gaps with AI Solutions"
- Services: Custom Software Development, Web & Mobile Apps, Cloud & DevOps, AI/ML Solutions, UI/UX Design
- Contact: support@brijtech.org, +91 9782174123
- Location: San Francisco, CA; Bangalore, India
- Stats: 500+ AI Solutions Delivered, 98% Client Satisfaction, 50+ Businesses Transformed

YOUR PERSONALITY:
- Professional, friendly, and concise
- Avoid chit‑chat; keep responses short and structured
- No more than one short question at a time when absolutely necessary
- Prefer statements that guide users to provide details
- Use minimal and tasteful emojis only when it adds clarity (optional)

CURRENT CONTEXT:
- Conversation Step: ${context.step}
- User Info Collected: ${JSON.stringify(context.userInfo)}
- Intent: ${context.intent}

STRICT BOUNDARIES:
- Only answer questions related to BrijTech, its services, process, capabilities, and engagement. If asked anything unrelated, politely decline and steer back to BrijTech.
- Do NOT provide generic tech support, personal opinions, or information outside BrijTech.

RESPONSE POLICY:
- Default to a structured, professional response that briefly acknowledges their goal and asks for the minimum necessary details in one compact prompt.
- Preferred fields to collect (in order): Name, Email, Company (optional), Project Type (Web/Mobile/AI/Cloud/Custom), Brief Requirement (2–3 lines), Timeline/Budget (optional).
- End every message with a clear call‑to‑action: either “Share your details here” or “Contact us at support@brijtech.org or via the form.”
- Keep responses to 1–3 short sentences or a compact bullet list.

EXAMPLES OF GOOD RESPONSES:
- "We can help with your clothing brand website with design, development, and scalable infrastructure. Please share: Name, Email, Project Type, and a 2–3 line brief. You can also reach us at support@brijtech.org or submit the form to get started."
- "BrijTech delivers custom Web, Mobile, AI/ML, and Cloud solutions with enterprise‑grade quality. Share your Name, Email, Project Type, and a short brief to proceed, or contact us at support@brijtech.org."

Remember: Keep it professional and succinct. Collect details, then direct the user to email/form for next steps.`;

    return basePrompt;
  }

  private static determineNextStep(userMessage: string, context: ConversationContext): string {
    const message = userMessage.toLowerCase();
    
    // Check for project-related keywords
    const projectKeywords = ['project', 'app', 'website', 'software', 'development', 'build', 'create'];
    const hasProjectIntent = projectKeywords.some(keyword => message.includes(keyword));
    
    // Check for service inquiry
    const serviceKeywords = ['service', 'what do you do', 'capabilities', 'offer'];
    const hasServiceIntent = serviceKeywords.some(keyword => message.includes(keyword));
    
    // Check for pricing inquiry
    const pricingKeywords = ['price', 'cost', 'budget', 'how much', 'pricing'];
    const hasPricingIntent = pricingKeywords.some(keyword => message.includes(keyword));
    
    // Check for contact request
    const contactKeywords = ['contact', 'call', 'email', 'speak', 'talk', 'meet'];
    const hasContactIntent = contactKeywords.some(keyword => message.includes(keyword));

    switch (context.step) {
      case 'greeting':
        if (hasProjectIntent || hasServiceIntent) {
          return 'info_collection';
        }
        return 'greeting';
      
      case 'info_collection':
        if (this.hasBasicInfo(context.userInfo)) {
          return 'project_details';
        }
        return 'info_collection';
      
      case 'project_details':
        if (this.hasProjectInfo(context.userInfo)) {
          return 'contact_ready';
        }
        return 'project_details';
      
      default:
        return context.step;
    }
  }

  private static shouldCollectInfo(userMessage: string, context: ConversationContext): boolean {
    const message = userMessage.toLowerCase();
    
    // Check if user is providing information
    const infoKeywords = ['my name is', 'i am', 'email is', 'company is', 'phone is', 'budget is'];
    const isProvidingInfo = infoKeywords.some(keyword => message.includes(keyword));
    
    // Check if we need more information
    const needsInfo = !this.hasBasicInfo(context.userInfo) && context.step === 'info_collection';
    const needsProjectInfo = !this.hasProjectInfo(context.userInfo) && context.step === 'project_details';
    
    return isProvidingInfo || needsInfo || needsProjectInfo;
  }

  private static hasBasicInfo(userInfo: Partial<UserInfo>): boolean {
    return !!(userInfo.name && userInfo.email);
  }

  private static hasProjectInfo(userInfo: Partial<UserInfo>): boolean {
    return !!(userInfo.projectType || userInfo.description);
  }

  private static getFallbackResponse(step: string): string {
    const fallbacks = {
      greeting: "Hello! I'm here to help you learn about BrijTech's AI-powered software development services. What brings you here today? 🚀",
      info_collection: "I'd love to learn more about your project! Could you share your name and email so I can provide personalized assistance? 📝",
      project_details: "Tell me more about your project requirements. What kind of solution are you looking to build? 💡",
      contact_ready: "Perfect! I have all the information I need. Let me connect you with our team for a detailed consultation! ✨"
    };
    
    return fallbacks[step as keyof typeof fallbacks] || "I'm here to help! How can I assist you today? 😊";
  }

  static getContextualResponse(userMessage: string, context: ConversationContext): string {
    const message = userMessage.toLowerCase();
    
    // Project-related responses
    if (message.includes('website') || message.includes('web')) {
      return "We can build your website end‑to‑end (design, development, scalable hosting). Please share: Name, Email, Project Type, and a 2–3 line brief. You can also contact us at support@brijtech.org to proceed.";
    }
    
    if (message.includes('app') || message.includes('mobile')) {
      return "We deliver iOS/Android apps with secure, scalable backends. Share your Name, Email, Project Type, and a short brief, or email support@brijtech.org to start.";
    }
    
    if (message.includes('software') || message.includes('development')) {
      return "We build custom software aligned to your goals (web, mobile, AI/ML, cloud). Provide: Name, Email, Project Type, brief requirement (2–3 lines). Or contact support@brijtech.org.";
    }
    
    // Service inquiries
    if (message.includes('service') || message.includes('what do you do') || message.includes('company')) {
      return "BrijTech delivers Web, Mobile, AI/ML, Cloud/DevOps, and UI/UX solutions. Share your Name, Email, Project Type, and a short brief, or contact us at support@brijtech.org to proceed.";
    }
    
    // Pricing inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return "Pricing depends on scope and complexity. Share your Name, Email, Project Type, and a brief requirement for a tailored estimate, or email support@brijtech.org to schedule a consultation.";
    }
    
    // Contact requests
    if (message.includes('contact') || message.includes('call') || message.includes('email')) {
      return "You can reach us at support@brijtech.org or submit the form. If you'd like, share your Name, Email, Project Type, and a short brief here and we’ll follow up.";
    }
    
    // Default responses
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return "Welcome to BrijTech. To assist you, please share: Name, Email, Project Type (Web/Mobile/AI/Cloud/Custom), and a 2–3 line brief. You can also contact us at support@brijtech.org.";
    }
    
    return "Happy to assist. Please share: Name, Email, Project Type, and a short brief. Or contact support@brijtech.org to proceed.";
  }

  static extractUserInfo(message: string, currentInfo: Partial<UserInfo>): Partial<UserInfo> {
    const extracted: Partial<UserInfo> = {};
    const lowerMessage = message.toLowerCase();
    
    // Extract name
    const nameMatch = lowerMessage.match(/(?:my name is|i am|i'm)\s+([a-zA-Z\s]+)/i);
    if (nameMatch && !currentInfo.name) {
      extracted.name = nameMatch[1].trim();
    }
    
    // Extract email
    const emailMatch = message.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    if (emailMatch && !currentInfo.email) {
      extracted.email = emailMatch[1];
    }
    
    // Extract company
    const companyMatch = lowerMessage.match(/(?:company is|i work at|we are)\s+([a-zA-Z\s&.,]+)/i);
    if (companyMatch && !currentInfo.company) {
      extracted.company = companyMatch[1].trim();
    }
    
    // Extract phone
    const phoneMatch = message.match(/(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/);
    if (phoneMatch && !currentInfo.phone) {
      extracted.phone = phoneMatch[0];
    }
    
    return extracted;
  }

  static getQuickActions(step: string): Array<{ text: string; icon: string; action: string }> {
    const actions = {
      greeting: [
        { text: "Tell me about your services", icon: "🔧", action: "services" },
        { text: "I need a custom app", icon: "📱", action: "project" },
        { text: "What's your pricing?", icon: "💰", action: "pricing" },
        { text: "Contact your team", icon: "📞", action: "contact" }
      ],
      info_collection: [
        { text: "My name is John", icon: "👤", action: "name" },
        { text: "support@brijtech.org", icon: "📧", action: "email" },
        { text: "I work at TechCorp", icon: "🏢", action: "company" },
        { text: "Skip to project details", icon: "⏭️", action: "skip" }
      ],
      project_details: [
        { text: "Web Application", icon: "🌐", action: "web-app" },
        { text: "Mobile App", icon: "📱", action: "mobile-app" },
        { text: "AI/ML Solution", icon: "🤖", action: "ai-ml" },
        { text: "Custom Development", icon: "⚙️", action: "custom" }
      ],
      contact_ready: [
        { text: "Submit my information", icon: "📝", action: "submit" },
        { text: "Schedule a call", icon: "📅", action: "schedule" },
        { text: "Send email", icon: "✉️", action: "email" },
        { text: "Start over", icon: "🔄", action: "restart" }
      ]
    };
    
    return actions[step as keyof typeof actions] || actions.greeting;
  }
}
