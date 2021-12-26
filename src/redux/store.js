//Redux 
// import { createStore, combineReducers } from 'redux'
// import { todoListReducer, filterReducer } from './reducers/'

// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const rootReducer = combineReducers({
//     todoList: todoListReducer,
//     filters: filterReducer
// })

// const store = createStore(rootReducer, reduxDevTools)

// export default store


//Redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterReducer'
import todoListReducer from './reducers/todoList'

const store = configureStore({
    reducer: {
        todoList: todoListReducer.reducer,
        filters: filterSlice.reducer,
    }
})

export default store