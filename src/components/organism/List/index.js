import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListItem from '../../molecules/ListItem'
import { toggleCheck as toggleCheckAction } from '../../../store/actions/listItem'


const style = {
  backgroundColor: 'white',
  padding: '2rem',
  margin: '2rem',
  width: '20rem',
  minHeight: '8rem',
  borderRadius: '1.5rem',
  boxShadow: '.5rem .5rem .4rem -.3rem #0000004D',
}

const List = ({ shoppingList, toggleCheck }) => (
  <div className="List" style={style}>
    {shoppingList.map(({ id, name, isChecked, isEditing }) => (
      <ListItem id={id} toggleCheck={toggleCheck} key={id} name={name} isChecked={isChecked} isEditing={isEditing} />
    ))}
  </div>
)

const mapStateToProps = ({ shoppingList }) => ({
  shoppingList,
})

const mapDispatchToProps = dispatch => ({
  toggleCheck: id => dispatch(toggleCheckAction(id)),
})

List.propTypes = {
  shoppingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isChecked: PropTypes.bool,
  })).isRequired,
  toggleCheck: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
