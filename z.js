import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

function reducer(state = {fruits: ['apple', 'kiwi', 'banana']}, action) {
  var newState = Object.assign({}, state);
  if (action.type == 'selectFruit') {
    newState.selectedFruit = action.fruit;
  }
  return newState;
}

var store = createStore(reducer);

function selectFruit(fruit) {
  return {
    type: 'selectFruit',
    fruit: fruit
  };
}

var List = connect(
  function (state) {
    return {
      fruits: state.fruits,
      selectedFruit: state.selectedFruit
    };
  },
  function (dispatch) {
    return {
      onSelect: function (fruit) {
        dispatch(selectFruit(fruit));
      }
    };
  }
)(renderList);

function renderList({fruits, onSelect, selectedFruit}) {
  return <ul>
    {fruits.map(function (fruit) {
      return <li
        key={fruit}
        onClick={function () {
          onSelect(fruit);
        }}
        style={{textDecoration: selectedFruit == fruit ? 'underline' : 'none'}}>
          {fruit}
        </li>
    })}
  </ul>;
}

var Dialog = connect(
  function (state) {
    return {
      selectedFruit: state.selectedFruit
    };
  },
  function (dispatch) {
    return {
      onClose: function () {
        dispatch(selectFruit());
      }
    };
  }
)(renderDialog);

function renderDialog({selectedFruit, onClose}) {
  return <div>
    <a onClick={onClose}>close</a>
    {selectedFruit}
  </div>;
}

function App() {
  return <main>
    <List/>
    <Dialog/>
  </main>;
}

render(
  <Provider store={store}><App/></Provider>,
  document.body.appendChild(document.createElement("DIV"))
);
