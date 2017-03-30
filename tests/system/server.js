var StaticServer = require('static-server')

var server = new StaticServer({
  rootPath: './assets',
  port: 8080,
  host: 'localhost'
})

server.on('response', function (req, res, err) {
  if (err) {
    console.error(err)
  }
})

module.exports = server
