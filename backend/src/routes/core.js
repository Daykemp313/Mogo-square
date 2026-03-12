import { Router } from "express";
import { query } from "../db.js";

const router = Router();

router.get("/districts", async (_req, res) => {
  const rows = await query(`SELECT id, name, icon, weekly_volume, creator_count FROM districts ORDER BY name ASC`);
  res.json(rows);
});

router.get("/creators", async (_req, res) => {
  const rows = await query(`SELECT id, display_name, district, level, bio, wallet_balance FROM users ORDER BY wallet_balance DESC LIMIT 25`);
  res.json(rows);
});

router.get("/deals", async (_req, res) => {
  const rows = await query(`SELECT id, actor_handle, district, activity, amount, created_at FROM deals ORDER BY created_at DESC LIMIT 50`);
  res.json(rows);
});

router.get("/marketplace", async (_req, res) => {
  const rows = await query(`SELECT id, title, seller_name, district, price, stock FROM listings ORDER BY created_at DESC LIMIT 50`);
  res.json(rows);
});

router.get("/leaderboards", async (_req, res) => {
  const rows = await query(`
    SELECT district,
           display_name,
           wallet_balance,
           ROW_NUMBER() OVER (PARTITION BY district ORDER BY wallet_balance DESC) AS rank
    FROM users
    ORDER BY district, rank
  `);
  res.json(rows);
});

export default router;
