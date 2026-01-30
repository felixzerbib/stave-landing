# Stave Landing Page

Industrial-grade landing page for Stave - The Hadrian of Chemicals.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **stave-landing** (or your choice)
   - In which directory is your code located? **./** (just press Enter)
   - Want to override the settings? **N**

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

You'll get a live URL like: `https://stave-landing.vercel.app`

### Option B: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Done! Vercel auto-detects Next.js and handles everything.

## Custom Domain Setup

After deployment:

1. Go to your project in Vercel Dashboard
2. Settings → Domains
3. Add your domain (e.g., `stave.ai`)
4. Follow DNS instructions
5. SSL is automatic and free

## Project Structure

```
stave-landing/
├── app/
│   ├── globals.css      # Tailwind imports
│   ├── layout.js        # Root layout with metadata
│   └── page.js          # Main landing page component
├── public/              # Static assets (add images here)
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Adding Analytics

To add analytics (recommended for tracking conversions):

1. **Vercel Analytics** (easiest)
   ```bash
   npm install @vercel/analytics
   ```
   
   Add to `app/layout.js`:
   ```javascript
   import { Analytics } from '@vercel/analytics/react';
   
   // In the return statement:
   <body>
     {children}
     <Analytics />
   </body>
   ```

2. **Google Analytics**
   - Add tracking ID to environment variables
   - Install next-google-analytics package

## Form Submissions

Current form uses `alert()` for demo. For production:

### Option 1: Vercel Forms (Free)
```javascript
// In page.js, update handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify({ email, company }),
  });
};
```

### Option 2: Email Services
- **Resend** (recommended) - Modern email API
- **SendGrid** - Established provider
- **Mailgun** - Developer-friendly

### Option 3: Notion/Airtable
Send form data to a Notion database or Airtable base via API.

## Environment Variables

Create `.env.local` for secrets:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
RESEND_API_KEY=your-resend-api-key
```

## Customization

- **Colors**: Edit `tailwind.config.js` to change the orange accent color
- **Content**: All text is in `app/page.js`
- **Metadata**: Edit `app/layout.js` for SEO title/description
- **Font**: Add custom fonts in `app/layout.js`

## Production Checklist

- [ ] Test on mobile devices
- [ ] Set up form submission endpoint
- [ ] Add analytics tracking
- [ ] Configure custom domain
- [ ] Set up SEO metadata
- [ ] Add favicon (place in `app/` folder as `favicon.ico`)
- [ ] Test all CTAs and links
- [ ] Add OG image for social sharing

## Support

For Next.js issues: [nextjs.org/docs](https://nextjs.org/docs)
For Vercel issues: [vercel.com/docs](https://vercel.com/docs)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Vercel
