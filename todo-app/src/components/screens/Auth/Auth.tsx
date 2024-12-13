import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import styles from './Auth.module.scss'
import AuthForm from './AuthForm/AuthForm'
const Auth: FC = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.container}>
			<section className={styles.left}>
				<h1>{pathname.includes('register') ? 'Register' : 'Login'}</h1>
			</section>
			<section className={styles.right}>
				<Routes>
					<Route index element={<AuthForm name='login' />} />
					<Route path='/register' element={<AuthForm name='register' />} />
				</Routes>
			</section>
		</div>
	)
}

export default Auth