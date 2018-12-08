import React from 'react'
import './App.css'

import ListItem from './molecules/ListItem'

const shoppingList = ['milk', 'icecream', 'bananaz', 'bread', 'oranges']

const App = () => (
  <div className="App">
    {shoppingList.map(item => <ListItem name={item} />)}
  </div>
)


export default App
