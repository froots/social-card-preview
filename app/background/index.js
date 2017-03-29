/* global chrome */

var metaDataCallback = null

chrome.runtime.onMessage.addListener(function (details, sender, sendResponse) {
  console.log('Received:', details)
  metaDataCallback(details)
})

window.getSocialCardMetaData = function (callback) {
  console.log('Getting social card metadata')
  metaDataCallback = callback
  chrome.tabs.executeScript(null, {
    file: 'content.js'
  })
}
