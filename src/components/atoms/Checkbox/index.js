import React from 'react'
import PropTypes from 'prop-types'


const Checkbox = ({ listId, id, isCompleted, toggleCheck }) => (
  <input className="add-item" type="checkbox" checked={isCompleted} onChange={() => toggleCheck(listId, id)} />
)

Checkbox.propTypes = {
  listId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool,
  toggleCheck: PropTypes.func.isRequired,
}

Checkbox.defaultProps = {
  isCompleted: false,
}

export default Checkbox
