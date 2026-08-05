import { execSync } from 'child_process';

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL;

if (url) {
  console.log("Database URL found. Pushing schema...");
  try {
    execSync('npx prisma db push --accept-data-loss', { stdio: 'inherit' });
  } catch (err) {
    console.error("Failed to push database schema:", err.message);
    process.exit(1);
  }
} else {
  console.warn("⚠️ WARNING: No database URL found in environment variables. Skipping prisma db push.");
  console.warn("⚠️ If you are deploying to production, please ensure your database connection string is set in Vercel!");
}
