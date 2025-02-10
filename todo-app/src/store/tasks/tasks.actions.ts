import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "../../config/user.data";
import { tasksService } from "../../services/tasksService/tasks.service";

interface ITaskProps extends ITask {
  uid: string
}

export const createTask = createAsyncThunk(
  'task/create',
  async (data: ITaskProps) => {
    try {
      await tasksService.create(data.uid, data)
    } catch (error: any) {
      throw new Error(error)
    }
  }
)