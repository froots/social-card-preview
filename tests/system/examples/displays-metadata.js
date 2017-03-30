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
    c.expect.element('[data-meta-value="twitter:card"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:site"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:site:id"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:creator"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:title"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:description"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:image"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:image:alt"]').text.to.equal('')
    c.end()
  }
}
