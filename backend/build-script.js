import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Function to copy directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Function to copy file
function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

try {
  const buildDir = path.join(__dirname, 'build');
  
  // Create build directory
  fs.mkdirSync(buildDir, { recursive: true });

  // Copy directories
  console.log('Copying src...');
  copyDir(path.join(__dirname, 'src'), path.join(buildDir, 'src'));
  
  console.log('Copying config...');
  copyDir(path.join(__dirname, 'config'), path.join(buildDir, 'config'));
  
  console.log('Copying public...');
  copyDir(path.join(__dirname, 'public'), path.join(buildDir, 'public'));

  // Copy files
  console.log('Copying server.js...');
  copyFile(path.join(__dirname, 'server.js'), path.join(buildDir, 'server.js'));
  
  console.log('Copying package.json...');
  copyFile(path.join(__dirname, 'package.json'), path.join(buildDir, 'package.json'));
  
  console.log('Copying package-lock.json...');
  copyFile(path.join(__dirname, 'package-lock.json'), path.join(buildDir, 'package-lock.json'));

  // Copy .env.example if it exists
  if (fs.existsSync(path.join(__dirname, '.env.example'))) {
    console.log('Copying .env.example...');
    copyFile(path.join(__dirname, '.env.example'), path.join(buildDir, '.env.example'));
  }

  console.log('Build files copied successfully!');
} catch (error) {
  console.error('Error during build:', error);
  process.exit(1);
}