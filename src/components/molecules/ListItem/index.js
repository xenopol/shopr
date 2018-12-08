import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../../atoms/Checkbox'

const ListItem = ({ name }) => (
  <div>
    <Checkbox />
    {name}
  </div>
)

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ListItem
