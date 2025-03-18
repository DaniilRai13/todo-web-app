import { FC, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { pageRoutes } from '../config/pageRoutes';
import { AuthService } from '../services/authService/auth.service';
import { useTypedSelector } from '@hooks/useTypedSelector';

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { user } = useTypedSelector(({ user }) => user);
	const tokens = AuthService.checkTokens();

	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		const publicRoutes = [pageRoutes.auth, pageRoutes.register];
		if (!tokens || !user) {
			if (!publicRoutes.includes(location.pathname)) {
				navigate(pageRoutes.auth, { replace: true });
			}
		} else {
			if (location.pathname === pageRoutes.auth) {
				navigate(pageRoutes.overview, { replace: true });
			}
		}
	}, [user, tokens, location.pathname, navigate]);

	return <>{children}</>;
};

export default AuthProvider;
