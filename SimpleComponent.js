var React = require('react');
var renderReact = require('hypernova-react').renderReact;

function SimpleComponent(props) {
  return React.createElement('div', {
    onClick: function () {
      console.log('Click handlers work.');
    },
  }, 'Hello, ' + props.name + '!');
}

module.exports = renderReact('SimpleComponent.js', SimpleComponent);