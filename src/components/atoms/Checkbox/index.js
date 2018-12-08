import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ isChecked }) => (
  <input type="checkbox" checked={isChecked} />
)

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
}

Checkbox.defaultProps = {
  isChecked: false,
}

export default Checkbox
