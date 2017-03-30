import { UPDATE_METADATA } from '../actions'

const defaults = {}

function metaDataStore (state, emitter) {
  state.metaData = Object.assign({}, defaults)

  emitter.on(UPDATE_METADATA, (metaData) => {
    state.metaData = Object.assign({}, state.metaData, metaData)
    emitter.emit('render')
  })
}

export default metaDataStore
