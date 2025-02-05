
// Création d'un serveur en local pour utiliser un browser comem affichage

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World, Kevin!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Le serveur tourne à l\'adresse http://127.0.0.1:3000/');
});
