import html from 'choo/html'

export default function mainView (state, emit) {
  return html`
    <div id="root" class="main">
      ${metaDataTable(state, emit)}
    </div>
  `
}

function metaDataTable (state, emit) {
  if (Object.keys(state.metaData).length === 0) {
    return html`
      <div class="loading">Loading...</div>
    `
  }

  return html`
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
