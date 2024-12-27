import cn from 'classnames'
import { FC, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import styles from './Auth.module.scss'
import AuthForm from './AuthForm/AuthForm'
import Alert from '../../../shared/notification/Alert'
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector'
import { useActions } from '../../../shared/hooks/useActions'
import { AnimatePresence } from 'framer-motion'

const Auth: FC = () => {
	const { pathname } = useLocation()
	const { resetStatus } = useActions()
	const isRegisterPage = pathname.includes('register')
	const { error, isSuccess } = useTypedSelector(({ user }) => user)
	const navigate = useNavigate()

	useEffect(() => {
		if (error || isSuccess) {
			if (isSuccess) {
				navigate('/auth')
			}
			const timer = setTimeout(() => {
				resetStatus()
			}, 2600)

			return () => clearTimeout(timer)
		}
	}, [error, isSuccess])
	console.log(isSuccess)

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
			<AnimatePresence>
				{error && <Alert type='error' message={error} />}
				{isSuccess && <Alert type='success' />}
			</AnimatePresence>
		</div>
	)
}

export default Auth