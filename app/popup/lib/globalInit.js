import { UPDATE_METADATA } from '../actions'

export default function globalInit (state, emitter) {
  const w = (global || window)
  emitter.on('DOMContentLoaded', onLoad)

  function onLoad () {
    if (w.chrome === undefined ||
      w.chrome.runtime === undefined ||
      w.chrome.runtime.getBackgroundPage === undefined) {
      w.updateMetaData = updateMetaData
      if (process.env.NODE_ENV === 'development') {
        updateMetaData({
          metaData: {
            'twitter:card': 'summary',
            'twitter:site': '@jack',
            'twitter:title': 'Card Title',
            'twitter:description': 'Card description',
            'twitter:image': 'http://placecage.com/500/300'
          }
        })
      }
    } else {
      w.chrome.runtime.getBackgroundPage((background) => {
        background.getSocialCardMetaData(updateMetaData)
      })
    }
  }

  function updateMetaData ({ metaData }) {
    emitter.emit(UPDATE_METADATA, metaData)
  }
}
