vertx.createHttpServer().requestHandler(function (req) {
    req.response().putHeader("content-type", "text/html").end("<html><body><h1>Hello from vert.x from JS!</h1></body></html>");
}).listen(8082);