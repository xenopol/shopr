import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addNewListItem as addNewListItemAction } from '../../../store/actions/addNewListItem'

class Input extends Component {
  state = { inputValue: '' }

  handleNewListItem = ({ keyCode }, addNewListItem) => {
    const { inputValue } = this.state
    if (keyCode === 13 && inputValue.trim() !== '') {
      addNewListItem(inputValue)
      this.setState({inputValue: ''})
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({inputValue: value})
  }

  render() {
    const { inputValue } = this.state
    const { addNewListItem } = this.props
    return (
      <input
        type="text"
        value={inputValue}
        placeholder="Add new item"
        onKeyDown={e => this.handleNewListItem(e, addNewListItem)}
        onChange={this.handleChange}
      />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addNewListItem: itemName => dispatch(addNewListItemAction(itemName)),
})

Input.propTypes = {
  addNewListItem: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Input)
