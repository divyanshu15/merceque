import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

async function main() {
  const remoteUrl = process.argv[2];
  
  if (!remoteUrl) {
    console.error("❌ ERROR: Please provide your Vercel POSTGRES_URL as an argument.");
    console.error("Example: npx tsx seed-remote.ts 'postgres://user:pass@host/db'");
    process.exit(1);
  }

  console.log("Connecting to remote database...");
  const pool = new Pool({ connectionString: remoteUrl });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const dataPath = path.join(process.cwd(), 'src/data/products.json');
  
  if (!fs.existsSync(dataPath)) {
    console.log('No products.json found to migrate.');
    return;
  }

  const fileData = fs.readFileSync(dataPath, 'utf8');
  const products = JSON.parse(fileData);

  console.log(`Migrating ${products.length} products to remote database...`);

  for (const product of products) {
    await prisma.product.upsert({
      where: { handle: product.handle },
      update: {},
      create: {
        id: String(product.id),
        name: product.name,
        handle: product.handle,
        price: product.price,
        description: product.description,
        image: product.image || "",
        images: product.images || [],
        quantity: parseInt(product.quantity, 10) || 0,
        category: product.category || "individual",
      }
    });
  }
  
  console.log('✅ Remote database migration complete! Your Vercel site is now populated.');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("Migration failed:", e.message);
  process.exit(1);
});
