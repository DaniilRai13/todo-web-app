import cn from 'classnames'
import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import styles from './Auth.module.scss'
import AuthForm from './AuthForm/AuthForm'
const Auth: FC = () => {
	const { pathname } = useLocation()
	const isRegisterPage = pathname.includes('register')
	return (
		<div className={styles.container}>
			<section className={cn(styles.left, {
				[styles.register]: isRegisterPage,
				[styles.login]: !isRegisterPage
			})}>
				<h1>{isRegisterPage ? 'Register' : 'Login'}</h1>
			</section>
			<section className={styles.right}>
				<Routes>
					<Route index element={<AuthForm name='login' isPage={isRegisterPage} />} />
					<Route path='/register' element={<AuthForm name='register' isPage={isRegisterPage} />} />
				</Routes>
			</section>
		</div>
	)
}

export default Auth