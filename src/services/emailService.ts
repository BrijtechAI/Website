import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID_COMPANY = 'YOUR_COMPANY_TEMPLATE_ID'; // Template for company notification
const EMAILJS_TEMPLATE_ID_USER = 'YOUR_USER_TEMPLATE_ID'; // Template for user confirmation
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

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

class EmailService {
  /**
   * Send project request notification to company
   */
  static async sendProjectRequestToCompany(formData: ProjectFormData): Promise<boolean> {
    try {
      const templateParams = {
        to_email: 'brijtech2025@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone || 'Not provided',
        service: formData.service,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message,
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
      };

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
      const templateParams = {
        to_email: formData.email,
        to_name: formData.name,
        company: formData.company,
        service: formData.service,
        submission_date: new Date().toLocaleDateString(),
        response_time: '12 hours',
      };

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
      const templateParams = {
        to_email: 'brijtech2025@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
      };

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
      const templateParams = {
        to_email: formData.email,
        to_name: formData.name,
        company: formData.company,
        service: formData.service,
        submission_date: new Date().toLocaleDateString(),
        response_time: '24 hours',
      };

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
          message: 'There was an error sending your request. Please try again or contact us directly at brijtech2025@gmail.com'
        };
      }
    } catch (error) {
      console.error('Error processing project form:', error);
      return {
        success: false,
        message: 'There was an error processing your request. Please try again or contact us directly at brijtech2025@gmail.com'
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
          message: 'There was an error sending your message. Please try again or contact us directly at brijtech2025@gmail.com'
        };
      }
    } catch (error) {
      console.error('Error processing contact form:', error);
      return {
        success: false,
        message: 'There was an error processing your request. Please try again or contact us directly at brijtech2025@gmail.com'
      };
    }
  }
}

export default EmailService;

