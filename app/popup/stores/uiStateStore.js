import { UPDATE_METADATA } from '../actions'

function uiStateStore (state, emitter) {
  state.uiState = {
    loadingMetaData: true
  }

  emitter.on(UPDATE_METADATA, () => {
    state.uiState.loadingMetaData = false
    emitter.emit('render')
  })
}

export default uiStateStore
