import html from 'choo/html'
import metaData from '../components/metaData'

export default function mainView (state, emit) {
  return html`
    <div id="root" class="main">
      ${metaData(state, emit)}
    </div>
  `
}
