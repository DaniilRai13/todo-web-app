import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData } from '../../interfaces/Auth.interface'
import { AuthService } from '../../services/auth.service'

export const register = createAsyncThunk(
	'user/register',
	async (data: IAuthData) => {
		AuthService.register(data)
	}
)