/* global chrome */

var metaDataCallback = null

chrome.runtime.onMessage.addListener(function (details, sender, sendResponse) {
  metaDataCallback(details)
})

window.getSocialCardMetaData = function (callback) {
  metaDataCallback = callback
  chrome.tabs.executeScript(null, {
    file: 'content.js'
  })
}
