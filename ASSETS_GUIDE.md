# Assets Placement Guide

This guide shows you where to place your visual assets for the Voltsave AI website.

## 📁 Directory Structure

```
Website Files/
├── assets/
│   ├── logo.png                    # Your Voltsave AI logo
│   ├── logo.svg                    # SVG version (optional)
│   ├── favicon.ico                 # Browser favicon
│   ├── demo-video.mp4              # Product demo video (MP4 format)
│   ├── demo-video.webm             # Product demo video (WebM format - optional)
│   ├── case-study-thumbnail.jpg    # Video thumbnail image
│   ├── incubator-1.png             # First incubator logo
│   ├── incubator-2.png             # Second incubator logo
│   ├── incubator-3.png             # Third incubator logo
│   └── ...
```

## 🎯 Required Assets

### 1. Company Logo
**Files needed:**
- `assets/logo.png` (recommended: 512x512px or 1024x1024px)
- `assets/logo.svg` (optional but recommended for scalability)
- `assets/favicon.ico` (32x32px for browser tab)

**Current status:** Placeholder - replace with actual logo

---

### 2. Demo Video
**Files needed:**
- `assets/demo-video.mp4` (primary format)
- `assets/demo-video.webm` (optional, for better browser compatibility)
- `assets/case-study-thumbnail.jpg` (1280x720px recommended)

**Specifications:**
- **Resolution:** 1920x1080px (1080p) or 1280x720px (720p)
- **Duration:** 30-90 seconds recommended
- **Format:** MP4 (H.264 codec)
- **File size:** Keep under 50MB for fast loading

**Current status:** Placeholder - add your restaurant case study video

---

### 3. Incubator/Partner Logos
**Files needed:**
- `assets/incubator-1.png` (transparent background recommended)
- `assets/incubator-2.png` (transparent background recommended)
- `assets/incubator-3.png` (transparent background recommended)

**Specifications:**
- **Format:** PNG with transparent background (or SVG)
- **Height:** 120-200px
- **Width:** Maintain aspect ratio
- **Color:** Original colors (will be grayscale by default, color on hover)

**Current status:** Placeholders - add logos from your 3 incubators

---

## 🎨 Optional/Future Assets

### 4. Additional Images (Future Enhancement)
- `assets/hero-bg.jpg` - Hero section background (1920x1080px)
- `assets/about-team.jpg` - Team photo for about page
- `assets/dashboard-screenshot.png` - Product interface screenshot

### 5. Favicon Set (For Better Browser Support)
- `assets/favicon-16x16.png`
- `assets/favicon-32x32.png`
- `assets/favicon-192x192.png`
- `assets/favicon-512x512.png`
- `assets/apple-touch-icon.png` (180x180px)

---

## 🔧 How to Add Your Assets

### Step 1: Prepare Your Files
1. Resize/optimize images using tools like:
   - **Images:** Photoshop, GIMP, or online tools (tinypng.com, squoosh.app)
   - **Videos:** HandBrake, Adobe Premiere, or online compressors

2. Use proper naming:
   - Lowercase letters
   - Hyphens instead of spaces
   - Descriptive names

### Step 2: Place Files in Assets Folder
1. Navigate to: `C:\Users\Dell\OneDrive\Desktop\Website Files\assets\`
2. Copy your prepared files into this folder
3. Ensure filenames match exactly what's referenced in the code

### Step 3: Verify Integration
1. Open the website: http://localhost:8000/index.html
2. Check if images/videos load correctly
3. Test on different browsers (Chrome, Firefox, Safari, Edge)
4. Test on mobile devices

---

## 📝 Current File References in Code

The website currently expects these files:

### In index.html:
- `assets/incubator-1.png` (line ~90 in Trusted By section)
- `assets/incubator-2.png` (line ~93)
- `assets/incubator-3.png` (line ~96)
- `assets/demo-video.mp4` (line ~120 in Case Study section)
- `assets/demo-video.webm` (line ~121)
- `assets/case-study-thumbnail.jpg` (line ~119)

### Future: Update logo reference
When you add your logo, you'll need to update the navigation:
1. Find: `<span class="logo-icon">⚡</span>`
2. Replace with: `<img src="assets/logo.png" alt="Voltsave AI" style="height: 40px;">`

---

## 🎬 Video Encoding Tips

For best performance, encode your demo video with these settings:

**Using HandBrake (Free):**
- Preset: "Web" > "Gmail Small"
- Video Codec: H.264
- Framerate: 30 FPS
- Quality: RF 23-25
- Resolution: 1280x720 or 1920x1080

**Using FFmpeg (Command Line):**
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -movflags +faststart demo-video.mp4
```

---

## ✅ Asset Checklist

Before going live, ensure you have:

- [ ] Company logo (PNG/SVG)
- [ ] Favicon (ICO file)
- [ ] Demo video (MP4 format)
- [ ] Video thumbnail image
- [ ] 3 incubator/partner logos
- [ ] All images optimized (compressed)
- [ ] Videos compressed for web
- [ ] Tested all assets load correctly
- [ ] Verified on mobile devices

---

## 🆘 Troubleshooting

**Problem: Images/videos not showing**
- Check file paths are correct (case-sensitive)
- Verify files are in the `assets/` folder
- Check browser console (F12) for 404 errors
- Clear browser cache (Ctrl+Shift+R)

**Problem: Video won't play**
- Ensure MP4 format with H.264 codec
- Check file isn't corrupted
- Try a different browser
- Verify file size isn't too large (>50MB)

**Problem: Images look pixelated**
- Use higher resolution source images
- Export at 2x size for retina displays
- Use SVG format for logos when possible

---

## 📞 Need Help?

If you need assistance with asset preparation or integration:
1. Check browser console for errors (F12 → Console tab)
2. Verify file paths and names match exactly
3. Test assets individually before integration

---

## 🎨 Recommended Image Formats

| Asset Type | Recommended Format | Alternative | Notes |
|-----------|-------------------|-------------|-------|
| Logo | SVG, PNG | - | Transparent background |
| Photos | JPG, WebP | PNG | Compressed for web |
| Icons | SVG | PNG | Vector preferred |
| Screenshots | PNG | JPG | PNG for UI elements |
| Videos | MP4 (H.264) | WebM | Keep under 50MB |
| Favicon | ICO | PNG | Multiple sizes |

---

**Last Updated:** March 3, 2026
