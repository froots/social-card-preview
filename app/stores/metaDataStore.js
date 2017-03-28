const defaults = {
  twitter: {
    'twitter:card': null,
    'twitter:site': null,
    'twitter:site:id': null,
    'twitter:creator': null,
    'twitter:creator:id': null,
    'twitter:title': null,
    'twitter:description': null,
    'twitter:image': null,
    'twitter:image:alt': null
  }
}

const UPDATE_METADATA = 'UPDATE_METADATA'

function metaDataStore (state, emitter) {
  state.metaData = Object.assign({}, defaults)

  emitter.on(UPDATE_METADATA, (metaData) => {
    state.metaData = Object.assign({}, state.metaData, metaData)
    emitter.emit('render')
  })
}

export default metaDataStore
