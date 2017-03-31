import html from 'choo/html'
import metaData from '../components/metaData'

export default function mainView (state, emit) {
  return html`
    <div id="root">
      ${metaData(state, emit)}
    </div>
  `
}
