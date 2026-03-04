# Voltsave AI Landing Page

A professional B2B SaaS landing page for Voltsave AI - an AI-powered energy management platform for UK & EU SMEs.

## 📋 Overview

This website is designed to:
- Capture qualified demo bookings from UK/EU SMEs
- Establish brand credibility and strategic positioning
- Support investor and partnership conversations
- Validate ICP (Ideal Customer Profile) and messaging before product launch

## 🎯 Target Audience

- **Primary:** UK/EU SMEs in energy-intensive sectors (hospitality, retail, light manufacturing)
- **Secondary:** Estate managers and multi-site operators

## 📁 Project Structure

```
Website Files/
├── assets/                 # Images, videos, and logos
│   ├── demo-video.mp4      # Product demo video
│   ├── incubator-1.png     # Partner logo 1
│   ├── incubator-2.png     # Partner logo 2
│   ├── incubator-3.png     # Partner logo 3
│   └── case-study-thumbnail.jpg  # Video thumbnail
├── index.html          # Main landing page
├── about.html          # About page
├── privacy.html        # Privacy Policy (GDPR compliant)
├── terms.html          # Terms of Service
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── ASSETS_GUIDE.md     # Guide for placing visual assets
```

## ✨ Features

### Homepage (index.html)
- Hero section with primary CTA: "Book a Demo"
- **NEW: Trusted By section** showcasing incubator partnerships
- Features showcase (6 key features)
- **NEW: Case Study section** with restaurant success story:
  - Embedded demo video player
  - 17% energy cost reduction
  - 14.7t CO₂ emissions saved
  - £5,000 project cost with 10-12 month payback
- Benefits section (4 key benefits)
- Demo booking form with lead capture fields:
  - First Name
  - Last Name
  - Work Email
  - Company Name
  - Industry
  - Location (City/Country)
- Trust indicators and statistics
- Mobile-responsive design
- Analytics integration ready

### About Page (about.html)
- Company mission and vision
- Core values
- Why energy management matters
- Commitment to SMEs

### Privacy Policy (privacy.html)
- GDPR compliant
- UK and EU regulations covered
- Clear data usage explanation
- User rights outlined
- Contact information for data requests

### Terms of Service (terms.html)
- Comprehensive legal terms
- User responsibilities
- Intellectual property rights
- Dispute resolution

## 🎨 Adding Your Visual Assets

Before deploying, add your branding assets to make the site yours:

### Required Files:
1. **Incubator/Partner Logos** (3 files):
   - Place in: `assets/incubator-1.png`, `incubator-2.png`, `incubator-3.png`
   - Format: PNG with transparent background
   - Size: Height ~120px, maintain aspect ratio

2. **Demo Video**:
   - Place in: `assets/demo-video.mp4`
   - Optional: `assets/demo-video.webm` (for better browser support)
   - Thumbnail: `assets/case-study-thumbnail.jpg`

3. **Company Logo** (Optional but recommended):
   - Update the lightning bolt emoji in navigation with your logo
   - Format: PNG or SVG
   - Size: ~40px height

📖 **See [ASSETS_GUIDE.md](ASSETS_GUIDE.md) for detailed instructions**

---

## 🚀 Deployment Instructions

### Option 1: Quick Deploy to Netlify (Recommended)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Navigate to your project folder and deploy:
   ```bash
   cd "C:\Users\Dell\OneDrive\Desktop\Website Files"
   netlify deploy --prod
   ```

3. Follow the prompts to connect your domain.

### Option 2: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd "C:\Users\Dell\OneDrive\Desktop\Website Files"
   vercel --prod
   ```

### Option 3: Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings

### Option 4: Traditional Web Hosting

1. Upload all files to your web hosting via FTP/SFTP
2. Ensure files are in the public_html or www directory
3. Configure your custom domain

## 🔧 Configuration

### 1. Google Analytics Setup

Replace `GA_MEASUREMENT_ID` in `index.html` (line 260):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
</script>
```

### 2. Form Integration

The demo form is ready to integrate with third-party services. Edit `script.js` (line 31 onwards) to connect:

**For HubSpot:**
```javascript
const portalId = 'YOUR_PORTAL_ID';
const formId = 'YOUR_FORM_ID';

const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        fields: [
            { name: 'firstname', value: formData.firstName },
            { name: 'lastname', value: formData.lastName },
            { name: 'email', value: formData.email },
            { name: 'company', value: formData.company },
            { name: 'industry', value: formData.industry },
            { name: 'location', value: formData.location }
        ]
    })
});
```

**For Tally.so:**
Simply replace the form with Tally's embed code.

**For Calendly:**
Replace form section with Calendly inline widget:
```html
<div class="calendly-inline-widget" data-url="https://calendly.com/your-link"></div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

### 3. Update Contact Information

Search and replace these placeholders:
- `hello@voltsave.ai` - General contact email
- `privacy@voltsave.ai` - Privacy inquiries
- `legal@voltsave.ai` - Legal inquiries

### 4. Custom Domain Setup

After deployment, configure your custom domain:
1. Add domain in your hosting provider's dashboard
2. Update DNS records to point to your hosting
3. Enable HTTPS/SSL certificate (usually automatic)

## ✅ PRD Requirements Checklist

- [x] Single primary CTA: "Book a Demo" above the fold
- [x] Lead capture form with all required fields
- [x] Homepage with features and benefits
- [x] **NEW: Case study section with real results**
- [x] **NEW: Trusted by section with incubator logos**
- [x] About page
- [x] Privacy Policy (GDPR compliant)
- [x] Terms of Service
- [x] Mobile responsive design
- [x] Analytics tracking setup (ready to configure)
- [x] Third-party CRM integration ready
- [x] No sensitive data storage (forms post to third-party)
- [x] Professional B2B SaaS design
- [x] Target audience messaging (UK/EU SMEs)
- [x] **NEW: Social proof and credibility indicators**

## 📊 Performance Optimization

The website is built for high Lighthouse scores:
- **Performance:** Optimized for fast loading
- **Accessibility:** Semantic HTML, ARIA labels
- **Best Practices:** HTTPS required, secure connections
- **SEO:** Meta tags, semantic structure

To achieve Lighthouse score > 90:
1. Enable HTTPS on your domain
2. Optimize images (convert to WebP if adding custom images)
3. Use CDN for static assets
4. Enable compression on your server

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css` (lines 12-24):
```css
:root {
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --secondary-color: #10b981;
    /* ... more colors */
}
```

### Fonts
Currently using Inter from Google Fonts. To change:
1. Update the font link in HTML files
2. Modify font-family in `styles.css`

### Content
- Edit HTML files directly for text changes
- Update industry options in the form dropdown
- Modify feature cards, benefits, and statistics

## 🔒 Security Features

- HTTPS enforcement ready
- GDPR compliant data handling
- No sensitive data storage
- Third-party security via reputable providers
- XSS protection through proper input handling

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🧪 Testing Checklist

Before going live:
- [ ] Test all navigation links
- [ ] Submit demo form (test integration)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify analytics tracking
- [ ] Check all legal pages load correctly
- [ ] Validate HTTPS certificate
- [ ] Test smooth scrolling and animations
- [ ] Verify responsive design at all breakpoints

## 📞 Support & Contact

For questions about this website implementation:
- Email: hello@voltsave.ai
- Update contact details in all HTML files after deployment

## 📄 License

© 2026 Voltsave AI. All rights reserved.

---

**Ready to Deploy!** Follow the deployment instructions above to get your landing page live. Don't forget to configure analytics and form integrations for full functionality.
