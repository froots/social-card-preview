const defaults = {}

export const UPDATE_METADATA = 'UPDATE_METADATA'

function metaDataStore (state, emitter) {
  state.metaData = Object.assign({}, defaults)

  emitter.on(UPDATE_METADATA, (metaData) => {
    state.metaData = Object.assign({}, state.metaData, metaData)
    emitter.emit('render')
  })
}

export default metaDataStore
