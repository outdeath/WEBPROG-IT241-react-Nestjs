-- Create guestbook table
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

-- Optional: Create an index on created_at for better performance
CREATE INDEX idx_guestbook_created_at ON guestbook (created_at DESC);
