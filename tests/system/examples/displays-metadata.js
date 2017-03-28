module.exports = {
  'For a page with no metadata, it displays the correct meta data values': function (c) {
    var initApp = c.globals.initApp
    var metaData = c.globals.fixtures.twitter.empty

    c.init()
    c.execute(initApp, [metaData])
    c.waitForElementVisible('.c-MetaDataTable', 1000)
    c.expect.element('[data-meta-value="twitter:card"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:site"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:title"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:description"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:image"]').text.to.equal('')
    c.expect.element('[data-meta-value="twitter:alt"]').text.to.equal('')
    c.end()
  }
}
