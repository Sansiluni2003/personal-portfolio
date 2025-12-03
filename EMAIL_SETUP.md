# Email Setup Guide for Contact Form

## 📧 How it Works

When someone fills out your contact form:
1. Form data is sent to `/api/contact` API route
2. API route uses Nodemailer to send email
3. Email is delivered to your Gmail inbox
4. User sees success/error message

---

## 🔧 Setup Steps

### 1. Install Nodemailer

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Set Up Gmail App Password

**Important:** You cannot use your regular Gmail password. You need an App Password.

#### Steps to Get Gmail App Password:

1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** (if not already enabled)
4. Scroll down to **App passwords**
5. Click **App passwords**
6. Select app: **Mail**
7. Select device: **Other** (enter "Portfolio Website")
8. Click **Generate**
9. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

### 3. Configure Environment Variables

Open `.env.local` file and update:

```env
EMAIL_USER=haisleelarathna@gmail.com
EMAIL_PASS=your_16_character_app_password_here
```

**Example:**
```env
EMAIL_USER=haisleelarathna@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 4. Add .env.local to .gitignore

Make sure `.env.local` is in your `.gitignore` file:

```
# .gitignore
.env.local
.env*.local
```

---

## 🚀 Testing

### Local Testing:

1. Start your development server:
```bash
npm run dev
```

2. Go to Contact section
3. Fill out the form
4. Click "Send Message"
5. Check your Gmail inbox (haisleelarathna@gmail.com)

---

## 🌐 Deployment (Vercel/Production)

### Add Environment Variables to Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** > **Environment Variables**
3. Add:
   - `EMAIL_USER` = `haisleelarathna@gmail.com`
   - `EMAIL_PASS` = `your_app_password`
4. Click **Save**
5. Redeploy your project

---

## 🔒 Security Notes

✅ **DO:**
- Use App Passwords (never your actual Gmail password)
- Keep `.env.local` in `.gitignore`
- Use environment variables for sensitive data

❌ **DON'T:**
- Commit `.env.local` to GitHub
- Share your App Password
- Use regular Gmail password

---

## 🐛 Troubleshooting

### Error: "Invalid login"
- Make sure 2-Step Verification is enabled
- Generate a new App Password
- Copy password without spaces

### Error: "Less secure app access"
- Gmail no longer supports this
- Must use App Password with 2-Step Verification

### Email not received
- Check spam folder
- Verify EMAIL_USER is correct
- Test with Gmail first before other providers

### "Failed to send email"
- Check your internet connection
- Verify environment variables are set
- Check console for detailed error messages

---

## 📝 Alternative Email Services

If you prefer not to use Gmail, here are alternatives:

### SendGrid (Recommended for Production)
```bash
npm install @sendgrid/mail
```

### Resend (Modern, Developer-Friendly)
```bash
npm install resend
```

### EmailJS (No Backend Required)
```bash
npm install @emailjs/browser
```

---

## 📧 Email Template Customization

To customize the email template, edit `/app/api/contact/route.ts`:

```typescript
html: `
  <div style="your custom styles">
    <h2>New Message from ${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  </div>
`
```

---

## ✅ Testing Checklist

- [ ] Nodemailer installed
- [ ] App Password generated
- [ ] .env.local configured
- [ ] .env.local in .gitignore
- [ ] Dev server running
- [ ] Form submits successfully
- [ ] Email received in inbox
- [ ] Success message displays
- [ ] Environment variables added to Vercel
- [ ] Production deployment tested

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Check your terminal/server logs
3. Verify all environment variables are set correctly
4. Test with a simple console.log in the API route

---

**Created:** December 3, 2025
**Last Updated:** December 3, 2025
