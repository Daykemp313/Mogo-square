# Database setup

1. Create PostgreSQL database `mogosquare`.
2. Enable extension: `CREATE EXTENSION IF NOT EXISTS pgcrypto;`
3. Run schema:
   ```bash
   psql $DATABASE_URL -f database/schema.sql
   ```
4. Seed with sample data:
   ```bash
   psql $DATABASE_URL -f database/seed.sql
   ```
