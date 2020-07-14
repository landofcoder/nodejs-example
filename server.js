const http = require('http');
const express = require('express');
const name = require('./ha');

const hostname = 'localhost';
const port = 8017;

const app = express();

app.get('/', (req, res) => {
    let namesArr = ["Maine Coon", "Sphynx", "Toyger", "Balinese", "Burmese", "Russian Blue", "Turkish Van", "Exotic", "Selkirk Rex", "Korat"];
    let randomName = name.getRandomName(namesArr);
    res.send(`<h1>Name: <small>${ randomName }</small></h1><hr>`);
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!</h1><hr>');
});

server.listen(port, hostname, () => console.log(`Hello HaNguyenQuang, I am running at http://${ hostname }:${ port }/`));