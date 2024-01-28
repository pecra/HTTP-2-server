const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('/path/to/private-key.pem'),
  cert: fs.readFileSync('/path/to/certificate.pem')
});

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  console.log('Request received:', headers);
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello, World!</h1>');
});

const ipAddress = 'x.y.z.w'; // Zamijenite s vašom stvarnom IP adresom
const port = 3000;

server.listen(port, ipAddress, () => {
  console.log(`Server listening on https://${ipAddress}:${port}`);
});
