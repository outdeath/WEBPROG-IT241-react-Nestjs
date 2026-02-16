# Guestbook App - React + Nest.js + Supabase

A full-stack guestbook application with React frontend, NestJS backend, and Supabase database.

## 🚀 Live Demo

- **Production**: [https://webprog-pair.vercel.app](https://webprog-pair.vercel.app)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Vercel account (for deployment)

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/outdeath/WEBPROG-IT241-react-Nestjs.git
cd WEBPROG-IT241-react-Nestjs/my-profile
```

### 2. Setup Supabase Database

1. Go to your Supabase project: https://vgtoydxfvyfoczhlssdc.supabase.co
2. Create a new table called `guestbook` with the following schema:

```sql
CREATE TABLE guestbook (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access
CREATE POLICY "Allow public read access" ON guestbook
  FOR SELECT TO anon USING (true);

CREATE POLICY "Allow public insert access" ON guestbook
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public delete access" ON guestbook
  FOR DELETE TO anon USING (true);
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file (already created with your credentials):
```
SUPABASE_URL=https://vgtoydxfvyfoczhlssdc.supabase.co
SUPABASE_KEY=your_anon_key_here
```

### 4. Setup Frontend

```bash
cd ../frontend
npm install
```

The `.env` and `.env.production` files are already configured.

### 5. Run Locally

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
# Backend runs on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

Visit http://localhost:5173 to see the app!

## 🌐 Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from root my-profile directory
cd my-profile
vercel

# For production deployment
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `my-profile`
4. Add environment variables in Vercel dashboard:
   - `SUPABASE_URL`: https://vgtoydxfvyfoczhlssdc.supabase.co
   - `SUPABASE_KEY`: your_anon_key
5. Deploy!

### Environment Variables in Vercel

Make sure to set these in your Vercel project settings:
- `SUPABASE_URL`
- `SUPABASE_KEY`

## 📁 Project Structure

```
my-profile/
├── backend/              # NestJS API
│   ├── api/
│   │   └── index.ts     # Vercel serverless entry point
│   ├── src/
│   │   ├── guestbook.controller.ts
│   │   ├── guestbook.service.ts
│   │   └── app.module.ts
│   └── package.json
├── frontend/            # React + Vite
│   ├── src/
│   │   ├── App.jsx     # Main component
│   │   └── main.jsx
│   └── package.json
└── vercel.json         # Vercel configuration
```

## 🔧 API Endpoints

- `GET /api/guestbook` - List all guestbook entries
- `POST /api/guestbook` - Create new entry
  ```json
  {
    "name": "John Doe",
    "message": "Great app!"
  }
  ```
- `DELETE /api/guestbook/:id` - Delete an entry

## 💡 Features

- ✅ Sign guestbook with name and message
- ✅ View all guestbook entries
- ✅ Delete entries
- ✅ Real-time updates
- ✅ Responsive design
- ✅ CORS enabled
- ✅ Deployed on Vercel

## 🐛 Troubleshooting

### 404 Error on Vercel
- Make sure the `vercel.json` is properly configured
- Verify environment variables are set in Vercel dashboard
- Check build logs for errors

### CORS Issues
- Backend has CORS enabled for all origins
- Check if the API URL in frontend matches your deployment

### Database Connection Issues
- Verify Supabase credentials
- Check if the table exists and has proper RLS policies
- Ensure the anon key has proper permissions

## 📝 Notes for Final Project

This guestbook app serves as a foundation. You can extend it with:
- User authentication
- Edit functionality
- Pagination
- Search/filter
- Rich text editor
- Image uploads
- Comments/replies
- Rating system
- Admin dashboard

## 📄 License

MIT
