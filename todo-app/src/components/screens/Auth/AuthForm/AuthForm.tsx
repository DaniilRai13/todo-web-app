import { FC } from 'react'
// import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import styles from './AuthForm.module.scss'

const AuthForm: FC<{ name: string }> = ({ name }) => {
	// const { register, handleSubmit, formState } = useForm()
	// const { pathname } = useLocation()
	// const isRegister = pathname.includes('register')
	return (
		<div className={styles.formWindow}>
			<h1 className={styles.title}>{name.toUpperCase()}</h1>
			<form className={styles.form}>
				<label>
					<span>Email:</span>
					<input />
				</label>
				<label>
					<span>Password:</span>
					<input />
				</label>
				<button>{name.toUpperCase()}</button>
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