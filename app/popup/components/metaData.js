import html from 'choo/html'
import fullCenteredTile from './fullCenteredTile.js'
import metaKey from './metaKey.js'
import './metaData.css'

export default function metaData (state, emit) {
  if (state.uiState.loadingMetaData) {
    return fullCenteredTile({
      classes: ['loading'],
      message: 'Loading page metadata…'
    })
  }

  if (Object.keys(state.metaData).length === 0) {
    return fullCenteredTile({
      classes: ['c-MetaData'],
      message: 'This page contains no social card meta data.'
    })
  }

  return html`
    <div class="c-MetaData">
      ${metaDataTable(state, emit)}
    </div>
  `
}

function metaDataTable (state, emit) {
  const thClasses = 'bb bw1 b--black-20 tl pb3 pr3'
  return html`
    <table class="c-MetaDataTable w-100">
      <thead>
        <tr>
          <th class="${thClasses}">Meta key</th>
          <th class="${thClasses}">Value</th>
        </tr>
      </thead>
      <tbody>
        ${metaDataTableRows(state.metaData, emit)}
      </tbody>
    </table>
  `
}

function metaDataTableRows (state, emit) {
  return Object.keys(state).map(key => metaDataTableRow({ key, value: state[key] }, emit))
}

function metaDataTableRow ({ key, value }, emit) {
  const tdClasses = 'pv3 pr3 bb b--black-20 v-top'
  return html`
    <tr>
      <td class="${tdClasses}">${metaKey(key)}</td>
      <td class="${tdClasses}" data-meta-value="${key}">${value}</td>
    </tr>
  `
}
