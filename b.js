var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');

var selectFruit = Reflux.createAction();

var fruitStore = Reflux.createStore({
  selectedFruit: null,
  init: function () {
    this.listenTo(selectFruit, this._selectFruit);
  },
  getInitialState: function () {
    return {
      fruits: ['apple', 'kiwi', 'banana'],
      selectedFruit: this.selectedFruit
    };
  },
  _selectFruit: function (fruit) {
    this.selectedFruit = fruit;
    this.trigger(this.getInitialState());
  }
});

var App = React.createClass({

  render: function () {
    return (
      <main>
        <List/>
        <Dialog/>
      </main>
    );
  }
});

var List = React.createClass({
  mixins: [Reflux.connect(fruitStore)],
  render: function () {
    return (
      <ul>
        {this.state.fruits.map(function (fruit) {
          return (
            <li
              key={fruit}
              onClick={function () {
                selectFruit(fruit)
              }}
              style={{
                textDecoration: this.state.selectedFruit === fruit ? 'underline' : 'none'
              }}>
              {fruit}
            </li>
          );
        }, this)}
      </ul>
    );
  }
});

var Dialog = React.createClass({
  mixins: [Reflux.connect(fruitStore)],
  render: function () {
    return (
      <div>
        <a onClick={function () {
          selectFruit();
        }}>close</a>
        <div>{this.state.selectedFruit}</div>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.body.appendChild(document.createElement("DIV")));
