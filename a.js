var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function () {
    return {
      selectedItem: null
    };
  },
  _onSelect: function (item) {
    this.setState({
      selectedItem: item
    });
  },
  _onClose: function () {
    this.setState({
      selectedItem: null
    });
  },
  render: function () {
    return (
      <main>
        <List
          selectedItem={this.state.selectedItem}
          onSelect={this._onSelect}/>
        <Dialog
          selectedItem={this.state.selectedItem}
          onClose={this._onClose}/>
      </main>
    );
  }
});

var List = React.createClass({
  getInitialState: function () {
    return {
      items: ['apple', 'kiwi', 'banana'],
      selectedItem: this.props.selectedItem
    };
  },
  componentWillReceiveProps: function () {
    this.setState({
      selectedItem: this.props.selectedItem
    });
  },
  _onSelect: function (item) {
    this.props.onSelect(item);
    this.setState({
      selectedItem: item
    });
  },
  render: function () {
    console.log(this.state.selectedItem);
    return (
      <ul>
        {this.state.items.map(function (item, i) {
          return (
            <li
              key={i}
              onClick={this._onSelect.bind(null, item)}
              style={{textDecoration: this.state.selectedItem === item ? 'underline' : 'none'}}>
              {item}
            </li>
          );
        }, this)}
      </ul>
    );
  }
});

var Dialog = React.createClass({
  getInitialState: function () {
    return {
      isHidden: false,
      item: ''
    };
  },
  render: function () {
    return (
      <div>
        <a onClick={this.props.onClose}>close</a>
        <div>{this.props.selectedItem}</div>
      </div>
    );
  }
});

var container = document.createElement("DIV");
document.body.appendChild(container);
ReactDOM.render(<App/>, container);
