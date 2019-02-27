import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListItem from '../../molecules/ListItem'
import Filter from '../../molecules/Filter'
import {
  toggleCheck as toggleCheckAction,
  addNewListItem as addNewListItemAction,
} from '../../../store/actions/list'


const style = {
  backgroundColor: 'white',
  padding: '2rem',
  margin: '2rem',
  width: '20rem',
  minHeight: '8rem',
  borderRadius: '1.5rem',
  boxShadow: '.5rem .5rem .4rem -.3rem #0000004D',
}

class List extends Component {
  state = { inputValue: '' }

  handleNewListItem = ({ keyCode }, addNewListItem) => {
    const { id } = this.props
    const { inputValue } = this.state
    if (keyCode === 13 && inputValue.trim() !== '') {
      addNewListItem(id, inputValue)
      this.setState({ inputValue: '' })
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value })
  }

  render() {
    const { inputValue } = this.state
    const { items, id, name, toggleCheck, addNewListItem, showActive } = this.props

    return (
      <div className="List" style={style}>
        <div>{name}</div>
        <Filter listId={id} showActive={showActive} />

        {items
          .filter(item => (showActive ? item.isCompleted === showActive : true))
          .map(({ id: itemId, name: itemName, isCompleted, isEditing }) => (
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
  addNewListItem: (listId, itemName) => dispatch(addNewListItemAction(listId, itemName)),
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
  showActive: PropTypes.bool.isRequired,
  toggleCheck: PropTypes.func.isRequired,
  addNewListItem: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(List)
