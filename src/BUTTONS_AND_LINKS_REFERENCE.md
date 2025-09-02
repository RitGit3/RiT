# 🔗 Buttons & Links Quick Reference

## 🎯 Where to Find Every Button and Link

### 📱 Navigation Buttons
| Button | Location | Line # | Action |
|--------|----------|--------|--------|
| Home | PortfolioHeader.tsx | 42-47 | Scrolls to #home |
| Projects | PortfolioHeader.tsx | 48-53 | Scrolls to #projects |
| About | PortfolioHeader.tsx | 54-59 | Scrolls to #about |
| Contact | PortfolioHeader.tsx | 60-65 | Scrolls to #contact |
| Resume (Header) | PortfolioHeader.tsx | 66-77 | Downloads /resume.pdf |

### 🏠 Hero Section Buttons
| Button | Location | Line # | Action |
|--------|----------|--------|--------|
| View My Work | PortfolioHero.tsx | 97-103 | Scrolls to #projects |
| Download Resume | PortfolioHero.tsx | 105-117 | Downloads /resume.pdf |

### 📱 Social Media Links
| Platform | Location | Line # | URL |
|----------|----------|--------|-----|
| GitHub (Hero) | PortfolioHero.tsx | 121-128 | https://github.com/yourusername |
| LinkedIn (Hero) | PortfolioHero.tsx | 129-136 | https://linkedin.com/in/yourusername |
| Email (Hero) | PortfolioHero.tsx | 137-142 | mailto:your.email@example.com |

### 🚀 Project Links
| Link Type | Location | Line # | Purpose |
|-----------|----------|--------|---------|
| Live Demo | PortfolioProjects.tsx | 107-115 | External project link |
| GitHub Code | PortfolioProjects.tsx | 116-124 | Project repository |
| View All Projects | PortfolioProjects.tsx | 133-141 | GitHub profile |

### 👤 About Section
| Button | Location | Line # | Action |
|--------|----------|--------|--------|
| Download Full Resume | PortfolioAbout.tsx | 74-85 | Downloads /resume.pdf |

### 📞 Contact Information
| Contact Type | Location | Line # | Link |
|--------------|----------|--------|------|
| Email | PortfolioContact.tsx | 42 | mailto:your.email@example.com |
| Phone | PortfolioContact.tsx | 47 | tel:+15551234567 |
| GitHub (Contact) | PortfolioContact.tsx | 108-115 | https://github.com/yourusername |
| LinkedIn (Contact) | PortfolioContact.tsx | 116-123 | https://linkedin.com/in/yourusername |

### 📝 Contact Form
| Element | Location | Line # | Function |
|---------|----------|--------|----------|
| Submit Button | PortfolioContact.tsx | 201-214 | Sends form data |
| Form Handler | PortfolioContact.tsx | 22-35 | Currently simulated |

### 🦶 Footer Links
| Link | Location | Line # | Action |
|------|----------|--------|--------|
| Home (Footer) | PortfolioFooter.tsx | 58-63 | Scrolls to #home |
| Projects (Footer) | PortfolioFooter.tsx | 66-71 | Scrolls to #projects |
| About (Footer) | PortfolioFooter.tsx | 74-79 | Scrolls to #about |
| Contact (Footer) | PortfolioFooter.tsx | 82-87 | Scrolls to #contact |
| Email (Footer) | PortfolioFooter.tsx | 96-100 | mailto:your.email@example.com |
| Phone (Footer) | PortfolioFooter.tsx | 102-106 | tel:+15551234567 |
| GitHub (Footer) | PortfolioFooter.tsx | 28-35 | https://github.com/yourusername |
| LinkedIn (Footer) | PortfolioFooter.tsx | 36-43 | https://linkedin.com/in/yourusername |
| Resume (Footer) | PortfolioFooter.tsx | 114-124 | Downloads /resume.pdf |

---

## 🔧 How to Update Each Type

### 📝 To Update Text Content:
```typescript
// PortfolioHero.tsx - Line 63
"Hi, I'm Rith"  // ← Change this

// PortfolioHero.tsx - Lines 8-13
const roles = [
  "Full-Stack Developer",  // ← Update these
  "UI/UX Designer",
  "Problem Solver", 
  "Tech Innovator"
];
```

### 🔗 To Update Social Media URLs:
```typescript
// Search for "yourusername" in all files and replace:
href="https://github.com/yourusername"     // ← Your GitHub
href="https://linkedin.com/in/yourusername" // ← Your LinkedIn
href="mailto:your.email@example.com"       // ← Your email
```

### 📱 To Update Contact Information:
```typescript
// PortfolioContact.tsx - Lines 42, 47, 53
value: "your.email@example.com",  // ← Your email
value: "+1 (555) 123-4567",       // ← Your phone
value: "Your City, Country",      // ← Your location
```

### 🚀 To Update Projects:
```typescript
// PortfolioProjects.tsx - Lines 5-36
const projects = [
  {
    title: "Your Project Name",           // ← Project title
    description: "Your description...",   // ← Project description
    image: "your-image-url",             // ← Project screenshot
    technologies: ["React", "Node.js"],  // ← Tech stack
    github: "your-github-repo-url",      // ← Repository link
    live: "your-live-demo-url",          // ← Live demo link
    category: "Web Development"          // ← Project category
  }
];
```

---

## 🎨 Button Styling Classes

### Primary Buttons (Blue):
```css
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium"
```

### Secondary Buttons (Outlined):
```css
className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium"
```

### Icon Buttons:
```css
className="text-gray-400 hover:text-blue-400 transition-colors p-2"
```

---

## 🔍 Quick Search Tips

**To find all buttons:**
- Search for: `button`
- Search for: `onClick`

**To find all links:**
- Search for: `href=`
- Search for: `<a`

**To find specific functionality:**
- Resume: Search for `resume.pdf`
- Email: Search for `mailto:`
- Phone: Search for `tel:`
- GitHub: Search for `github.com`
- LinkedIn: Search for `linkedin.com`
- Navigation: Search for `scrollToSection`

**To find form elements:**
- Search for: `input`
- Search for: `textarea`
- Search for: `form`
- Search for: `onSubmit`

---

## 📱 Mobile Menu (PortfolioHeader.tsx)

**Mobile Menu Toggle:**
- Lines 81-86: Hamburger menu button
- Lines 90-131: Mobile menu dropdown

**Mobile Menu Items:**
- Lines 93-128: Same navigation as desktop
- Includes mobile-specific styling and touch targets

---

## ⚡ Interactive Elements

### Hover Effects:
- **Project Cards:** Lift animation + border color change
- **Buttons:** Scale transform + color change
- **Links:** Color transition to blue

### Click Effects:
- **Navigation:** Smooth scroll to sections
- **Downloads:** Triggers file download
- **External Links:** Opens in new tab

### Form Interactions:
- **Input Focus:** Blue border highlight
- **Submit Button:** Loading spinner during submission
- **Success/Error:** Status message display

---

## 🚨 Common Issues & Solutions

**Resume download not working?**
- Add `/public/resume.pdf` file to your project
- Update filename in all resume download buttons

**Smooth scrolling not working?**
- Check that section IDs match: `#home`, `#projects`, `#about`, `#contact`
- Ensure `scroll-behavior: smooth` is in globals.css

**Social links not working?**
- Replace all instances of "yourusername" with your actual usernames
- Replace "your.email@example.com" with your real email

**Contact form not submitting?**
- Current form is simulated (lines 22-35 in PortfolioContact.tsx)
- Implement real backend API endpoint for production use