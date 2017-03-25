import { h, render, Component } from 'preact';

const MetaData = () => {
  return (
    <div class="c-MetaData">
      <h2>Meta data for Twitter</h2>
      <MetaDataTable />
    </div>
  );
};

const MetaDataTable = () => {
  const metaData = {
    'twitter': [
      {
        key: 'twitter:card',
        value: ''
      },
      {
        key: 'twitter:site',
        value:''
      }
    ]
  };

  return (
    <table class="c-MetaDataTable">
      <thead>
        <tr>
          <th>Meta key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {metaData['twitter'].map(({ key, value }) => (
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

render((
  <div id="container">
    <MetaData />
  </div>
), document.body);

// function setBackground(backgroundPage) {
//   backgroundPage.getSocialCardMetaData(injectMetaData);
// }

// function init() {
//   chrome.runtime.getBackgroundPage(setBackground);
// }

// document.addEventListener('DOMContentLoaded', init);