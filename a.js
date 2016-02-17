var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function () {
    return (
      <div>Hello React</div>
    );
  }
});

var container = document.createElement("DIV");
document.body.appendChild(container);
ReactDOM.render(<App/>, container);
