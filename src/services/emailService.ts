import emailjs from '@emailjs/browser';

// EmailJS configuration — free tier allows 2 templates:
// 1) COMPANY: internal notifications (project, contact, newsletter)
// 2) USER: confirmations to the submitter (same flows)
const EMAILJS_SERVICE_ID = 'service_3t757me';
/** Dashboard: “Brijtech- Template” (internal / team). */
const EMAILJS_TEMPLATE_ID_COMPANY = 'template_u4n4zm8';
/** Dashboard: “User - Template” (visitor confirmation). */
const EMAILJS_TEMPLATE_ID_USER = 'template_7i0apbs';
const EMAILJS_PUBLIC_KEY = 'BOXpsk-c604ZpQVuA';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ProjectFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  service: string;
  budget?: string;
  timeline?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
}

export interface NewsletterSignupData {
  email: string;
  source?: 'footer' | 'blog';
}

class EmailService {
  /** Shared variables for template 1 (team inbox): project, contact, and newsletter. */
  private static buildCompanyNotificationParams(args: {
    kind: 'project' | 'contact' | 'newsletter';
    from_name: string;
    from_email: string;
    company: string;
    service: string;
    message: string;
    phone?: string;
    budget?: string;
    timeline?: string;
  }) {
    const submission_kind =
      args.kind === 'project'
        ? 'Project request'
        : args.kind === 'contact'
          ? 'Contact form'
          : 'Newsletter signup';
    const now = new Date();
    const isProject = args.kind === 'project';
    return {
      to_email: 'support@brijtech.org',
      submission_kind,
      from_name: args.from_name,
      from_email: args.from_email,
      company: args.company,
      service: args.service,
      message: args.message,
      phone: isProject ? args.phone || 'Not provided' : '—',
      budget: isProject ? args.budget || 'Not specified' : '—',
      timeline: isProject ? args.timeline || 'Not specified' : '—',
      submission_date: now.toLocaleDateString(),
      submission_time: now.toLocaleTimeString(),
    };
  }

  /** Shared variables for template 2 (submitter confirmation). */
  private static buildUserConfirmationParams(args: {
    kind: 'project' | 'contact' | 'newsletter';
    to_email: string;
    to_name: string;
    company: string;
    service: string;
  }) {
    const now = new Date();
    const common = {
      to_email: args.to_email,
      to_name: args.to_name,
      company: args.company,
      service: args.service,
      submission_date: now.toLocaleDateString(),
    };
    if (args.kind === 'project') {
      return {
        ...common,
        submission_kind: 'Project request',
        user_intro:
          'Your project enquiry is in hand, and we are grateful that you considered BrijTech. Our team will review your requirements with care and respond within the timeframe shown in the summary that follows. Should something require immediate attention, you may write to us at support@brijtech.org.',
        response_time: 'Within 12 hours',
      };
    }
    if (args.kind === 'contact') {
      return {
        ...common,
        submission_kind: 'Contact message',
        user_intro:
          'We have received your message securely and appreciate your taking the time to reach out. A colleague will review your note and aim to respond within the period indicated below. If your matter is urgent, please contact us at support@brijtech.org.',
        response_time: 'Within 24 hours',
      };
    }
    return {
      ...common,
      submission_kind: 'Newsletter',
      user_intro:
        'Thank you for joining BrijTech’s mailing list. We issue updates only when we believe they merit your attention, in line with the cadence noted below. For any other enquiry, we remain available at support@brijtech.org.',
      response_time: 'When we have news (low volume)',
    };
  }

  /**
   * Send project request notification to company
   */
  static async sendProjectRequestToCompany(formData: ProjectFormData): Promise<boolean> {
    try {
      const templateParams = this.buildCompanyNotificationParams({
        kind: 'project',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        phone: formData.phone,
        budget: formData.budget,
        timeline: formData.timeline,
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_COMPANY,
        templateParams
      );

      console.log('Project request sent to company:', response);
      return response.status === 200;
    } catch (error) {
      console.error('Error sending project request to company:', error);
      return false;
    }
  }

  /**
   * Send confirmation email to user
   */
  static async sendConfirmationToUser(formData: ProjectFormData): Promise<boolean> {
    try {
      const templateParams = this.buildUserConfirmationParams({
        kind: 'project',
        to_email: formData.email,
        to_name: formData.name,
        company: formData.company,
        service: formData.service,
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_USER,
        templateParams
      );

      console.log('Confirmation sent to user:', response);
      return response.status === 200;
    } catch (error) {
      console.error('Error sending confirmation to user:', error);
      return false;
    }
  }

  /**
   * Send contact form notification to company
   */
  static async sendContactToCompany(formData: ContactFormData): Promise<boolean> {
    try {
      const templateParams = this.buildCompanyNotificationParams({
        kind: 'contact',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_COMPANY,
        templateParams
      );

      console.log('Contact form sent to company:', response);
      return response.status === 200;
    } catch (error) {
      console.error('Error sending contact form to company:', error);
      return false;
    }
  }

  /**
   * Send confirmation email to contact form user
   */
  static async sendContactConfirmationToUser(formData: ContactFormData): Promise<boolean> {
    try {
      const isNewsletter =
        formData.service === 'Newsletter' ||
        formData.message === 'Newsletter subscription';

      const templateParams = this.buildUserConfirmationParams({
        kind: isNewsletter ? 'newsletter' : 'contact',
        to_email: formData.email,
        to_name: formData.name,
        company: formData.company,
        service: formData.service,
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_USER,
        templateParams
      );

      console.log('Contact confirmation sent to user:', response);
      return response.status === 200;
    } catch (error) {
      console.error('Error sending contact confirmation to user:', error);
      return false;
    }
  }

  /**
   * Notify company of a new newsletter subscriber
   */
  static async sendNewsletterToCompany(data: NewsletterSignupData): Promise<boolean> {
    try {
      const sourceLabel = data.source ? ` (${data.source})` : '';
      const templateParams = this.buildCompanyNotificationParams({
        kind: 'newsletter',
        from_name: 'Newsletter subscriber',
        from_email: data.email,
        company: '—',
        service: 'Newsletter',
        message: `New newsletter subscription${sourceLabel}.`,
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_COMPANY,
        templateParams
      );

      console.log('Newsletter signup sent to company:', response);
      return response.status === 200;
    } catch (error) {
      console.error('Error sending newsletter signup to company:', error);
      return false;
    }
  }

  /**
   * Process newsletter signup (notify team + confirmation to subscriber)
   */
  static async processNewsletterSignup(data: NewsletterSignupData): Promise<{
    success: boolean;
    message: string;
  }> {
    const email = data.email.trim();
    if (!email) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    try {
      const localPart = email.split('@')[0] || 'Subscriber';
      const displayName =
        localPart.length > 0
          ? localPart.charAt(0).toUpperCase() + localPart.slice(1)
          : 'Subscriber';

      const [companyEmailSent, userEmailSent] = await Promise.all([
        this.sendNewsletterToCompany(data),
        this.sendContactConfirmationToUser({
          name: displayName,
          email,
          company: '—',
          message: 'Newsletter subscription',
          service: 'Newsletter',
        }),
      ]);

      if (companyEmailSent && userEmailSent) {
        return {
          success: true,
          message:
            "You're subscribed! Check your inbox for a confirmation email.",
        };
      }
      if (companyEmailSent) {
        return {
          success: true,
          message: "You're subscribed! We'll keep you posted.",
        };
      }
      return {
        success: false,
        message:
          'Could not complete signup. Please try again or email support@brijtech.org',
      };
    } catch (error) {
      console.error('Error processing newsletter signup:', error);
      return {
        success: false,
        message:
          'Could not complete signup. Please try again or email support@brijtech.org',
      };
    }
  }

  /**
   * Process project form submission
   */
  static async processProjectForm(formData: ProjectFormData): Promise<{
    success: boolean;
    message: string;
  }> {
    try {
      // Send emails in parallel
      const [companyEmailSent, userEmailSent] = await Promise.all([
        this.sendProjectRequestToCompany(formData),
        this.sendConfirmationToUser(formData)
      ]);

      if (companyEmailSent && userEmailSent) {
        return {
          success: true,
          message: 'Thank you! We have received your project request and sent you a confirmation email. Our team will review your details and get back to you within 12 hours.'
        };
      } else if (companyEmailSent) {
        return {
          success: true,
          message: 'Thank you! We have received your project request. Our team will review your details and get back to you within 12 hours.'
        };
      } else {
        return {
          success: false,
          message: 'There was an error sending your request. Please try again or contact us directly at support@brijtech.org'
        };
      }
    } catch (error) {
      console.error('Error processing project form:', error);
      return {
        success: false,
        message: 'There was an error processing your request. Please try again or contact us directly at support@brijtech.org'
      };
    }
  }

  /**
   * Process contact form submission
   */
  static async processContactForm(formData: ContactFormData): Promise<{
    success: boolean;
    message: string;
  }> {
    try {
      // Send emails in parallel
      const [companyEmailSent, userEmailSent] = await Promise.all([
        this.sendContactToCompany(formData),
        this.sendContactConfirmationToUser(formData)
      ]);

      if (companyEmailSent && userEmailSent) {
        return {
          success: true,
          message: 'Thank you! We have received your message and sent you a confirmation email. Our team will review your details and get back to you within 24 hours.'
        };
      } else if (companyEmailSent) {
        return {
          success: true,
          message: 'Thank you! We have received your message. Our team will review your details and get back to you within 24 hours.'
        };
      } else {
        return {
          success: false,
          message: 'There was an error sending your message. Please try again or contact us directly at support@brijtech.org'
        };
      }
    } catch (error) {
      console.error('Error processing contact form:', error);
      return {
        success: false,
        message: 'There was an error processing your request. Please try again or contact us directly at support@brijtech.org'
      };
    }
  }
}

export default EmailService;

