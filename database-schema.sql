-- Enable RLS (Row Level Security)
-- This should be run in your Supabase SQL editor

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL, -- in cents
  tier TEXT,
  category TEXT DEFAULT 'cybersecurity',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  service_id INTEGER REFERENCES services(id),
  service_name TEXT NOT NULL,
  amount INTEGER NOT NULL, -- in cents
  stripe_checkout_id TEXT UNIQUE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled', 'refunded')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reports table (for delivered services)
CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  service_id INTEGER REFERENCES services(id),
  report_title TEXT,
  download_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert sample services
INSERT INTO services (name, description, price, tier, category) VALUES
('CIS Basic Controls', 'Essential cybersecurity controls implementation', 249900, 'basic', 'cis'),
('CIS Intermediate Hardening', 'Comprehensive security hardening package', 499900, 'intermediate', 'cis'),
('CIS Full Enterprise Defense', 'Complete enterprise security implementation', 999900, 'enterprise', 'cis'),
('Web Application Penetration Testing', 'OWASP Top 10 security assessment', 349900, 'standard', 'pentest');

-- Enable RLS on tables
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Users can only see their own orders
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only see their own reports
CREATE POLICY "Users can view own reports" ON reports
  FOR SELECT USING (auth.uid() = user_id);

-- Services are publicly readable
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Services are publicly readable" ON services
  FOR SELECT USING (true); 