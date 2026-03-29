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

### Why mail shows `brijtech2025@gmail.com` instead of `support@brijtech.org`

EmailJS sends **through whichever account you connected** under **Email Services**. A **Gmail** service sends as that Gmail address. Changing the text in your website code does **not** change the SMTP “From” address.

To have messages **come from** `support@brijtech.org`:

1. **Google Workspace (recommended if `@brijtech.org` is on Google)**  
   Add an **Email Service** in EmailJS using the **Google** (or Gmail) flow with the **Workspace user** `support@brijtech.org` (or an admin account that is allowed to send as that address). Point both templates at this service if you replace the old one.

2. **Custom SMTP (most hosts: cPanel, Plesk, Zoho, Microsoft 365, etc.)**  
   In EmailJS → **Email Services** → **Add New Service** → **Custom SMTP**. Enter the SMTP host, port, TLS, and credentials your provider gives for `support@brijtech.org`. Then edit each template and set **Service** to this new SMTP service. The **From** field in the template can usually be `support@brijtech.org` once SMTP authorises it.

3. **Gmail + “Send mail as” (limited)**  
   In Gmail settings you can add `support@brijtech.org` as a “Send mail as” address (after DNS verification). EmailJS’s Gmail integration may **still** send as the primary Gmail address; if so, use **Custom SMTP** or **Workspace** instead.

**Receiving** internal form mail **at** `support@brijtech.org`: the app already passes `to_email` as `support@brijtech.org`. In the **Brijtech- Template**, set **To Email** to `{{to_email}}` (not a fixed Gmail address).

**Visitors’ confirmation emails** should also use a service that you are happy shows as the brand (often the same SMTP or Workspace service as above).

## Step 3: Create Email Templates (2 only — free tier)

The app sends **one internal template** (to your team) and **one confirmation template** (to the visitor). The same variables cover **project requests**, **contact form**, and **newsletter** signups.

**Variables the code sends**

| Template | Variables |
|----------|-----------|
| **Company (internal)** | `submission_kind`, `from_name`, `from_email`, `company`, `phone`, `budget`, `timeline`, `service`, `message`, `submission_date`, `submission_time`, `to_email` |
| **User (confirmation)** | `submission_kind`, `to_name`, `to_email`, `user_intro`, `company`, `service`, `submission_date`, `response_time` |

- **Internal template** `submission_kind`: `Project request`, `Contact form`, or `Newsletter signup`.
- **User confirmation** `submission_kind` from the app: `Project request`, `Contact message`, or `Newsletter`.
- For contact or newsletter, `phone`, `budget`, and `timeline` are sent as `—` so one layout still works.

**Logo:** Templates use `https://www.brijtech.org/logo.png`. Ensure that URL serves your mark (same file as `public/logo.png` on the site). Header uses a **34px-tall** image beside the wordmark; footer uses **48×48**. `filter: drop-shadow` is omitted for better Outlook/Gmail compatibility.

**Final HTML (source of truth):** Each file is a **single root `<table>`** (the 720px card — no outer gray wrapper). Copy the whole file into the EmailJS HTML body, or paste only the `<table>…</table>` and omit the optional `<!-- ... -->` comment at the top.

| Template | File to paste |
|----------|----------------|
| **A — Company / internal** | [`email-previews/emailjs-template-a-company-internal.html`](email-previews/emailjs-template-a-company-internal.html) |
| **B — User confirmation** | [`email-previews/emailjs-template-b-user-confirmation.html`](email-previews/emailjs-template-b-user-confirmation.html) |

**Layout notes:** Card **max-width 720px**, top accent bar gradient `135deg` (purple → pink → blue → teal). Footer uses a **purple–magenta–rose** gradient (`118deg`) with logo left of the wordmark, body copy indented with the name, and the legal line aligned to the **logo** left edge. Outer background `#f3f1f7`. Outlook may show solid `bgcolor` where gradients are stripped.

### Template A — Company / internal notification

1. **Email Templates** → **Create New Template** (or edit existing).
2. Set **To Email** to your team address (e.g. `support@brijtech.org`) if your service reads “to” from the template.
3. **Subject:** `[{{submission_kind}}] {{from_name}} — {{company}}`
4. **Content:** Open `email-previews/emailjs-template-a-company-internal.html`, select all, paste into the HTML body. Remove the `<!-- ... -->` comment at the top if you prefer.

### Template B — User confirmation

1. Create the **second** template.
2. **To Email:** `{{to_email}}` (must match the variable your app sends).
3. **Subject:** `Thank you, {{to_name}} — BrijTech received your {{submission_kind}}`
4. **Content:** Paste from `email-previews/emailjs-template-b-user-confirmation.html` (same as above).

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update the Email Service Configuration

1. Open `src/services/emailService.ts`
2. Set your **Service ID**, **Public Key**, and **both template IDs** (Template A → `EMAILJS_TEMPLATE_ID_COMPANY`, Template B → `EMAILJS_TEMPLATE_ID_USER`).

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID_COMPANY = 'template_xxxxxxx'; // internal / team
const EMAILJS_TEMPLATE_ID_USER = 'template_yyyyyyy';  // confirmation to visitor
const EMAILJS_PUBLIC_KEY = 'your_public_key';
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

