# Personal Portfolio

A stunning, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring dark theme with cyan accents and smooth animations.

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Personal_Portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About me section
│   ├── Education.tsx   # Education section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   └── Contact.tsx     # Contact section
├── public/             # Static files (images, CV PDF, etc.)
└── ...
```

## ✨ Features

- **Dark Theme**: Professional dark theme with cyan accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Typing Effect**: Dynamic typing animation in hero section
- **Scroll Animations**: Elements animate on scroll
- **Contact Form**: Functional contact form
- **CV Viewer**: Modal to view/download CV

## 🎨 Customization Guide

### 1. Personal Information

Update your personal information in:
- **Hero.tsx**: Change name, roles, and description
- **About.tsx**: Update about me content
- **Contact.tsx**: Update contact details (phone, email, LinkedIn)

### 2. Education

Edit `components/Education.tsx` to update your education details:
```typescript
const educationData: EducationItem[] = [
  {
    degree: "Your Degree",
    institution: "Your Institution",
    period: "2020 - 2024",
    details: ["Detail 1", "Detail 2"],
  },
];
```

### 3. Skills

Update skills in `components/Skills.tsx`:
- Modify `skillCategories` array for technical skills
- Update `softSkills` array for soft skills

### 4. Projects

Edit `components/Projects.tsx` to add/update your projects:
```typescript
const projects: Project[] = [
  {
    title: "Your Project Title",
    period: "2024",
    description: "Project description",
    githubRepo: "https://github.com/...",
    liveDemo: "https://your-demo.com",
    techStack: ["React", "Node.js"],
    role: "Your Role",
  },
];
```

### 5. Images

1. Add your photo to `public/images/` folder
2. Update image paths in:
   - `components/Hero.tsx` (hero image)
   - `components/About.tsx` (about photo)

### 6. CV/Resume

1. Add your CV PDF to `public/` folder
2. Update the CV viewer in `components/Contact.tsx` to embed or link your PDF

### 7. Social Media Links

Update social media links in `components/Hero.tsx`:
```typescript
const socialLinks = [
  { icon: FaFacebook, href: "your-facebook-url", label: "Facebook" },
  // ... other links
];
```

## 🎯 Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **React Icons**: Icon library

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

Deploy easily on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

Simply connect your repository and deploy!

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

