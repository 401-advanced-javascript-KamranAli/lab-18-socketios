const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;

socket.on('file-write', data => {
  writeFile(data).then(data => {
    socket.emit('file-save', data);
  });
});

const writeFile = (data) => {
  console.log(data);
  return fs.writeFile('test.txt', data);
};


