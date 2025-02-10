import { FirebaseError } from 'firebase/app'
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "../../config/firestore"
import { IProfileData } from "../../config/user.data"

export const userService = {
  getProfile: async (id: string): Promise<IProfileData> => {
    try {
      const userDocRef = doc(db, "users", id)
      const userDocSnap = await getDoc(userDocRef)
      console.log(userDocRef)
      return userDocSnap.data()?.profile
    } catch (error: unknown) {
      const errorEdit = error instanceof Error ? error.message : 'Something went wrong!'
      throw new Error(errorEdit)
    }
  },
  updateProfile: async (id: string, data: IProfileData) => {
    try {
      const userDocRef = doc(db, "users", id)
      console.log(userDocRef, data)
      await setDoc(userDocRef, {
        profile: data
      })
    } catch (error) {
      const errorEdit = error instanceof Error ? error.message : 'Failed to update the profile.'
      throw new Error(errorEdit)
    }

  },
  updateUserPassword: async (password: string, newPassword: string) => {
    try {
      const user = auth.currentUser
      if (user && user.email !== null) {
        const credential = EmailAuthProvider.credential(user.email, password)
        await reauthenticateWithCredential(user, credential)
        await updatePassword(user, newPassword)
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-credential") {
          throw new Error("Incorrect current password.")
        } else if (error.code === "auth/requires-recent-login") {
          throw new Error("You need to sign in again to update your password.")
        }
      }
      throw new Error("Failed to update the password.")
    }
  },
  updateUserEmail: async (email: string) => {
    try {
      const user = auth.currentUser
      if (user && user.email !== null) {
        await updateEmail(user, email)
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-credential") {
          throw new Error("Incorrect current password.")
        } else if (error.code === "auth/requires-recent-login") {
          throw new Error("You need to sign in again to update your password.")
        }
      }
      throw new Error("Failed to update the email.")
    }
  },

}