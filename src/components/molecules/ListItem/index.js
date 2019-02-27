import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Checkbox from '../../atoms/Checkbox'
import {
  removeListItem as removeListItemAction,
  editListItem as editListItemAction,
  toggleEditingListItem as toggleEditingListItemAction,
} from '../../../store/actions/list'


const listItemstyle = {
  backgroundColor: '#ededed',
  margin: '1rem .5rem',
  fontSize: '1.6rem',
  textAlign: 'left',
  padding: '.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const listItemstyleHover = {
  backgroundColor: '#f6f6f6',
  margin: '1rem .5rem',
  fontSize: '1.6rem',
  textAlign: 'left',
  padding: '.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

  handleMouseOver = () => {
    this.setState({ hover: true })
  }

  handleMouseOut = () => {
    this.setState({ hover: false })
  }


  render() {
    const { listId, id, name, isCompleted, isEditing, toggleCheck, removeItem } = this.props
    const { hover } = this.state

    return (
      <div // eslint-disable-line
        className="ListItem"
        style={hover === true ? listItemstyleHover : listItemstyle}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <div>
          <Checkbox listId={listId} id={id} isCompleted={isCompleted} toggleCheck={toggleCheck} />
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
          onClick={() => { removeItem(listId, id) }}
        >
          X
        </div>
        </div>
        <div />
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
