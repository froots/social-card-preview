module.exports = {
  'For a page using a Twitter summary card and basic required metadata, it previews the card': function (c) {
    var metaData = c.globals.fixtures.twitter.summary
    var pg = c.page.metaData()

    pg.startExtension(metaData)
    pg.waitForElementVisible('@cardPreviewTwitter', 1000)
    pg.expect.element('[data-card-value="twitter:title"]').text.to.equal(metaData.metaData['twitter:title'])
    pg.expect.element('[data-card-value="twitter:description"]').text.to.equal(metaData.metaData['twitter:description'])

    c.end()
  }
}
