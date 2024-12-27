import { IProfileData } from "../../config/user.data"

export const saveUserToStorage = (data: IProfileData) => {
  localStorage.setItem('user', JSON.stringify(data))
}
export const getUserFromStorage = () => {
  return localStorage.getItem('user')
}
export const removeUserStorage = () => {
  localStorage.removeItem('user')
}