# Quick Deployment Guide

## Step 1: Setup Supabase Database

1. Go to https://supabase.com and open your project
2. Navigate to SQL Editor
3. Run the SQL script from `setup-database.sql`
4. Verify the table was created in Table Editor

## Step 2: Configure Vercel Environment Variables

In your Vercel project settings (Settings → Environment Variables), add:

```
SUPABASE_URL=https://vgtoydxfvyfoczhlssdc.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndG95ZHhmdnlmb2N6aGxzc2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExODE0NTEsImV4cCI6MjA4Njc1NzQ1MX0.hiA6BFRqPYbVekaF9vdWzeqUGr0J_pFc-vqzAPO4Yoc
```

## Step 3: Deploy

### Option A: Automatic Deployment (Recommended)
1. Push your code to GitHub
2. Vercel will automatically detect changes and redeploy
3. Wait for the build to complete

### Option B: Manual Deployment
```bash
vercel --prod
```

## Step 4: Test Your Deployment

Visit https://webprog-pair.vercel.app and:
1. Try adding a guestbook entry
2. Verify it appears in the list
3. Test the delete functionality
4. Check the Supabase dashboard to see the data

## Troubleshooting

### If you get 404 error:
1. Check that `vercel.json` is in the `my-profile` directory
2. Verify the build completed successfully
3. Check build logs in Vercel dashboard

### If you get CORS errors:
1. The backend is already configured for CORS
2. Make sure the API URL in frontend matches your domain

### If database operations fail:
1. Verify environment variables are set in Vercel
2. Check Supabase table has the correct RLS policies
3. Test the Supabase connection from Supabase API page

## Vercel Build Configuration

The project is configured to:
- Build frontend as static site
- Deploy backend API as serverless functions
- Route `/api/*` to backend
- Route all other requests to frontend

## Need Help?

Check the full README.md for detailed setup instructions and troubleshooting guides.
