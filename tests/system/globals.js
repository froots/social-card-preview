var chromedriver = require('chromedriver')
var server = require('./server.js')
var fixtures = require('./fixtures.js')

module.exports = {
  before: function (done) {
    chromedriver.start()
    console.log('Starting server.')
    server.start(done)
  },
  after: function (done) {
    chromedriver.stop()
    console.log('Stopping server.')
    server.stop(done)
  },
  initApp: function (data) {
    window.updateMetaData(data)
  },
  fixtures: fixtures
}
