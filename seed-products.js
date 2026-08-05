const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

async function main() {
  const dataPath = path.join(__dirname, 'src/data/products.json')
  
  if (!fs.existsSync(dataPath)) {
    console.log('No products.json found to migrate.')
    return
  }

  const fileData = fs.readFileSync(dataPath, 'utf8')
  const products = JSON.parse(fileData)

  console.log(`Migrating ${products.length} products to database...`)

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
    })
  }
  
  console.log('Database migration complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
