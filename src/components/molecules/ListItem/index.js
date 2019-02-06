import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Checkbox from '../../atoms/Checkbox'
import {
  removeListItem as removeListItemAction,
  editListItem as editListItemAction,
  toggleEditingListItem as toggleEditingListItemAction,
} from '../../../store/actions/addNewListItem'


const listItemstyle = {
  margin: '1rem .5rem',
  fontSize: '1.6rem',
  textAlign: 'left',
  padding: '.3rem',
}

const listItemstyleHover = {
  backgroundColor: '#f6f6f6',
  margin: '1rem .5rem',
  fontSize: '1.6rem',
  textAlign: 'left',
  padding: '.3rem',
}

const styles = {
  removeButton: {
    marginLeft: 20,
  },
}

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.editInput = React.createRef()

    this.state = { hover: false }
  }

  handleEditItem= ({ key }, id) => {
    const { editListItem, toggleEditingListItem } = this.props

    if (key === 'Enter') {
      editListItem({ id, name: this.editInput.current.value })
      toggleEditingListItem({ id, isEditing: false })
    }
  }

  handleDoubleClick= (id) => {
    const { toggleEditingListItem } = this.props
    toggleEditingListItem({ id, isEditing: true })
  }

  handleMouseOver = () => {
    this.setState({ hover: true })
  }

  handleMouseOut = () => {
    this.setState({ hover: false })
  }


  render() {
    const { id, name, isChecked, isEditing, toggleCheck, removeItem } = this.props
    const { hover } = this.state

    return (
      <div // eslint-disable-line
        className="ListItem"
        style={hover === true ? listItemstyleHover : listItemstyle}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <Checkbox id={id} isChecked={isChecked} toggleCheck={toggleCheck} />
        { isEditing
          ? (
            <input
              ref={this.editInput}
              type="text"
              defaultValue={name}
              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              onKeyPress={(event) => { this.handleEditItem(event, id) }}
            />
          )
          : <p onDoubleClick={() => { this.handleDoubleClick(id) }}>{name}</p>
        }
        <div // eslint-disable-line
          style={styles.removeButton}
          onClick={() => { removeItem(id) }}
        >
          X
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeListItemAction(id)),
  editListItem: itemData => dispatch(editListItemAction(itemData)),
  toggleEditingListItem: itemData => dispatch(toggleEditingListItemAction(itemData)),
})

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isEditing: PropTypes.bool,
  toggleCheck: PropTypes.func.isRequired,
  editListItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleEditingListItem: PropTypes.func.isRequired,
}

ListItem.defaultProps = {
  isChecked: false,
  isEditing: false,
}

export default connect(null, mapDispatchToProps)(ListItem)
