-- Run this in your Supabase SQL editor (same project as the mobile app)
CREATE TABLE IF NOT EXISTS waitlist (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  email       text        UNIQUE NOT NULL,
  name        text,
  source      text        DEFAULT 'website',
  created_at  timestamptz DEFAULT now()
);

-- No RLS needed — writes come from the service role key via the API route
-- But if you want to view entries safely via anon key later, add:
-- ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "service_role_only" ON waitlist USING (false);
