import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Checkbox from '../../atoms/Checkbox'
import {
  removeListItem as removeListItemAction,
  editListItem as editListItemAction,
  toggleEditingListItem as toggleEditingListItemAction,
} from '../../../store/actions/addNewListItem'


const styles = {
  removeButton: {
    marginLeft: 20,
  },
}

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.editInput = React.createRef()
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

  render() {
    const { id, name, isChecked, isEditing, toggleCheck, removeItem } = this.props
    return (
      <div>
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
