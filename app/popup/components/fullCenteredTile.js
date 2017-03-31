import html from 'choo/html'

export default function fullCenteredTile ({ classes = [], message }) {
  return html`
    <div class="${classes.join(' ')} vh-100 dt w-100">
      <div class="dtc v-mid tc ph3">
        <span class="f3 fw6 tc">${message}</span>
      </div>
    </div>
  `
}
