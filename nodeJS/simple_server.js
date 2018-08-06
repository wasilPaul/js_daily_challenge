const http = require(`http`),
  server = http.createServer(engine)


server.listen(1555, function () {

})

function engine(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" })
  response.end(`Request from page: ${request.url}`)
}