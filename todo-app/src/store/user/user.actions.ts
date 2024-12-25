import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData } from '../../interfaces/Auth.interface'
import { AuthService } from '../../services/auth.service'

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