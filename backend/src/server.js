import http from 'http';
import router from './router.js';

const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((req, res) => {
    console.log(`> [${req.method}] ${req.url}`);    
    router(req, res);
})

server.listen(port, hostname, () => {  
    console.log(`Server running at http://${hostname}:${port}/`);
});