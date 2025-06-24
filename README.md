# 🔐 SentinelStack Security

A professional cybersecurity consulting business website built with Next.js 14, Supabase, and Stripe integration.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, TailwindCSS
- **Authentication**: Supabase Auth with Google OAuth
- **Payments**: Stripe Checkout integration
- **Database**: Supabase PostgreSQL
- **Animations**: Framer Motion
- **Responsive**: Mobile-first design
- **SEO**: Next.js SEO optimizations

## 🛡️ Services Offered

### CIS Implementation Packages
- **Tier 1**: Basic Controls - Essential security baseline
- **Tier 2**: Intermediate Hardening - Enhanced protection
- **Tier 3**: Full Enterprise Defense - Comprehensive security

### Web Application Penetration Testing
- OWASP Top 10 based assessments
- Black-box and Gray-box testing options
- Detailed reporting and remediation guidance

## 👥 Team

- **Noah Shaffer** - Full Stack Developer
- **Erwin Bruno** - Tech Lead & Offensive Security Operator
  - Certifications: CEH, PenTest+, Sec+, Net+, A+, ITF+, AZ-900, MS-900, OSHA 10-Hour
- **Mathew [Last Name]** - Business Analyst (ROI & Pricing)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, Framer Motion
- **Backend**: Supabase (Auth, Database, Storage)
- **Payments**: Stripe Checkout
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/noahwilliamshaffer/CyberConsult.git
cd CyberConsult
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure your environment variables in `.env.local`:
- Supabase project URL and keys
- Stripe publishable and secret keys
- NextAuth configuration

5. Run the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Set up Google OAuth in Authentication settings
3. Create the required database tables (see schema below)

### Stripe Setup
1. Create a Stripe account
2. Get your publishable and secret keys
3. Set up webhooks for payment processing

## 🗄️ Database Schema

```sql
-- Users table (handled by Supabase Auth)

-- Services table
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  tier TEXT,
  description TEXT,
  price DECIMAL(10,2),
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  service_id UUID REFERENCES services(id),
  stripe_checkout_id TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reports table
CREATE TABLE reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  service_id UUID REFERENCES services(id),
  download_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## 📄 License

This project is private and proprietary to SentinelStack Security.

## 🤝 Contributing

This is a private business website. For inquiries, contact the development team.

---

Built with ❤️ for cybersecurity excellence. 