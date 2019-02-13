import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListItem from '../../molecules/ListItem'
import { toggleCheck as toggleCheckAction } from '../../../store/actions/listItem'
import { addNewListItem as addNewListItemAction } from '../../../store/actions/addNewListItem'


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
    const { shoppingList, toggleCheck, addNewListItem } = this.props
    return (
      <div className="List" style={style}>
        {shoppingList.map(({ id, name, isChecked, isEditing }) => (
          <ListItem
            id={id}
            toggleCheck={toggleCheck}
            key={id}
            name={name}
            isChecked={isChecked}
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

const mapStateToProps = ({ shoppingList }) => ({
  shoppingList,
})

const mapDispatchToProps = dispatch => ({
  toggleCheck: id => dispatch(toggleCheckAction(id)),
  addNewListItem: itemName => dispatch(addNewListItemAction(itemName)),
})

List.propTypes = {
  shoppingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isChecked: PropTypes.bool,
  })).isRequired,
  toggleCheck: PropTypes.func.isRequired,
  addNewListItem: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
