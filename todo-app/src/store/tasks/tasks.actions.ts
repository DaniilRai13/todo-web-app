import { createAsyncThunk } from "@reduxjs/toolkit"
import { ITask } from "../../config/user.data"
import { tasksService } from "../../services/tasksService/tasks.service"

interface ITaskProps {
  task: ITask,
  userId: string
}



export const createTask = createAsyncThunk(
  'task/create',
  async ({ task, userId }: ITaskProps, { rejectWithValue }) => {
    try {
      const response = await tasksService.create(userId, task)
      return response
    } catch (error: unknown) {
      const errorEdit = error instanceof Error ? error.message : 'An error occurred'
      return rejectWithValue(errorEdit)
    }
  }
)