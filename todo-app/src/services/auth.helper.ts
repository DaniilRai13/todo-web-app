export interface IAuthResponse {
  accessToken: string
  refreshToken: string
}

export const saveToStorage = (data: IAuthResponse) => {
  localStorage.setItem('tokens', JSON.stringify(data))
}
export const removeTokensStorage = () => {
  localStorage.removeItem('tokens')
}