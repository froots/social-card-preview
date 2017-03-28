import html from 'choo/html'

export default function mainView (state, emit) {
  return html`
    <div id="root" class="main">
      <table class="c-MetaDataTable">
        <thead>
          <tr>
            <th>Meta key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>twitter:card</td>
            <td data-meta-value="twitter:card"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
}
