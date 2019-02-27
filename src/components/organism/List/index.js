import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'
import ListItem from '../../molecules/ListItem'
import Filter from '../../molecules/Filter'
import {
  toggleCheck as toggleCheckAction,
  addNewListItem as addNewListItemAction,
} from '../../../store/actions/list'

class List extends Component {
  state = { inputValue: '' }

  handleNewListItem = ({ keyCode }, addNewListItem) => {
    const { inputValue } = this.state
    if (keyCode === 13 && inputValue.trim() !== '') {
      addNewListItem(inputValue)
      this.setState({ inputValue: '' })
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value })
  }

  render() {
    const { inputValue } = this.state
    const { items, id, name, toggleCheck, addNewListItem } = this.props

    return (
      <div className="List">
        <div>{ name }</div>
        {items.map(({ id: itemId, name: itemName, isCompleted, isEditing }) => (
          <ListItem
            listId={id}
            id={itemId}
            toggleCheck={toggleCheck}
            key={itemId}
            name={itemName}
            isCompleted={isCompleted}
            isEditing={isEditing}
          />
        ))}
        <Filter />

        <input
          type="text"
          value={inputValue}
          placeholder="Add new item"
          onKeyDown={e => this.handleNewListItem(e, addNewListItem)}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewListItem: itemName => dispatch(addNewListItemAction(itemName)),
  toggleCheck: (listId, itemId) => dispatch(toggleCheckAction(listId, itemId)),
})

List.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isCompleted: PropTypes.bool,
  })).isRequired,
  toggleCheck: PropTypes.func.isRequired,
  addNewListItem: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(List)
