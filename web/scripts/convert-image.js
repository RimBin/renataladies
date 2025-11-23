const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/about/Renata apie mane.png');
const outputPath = path.join(__dirname, '../public/images/about/renata-apie-mane.webp');

sharp(inputPath)
  .resize(1200, 1500, {
    fit: 'inside',
    withoutEnlargement: true
  })
  .webp({ quality: 90 })
  .toFile(outputPath)
  .then(info => {
    console.log('✅ Nuotrauka sėkmingai konvertuota!');
    console.log('Išvesties failas:', outputPath);
    console.log('Dydis:', Math.round(info.size / 1024) + ' KB');
    console.log('Matmenys:', info.width + 'x' + info.height + 'px');
  })
  .catch(err => {
    console.error('❌ Klaida:', err);
  });
