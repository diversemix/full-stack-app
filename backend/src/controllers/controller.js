function getWidgets(req) {
    var response = {
          widgets: [],
          count: 0,
    };

    return {
        handled: true,
        code: 200,
        body: JSON.stringify(response)
    }
}

export default function widgetsController(method, req) {
    console.log(` WidgetsController `);
    if (method === 'GET' && req.pathname === '/widgets') {
        return getWidgets(req);
    }
    return {handled: false};
 }