import { UPDATE_METADATA } from '../stores/metaDataStore'

export default function globalInit (state, emitter) {
  const w = (global || window)
  emitter.on('DOMContentLoaded', onLoad)

  function onLoad () {
    if (w.chrome === undefined ||
      w.chrome.runtime === undefined ||
      w.chrome.runtime.getBackgroundPage === undefined) {
      w.updateMetaData = updateMetaData
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
