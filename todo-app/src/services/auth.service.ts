import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword } from "firebase/auth"
import { IAuthData } from '../interfaces/Auth.interface'
import { auth } from '../config/firestore'

export const AuthService = {
	register: ({ email, password }: IAuthData) => {
		createUserWithEmailAndPassword(auth, email, password)
	},
	login: ({ email, password }: IAuthData) => {
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				return signInWithEmailAndPassword(auth, email, password)
			})
			.catch((error) => {
				// Handle Errors here.
				console.log(error)
			})
	}
}