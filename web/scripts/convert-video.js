const { exec } = require('child_process');
const path = require('path');

const inputPath = path.join(__dirname, '../public/Video/Video.mov');
const outputPath = path.join(__dirname, '../public/Video/renata-about.mp4');

console.log('🎬 Pradedamas video konvertavimas...');
console.log('Įvesties failas:', inputPath);
console.log('Išvesties failas:', outputPath);

// Naudojame ffmpeg su optimizuotais nustatymais
const command = `ffmpeg -i "${inputPath}" -vcodec libx264 -crf 23 -preset medium -vf "scale=1280:-2" -acodec aac -b:a 128k -movflags +faststart "${outputPath}"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Klaida konvertuojant video:', error.message);
    console.error('\nJei neturite ffmpeg, įdiekite jį:');
    console.error('Windows: choco install ffmpeg');
    console.error('arba atsisiųskite iš: https://ffmpeg.org/download.html');
    return;
  }
  
  console.log('✅ Video sėkmingai konvertuotas į MP4!');
  console.log('Išvesties failas:', outputPath);
});
