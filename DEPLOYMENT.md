# Deployment Guide

## Netlify Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Connect to GitHub:**
   - Push your code to GitHub
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository

2. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `client/build`
   - **Node version:** 18 (or latest LTS)

3. **Environment Variables (if needed):**
   - Go to Site settings > Environment variables
   - Add any required environment variables

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your app

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Netlify:**
   - Go to Netlify dashboard
   - Drag and drop the `client/build` folder
   - Your site will be deployed instantly

## Important Files for Deployment

### `netlify.toml`
- Configures build settings and redirects
- Ensures proper routing for React Router

### `client/public/_redirects`
- Handles client-side routing
- Redirects all routes to index.html

### `client/src/index.js`
- Uses HashRouter for better static hosting compatibility
- Ensures routes work without server-side configuration

## Troubleshooting

### Page Not Found Errors
- Ensure `_redirects` file is in `client/public/`
- Verify `netlify.toml` is in the root directory
- Check that HashRouter is being used

### Build Failures
- Ensure all dependencies are installed
- Check Node.js version compatibility
- Verify build command in package.json

### API Issues
- For production, you'll need to deploy your backend separately
- Update API URLs to point to your production backend
- Consider using environment variables for API endpoints

## Alternative Deployment Options

### Vercel
- Similar to Netlify
- Excellent for React applications
- Automatic deployments from Git

### GitHub Pages
- Free hosting for static sites
- Requires HashRouter for routing
- Good for portfolio projects

### Heroku
- Full-stack deployment
- Can host both frontend and backend
- More complex setup but more control

## Environment Setup

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Production Server
```bash
NODE_ENV=production npm start
```

## Notes

- The app uses HashRouter for better static hosting compatibility
- All routes are handled client-side
- Backend API needs separate deployment for full functionality
- Static assets are served from `client/build` directory 