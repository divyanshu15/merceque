const fs = require('fs');
const path = require('path');
const https = require('https');

const productsFile = path.join(__dirname, 'products.json');
const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

async function downloadAll() {
  for (const product of data.products) {
    const handle = product.handle;
    const dir = path.join(__dirname, 'public', 'product', handle);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    console.log(`Downloading images for ${handle}...`);
    let imgIndex = 1;
    for (const image of product.images) {
      const imgUrl = image.src;
      // Extract extension from url or default to .png
      const extMatch = imgUrl.match(/\.([a-zA-Z0-9]+)(\?|$)/);
      const ext = extMatch ? extMatch[1] : 'png';
      
      const filename = `${imgIndex}.${ext}`;
      const filepath = path.join(dir, filename);
      
      try {
        await downloadImage(imgUrl, filepath);
        console.log(`  Downloaded ${filename}`);
      } catch (err) {
        console.error(`  Error downloading ${imgUrl}:`, err.message);
      }
      imgIndex++;
    }
  }
  console.log('All downloads completed.');
}

downloadAll();
