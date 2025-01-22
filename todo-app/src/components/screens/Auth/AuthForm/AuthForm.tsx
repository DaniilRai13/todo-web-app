import { FC } from 'react'
import cn from 'classnames'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import Button from '../../../../shared/Button/Button'
import Field from '../../../../shared/form/Field'
import styles from './AuthForm.module.scss'
import { useActions } from '../../../../shared/hooks/useActions'
import { IAuthData } from '../../../../interfaces/Auth.interface'
import { useTypedSelector } from '../../../../shared/hooks/useTypedSelector'

const AuthForm: FC<{ name: string, isPage: boolean }> = ({ name, isPage }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IAuthData>({
		mode: 'onChange'
	})
	const { register: registerAction, login } = useActions()
	const { isLoading } = useTypedSelector(({ user }) => user)

	const inputClassName = isPage ? styles.register : styles.login

	const onSubmit: SubmitHandler<IAuthData> = (data) => {
		if (isPage) {
			registerAction(data)
			reset()
		}
		else login(data)
		reset()
	}


	return (
		<div className={styles.formWindow}>
			<h1
				className={cn(styles.title, {
					[styles.register]: isPage,
					[styles.login]: !isPage
				})}>{name.toUpperCase()}</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address'
						}
					})}
					placeholder='Email'
					className={inputClassName}
					error={errors.email}
				/>
				<Field
					{...register('password', {
						required: 'This field is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters',
						},
					})}
					placeholder='Password'
					type='password'
					className={inputClassName}
					error={errors.password}
				/>
				<Button
					title={name.toUpperCase()}
					classNames={isPage ? styles.btn_register : styles.btn_login}
					isLoading={isLoading}
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