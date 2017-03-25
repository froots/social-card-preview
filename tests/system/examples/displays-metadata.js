module.exports = {
  'For a page with no metadata, it displays the correct meta data values': function(c) {
    var initApp = c.globals.initApp;
    var metaData = c.globals.fixtures.twitter.empty;

    c.init();
    c.execute(initApp, [metaData]);
    c.waitForElementVisible('.c-MetaDataTable', 1000);
    c.expect.element('[data-meta-value="twitter:card"]').text.to.equal('');
    c.end();
  }
}
