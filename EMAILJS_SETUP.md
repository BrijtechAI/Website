# EmailJS Setup Guide for BrijTech Contact Forms

This guide will help you set up EmailJS to enable email functionality for your contact forms.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID**

## Step 3: Create Email Templates

### Template 1: Company Notification (Project Request)
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template ID: `company_project_notification`
4. Template content:

**Subject:** New Project Request from {{from_name}} - {{company}}

**Body:**
```
Hello BrijTech Team,

A new project request has been submitted through the website:

Client Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company}}
- Phone: {{phone}}

Project Details:
- Service: {{service}}
- Budget: {{budget}}
- Timeline: {{timeline}}
- Message: {{message}}

Submitted on: {{submission_date}} at {{submission_time}}

Please review and respond within 12 hours.

Best regards,
BrijTech Website
```

### Template 2: User Confirmation (Project Request)
1. Create another template
2. Use this template ID: `user_project_confirmation`
3. Template content:

**Subject:** Thank you for your project request - BrijTech

**Body:**
```
Dear {{to_name}},

Thank you for reaching out to BrijTech! We have received your project request and are excited to learn more about your {{service}} needs.

Here's what happens next:
- Our team will review your project details
- We'll analyze your requirements and prepare a customized proposal
- You'll receive a response within 12 hours maximum

Project Summary:
- Service: {{service}}
- Company: {{company}}
- Submitted: {{submission_date}}

If you have any urgent questions, feel free to contact us directly at brijtech2025@gmail.com.

We look forward to working with you!

Best regards,
The BrijTech Team

---
BrijTech - Bridging Technology Gaps with AI
Email: brijtech2025@gmail.com
```

### Template 3: Company Notification (Contact Form)
1. Create another template
2. Use this template ID: `company_contact_notification`
3. Template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello BrijTech Team,

A new contact form has been submitted:

Client Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company}}

Inquiry Details:
- Service: {{service}}
- Message: {{message}}

Submitted on: {{submission_date}} at {{submission_time}}

Please review and respond within 24 hours.

Best regards,
BrijTech Website
```

### Template 4: User Confirmation (Contact Form)
1. Create another template
2. Use this template ID: `user_contact_confirmation`
3. Template content:

**Subject:** Thank you for contacting BrijTech

**Body:**
```
Dear {{to_name}},

Thank you for contacting BrijTech! We have received your message and appreciate your interest in our {{service}} services.

Here's what happens next:
- Our team will review your inquiry
- We'll prepare a personalized response
- You'll receive a reply within 24 hours maximum

Inquiry Summary:
- Service: {{service}}
- Company: {{company}}
- Submitted: {{submission_date}}

If you have any urgent questions, feel free to contact us directly at brijtech2025@gmail.com.

We look forward to helping you with your technology needs!

Best regards,
The BrijTech Team

---
BrijTech - Bridging Technology Gaps with AI
Email: brijtech2025@gmail.com
```

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update the Email Service Configuration

1. Open `src/services/emailService.ts`
2. Replace the placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID_COMPANY = 'company_project_notification'; // Your company template ID
const EMAILJS_TEMPLATE_ID_USER = 'user_project_confirmation'; // Your user template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key
```

## Step 6: Test the Integration

1. Start your development server
2. Fill out the contact form
3. Submit the form
4. Check your email for notifications
5. Verify that confirmation emails are sent to users

## EmailJS Free Tier Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for small to medium businesses

## Troubleshooting

### Common Issues:
1. **CORS Error**: Make sure you're using the correct domain in EmailJS settings
2. **Template Not Found**: Verify template IDs match exactly
3. **Service Not Found**: Check your service ID
4. **Authentication Error**: Verify your public key

### Testing:
- Use the EmailJS dashboard to test templates
- Check browser console for error messages
- Verify email provider settings

## Support

If you encounter any issues:
1. Check EmailJS documentation
2. Verify all IDs and keys are correct
3. Test with a simple template first
4. Contact EmailJS support if needed

---

**Note:** Remember to replace all placeholder values with your actual EmailJS credentials before deploying to production.

