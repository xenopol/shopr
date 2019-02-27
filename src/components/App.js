import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css'

import Input from './atoms/Input'
import List from './organism/List'

const App = ({ lists }) => (
  <div className="App">
    <Input className="create-list-input" />
    <div className="List-container">
      {lists.map(({ id, name, items }) => (
        <List key={id} id={id} name={name} items={items} />
      ))}
    </div>
  </div>
)

const mapStateToProps = ({ shoppingList: { lists } }) => ({
  lists,
})

App.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
}

App.defaultProps = {
  lists: [],
}

export default connect(mapStateToProps)(App)
