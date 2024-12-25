import { FC, ReactNode, useEffect } from 'react'
import { useTypedSelector } from '../shared/hooks/useTypedSelector'
import { AuthService } from '../services/auth.service'
import { useLocation, useNavigate } from 'react-router'
import { removeTokensStorage } from '../services/auth.helper'

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useTypedSelector(({ user }) => user)
  const tokens = AuthService.checkTokens()

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    if ((!tokens || !user) && location.pathname !== '/auth') {
      navigate('/auth');
    }
    else if (tokens && user) {
      navigate('/');
    }
  }, [user, tokens]);

  return (
    <>{children}</>
  )
}

export default AuthProvider
