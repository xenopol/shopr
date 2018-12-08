import React from 'react'
import PropTypes from 'prop-types'


const Checkbox = ({ id, isChecked, toggleCheck }) => (
  <input type="checkbox" checked={isChecked} onChange={() => toggleCheck(id)} />
)

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  isChecked: PropTypes.bool,
  toggleCheck: PropTypes.func.isRequired,
}

Checkbox.defaultProps = {
  isChecked: false,
}

export default Checkbox
