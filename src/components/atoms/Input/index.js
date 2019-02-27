import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addNewList as addNewListAction } from '../../../store/actions/list'

class Input extends Component {
  state = { inputValue: '' }


  handleNewList = ({ keyCode }, addNewList) => {
    const { inputValue } = this.state
    if (keyCode === 13 && inputValue.trim() !== '') {
      addNewList(inputValue)
      this.setState({ inputValue: '' })
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value })
  }

  render() {
    const { inputValue } = this.state
    const { addNewList, className } = this.props
    return (
      <input
        className={className}
        type="text"
        value={inputValue}
        placeholder="Add new list"
        onKeyDown={e => this.handleNewList(e, addNewList)}
        onChange={this.handleChange}
      />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addNewList: itemName => dispatch(addNewListAction(itemName)),
})

Input.propTypes = {
  addNewList: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Input.defaultProps = {
  className: null,
}

export default connect(null, mapDispatchToProps)(Input)
