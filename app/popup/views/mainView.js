import html from 'choo/html'

export default function mainView (state, emit) {
  return html`
    <div id="root" class="main">
      ${metaDataTable(state, emit)}
    </div>
  `
}

function metaDataTable (state, emit) {
  if (state.uiState.loadingMetaData) {
    return html`
      <div class="loading">Loading...</div>
    `
  }

  if (Object.keys(state.metaData).length === 0) {
    return html`
      <div class="c-MetaData">
        This page contains no social card meta data
      </div>
    `
  }

  return html`
    <div class="c-MetaData">
      <table class="c-MetaDataTable">
        <thead>
          <tr>
            <th>Meta key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          ${metaDataTableRows(state.metaData, emit)}
        </tbody>
      </table>
    </div>
  `
}

function metaDataTableRows (state, emit) {
  return Object.keys(state).map(key => metaDataTableRow({ key, value: state[key] }, emit))
}

function metaDataTableRow ({ key, value }, emit) {
  return html`
    <tr>
      <td>${key}</td>
      <td data-meta-value="${key}">${value}</td>
    </tr>
  `
}
