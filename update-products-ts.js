const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'products.json');
const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

const publicProductDir = path.join(__dirname, 'public', 'product');

const newProducts = data.products.map(p => {
  const handle = p.handle;
  const dir = path.join(publicProductDir, handle);
  
  let localImages = [];
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => !f.startsWith('.'));
    // Sort files by number if they are named 1.png, 2.png, etc.
    files.sort((a, b) => parseInt(a) - parseInt(b));
    localImages = files.map(f => `/product/${handle}/${f}`);
  }

  // Use the first local image as the main image, or fallback
  const mainImage = localImages.length > 0 ? localImages[0] : '';

  // Extract a short description by stripping HTML
  let description = p.body_html.replace(/<[^>]*>?/gm, '').trim();
  if (description.length > 100) {
    description = description.substring(0, 80) + "...";
  }

  return {
    id: p.id,
    name: p.title,
    handle: p.handle,
    price: "$" + p.variants[0].price,
    description: description,
    image: mainImage,
    images: localImages
  };
});

// Write to src/data/products.ts
const tsContent = `export interface Product {
  id: number;
  name: string;
  handle: string;
  price: string;
  description: string;
  image: string;
  images: string[];
}

export const products: Product[] = ${JSON.stringify(newProducts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'products.ts'), tsContent);
console.log('src/data/products.ts generated successfully.');
