import test from 'tape'
import globalInit from './globalInit'
import nanobus from 'nanobus'
import { UPDATE_METADATA } from '../stores/metaDataStore'

test('globalInit() sets a window.init function that emits an UPDATE_METADATA message', (t) => {
  t.plan(1)
  const g = (global || window)
  const metaData = {
    hi: 'there'
  }
  const emitter = nanobus()
  emitter.on(UPDATE_METADATA, data => {
    t.deepEquals(data, metaData)
    g.init = null
  })
  globalInit({}, emitter)
  g.init(metaData)
})
