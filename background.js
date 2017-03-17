var metaDataCallback = null;

function getSocialCardMetaData(callback) {
  console.log('Getting social card metadata');
  metaDataCallback = callback;
  chrome.tabs.executeScript(null, {
    file: 'extract-metadata.js'
  });
}

chrome.runtime.onMessage.addListener(function(details, sender, sendResponse) {
  console.log('Received:', details);
  metaDataCallback(details);
});