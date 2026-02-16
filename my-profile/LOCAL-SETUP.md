# Local Development Setup

This guide will help you run the application locally.

## Prerequisites

- Node.js 18+
- npm

## Quick Start

### 1. Install Dependencies

```powershell
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment

Backend `.env` file is already configured at `backend/.env`:
```
SUPABASE_URL=https://vgtoydxfvyfoczhlssdc.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndG95ZHhmdnlmb2N6aGxzc2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExODE0NTEsImV4cCI6MjA4Njc1NzQ1MX0.hiA6BFRqPYbVekaF9vdWzeqUGr0J_pFc-vqzAPO4Yoc
```

Frontend `.env` file is already configured at `frontend/.env`:
```
VITE_API_URL=http://localhost:3000/api/guestbook
```

### 3. Setup Database

Before running the app, make sure you've created the Supabase table:

1. Open https://supabase.com
2. Go to your project SQL Editor
3. Run the SQL from `setup-database.sql`

### 4. Run the Application

**Option A: Using Two Terminals (Recommended)**

Terminal 1 - Backend:
```powershell
cd backend
npm run start:dev
```

Terminal 2 - Frontend:
```powershell
cd frontend
npm run dev
```

**Option B: Using npm-run-all (Advanced)**
```powershell
# From my-profile directory
npm run dev
```

### 5. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000/api/guestbook

## Testing

### Test Backend API

```powershell
# Get all entries
curl http://localhost:3000/api/guestbook

# Create an entry
curl -X POST http://localhost:3000/api/guestbook `
  -H "Content-Type: application/json" `
  -d '{"name":"Test User","message":"Hello World"}'

# Delete an entry (replace <id> with actual UUID)
curl -X DELETE http://localhost:3000/api/guestbook/<id>
```

### Test Frontend

1. Open http://localhost:5173 in your browser
2. Fill in your name and message
3. Click "Sign Guestbook"
4. Verify the entry appears in the list
5. Try deleting an entry

## Common Issues

### Port Already in Use

If port 3000 or 5173 is already in use:

**Backend:**
Edit `backend/src/main.ts` and change the port:
```typescript
await app.listen(3001); // Change to any available port
```

**Frontend:**
Edit `frontend/vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174 // Change to any available port
  }
})
```

### Module Not Found Errors

```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Database Connection Errors

1. Verify your Supabase URL and key are correct
2. Check if the table exists in Supabase
3. Ensure RLS policies are properly configured
4. Try accessing the Supabase API directly from their dashboard

## Development Tips

- Backend hot-reloads automatically on file changes
- Frontend hot-reloads automatically on file changes
- Check browser console for frontend errors
- Check terminal output for backend errors
- Use the Network tab in DevTools to debug API calls

## Building for Production

```powershell
# Build frontend
cd frontend
npm run build

# Build backend
cd backend
npm run build
```

The frontend will be built to `frontend/dist` and backend to `backend/dist`.

## Next Steps

Once everything works locally:
1. Push your code to GitHub
2. Follow the DEPLOYMENT.md guide to deploy to Vercel
3. Test the production deployment
4. Start building your Final Project features!
