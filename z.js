import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

function reducer(state = {items: ['apple', 'kiwi', 'banana']}, action) {
  var newState = Object.assign({}, state);
  if (action.type == 'selectItem') {
    newState.selectedItem = action.item;
  }
  return newState;
}

const store = createStore(reducer);

function selectItem(item) {
  return {
    type: 'selectItem',
    item: item
  };
}

const List = connect(
  function (state) {
    return {
      items: state.items,
      selectedItem: state.selectedItem
    };
  },
  function (dispatch) {
    return {
      onSelect: function (item) {
        dispatch(selectItem(item));
      }
    };
  }
)(renderList);

function renderList({items, onSelect, selectedItem}) {
  console.log(selectedItem);
  return <ul>
    {items.map(function (item) {
      console.log(selectedItem, item)
      return <li
        key={item}
        onClick={function () {
          onSelect(item);
        }}
        style={{textDecoration: selectedItem == item ? 'underline' : 'none'}}>
          {item}
        </li>
    })}
  </ul>;
}

const Dialog = connect(
  function (state) {
    return {
      selectedItem: state.selectedItem
    };
  },
  function (dispatch) {
    return {
      onClose: function () {
        dispatch(selectItem());
      }
    };
  }
)(renderDialog);

function renderDialog({selectedItem, onClose}) {
  return <div>
    <a onClick={onClose}>close</a>
    {selectedItem}
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
