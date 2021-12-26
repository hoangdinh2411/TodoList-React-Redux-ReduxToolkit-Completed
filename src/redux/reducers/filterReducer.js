//Redux
// import { SEARCH_TODO , FILTER_TODO_BY_STATUS ,FILTER_BY_PRIORITIES} from '../constants/';
// const initialState = {
//     search: '',
//     status: 'All',
//     priorities: []
// }
// const filterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SEARCH_TODO:
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case FILTER_TODO_BY_STATUS:
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case FILTER_BY_PRIORITIES:
//             return {
//                 ...state,
//                 priorities: action.payload
//             }

//         default:
//             return state
//     }
// }

// export default filterReducer

//Redux toolkit
import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchTodo: (state, action) => {
            state.search = action.payload
        },
        filterByStatus: (state, action) => {
            state.status = action.payload
        },
        filterByPriorities: (state, action) => {
            state.priorities = action.payload
        }
    }
})
export default filterSlice
