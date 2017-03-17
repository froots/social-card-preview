function injectMetaData(data) {
  console.log('Got injected with', data);
  document.getElementById('app').textContent = JSON.stringify(data, null, 2);
}

function setBackground(backgroundPage) {
  backgroundPage.getSocialCardMetaData(injectMetaData);
}

function init() {
  chrome.runtime.getBackgroundPage(setBackground);
}

document.addEventListener('DOMContentLoaded', init);