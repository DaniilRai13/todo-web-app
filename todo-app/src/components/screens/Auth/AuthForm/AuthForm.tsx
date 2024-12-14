import { FC } from 'react'
// import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { NavLink } from 'react-router'
import Button from '../../../../shared/Button/Button'
import styles from './AuthForm.module.scss'

const AuthForm: FC<{ name: string, isPage: boolean }> = ({ name, isPage }) => {
	// const { register, handleSubmit, formState } = useForm()
	return (
		<div className={styles.formWindow}>
			<h1
				className={cn(styles.title, {
					[styles.register]: isPage,
					[styles.login]: !isPage
				})}>{name.toUpperCase()}</h1>
			<form className={styles.form}>
				<label>
					<span>Email:</span>
					<input
						className={cn(styles.input, {
							[styles.register]: isPage,
							[styles.login]: !isPage
						})} />
				</label>
				<label>
					<span>Password:</span>
					<input
						type='password'
						className={cn(styles.input, {
							[styles.register]: isPage,
							[styles.login]: !isPage
						})} />
				</label>
				<Button
					title={name.toUpperCase()}
					classNames={isPage ? styles.btn_register : styles.btn_login}
				/>
			</form>
			<footer className={styles.footer}>
				{name === 'register'
					? <div className={styles.footerText}>
						Already have an account?
						<NavLink to={'/auth'}>Login</NavLink>
					</div>
					: <div className={styles.footerText}>
						Don't have an account yet?
						<NavLink to={'register'}>Register</NavLink>
					</div>
				}
			</footer>
		</div>
	)
}

export default AuthForm