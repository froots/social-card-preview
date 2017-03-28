import html from 'choo/html'
import choo from 'choo'

const app = choo()
app.route('/', mainView)

function mainView (state, emit) {
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

window.init = function (metaData) {
  app.mount('#root')
}

// function setBackground(backgroundPage) {
//   backgroundPage.getSocialCardMetaData(injectMetaData);
// }

// function init() {
//   chrome.runtime.getBackgroundPage(setBackground);
// }

// document.addEventListener('DOMContentLoaded', init);
