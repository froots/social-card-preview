module.exports = {
  'For a page with no metadata, it displays the correct meta data values': function(client) {
    client
      .url(client.launchUrl)
      .waitForElementVisible('.MetaData', 1000)
      .assert.containsText('[data-meta-value="twitter:card"]', 'No value')
      .end();
  }
}
