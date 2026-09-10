const fs = require('fs');
const path = require('path');
const https = require('https');

const dirs = [
  'public/media/hero',
  'public/media/uav',
  'public/media/technology',
  'public/media/rnd',
  'public/media/systems',
  'public/media/company'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, '..', dir), { recursive: true });
});

const downloads = [
  { url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop', dest: 'public/media/hero/hero-uav.jpg' }, 
  { url: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/uav/system-01.jpg' }, 
  { url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/technology/propulsion.jpg' }, 
  { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/technology/circuit.jpg' }, 
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/rnd/engineering.jpg' }, 
  { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/company/carbon.jpg' } 
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(__dirname, '..', dest));
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

Promise.all(downloads.map(d => download(d.url, d.dest)))
  .then(() => console.log('All images downloaded!'))
  .catch(console.error);

