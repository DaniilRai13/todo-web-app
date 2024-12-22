import { FC } from 'react'
// import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import Button from '../../../../shared/Button/Button'
import Field from '../../../../shared/form/Field'
import { IField } from '../../../../shared/form/form.interface'
import styles from './AuthForm.module.scss'

const AuthForm: FC<{ name: string, isPage: boolean }> = ({ name, isPage }) => {
	const { register, handleSubmit, formState: { errors } } = useForm<IField>({
		mode: 'onChange'
	})
	const { isLoading } = useTypedSelector(({ user }) => user)
	const onSubmit = (data: IField) => {
		console.log(data)
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
					isPage={isPage}
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
					isPage={isPage}
					error={errors.password}
				/>
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