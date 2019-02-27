import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  toggleDisplayActiveItems as toggleDisplayActiveItemsAction,
} from '../../../store/actions/list'
import './style.css'

const Filter = ({ listId, showActive, toggleDisplayActiveItems }) => (
  <div>
    <button
      className={showActive ? 'Filter Filter-active' : 'Filter'}
      onClick={() => toggleDisplayActiveItems(listId)}
      type="button"
    >
      Active
    </button>
  </div>
)

Filter.propTypes = {
  listId: PropTypes.number.isRequired,
  showActive: PropTypes.bool.isRequired,
  toggleDisplayActiveItems: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  toggleDisplayActiveItems: listId => dispatch(toggleDisplayActiveItemsAction(listId)),
})

export default connect(null, mapDispatchToProps)(Filter)
