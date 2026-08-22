import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  let connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!connectionString) {
    console.warn("⚠️ WARNING: DATABASE_URL (or POSTGRES_URL) is not set in the environment variables!");
  } else {
    // Fix node-postgres pg v8 SSL warning on Vercel by ensuring sslmode=verify-full is used
    if (
      connectionString.includes("sslmode=require") ||
      connectionString.includes("sslmode=prefer") ||
      connectionString.includes("sslmode=verify-ca")
    ) {
      connectionString = connectionString
        .replace("sslmode=require", "sslmode=verify-full")
        .replace("sslmode=prefer", "sslmode=verify-full")
        .replace("sslmode=verify-ca", "sslmode=verify-full");
    }
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
