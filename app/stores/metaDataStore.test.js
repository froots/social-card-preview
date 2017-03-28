import test from 'tape'
import metaDataStore from './metaDataStore'
import nanobus from 'nanobus'

test('metaDataStore initializes with default values', (t) => {
  t.plan(1)

  const store = {}
  const emitter = nanobus()
  const expected = {
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

  metaDataStore(store, emitter)
  t.deepEqual(store.metaData, expected)
})

test('metaDataStore merges provides changes', (t) => {
  t.plan(3)

  const store = {}
  const emitter = nanobus()
  metaDataStore(store, emitter)

  emitter.on('render', () => t.pass('rendered'))

  emitter.emit('UPDATE_METADATA', {
    twitter: {
      'twitter:card': 'summary',
      'twitter:site': '@froots101'
    }
  })

  t.equal(store.metaData.twitter['twitter:card'], 'summary')
  t.equal(store.metaData.twitter['twitter:site'], '@froots101')
})
