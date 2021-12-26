//Redux
// import { ADD_TODO, COMPLETE_TODO, EDIT_TODO, DELETE_TODO } from '../constants/'
// const initialState = [
//     { id: 1, text: 'Running', priority: "Medium", isCompleted: false },
//     { id: 2, text: 'Singing', priority: "High", isCompleted: true },
//     { id: 3, text: 'Walking', priority: "Low", isCompleted: false }
// ]
// const todoListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 action.payload
//             ]
//         case COMPLETE_TODO:
//             return state.map(todo =>
//                 todo.id === action.payload
//                     ? { ...todo, isCompleted: !todo.isCompleted }
//                     : todo)
//         case EDIT_TODO:
//             return state.map(todo =>
//                 todo.id === action.payload.id
//                     ? {
//                         ...todo,
//                         text: action.payload.text,
//                         priority: action.payload.priority
//                     }
//                     : todo)

//         case DELETE_TODO:
//             return state.filter(todo => todo.id !== action.payload)
//         default:
//             return state
//     }

// }

// export default todoListReducer



//Redux toolkit
import { createSlice } from '@reduxjs/toolkit'

 const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, text: 'Running', priority: "Medium", isCompleted: false },
        { id: 2, text: 'Singing', priority: "High", isCompleted: true },
        { id: 3, text: 'Walking', priority: "Low", isCompleted: false }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        completeTodo: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.isCompleted = !currentTodo.isCompleted
        },
        editTodo: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload.id)
            currentTodo.text = action.payload.text
            currentTodo.priority = action.payload.priority

        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})



export default todoListSlice