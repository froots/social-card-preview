module.exports = {
  'For a page with no metadata, it displays the correct meta data values': function(client) {
    client
      .url(client.launchUrl)
      .waitForElementVisible('.c-MetaDataTable', 1000);

    client.expect.element('[data-meta-value="twitter:card"]').text.to.equal('');
    
    client.end();
  }
}
