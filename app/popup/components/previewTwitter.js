import html from 'choo/html'

export default function previewTwitter (state, emit) {
  return html`
    <div class="c-CardPreview c-CardPreview--Twitter">
      <h2 data-card-value="twitter:title">${state.metaData['twitter:title']}</h2>
      <p data-card-value="twitter:description">${state.metaData['twitter:description']}</p>
    </div>
  `
}
