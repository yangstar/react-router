import { combineReducers } from 'redux'
import addTodo1 from './addTodo1'
import addTodo2 from './addTodo2'
import addTodo3 from './addTodo3'
const todoApp = combineReducers ({
    addTodo1,
    addTodo2,
    addTodo3
})

export default todoApp