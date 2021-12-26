// We dont need action when We're using Redux toolkit

import { ADD_TODO , COMPLETE_TODO, DELETE_TODO, EDIT_TODO , SEARCH_TODO , FILTER_TODO_BY_STATUS , FILTER_BY_PRIORITIES} from '../constants/'

export const addTodo = (data)=>{
    return {
        type: ADD_TODO,
        payload: data
    }
} 

export const completeTodo = (id)=>{
    return {
        type: COMPLETE_TODO,
        payload: id
    }
} 
export const editTodo = (data)=>{
    return {
        type: EDIT_TODO,
        payload: data
    }
} 
export const deleteTodo = (id)=>{
    return {
        type: DELETE_TODO,
        payload: id
    }
} 

export const searchTodo = (text)=>{
    return {
        type: SEARCH_TODO,
        payload: text
    }
} 

export const filterTodoByStatus = (data)=>{
    return {
        type: FILTER_TODO_BY_STATUS,
        payload: data
    }
} 
export const filterByPriorities = (data)=>{
    return {
        type: FILTER_BY_PRIORITIES,
        payload: data
    }
} 
