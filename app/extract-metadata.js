/* global chrome, top */

if (window === top) {
  var twitter = getTwitterMetadata()
  chrome.runtime.sendMessage({ twitter: twitter })
}

function getMetaValue (name) {
  var element = document.querySelector('meta[name="' + name + '"]')
  return element && element.getAttribute('content')
}

function getTwitterMetadata () {
  return {
    card: getMetaValue('twitter:card'),
    title: getMetaValue('twitter:title'),
    description: getMetaValue('twitter:description'),
    image: getMetaValue('twitter:image'),
    alt: getMetaValue('twitter:image:alt'),
    site: getMetaValue('twitter:site')
  }
}
