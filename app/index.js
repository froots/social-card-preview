import { h, render, Component } from 'preact';

const MetaData = ({ data }) => {
  return (
    <div class="c-MetaData">
      <h2>Meta data for Twitter</h2>
      <MetaDataTable data={data} />
    </div>
  );
};

const MetaDataTable = ({ data }) => {
  return (
    <table class="c-MetaDataTable">
      <thead>
        <tr>
          <th>Meta key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data['twitter'].map(({ key, value }) => (
          <MetaDataTableRow
            key={`metadata-twitter-${key}`}
            metaKey={key}
            metaValue={value} />
        ))}
      </tbody>
    </table>
  );
};

const MetaDataTableRow = ({ metaKey, metaValue }) => {
  const dataAttrs = {
    'data-meta-value': metaKey
  };
  return (
    <tr>
      <td>{metaKey}</td>
      <td {...dataAttrs}>{metaValue}</td>
    </tr>
  );
}

window.init = function(metaData) {
  render((
    <div id="container">
      <MetaData data={metaData} />
    </div>
  ), document.body);
}

// function setBackground(backgroundPage) {
//   backgroundPage.getSocialCardMetaData(injectMetaData);
// }

// function init() {
//   chrome.runtime.getBackgroundPage(setBackground);
// }

// document.addEventListener('DOMContentLoaded', init);