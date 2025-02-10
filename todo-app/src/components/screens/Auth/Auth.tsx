import cn from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { FC, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { useActions } from '../../../shared/hooks/useActions'
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector'
import Alert from '../../../shared/notification/Alert'
import styles from './Auth.module.scss'
import AuthForm from './AuthForm/AuthForm'

const Auth: FC = () => {
	const { pathname } = useLocation()
	const { resetStatus } = useActions()
	const isRegisterPage = pathname.includes('register')
	const { error, isSuccess } = useTypedSelector(({ user }) => user)
	const navigate = useNavigate()

	useEffect(() => {
		if (error || isSuccess) {
			if (isSuccess && isRegisterPage) {
				navigate('/auth')
			}
			const timer = setTimeout(() => {
				resetStatus()
			}, 2600)

			return () => clearTimeout(timer)
		}
	}, [error, isRegisterPage, isSuccess, navigate, resetStatus])

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