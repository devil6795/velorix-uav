const fs = require('fs');
const path = require('path');
const https = require('https');

const dirs = [
  'public/media/capabilities'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, '..', dir), { recursive: true });
});

const downloads = [
  { url: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/capabilities/uav-platforms.jpg' }, // Dark drone frame
  { url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/capabilities/propulsion.jpg' }, // Engine / rotor
  { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/capabilities/flight-systems.jpg' }, // Electronics / PCB
  { url: 'https://images.unsplash.com/photo-1614064641913-6b71a2eabb37?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/capabilities/autonomy.jpg' }, // Autonomy/Code/Sensors
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/capabilities/payload.jpg' }, // Sensor array/lens
  { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop', dest: 'public/media/capabilities/mission.jpg' } // Mission system/architecture
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
  .then(() => console.log('All capability images downloaded!'))
  .catch(console.error);
