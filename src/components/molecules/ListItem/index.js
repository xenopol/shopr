import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../../atoms/Checkbox'

const ListItem = ({ id, name, isChecked, toggleCheck }) => (
  <div>
    <Checkbox id={id} isChecked={isChecked} toggleCheck={toggleCheck} />
    {name}
  </div>
)

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  toggleCheck: PropTypes.func.isRequired,
}

ListItem.defaultProps = {
  isChecked: false,
}

export default ListItem
