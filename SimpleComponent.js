eact = require('react');
var renderReact = require('hypernova-react').renderReact;

function MyComponent(props) {
  return React.createElement('div', {
    onClick: function () {
      console.log('Click handlers work.');
    },
  }, 'Hello, ' + props.name + '!');
}

module.exports = renderReact('MyComponent.js', MyComponent);
