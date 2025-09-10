# 🚀 Gas Heater Service - cPanel Deployment Guide

## 📋 **Static Site + PHP Contact Form Setup**

### **Step 1: Build Your Static Site**

```bash
npm run build
# This creates the 'out' folder with your static files
```

### **Step 2: Upload to cPanel**

1. **Upload static files**: Upload everything from the `out` folder to your `public_html` directory
2. **Upload PHP form**: Upload `contact-form.php` to your `public_html` root directory

### **Step 3: cPanel File Structure**

```
public_html/
├── contact-form.php          ← PHP form handler
├── index.html               ← Your main page
├── _next/                   ← Next.js static assets
├── images/                  ← Your images
└── (all other static files)
```

### **Step 4: Test Email Functionality**

#### **Option A: PHP mail() Function (Default)**

- Most cPanel hosting supports PHP `mail()` function
- No additional setup required
- Uses server's built-in email system

#### **Option B: Enhanced SMTP (If mail() doesn't work)**

If the default `mail()` function doesn't work on your cPanel hosting, replace the email sending code in `contact-form.php` with this SMTP version:

```php
// Add this function to contact-form.php if needed
function sendWithSMTP($to, $subject, $message, $from_email, $reply_to) {
    // SMTP settings for your hosting provider
    $smtp_host = 'mail.yourdomain.com'; // Your cPanel SMTP server
    $smtp_port = 587;
    $smtp_username = 'inquiryservicefirstau@yourdomain.com';
    $smtp_password = 'your_email_password';

    // Use PHPMailer or similar SMTP library
    // Most cPanel providers support this
}
```

### **Step 5: Domain Email Setup in cPanel**

1. **Create Email Account**:

   - Go to cPanel → Email Accounts
   - Create: `inquiryservicefirstau@yourdomain.com`
   - Use this as your "From" email

2. **Update PHP Form**:
   - Change `$from_email` in `contact-form.php`
   - Use your domain email instead of Gmail

### **Step 6: Testing**

#### **Test Form Functionality**:

1. Upload files to cPanel
2. Visit your website
3. Fill out the contact form
4. Check if email arrives at `nihaanexpertise@gmail.com`

#### **If Emails Don't Send**:

1. Check cPanel Error Logs
2. Verify PHP mail() is enabled
3. Contact your hosting provider about email setup

### **Step 7: Alternative Solutions**

#### **Option 1: Third-Party Email Services**

If cPanel email doesn't work reliably, you can use:

- **EmailJS** (Client-side email sending)
- **Formspree** (Form handling service)
- **Netlify Forms** (If you switch to Netlify)

#### **Option 2: Google Apps Script**

Create a Google Apps Script to handle form submissions and send emails via Gmail API.

### **🔧 Technical Notes**

#### **Static Site Benefits**:

- ✅ Fast loading
- ✅ SEO friendly
- ✅ Easy cPanel hosting
- ✅ Low cost hosting

#### **Contact Form Features**:

- ✅ Professional HTML emails
- ✅ Emergency service prioritization
- ✅ Customer information capture
- ✅ Mailto fallback system
- ✅ Mobile-responsive design

### **📧 Email Configuration**

The contact form sends emails with:

- **To**: `nihaanexpertise@gmail.com`
- **From**: Your domain email
- **Subject**: "🔥 NEW Gas Heater Service Request"
- **Format**: Professional HTML template

### **🚨 Emergency Service Ready**

Your form includes:

- Priority messaging for quick response
- Customer contact information
- Service type identification
- Professional email formatting
- Emergency repair alerts

---

## **🎯 SEO Benefits for "{Brand} Repair Melbourne"**

Your static site will help rank for:

- "Gas heater repair Melbourne"
- "Rinnai repair Melbourne"
- "Brivis service Melbourne"
- All your brand-specific repair searches

The contact form ensures you capture and convert these SEO visitors into actual customers! 🔥
