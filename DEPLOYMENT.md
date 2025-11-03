# Click Media - GitHub Pages Deployment

## 🚀 Deployment Instructions

Your Click Media website is ready for GitHub Pages deployment with working Formspree forms!

### Step 1: Build the Production Version

Run the following command in the `/app/frontend` directory:

```bash
cd /app/frontend
yarn build
```

This will create a `build` folder with all the optimized static files.

### Step 2: Deploy to GitHub Pages

#### Option A: Using the `build` folder directly

1. Go to your GitHub repository
2. Go to Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select the branch containing your `build` folder
5. Save

#### Option B: Using GitHub Actions (Recommended)

1. Push your code to GitHub
2. The `build` folder will be in your repository
3. In GitHub repo settings, go to Pages
4. Select the branch and `/build` folder
5. Your site will be live at: `https://[username].github.io/[repo-name]/`

### Step 3: Verify Forms Work

1. Once deployed, visit your site
2. Fill out the Workshop Registration form
3. Fill out the Booking form
4. Check clickmedia28@gmail.com for the submissions

## ✅ What's Working

- ✅ Full responsive website with animations
- ✅ Workshop registration form → sends to clickmedia28@gmail.com via Formspree
- ✅ Booking form → sends to clickmedia28@gmail.com via Formspree
- ✅ Photography portfolio page
- ✅ Video portfolio page
- ✅ Mobile-responsive design
- ✅ Smooth navigation and scrolling

## 📝 Important Notes

- The website uses HashRouter (`#/`) for GitHub Pages compatibility
- All forms are connected to Formspree (no backend needed)
- Forms will work immediately after deployment
- Free Formspree plan allows 50 submissions/month

## 🔧 If You Need to Update

1. Make changes to your code
2. Run `yarn build` again
3. Push the new build folder to GitHub
4. GitHub Pages will automatically update

## 📧 Form Endpoints

- Workshop Form: https://formspree.io/f/xnnordor
- Booking Form: https://formspree.io/f/mblpbopw

Both send to: clickmedia28@gmail.com
