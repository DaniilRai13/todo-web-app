import { IProfileData } from './../../config/user.data';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData } from '../../interfaces/Auth.interface'
import { AuthService } from '../../services/auth.service'
import { userService } from '../../services/user.service'

export const register = createAsyncThunk(
	'user/register',
	async (data: IAuthData) => {
		try {
			await AuthService.register(data)
		} catch (error: any) {
			throw new Error(error)
		}
	}
)
export const login = createAsyncThunk(
	'user/login',
	async (data: IAuthData) => {
		return AuthService.login(data)
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
	async ({ id, data }) => {
		try {
			await userService.updateProfile(id, data)
			return data
		} catch (error: any) {
			console.error(error)
			throw new Error(error)
		}
	}
)
export const updateUserPassword = createAsyncThunk<void, { password: string, newPassword: string }>(
	'user/updatePassword',
	async ({ password, newPassword }) => {
		try {
			await userService.updateUserPassword(password, newPassword)
		} catch (error: any) {
			console.error(error)
			throw new Error(error)
		}
	}
)