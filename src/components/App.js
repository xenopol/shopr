import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCheck as toggleCheckAction } from '../store/actions/listItem'
import './App.css'

import ListItem from './molecules/ListItem'
import Input from './atoms/Input'

const App = ({ shoppingList, toggleCheck }) => (
  <div className="App">
    {shoppingList.map(({ id, name, isChecked }) => (
      <ListItem id={id} toggleCheck={toggleCheck} key={id} name={name} isChecked={isChecked} />
    ))}

    <Input />
  </div>
)

const mapStateToProps = ({ shoppingList }) => ({
  shoppingList,
})

const mapDispatchToProps = dispatch => ({
  toggleCheck: id => dispatch(toggleCheckAction(id)),
})

App.propTypes = {
  shoppingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isChecked: PropTypes.bool,
  })).isRequired,
  toggleCheck: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
