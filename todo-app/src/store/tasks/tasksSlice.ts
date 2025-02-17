import { createSlice } from "@reduxjs/toolkit"
import { ITask } from '../../config/user.data'
import { createTask, getTasks } from './tasks.actions'

const initialState = {
  tasks: [] as ITask[],
  isLoading: false,
  isSuccess: false,
  error: null as string | undefined | null,
}

export const tasksSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createTask.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload)
        state.isSuccess = true
        state.isLoading = false
      })
      .addCase(createTask.rejected, (state, { error }) => {
        state.isSuccess = false
        state.isLoading = false
        state.error = error.message
      })
      .addCase(getTasks.pending, (state) => {
        state.isLoading = false
      })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.isSuccess = true
        state.isLoading = false
        state.tasks = payload
      })
      .addCase(getTasks.rejected, (state, { error }) => {
        state.isSuccess = false
        state.isLoading = false
        state.error = error.message
      })

  }
})
// export const { } = tasksSlice.actions
export default tasksSlice.reducer