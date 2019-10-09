const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;

const fileReading = () => {
  return fs.readFile(process.argv[2], { encoding: 'utf8' });
};
fileReading().then(data => {
  socket.emit('file-read', data);
});
