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
    const { addNewList } = this.props
    return (
      <input
        type="text"
        value={inputValue}
        placeholder="Add new item"
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
}

export default connect(null, mapDispatchToProps)(Input)
