chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Getting social card metadata for ' + tab.url);
  chrome.tabs.executeScript(null, {
    file: 'extract-metadata.js'
  });
});

chrome.runtime.onMessage.addListener(function(details, sender, sendResponse) {
  console.log('Received:', details);
});