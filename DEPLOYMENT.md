# 🚀 Deployment Guide for Decentralized Rights Protocol Website

This guide will walk you through deploying the main site and all subdomains to Vercel.

## 📋 Prerequisites

- GitHub account (already done ✅)
- Vercel account (sign up at https://vercel.com)
- Domain access to decentralizedrights.com DNS settings

## 🎯 Repository Structure

Your repository is now set up with:

✅ **Main Site Files:**
- `app/page.tsx` - Homepage
- `app/not-found.tsx` - Custom 404 page
- `app/layout.tsx` - Root layout
- `app/globals.css` - Global styles
- `next.config.js` - Next.js configuration with rewrites
- `vercel.json` - Vercel routing configuration
- `package.json` - Dependencies
- `tailwind.config.ts` - Tailwind CSS config
- `tsconfig.json` - TypeScript config
- `postcss.config.js` - PostCSS config
- `.gitignore` - Git ignore file
- `README.md` - Documentation

## 🔧 Step 1: Deploy Main Site to Vercel

### 1.1 Import Repository

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select **NeonTechno/Dr-Website**
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (leave as root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install`

### 1.2 Environment Variables (if needed)

If you have any API keys or secrets, add them in the "Environment Variables" section.

### 1.3 Deploy

Click **"Deploy"** and wait for the build to complete (usually 2-3 minutes).

### 1.4 Get Deployment URL

Once deployed, Vercel will give you a URL like:
`https://dr-website-xxx.vercel.app`

## 🌐 Step 2: Configure Custom Domain

### 2.1 Add Domain to Vercel

1. Go to your project settings in Vercel
2. Click **"Domains"** tab
3. Add domain: `decentralizedrights.com`
4. Vercel will provide DNS records to add

### 2.2 Update DNS Settings

In your domain provider (Namecheap, Namespace, etc.):

**For Main Domain (decentralizedrights.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**OR if using CNAME:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Root Domain:**
```
Type: ANAME or ALIAS
Name: @
Value: cname.vercel-dns.com
```

### 2.3 Wait for DNS Propagation

DNS changes can take 24-48 hours, but usually propagate within 1-2 hours.

## 🔗 Step 3: Deploy Subdomains

You need to create **separate Vercel projects** for each subdomain:

### 3.1 Explorer Subdomain (explorer.decentralizedrights.com)

**Option A: Create Separate Repository**
1. Create a new repository called `Dr-Explorer`
2. Add a basic Next.js app with blockchain explorer functionality
3. Deploy to Vercel
4. Add custom domain: `explorer.decentralizedrights.com`

**Example basic page for explorer:**
```typescript
// app/page.tsx in Dr-Explorer repository
export default function Explorer() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">DRP Blockchain Explorer</h1>
      <p className="text-lg">View blockchain transactions and statistics</p>
      {/* Add your blockchain explorer components here */}
    </main>
  );
}
```

**DNS Configuration:**
```
Type: CNAME
Name: explorer
Value: cname.vercel-dns.com
```

### 3.2 API Subdomain (api.decentralizedrights.com)

**Option A: Create API Repository**
1. Create repository called `Dr-API`
2. Add Next.js API routes or Express server
3. Deploy to Vercel
4. Add custom domain: `api.decentralizedrights.com`

**Example basic API:**
```typescript
// app/api/status/route.ts in Dr-API repository
export async function GET() {
  return Response.json({
    status: "ok",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
}
```

**DNS Configuration:**
```
Type: CNAME
Name: api
Value: cname.vercel-dns.com
```

### 3.3 App Subdomain (app.decentralizedrights.com)

**Option A: Create App Repository**
1. Create repository called `Dr-App`
2. Add Next.js app with authentication and dashboard
3. Deploy to Vercel
4. Add custom domain: `app.decentralizedrights.com`

**Example basic dashboard:**
```typescript
// app/page.tsx in Dr-App repository
export default function Dashboard() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">DRP Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Add dashboard widgets here */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Total Rights</h3>
          <p className="text-2xl">1,234</p>
        </div>
      </div>
    </main>
  );
}
```

**DNS Configuration:**
```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
```

## ✅ Step 4: Verify Deployment

### 4.1 Test Main Site

Visit: `https://decentralizedrights.com`

Expected:
- ✅ Homepage loads with "Welcome to the Decentralized Rights Protocol"
- ✅ Dark mode works
- ✅ "Learn More" button is visible

Test 404:
- Visit: `https://decentralizedrights.com/random-page`
- ✅ Custom 404 page loads (not Vercel's default)

### 4.2 Test Subdomains

Once you deploy the subdomain projects:

**Explorer:**
- Visit: `https://explorer.decentralizedrights.com`
- ✅ Explorer page loads

**API:**
- Visit: `https://api.decentralizedrights.com/api/status`
- ✅ Returns JSON: `{"status": "ok"}`

**App:**
- Visit: `https://app.decentralizedrights.com`
- ✅ Dashboard loads

## 🔧 Vercel Project Settings

### Build & Output Settings

For the main site (Dr-Website):
```
Framework: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Node Version: 18.x
```

### Environment Variables

If you need any:
```
NEXT_PUBLIC_API_URL=https://api.decentralizedrights.com
NEXT_PUBLIC_EXPLORER_URL=https://explorer.decentralizedrights.com
```

## 🐛 Troubleshooting

### Issue: 404 on Main Site

**Solution:**
1. Check Vercel build logs
2. Ensure `output: 'standalone'` is in `next.config.js`
3. Verify `app/page.tsx` exists

### Issue: Custom 404 Not Working

**Solution:**
1. Ensure `app/not-found.tsx` exists
2. Rebuild and redeploy
3. Clear browser cache

### Issue: Subdomain Not Loading

**Solution:**
1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check if subdomain is added in Vercel project settings
4. Ensure SSL certificate is active in Vercel

### Issue: Build Failing

**Solution:**
1. Check build logs in Vercel
2. Run `npm install` and `npm run build` locally
3. Fix any TypeScript errors
4. Ensure all dependencies are in `package.json`

### Issue: Styles Not Loading

**Solution:**
1. Verify `tailwind.config.ts` is correct
2. Check `postcss.config.js` exists
3. Ensure `globals.css` is imported in `layout.tsx`
4. Rebuild and redeploy

## 📝 Next Steps

1. **Deploy the subdomains:**
   - Create Dr-Explorer, Dr-API, and Dr-App repositories
   - Add the basic code examples above
   - Deploy each to Vercel
   - Configure DNS

2. **Add Content:**
   - Create `/learn` page in main site
   - Add more pages as needed
   - Build out the blockchain explorer
   - Implement API endpoints
   - Create dashboard features

3. **Configure Analytics:**
   - Add Vercel Analytics
   - Set up monitoring
   - Configure error tracking

4. **Security:**
   - Enable Vercel's DDoS protection
   - Set up rate limiting for API
   - Add authentication for dashboard

## 📞 Support

If you encounter issues:
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs
- GitHub Repository: https://github.com/NeonTechno/Dr-Website

---

**Repository:** https://github.com/NeonTechno/Dr-Website
**Status:** ✅ Ready for deployment
**Last Updated:** November 7, 2025
