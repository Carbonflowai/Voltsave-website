# 🚀 Voltsave AI Website Deployment Guide

## ✅ Step 1: Google Sheets Integration (COMPLETED)

### What I've Done:
1. ✅ Updated `script.js` with Google Sheets integration code
2. ✅ Added form validation and loading states
3. ✅ Added success/error message styling in `styles.css`
4. ✅ Improved user experience with proper feedback

### What You Need to Do:

1. **Create Google Sheet:**
   - Go to https://sheets.google.com
   - Create new sheet: "Voltsave Waitlist"
   - Add headers in Row 1: `Timestamp | First Name | Last Name | Email | Company | Industry | Location`

2. **Add Apps Script:**
   - Click **Extensions** → **Apps Script**
   - Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.company,
      data.industry,
      data.location
    ]);
    
    // OPTIONAL: Email notification - replace with your email
    MailApp.sendEmail({
      to: 'your-email@voltsave.ai',
      subject: '🎉 New Waitlist Signup - Voltsave AI',
      body: `New signup!\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nCompany: ${data.company}\nIndustry: ${data.industry}\nLocation: ${data.location}\n\nTimestamp: ${data.timestamp}`
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy Script:**
   - Click **Deploy** → **New deployment**
   - Click gear icon → Select **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
   - **COPY THE WEB APP URL**

4. **Update Your Website:**
   - Open `script.js`
   - Find line: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';`
   - Replace with your actual URL from step 3

---

## 📝 Option 2: Tally.so Integration (Alternative - Even Easier!)

### Why Tally.so?
- ✅ No coding required
- ✅ Beautiful embedded forms
- ✅ Email notifications built-in
- ✅ Export to CSV/Excel
- ✅ Free for up to 100 responses/month
- ✅ Integrates with Notion, Slack, Google Sheets

### Setup (5 minutes):

1. **Create Account:**
   - Go to https://tally.so
   - Sign up (free)

2. **Create Form:**
   - Click "New form"
   - Add fields:
     - First Name (short text)
     - Last Name (short text)
     - Email (email field)
     - Company (short text)
     - Industry (dropdown with your options)
     - Location (short text)

3. **Get Embed Code:**
   - Click **Share** → **Embed**
   - Copy the embed code

4. **Replace Form in Your Website:**

Open `index.html` and replace the entire form section (lines ~265-305) with:

```html
<!-- Tally Form Embed -->
<div class="demo-form-container">
    <iframe 
        data-tally-src="https://tally.so/r/YOUR-FORM-ID" 
        width="100%" 
        height="500" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0" 
        title="Talk to Us">
    </iframe>
    <script>
        var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    </script>
</div>
```

---

## 🌐 Step 2: Deploy to GitHub Pages

### Option A: Using Git Command Line

```powershell
# Navigate to your folder
cd "C:\Users\Dell\OneDrive\Desktop\Website Files"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial Voltsave AI website deployment"

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/voltsave-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop (Easier)

1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. Click **File** → **Add Local Repository**
4. Browse to: `C:\Users\Dell\OneDrive\Desktop\Website Files`
5. Click **Publish repository**
6. Name: `voltsave-website`
7. Make it **Public**
8. Click **Publish**

### Enable GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: **main** branch
4. Click **Save**
5. Site will be live at: `https://YOUR-USERNAME.github.io/voltsave-website/`

---

## 🔗 Step 3: Connect Custom Domain

### At your domain registrar (GoDaddy, Namecheap, etc.):

1. **Add CNAME record:**
   - Type: `CNAME`
   - Host: `www`
   - Value: `YOUR-USERNAME.github.io`
   - TTL: `3600`

2. **Add A records for root domain:**
   - Type: `A`
   - Host: `@` (or leave blank)
   - Value: Add all 4 of these:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **In GitHub Pages settings:**
   - Custom domain: `www.voltsave.ai`
   - Click **Save**
   - Wait for DNS check (can take 24-48 hours)
   - Enable **Enforce HTTPS**

---

## 📊 Step 4: Add Google Analytics

1. Go to https://analytics.google.com
2. Create property for your website
3. Get Measurement ID (format: G-XXXXXXXXXX)
4. Open `index.html`
5. Find: `<!-- Google Analytics -->` (around line 260)
6. Replace `GA_MEASUREMENT_ID` with your actual ID

---

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] Google Sheets URL added to script.js (OR Tally.so form embedded)
- [ ] Test form submission works
- [ ] Email notifications working
- [ ] All pages load correctly (index, about, privacy, terms)
- [ ] Mobile responsive design tested
- [ ] All links work
- [ ] Logo and images load
- [ ] Custom domain connected
- [ ] HTTPS enabled
- [ ] Google Analytics tracking ID added
- [ ] Privacy policy reviewed
- [ ] Terms of service reviewed

---

## 🆘 Troubleshooting

### Form Not Submitting?
- Check browser console for errors (F12)
- Verify Google Script URL is correct
- Check Google Sheet permissions (should be public)

### Domain Not Working?
- DNS can take 24-48 hours to propagate
- Check DNS settings with: https://dnschecker.org
- Verify A and CNAME records are correct

### Need Help?
- GitHub Pages docs: https://docs.github.com/en/pages
- Tally.so docs: https://tally.so/help
- Check your browser console for errors

---

## 📧 Email Notifications Setup

### Option 1: Google Sheets Email (Already in code)
- Edit the email address in Apps Script
- Emails sent automatically on each submission

### Option 2: Tally.so Notifications
- Go to form settings in Tally
- Enable email notifications
- Add your email address

### Option 3: Zapier (Advanced)
- Connect Google Sheets to Gmail/Slack
- Create automated workflows
- Free tier available

---

## 🎉 You're Ready to Launch!

Once everything is checked, you're live! Share your URL:
- Main site: `https://www.voltsave.ai`
- Or GitHub URL: `https://YOUR-USERNAME.github.io/voltsave-website/`

Good luck with your launch! 🚀
