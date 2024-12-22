import { createSlice } from '@reduxjs/toolkit'
import { register } from './user.actions'
interface IUser {
	name: string,
	lastName: string,
	email: string,
}
const initialState: IUser = {
	user: {},
	isLoading: false
}
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(register.pending, (state, { payload }) => {
			state.isLoading = true
		})
		builder.addCase(register.fulfilled, (state, { payload }) => {
			state.isLoading = true
		})
		// builder.addCase(login.pending, state => {
		// 	state.isLoading = true
		// })
		// builder.addCase(login.fulfilled, (state, { payload }) => {
		// 	state.isLoading = false
		// 	state.user = payload.user
		// })
		// builder.addCase(login.rejected, state => {
		// 	state.isLoading = false
		// 	state.user = null
		// })
	},
})
export default userSlice.reducer