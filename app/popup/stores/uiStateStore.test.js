import test from 'tape'
import nanobus from 'nanobus'
import uiStateStore from './uiStateStore'
import { UPDATE_METADATA } from '../actions'

test('uiStateStore initialises with default values', (t) => {
  t.plan(1)
  const state = {}
  const emitter = nanobus()
  uiStateStore(state, emitter)
  t.equal(state.uiState.loadingMetaData, true)
  t.end()
})

test('uiStateStore changes loadingMetaData to false when meta data is loaded', (t) => {
  t.plan(1)
  const state = {}
  const emitter = nanobus()
  uiStateStore(state, emitter)
  emitter.emit(UPDATE_METADATA, {})
  t.equal(state.uiState.loadingMetaData, false)
  t.end()
})
