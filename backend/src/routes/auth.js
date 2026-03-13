import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "../db.js";

const router = Router();

router.post("/signup", async (req, res) => {
  const { email, password, displayName, district } = req.body;
  if (!email || !password || !displayName) {
    return res.status(400).json({ error: "email, password and displayName are required" });
  }

  const hash = await bcrypt.hash(password, 10);
  try {
    const rows = await query(
      `INSERT INTO users (email, password_hash, display_name, district, level, wallet_balance)
       VALUES ($1, $2, $3, $4, 'Dreamer', 100)
       RETURNING id, email, display_name, district, level, wallet_balance`,
      [email, hash, displayName, district || "Technology"]
    );

    return res.status(201).json(rows[0]);
  } catch (err) {
    return res.status(409).json({ error: "Email already exists", details: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const rows = await query(`SELECT * FROM users WHERE email = $1`, [email]);
  const user = rows[0];
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ sub: user.id, district: user.district }, process.env.JWT_SECRET || "dev-secret", { expiresIn: "7d" });
  return res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      displayName: user.display_name,
      district: user.district,
      level: user.level,
      walletBalance: user.wallet_balance
    }
  });
});

export default router;
