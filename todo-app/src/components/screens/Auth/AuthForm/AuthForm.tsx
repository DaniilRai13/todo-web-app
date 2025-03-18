import cn from 'classnames';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import { pageRoutes } from '@config/pageRoutes';
import { IAuthData } from '@interfaces/Auth.interface';
import Button from '@shared/Button/Button';
import Field from '@shared/form/Field';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import styles from './AuthForm.module.scss';

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IAuthData>({
		mode: 'onChange',
	});
	const { register: registerAction, login } = useActions();
	const { isLoading } = useTypedSelector(({ user }) => user);
	const isRegister = mode === 'register';
	const inputClassName = isRegister ? styles.register : styles.login;

	const onSubmit: SubmitHandler<IAuthData> = data => {
		if (isRegister) {
			registerAction(data);
			reset();
		} else login(data);
		reset();
	};

	return (
		<div className={styles.formWindow}>
			<h1
				className={cn(styles.title, {
					[styles.register]: isRegister,
					[styles.login]: !isRegister,
				})}
			>
				{mode.toUpperCase()}
			</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address',
						},
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
					title={mode.toUpperCase()}
					classNames={isRegister ? styles.btn_register : styles.btn_login}
					isLoading={isLoading}
				/>
			</form>
			<footer className={styles.footer}>
				{isRegister ? (
					<div className={styles.footerText}>
						Already have an account?
						<NavLink to={pageRoutes.auth}>Login</NavLink>
					</div>
				) : (
					<div className={styles.footerText}>
						Don't have an account yet?
						<NavLink to={pageRoutes.register}>Register</NavLink>
					</div>
				)}
			</footer>
		</div>
	);
};

export default AuthForm;
