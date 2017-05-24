// import React, { Component, PropTypes } from 'react'

// export default class AddTodo extends Component {
//   render() {
//     return (
//       <div>
//         <input type='text' ref='input' />
//         <button onClick={(e) => this.handleClick(e)}>
//           Add
//         </button>
//       </div>
//     )
//   }

//   handleClick(e) {
//     const node = this.refs.input
//     const text = node.value.trim()
//     this.props.onAddClick(text)
//     node.value = ''
//   }
// }

import React from 'react'
import { connect } from 'react-redux'
import { addTodo1 } from './../actions/module1'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo1(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo