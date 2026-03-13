INSERT INTO districts (name, icon, creator_count, weekly_volume) VALUES
('Art, Sports & Entertainment', '🎭', 1320, 2400000),
('Fashion', '👗', 980, 1200000),
('Financial', '💹', 640, 3800000),
('Technology', '💻', 1580, 5100000)
ON CONFLICT DO NOTHING;

INSERT INTO users (email, password_hash, display_name, district, level, bio, wallet_balance) VALUES
('kendrick@mogosquare.com', '$2a$10$dummy', 'Kendrick Lamar', 'Art, Sports & Entertainment', 'Mogul', 'Producer and storyteller.', 18450),
('kim@mogosquare.com', '$2a$10$dummy', 'Kim Kardashian', 'Fashion', 'Tycoon', 'Curating premium comfortwear.', 32990),
('mark@mogosquare.com', '$2a$10$dummy', 'Mark Cuban', 'Financial', 'Entrepreneur', 'Evaluating high-growth ventures.', 50120)
ON CONFLICT DO NOTHING;

INSERT INTO deals (actor_handle, district, activity, amount) VALUES
('@beatstreetstudio', 'Entertainment', 'Sold 120 track licenses', 5400),
('@denimavenue', 'Fashion', 'Launched avatar skin drop', 3200),
('@dollarblvd', 'Financial', 'Investor pitch accepted', 10000)
ON CONFLICT DO NOTHING;
