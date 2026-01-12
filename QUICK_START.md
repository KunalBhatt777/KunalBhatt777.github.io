# ⚡ Quick Start Guide

Get your portfolio running in 3 simple steps!

## 🎯 Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (React, Vite, Tailwind CSS, etc.)

## 🎨 Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open at: **http://localhost:5173**

The page will automatically reload when you make changes!

## 🚀 Step 3: Deploy to GitHub Pages

When you're ready to publish:

```bash
git add .
git commit -m "Deploy my awesome portfolio"
git push origin main
```

Your site will be live at: **https://kunalbhatt777.github.io**

---

## 📝 Customizing Your Portfolio

### Update Your Information

Edit the file: `src/data/portfolioData.js`

```javascript
export const personalInfo = {
  name: "Your Name",           // Change this
  email: "your@email.com",     // Change this
  phone: "+1 (123)456-7890",   // Change this
  // ... update all fields
};
```

### Change Colors

Edit: `tailwind.config.js`

```javascript
colors: {
  primary: '#F85C70',  // Your brand color
}
```

### Update Profile Picture

Replace these files in `portfolio/assets/imgs/`:
- `avatar.png` - Your photo
- `icon.png` - Website icon

---

## 🛠️ Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🎓 Project Structure

```
src/
├── components/        # React components
│   ├── Hero.jsx      # Landing section
│   ├── About.jsx     # About section
│   ├── Resume.jsx    # Resume section
│   ├── Projects.jsx  # Projects showcase
│   └── ...
├── data/
│   └── portfolioData.js  # 👈 Edit this to update content
└── App.jsx           # Main app
```

---

## 💡 Tips

1. **Always test locally** before deploying:
   ```bash
   npm run build
   npm run preview
   ```

2. **Save your work frequently**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```

3. **Check for errors** in the browser console (F12)

---

## 🆘 Need Help?

- **Build fails?** → Check the terminal for error messages
- **Page is blank?** → Open browser console (F12) for errors
- **Changes not showing?** → Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🎉 You're All Set!

Your modern, professional portfolio is ready to impress!

For detailed instructions, see:
- `README.md` - Full documentation
- `DEPLOYMENT_GUIDE.md` - Deployment instructions

**Happy coding!** 🚀

