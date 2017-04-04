import html from 'choo/html'
import previewTwitter from '../components/previewTwitter'
import metaData from '../components/metaData'

export default function mainView (state, emit) {
  return html`
    <div id="root">
      ${previewTwitter(state, emit)}
      ${metaData(state, emit)}
    </div>
  `
}
