import html from 'choo/html'

export default function metaKey (contents) {
  return html`
    <code class="br1 f6 ba b--light-silver bg-white gray pa1 lh-solid dib">
      ${contents}
    </code>
  `
}
