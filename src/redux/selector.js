import { createSelector } from '@reduxjs/toolkit'


const todoList = state => state.todoList
const searchFilter = state => state.filters.search
const statusFilter = state => state.filters.status
const prioritiesFilter = state => state.filters.priorities


const todoListRemaningSelector = createSelector(todoList, searchFilter, statusFilter, prioritiesFilter, (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
            const text = new RegExp(searchText, 'i')
        if (status === 'All') {
            return todo.text.match(text) 
                    && (priorities.length > 0 ? priorities.includes(todo.priority) : true)
        }
        return todo.text.match(text) 
            && (status === 'Completed'
                ? todo.isCompleted 
                : !todo.isCompleted)
            && (priorities.length > 0 ? priorities.includes(todo.priority) : true)

    })

})

export default todoListRemaningSelector