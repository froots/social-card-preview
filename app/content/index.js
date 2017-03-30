/* global chrome, top */

(function () {
  if (window === top) {
    var metaData = getMetaData()
    chrome.runtime.sendMessage({ metaData: metaData })
  }

  function getMetaData () {
    const keys = [
      'twitter:card',
      'twitter:site',
      'twitter:site:id',
      'twitter:creator',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'twitter:image:alt'
    ]

    const metaValues = {}

    keys.forEach(function (key) {
      metaValues[key] = getMetaValue(key)
    })

    return metaValues
  }

  function getMetaValue (name) {
    var element = document.querySelector('meta[name="' + name + '"]')
    return element && element.getAttribute('content')
  }
}())
