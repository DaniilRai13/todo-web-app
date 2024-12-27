import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { IAuthData } from '../interfaces/Auth.interface'
import { auth } from '../config/firestore'
import { IProfileData } from "../config/user.data";
import { removeTokensStorage, saveToStorage } from "./auth.helper";
import { removeUserStorage, saveUserToStorage } from "../store/user/user.localstorage";


export const AuthService = {
	register: async ({ email, password }: IAuthData): Promise<{ message: string }> => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			return { message: 'User registered successfully' };
		} catch (error: any) {
			if (error.code === 'auth/email-already-in-use') {
				throw new Error('This email is already in use. Please use a different one.');
			}
			if (error.code === 'auth/invalid-email') {
				throw new Error('Invalid email address. Please enter a valid email.');
			}
			if (error.code === 'auth/weak-password') {
				throw new Error('Password should be at least 6 characters long.');
			}
			if (error.code === 'auth/missing-email' || error.code === 'auth/missing-password') {
				throw new Error('Please enter both email and password.');
			}
			throw new Error('Registration failed. Please try again later.');
		}
	},
	login: async ({ email: loginEmail, password }: IAuthData): Promise<IProfileData> => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, loginEmail, password);
			const user = userCredential.user;

			const {
				displayName,
				email,
				refreshToken,
				photoURL,
				uid,
				metadata: { creationTime }
			} = user
			const userData = {
				id: uid,
				name: displayName,
				email,
				img: photoURL,
				createdAt: creationTime
			}
			const accessToken = await user.getIdToken()
			saveToStorage({ refreshToken, accessToken })
			saveUserToStorage(userData)
			return userData;

		} catch (error) {
			console.error('Error during login:', error);
			throw error;
		}
	},
	logout: () => {
		removeTokensStorage()
		removeUserStorage()
	},
	checkTokens: () => {
		return localStorage.getItem('tokens')
	}
}