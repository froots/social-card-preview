import { UPDATE_METADATA } from '../stores/metaDataStore'

export default function globalInit (state, emitter) {
  const g = global || window
  g.init = (metaData) => {
    emitter.emit(UPDATE_METADATA, metaData)
  }
}
