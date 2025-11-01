# Portfolio Setup Guide

## 🚀 Step-by-Step Guide to Building Your Stunning Portfolio

This guide will walk you through setting up and customizing your portfolio website.

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A code editor (VS Code recommended)

---

## Step 1: Install Dependencies

If you haven't already, install all required dependencies:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- React Icons

---

## Step 2: Run the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

---

## Step 3: Customize Your Portfolio

### 3.1 Update Personal Information

#### Hero Section (`components/Hero.tsx`)
- Replace "John Kendric" with your name (line 72)
- Update the roles array (line 7) with your professions
- Update social media links (lines 36-41)
- Add your photo:
  1. Place your photo in the `public` folder (e.g., `public/photo.jpg`)
  2. Uncomment lines 156-161 in `Hero.tsx`
  3. Replace `"/your-photo.jpg"` with your actual photo path

#### About Section (`components/About.tsx`)
- Update the title (line 61)
- Replace the description paragraphs (lines 63-74)
- Update your photo:
  1. Add your photo to the `public` folder
  2. Replace the placeholder div with an Image component

#### Contact Section (`components/Contact.tsx`)
- Update phone number (line 84)
- Update email address (line 99)
- Update LinkedIn profile (line 122)

### 3.2 Update Education

Edit `components/Education.tsx`:
- Update the `educationData` array (lines 13-26) with your academic background
- Add or remove education entries as needed

### 3.3 Update Skills

Edit `components/Skills.tsx`:
- Modify `skillCategories` array (lines 10-35) with your technical skills
- Update `softSkills` array (lines 37-44) with your soft skills

### 3.4 Update Projects

Edit `components/Projects.tsx`:
- Replace the `projects` array (lines 16-63) with your actual projects
- Update:
  - Project titles
  - Descriptions
  - GitHub repository links
  - Live demo URLs
  - Tech stacks
  - Roles
  - Periods

### 3.5 Add Your CV

1. **Add PDF to public folder:**
   - Place your CV PDF file in the `public` folder
   - Name it `cv.pdf` (or update the path in `components/Contact.tsx` line 263)

2. **Alternative - Display CV as HTML:**
   - If you prefer to show CV content directly, uncomment the HTML section in `Contact.tsx` (lines 299-348)
   - Remove or comment out the iframe section (lines 262-266)
   - Customize the CV content to match your information

---

## Step 4: Customize Theme Colors

### Tailwind Config (`tailwind.config.ts`)
- Primary dark color: `#0a0e27` (line 13)
- Accent cyan color: `#00f0ff` (line 17)
- Modify these colors to match your brand

### Global Styles (`app/globals.css`)
- Update CSS variables (lines 5-8) for different color schemes
- Customize scrollbar colors (lines 27-43)

---

## Step 5: Deploy Your Portfolio

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Option 2: Other Platforms
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use `next export` and deploy
- **Any hosting provider**: Build with `npm run build` and deploy the `out` folder

---

## Step 6: Features to Explore

### Animations
- Smooth scroll animations using Framer Motion
- Typing effect for roles in Hero section
- Hexagon glow effect for profile photo
- Hover effects on interactive elements

### Responsive Design
- Mobile-friendly navigation menu
- Responsive grid layouts
- Touch-friendly buttons and links

### Sections Included
1. **Hero Section** - Introduction with animated typing
2. **About Me** - Personal introduction with photo
3. **Education** - Academic background
4. **Skills** - Technical and soft skills
5. **Projects** - Portfolio projects with links
6. **Contact** - Contact form and CV viewer

---

## Troubleshooting

### PDF Not Loading
- Ensure your CV is in the `public` folder
- Check the filename matches the path in `Contact.tsx`
- Some browsers may block PDF iframes - use the download button instead

### Images Not Showing
- Ensure images are in the `public` folder
- Use relative paths starting with `/` (e.g., `/photo.jpg`)
- Check image file extensions are correct

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### TypeScript Errors
- These are usually configuration-related and should resolve when running the dev server
- Ensure all dependencies are installed correctly

---

## Next Steps

1. ✅ Customize all personal information
2. ✅ Add your photos
3. ✅ Update projects and skills
4. ✅ Add your CV PDF
5. ✅ Test on mobile devices
6. ✅ Deploy to production
7. ✅ Share your portfolio!

---

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Check Framer Motion docs: https://www.framer.com/motion/

Happy coding! 🎉




