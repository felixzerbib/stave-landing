# Complete Setup & Deployment Guide

## Step-by-Step: Local Setup to Live Website

### STEP 1: Download Your Project

1. Download the `stave-landing` folder to your computer
2. Open Terminal (Mac) or Command Prompt (Windows)
3. Navigate to the folder:
   ```bash
   cd path/to/stave-landing
   ```

### STEP 2: Install Node.js (if you don't have it)

Check if you have Node.js:
```bash
node --version
```

If you don't see a version number:
- Go to [nodejs.org](https://nodejs.org)
- Download and install the LTS version
- Restart your terminal

### STEP 3: Install Dependencies

```bash
npm install
```

This installs Next.js, React, Tailwind, and all needed packages.
Takes 1-2 minutes.

### STEP 4: Run Locally

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
```

Open http://localhost:3000 in your browser. Your site is live locally!

---

## Deploy to Vercel (Get a Live URL)

### METHOD 1: Using Vercel CLI (Fastest)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login
```bash
vercel login
```

Choose your login method (GitHub, GitLab, email, etc.)

#### Step 3: Deploy
From your project folder:
```bash
vercel
```

Answer the prompts:
- **Set up and deploy?** → Y
- **Which scope?** → Select your account
- **Link to existing project?** → N
- **What's your project's name?** → stave-landing (or whatever you want)
- **In which directory is your code located?** → ./ (just press Enter)
- **Want to override the settings?** → N (just press Enter)

You'll get a URL like: `https://stave-landing-abc123.vercel.app`

#### Step 4: Deploy to Production
```bash
vercel --prod
```

This gives you your final production URL!

---

### METHOD 2: Using GitHub + Vercel Dashboard

#### Step 1: Create GitHub Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit"

# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/stave-landing.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login (use GitHub for easiest setup)
3. Click **"New Project"**
4. Click **"Import"** next to your GitHub repository
5. Click **"Deploy"**

That's it! Vercel auto-detects Next.js and deploys.

---

## Add Your Custom Domain

### After Deployment:

1. **In Vercel Dashboard**
   - Go to your project
   - Settings → Domains
   - Click "Add"
   - Enter your domain (e.g., `stave.ai`)

2. **Update Your DNS**
   
   Vercel will show you DNS records to add. In your domain registrar:
   
   **Option A: Use Nameservers (Recommended)**
   - Point nameservers to Vercel's
   
   **Option B: Add A Record**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   
   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. **Wait for SSL**
   - SSL certificate is automatic and free
   - Usually active within 1 hour

---

## Troubleshooting

### "npm: command not found"
→ Install Node.js from nodejs.org

### "Port 3000 is already in use"
→ Kill the process or use a different port:
```bash
npm run dev -- -p 3001
```

### "Module not found" errors
→ Delete node_modules and reinstall:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build fails on Vercel
→ Check the build logs in Vercel dashboard
→ Most common: missing dependencies or environment variables

---

## Next Steps After Deployment

### 1. Set Up Form Handling
Current form shows an alert. Replace with:
- **Resend** (email API) - easiest
- **Vercel Forms**
- **Notion/Airtable** integration

### 2. Add Analytics
```bash
npm install @vercel/analytics
```

In `app/layout.js`:
```javascript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 3. SEO Optimization
- Add `favicon.ico` to `app/` folder
- Create `app/opengraph-image.png` (1200x630px)
- Update metadata in `app/layout.js`

### 4. Performance
Your site should already score 90+ on Lighthouse, but you can:
- Optimize images (use Next.js Image component)
- Enable Vercel Speed Insights

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Building
npm run build        # Build for production
npm start            # Run production build locally

# Deployment
vercel               # Deploy preview
vercel --prod        # Deploy to production

# Cleaning
rm -rf .next         # Clear build cache
rm -rf node_modules  # Remove dependencies
```

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

Need help? The error messages are usually very clear and searchable.

---

## Estimated Timeline

- **Local setup**: 5 minutes
- **First deployment**: 10 minutes
- **Custom domain**: 1-2 hours (DNS propagation)
- **Total**: You can be live in 15 minutes!

Good luck with your launch! 🚀
