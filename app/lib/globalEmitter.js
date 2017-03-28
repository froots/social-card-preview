import { UPDATE_METADATA } from '../stores/metaDataStore'

export default function globalInit (state, emitter) {
  window.init = (metaData) => {
    emitter.emit(UPDATE_METADATA, metaData)
  }
}
