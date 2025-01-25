import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import tasksReducer from './tasks/tasksSlice'

const reducers = combineReducers({
	user: userReducer,
	tasks: tasksReducer
})
export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>