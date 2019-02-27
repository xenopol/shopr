import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'
import Checkbox from '../../atoms/Checkbox'
import {
  removeListItem as removeListItemAction,
  editListItem as editListItemAction,
  toggleEditingListItem as toggleEditingListItemAction,
} from '../../../store/actions/list'


class ListItem extends Component {
  constructor(props) {
    super(props)
    this.editInput = React.createRef()
  }

  handleEditItem= ({ key }, id) => {
    const { listId, editListItem, toggleEditingListItem } = this.props

    if (key === 'Enter') {
      editListItem(listId, { id, name: this.editInput.current.value })
      toggleEditingListItem(listId, { id, isEditing: false })
    }
  }

  handleDoubleClick= (id) => {
    const { listId, toggleEditingListItem } = this.props
    toggleEditingListItem(listId, { id, isEditing: true })
  }

  render() {
    const { listId, id, name, isCompleted, isEditing, toggleCheck, removeItem } = this.props

    return (

      <div className="ListItem">
        <Checkbox listId={listId} id={id} isCompleted={isCompleted} toggleCheck={toggleCheck} />
        { isEditing
          ? (
            <input
              className="add-item"
              ref={this.editInput}
              type="text"
              defaultValue={name}
              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              onKeyPress={(event) => { this.handleEditItem(event, id) }}
            />
          )
          : <p onDoubleClick={() => { this.handleDoubleClick(id) }}>{name}</p>
          }
        <div className='delete-button' // eslint-disable-line
          oonClick={() => { removeItem(listId, id) }}
        >
          X
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: (listId, id) => dispatch(removeListItemAction(listId, id)),
  editListItem: (listId, itemData) => dispatch(editListItemAction(listId, itemData)),
  toggleEditingListItem: (listId, itemData) => dispatch(toggleEditingListItemAction(listId, itemData)),
})

ListItem.propTypes = {
  listId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  isEditing: PropTypes.bool,
  toggleCheck: PropTypes.func.isRequired,
  editListItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleEditingListItem: PropTypes.func.isRequired,
}

ListItem.defaultProps = {
  isCompleted: false,
  isEditing: false,
}

export default connect(null, mapDispatchToProps)(ListItem)
