const http = require('http');
const url = require('url'); 

const PORT = 4000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

    console.log(`${req.method} ${path}`);
     
    if (path === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('X-Powered-By', 'plain-node-http');
        res.end('Hello World Try /greet?name=Jay or /header or POST to /data\n');
    }
    else if (path === '/greet' && req.method === 'GET') {
        const name = query.name || 'Guest';
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Hello, ${name}! Welcome to the Greet Page.\n`);
    }
    else if (path === '/json' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(req.headers, null, 2));
    }
    else if (path === '/data' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                message: 'Data received successfully',
                yourData: body
            }));
        });
    }
    else if (path === '/error') {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Simulated server error (500)');
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Page Not Found');
    }
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:4000`);
});