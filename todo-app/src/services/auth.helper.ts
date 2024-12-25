export interface IAuthResponse {
  accessToken: string
  refreshToken: string
}

export const saveToStorage = (data: IAuthResponse) => {
  localStorage.setItem('user', JSON.stringify(data))
}
export const removeTokensStorage = () => {
  localStorage.removeItem('user')
}