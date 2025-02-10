import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData } from '../../interfaces/Auth.interface'
import { AuthService } from '../../services/authService/auth.service'
import { userService } from '../../services/userService/user.service'
import { IProfileData } from './../../config/user.data'

export const register = createAsyncThunk(
	'user/register',
	async (data: IAuthData, { rejectWithValue }) => {
		try {
			await AuthService.register(data)
		} catch (error: unknown) {
			const errorEdit = error instanceof Error ? error.message : 'An error occurred'
			return rejectWithValue(errorEdit)
		}
	}
)

export const login = createAsyncThunk(
	'user/login',
	async (data: IAuthData, { rejectWithValue }) => {
		try {
			return AuthService.login(data)

		} catch (error: unknown) {
			const errorEdit = error instanceof Error ? error.message : 'An error occurred'
			return rejectWithValue(errorEdit)
		}
	}
)
export const logout = createAsyncThunk(
	'user/logout',
	async () => {
		return AuthService.logout()
	}
)

export const updateProfile = createAsyncThunk<IProfileData, { id: string, data: IProfileData }>(
	'user/updateProfile',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			await userService.updateProfile(id, data)
			return data
		} catch (error: unknown) {
			const errorEdit = error instanceof Error ? error.message : 'An error occurred'
			return rejectWithValue(errorEdit)
		}
	}
)
export const updateUserPassword = createAsyncThunk<void, { password: string, newPassword: string }>(
	'user/updatePassword',
	async ({ password, newPassword }, { rejectWithValue }) => {
		try {
			await userService.updateUserPassword(password, newPassword)
		} catch (error: unknown) {
			const errorEdit = error instanceof Error ? error.message : 'An error occurred'
			return rejectWithValue(errorEdit)
		}
	}
)