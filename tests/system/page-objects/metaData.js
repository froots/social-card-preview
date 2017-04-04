var extensionCommands = require('./commands.js')

var metaDataCommands = {
  checkMetaDataTableValues: function (fixture, keys) {
    keys.forEach(function (key) {
      this.expect.element('[data-meta-value="' + key + '"]').text.to.equal(fixture[key])
    }.bind(this))
    return this
  }
}

module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  commands: [extensionCommands, metaDataCommands],
  elements: {
    loading: '.loading',
    metaData: '.c-MetaData',
    metaDataTable: '.c-MetaDataTable',
    cardPreviewTwitter: '.c-CardPreview--Twitter'
  }
}
