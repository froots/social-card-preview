var TWITTER_KEYS = [
  'twitter:card',
  'twitter:site',
  'twitter:site:id',
  'twitter:creator',
  'twitter:title',
  'twitter:description',
  'twitter:image',
  'twitter:image:alt'
]

function checkMetaDataTableValues (c, fixture, keys) {
  keys.forEach(function (key) {
    c.expect.element('[data-meta-value="' + key + '"]').text.to.equal(fixture[key])
  })
}

module.exports = {
  'Before metadata is loaded, it shows a loading indicator': function (c) {
    c.init()
    c.waitForElementVisible('.loading', 1000)
    c.expect.element('.loading').text.to.equal('Loading...')
    c.end()
  },

  'For a page with no metadata at all, it displays a message': function (c) {
    var initApp = c.globals.initApp

    c.init()
    c.execute(initApp, [{}])
    c.waitForElementVisible('.c-MetaData', 1000)
    c.expect.element('.c-MetaData').text.to.equal('This page contains no social card meta data')
    c.end()
  },

  'For a page with empty metadata values, it displays the correct meta data values': function (c) {
    var initApp = c.globals.initApp
    var metaData = c.globals.fixtures.twitter.empty

    c.init()
    c.execute(initApp, [metaData])
    c.waitForElementVisible('.c-MetaDataTable', 1000)
    checkMetaDataTableValues(c, metaData.metaData, TWITTER_KEYS)
    c.end()
  },

  'For a page with full Twitter metadata values, it displays the values in the table': function (c) {
    var initApp = c.globals.initApp
    var metaData = c.globals.fixtures.twitter.full

    c.init()
    c.execute(initApp, [metaData])
    c.waitForElementVisible('.c-MetaDataTable', 1000)
    checkMetaDataTableValues(c, metaData.metaData, TWITTER_KEYS)
    c.end()
  }
}
