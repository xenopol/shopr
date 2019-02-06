import React from 'react'
import './App.css'

import Input from './atoms/Input'
import List from './organism/List'

const listContainerStyle = {
  width: '100vw',
  padding: '5rem',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const App = () => (
  <div className="App">
    <Input />
    <div className="List-container" style={listContainerStyle}>
      <List />
    </div>
  </div>
)

export default App
