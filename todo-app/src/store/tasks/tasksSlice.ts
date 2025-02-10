import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: null,
  isLoading: false,
  isSuccess: false,
  error: null as string | undefined | null,
}

export const tasksSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers() { },
})
export const { } = tasksSlice.actions;
export default tasksSlice.reducer