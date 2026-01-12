# Kunal Bhatt - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This portfolio showcases my work experience, education, projects, and skills in an interactive and visually appealing way.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Easy to Customize**: Well-organized code structure and data files

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git**

## 🔧 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KunalBhatt777/KunalBhatt777.github.io.git
cd KunalBhatt777.github.io
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
KunalBhatt777.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── portfolio/                  # Old portfolio files (can be archived)
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section component
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Hero.jsx           # Hero/landing section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Organizations.jsx  # Student organizations section
│   │   ├── Projects.jsx       # Projects showcase
│   │   └── Resume.jsx         # Resume section
│   ├── data/
│   │   └── portfolioData.js   # All portfolio content data
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # App entry point
├── .gitignore
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal information (name, email, phone, etc.)
- Work experience
- Education
- Skills and languages
- Projects
- Organizations

### Change Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#F85C70',  // Change this to your preferred color
      // Add more custom colors
    },
  },
}
```

### Update Images

Replace images in `portfolio/assets/imgs/` with your own:
- `avatar.png` - Your profile picture
- `icon.png` - Website favicon

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment.

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to `Settings` > `Pages`
   - Under "Build and deployment", select:
     - Source: `GitHub Actions`

2. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

3. **Wait for Deployment**:
   - Go to the `Actions` tab in your repository
   - Watch the deployment workflow complete
   - Your site will be live at `https://kunalbhatt777.github.io/`

### Method 2: Manual Deployment

```bash
npm run build
npm run deploy
```

This builds the project and deploys it using `gh-pages`.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (manual method)

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kunal Bhatt**
- LinkedIn: [Kunal Bhatt](https://www.linkedin.com/in/welcometokunalbhattsprofile/)
- Email: bhattkunal04@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ using React & Tailwind CSS

