import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

const store = createStore((state = {items: ['apple', 'kiwi', 'banana']}, action) => {
  if(action.type == 'selectItem') state.selectedItem = action.item
  console.log(action.type)
  return state
})

const selectItem = (item) => ({type: 'selectItem', item: item})

const List = connect(
  (state) => ({items: state.items, selectedItem: state.selectedItem}),
  (dispatch) => ({onSelect: (item) => dispatch(selectItem(item))})
)
  (({items, onSelect, selectedItem}) => {
    console.log(selectedItem)
    return <ul>
      {items.map(item => {
        console.log(selectedItem, item)
        return <li key={item} onClick={() => onSelect(item)} style={{textDecoration: selectedItem == item ? 'underline' : 'none'}}>{item}</li>
      })}
    </ul>
})

const Dialog = connect(
  (state) => ({selectedItem: state.selectedItem}),
  (dispatch) => ({onClose: () => dispatch(selectItem())})
)
  (({selectedItem, onClose}) => <div>
    <a onClick={onClose}>close</a>
    {selectedItem}
  </div>)

const App = () => <main>
  <List/>
  <Dialog/>
</main>

render(
  <Provider store={store}><App/></Provider>,
  document.body.appendChild(document.createElement("DIV"))
)
