import React from 'react'
import { connect } from 'react-redux'
import { addTodo1 } from './../actions/module1'
import AddTodo from './addTodo'


class Test extends React.Component {
    
    render () {
        const { dispatch} = this.props
        return (
            <div>
                <AddTodo/>
            </div>
        )
    }
}
export default Test;