import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const srcLogo = path.resolve('logo.png');
const destLogo = path.resolve(publicDir, 'logo.png');

if (fs.existsSync(srcLogo) && !fs.existsSync(destLogo)) {
  fs.copyFileSync(srcLogo, destLogo);
  console.log('Copied logo.png to public/logo.png successfully');
}
