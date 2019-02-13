import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListItem from '../../molecules/ListItem'
import Filter from '../../molecules/Filter'
import { toggleCheck as toggleCheckAction } from '../../../store/actions/list'


const style = {
  backgroundColor: 'white',
  padding: '2rem',
  margin: '2rem',
  width: '20rem',
  minHeight: '8rem',
  borderRadius: '1.5rem',
  boxShadow: '.5rem .5rem .4rem -.3rem #0000004D',
}

const List = ({ id, name, items, toggleCheck }) => (
  <div className="List" style={style}>
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
  </div>
)

const mapDispatchToProps = dispatch => ({
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
}

export default connect(null, mapDispatchToProps)(List)
