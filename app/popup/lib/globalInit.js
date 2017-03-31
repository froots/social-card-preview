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
            'twitter:site:id': '@jack',
            'twitter:creator': '@jack',
            'twitter:title': '30 Reasons Why Twitter is Bad For Your Health',
            'twitter:description': 'Should you even use Twitter any more? Will you grow fungus on your extremities if you do? Let\'s find out!',
            'twitter:image': 'http://www.placecage.com/500/300',
            'twitter:image:alt': 'This man used Twitter too much'
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
