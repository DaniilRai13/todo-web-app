import { IProfileData } from "../../config/user.data"

export const saveUserToStorage = (data: IProfileData) => {
  localStorage.setItem('user', JSON.stringify(data))
}
export const getUserFromStorage = (): IProfileData | null => {
  const user = localStorage.getItem('user');

  if (user) {
    return JSON.parse(user) as IProfileData;
  }

  return null;
}
export const removeUserStorage = () => {
  localStorage.removeItem('user')
}