# 🚀 Deployment Guide for GitHub Pages

This guide will walk you through deploying your React portfolio to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Repository: `KunalBhatt777.github.io`

## Step-by-Step Deployment Instructions

### Step 1: Verify Your Build Works Locally

Before deploying, make sure everything works:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` to verify the production build works correctly.

### Step 2: Configure GitHub Repository Settings

1. Go to your GitHub repository: `https://github.com/KunalBhatt777/KunalBhatt777.github.io`

2. Click on **Settings** (top menu)

3. In the left sidebar, click on **Pages**

4. Under "Build and deployment":
   - **Source**: Select `GitHub Actions`
   - This enables automatic deployment using the workflow file

### Step 3: Commit and Push Your Changes

```bash
# Check the status of your files
git status

# Add all new files
git add .

# Commit your changes
git commit -m "Redesign portfolio with React, Vite, and Tailwind CSS"

# Push to GitHub
git push origin main
```

**Note**: If you're on a different branch (like `master`), use:
```bash
git push origin master
```

### Step 4: Monitor the Deployment

1. Go to your repository on GitHub

2. Click on the **Actions** tab

3. You should see a workflow running called "Deploy to GitHub Pages"

4. Click on it to see the deployment progress

5. Wait for both jobs (build and deploy) to complete successfully ✅

### Step 5: Access Your Live Website

Once deployment is complete, your portfolio will be live at:

**https://kunalbhatt777.github.io/**

It may take 1-2 minutes for the site to be fully available after the first deployment.

## Troubleshooting

### Issue: Workflow Fails

**Solution**: Check the Actions tab for error messages. Common issues:
- Missing permissions: Ensure GitHub Actions has write permissions
- Build errors: Run `npm run build` locally to catch errors first

### Issue: Site Shows 404

**Solution**: 
1. Check that GitHub Pages is enabled in Settings > Pages
2. Verify the source is set to "GitHub Actions"
3. Wait a few minutes and refresh

### Issue: Images Not Loading

**Solution**: 
- Ensure images are in the `portfolio/assets/imgs/` folder
- Check that paths in the code match the actual file locations
- Verify images are committed to the repository

### Issue: Blank Page

**Solution**:
1. Open browser console (F12) to check for errors
2. Verify the build completed successfully
3. Check that `vite.config.js` has the correct `base` setting

## Making Updates

After the initial deployment, any time you want to update your portfolio:

```bash
# Make your changes to the code

# Test locally
npm run dev

# Build and test production version
npm run build
npm run preview

# Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main
```

The GitHub Action will automatically rebuild and redeploy your site!

## Alternative: Manual Deployment

If you prefer manual deployment using gh-pages:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build your project
2. Push the `dist` folder to the `gh-pages` branch
3. GitHub Pages will serve from that branch

**Note**: If using this method, change GitHub Pages source to "Deploy from a branch" and select `gh-pages` branch.

## Updating Content

To update your portfolio content without touching code:

1. Edit `src/data/portfolioData.js`
2. Update your information, projects, skills, etc.
3. Save the file
4. Commit and push:
   ```bash
   git add src/data/portfolioData.js
   git commit -m "Update portfolio content"
   git push origin main
   ```

## Custom Domain (Optional)

To use a custom domain like `kunalbhatt.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)

2. Add a `CNAME` file to the `public` folder with your domain:
   ```
   kunalbhatt.com
   ```

3. Configure DNS settings at your registrar:
   - Add a CNAME record pointing to `kunalbhatt777.github.io`

4. In GitHub Settings > Pages, add your custom domain

5. Enable "Enforce HTTPS"

## Performance Tips

- Images are automatically optimized during build
- Code is minified and bundled
- CSS is purged of unused styles
- Lazy loading is implemented for better performance

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Check the Actions tab for detailed error logs

---

**Congratulations!** 🎉 Your portfolio is now live on the internet!

