import test from 'tape'
import td from 'testdouble'
import globalInit from './globalInit'
import nanobus from 'nanobus'
import { UPDATE_METADATA } from '../stores/metaDataStore'

test('globalInit(), when DOMContentLoaded, retrieves metadata from the background page', (t) => {
  t.plan(1)

  const g = (global || window)
  const emitter = nanobus()
  const metaDataFixture = {
    'twitter:title': 'My Page'
  }

  g.chrome = {
    runtime: {
      getBackgroundPage: td.function()
    }
  }

  const background = {
    getSocialCardMetaData: td.function()
  }

  td.when(g.chrome.runtime.getBackgroundPage())
    .thenCallback(background)

  td.when(background.getSocialCardMetaData())
    .thenCallback({
      metaData: metaDataFixture
    })

  emitter.on(UPDATE_METADATA, (metaData) => {
    t.deepEqual(metaData, metaDataFixture)
    g.chrome = null
    t.end()
  })

  globalInit({}, emitter)
  emitter.emit('DOMContentLoaded')
})
