import url from 'url';
import widgetController from './widgets/controller.js';

export default function router(req, res) {
    const reqUrl =  url.parse(req.url, true);
    
    // default response
    res.setHeader('content-Type', 'Application/json');
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    let statusCode = 404;
    let response = JSON.stringify({
        messge: 'The server does not know how to handle this request',
        request: req.url,
    });

    if (reqUrl.pathname.startsWith('/widgets')) {
        const {handled, code, body} = widgetController(req.method, reqUrl);
        if (handled) {
            statusCode = code;
            response = body;
        }
    }

    res.statusCode = statusCode;  
    res.end(response);
}
