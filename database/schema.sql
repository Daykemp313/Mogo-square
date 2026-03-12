CREATE TYPE user_level AS ENUM ('Dreamer', 'Hustler', 'Entrepreneur', 'Mogul', 'Tycoon', 'Baron', 'Titan');

CREATE TABLE districts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) UNIQUE NOT NULL,
  icon VARCHAR(8) NOT NULL,
  creator_count INT DEFAULT 0,
  weekly_volume NUMERIC(12,2) DEFAULT 0
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(180) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  display_name VARCHAR(120) NOT NULL,
  district VARCHAR(120) NOT NULL,
  level user_level NOT NULL DEFAULT 'Dreamer',
  bio TEXT DEFAULT '',
  wallet_balance NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_handle VARCHAR(120) NOT NULL,
  district VARCHAR(120) NOT NULL,
  activity TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID REFERENCES users(id) ON DELETE CASCADE,
  seller_name VARCHAR(120) NOT NULL,
  district VARCHAR(120) NOT NULL,
  title VARCHAR(180) NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
