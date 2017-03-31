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

module.exports = {
  'Before metadata is loaded, it shows a loading indicator': function (c) {
    var pg = c.page.metaData()

    pg.startExtension()
    pg.waitForElementVisible('@loading', 1000)
    pg.expect.element('@loading').text.to.equal('Loading...')

    c.end()
  },

  'For a page with no metadata at all, it displays a message': function (c) {
    var pg = c.page.metaData()

    pg.startExtension({})
    pg.waitForElementVisible('@metaData', 1000)
    pg.expect.element('@metaData').text.to.equal('This page contains no social card meta data')

    c.end()
  },

  'For a page with empty metadata values, it displays the correct meta data values': function (c) {
    var metaData = c.globals.fixtures.twitter.empty
    var pg = c.page.metaData()

    pg.startExtension(metaData)
    pg.waitForElementVisible('@metaDataTable', 1000)
    pg.checkMetaDataTableValues(metaData.metaData, TWITTER_KEYS)

    c.end()
  },

  'For a page with full Twitter metadata values, it displays the values in the table': function (c) {
    var metaData = c.globals.fixtures.twitter.full
    var pg = c.page.metaData()

    pg.startExtension(metaData)
    pg.waitForElementVisible('@metaDataTable', 1000)
    pg.checkMetaDataTableValues(metaData.metaData, TWITTER_KEYS)

    c.end()
  }
}
