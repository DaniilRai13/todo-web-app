import { Controller, useForm } from 'react-hook-form'
import { auth } from '../../../config/firestore'
import Field from '../../../shared/form/Field'
import Heading from '../../../shared/Heading/Heading'
import styles from './Profile.module.scss'
import { IProfileData } from '../../../config/user.data'
import Button from '../../../shared/Button/Button'
import { useProfile } from './useProfile'
import ImageUpload from '../../../shared/form/ImageUpload/ImageUpload'
import { useState } from 'react'
import { userService } from '../../../services/user.service'

const Profile = () => {
	console.log(auth)
	const { register, handleSubmit, formState: { errors }, control } = useForm<IProfileData>({
		mode: 'onChange'
	})
	const [password, setPassword] = useState<string>('')
	const { onSubmit, user } = useProfile()
	const handleSave = (data: IProfileData) => {
		if (password) {
			userService.updateUserPassword(password)
		}
		onSubmit({ ...user, ...data })
	}
	return (
		<section className={styles.profile}>
			<Heading title='Account Information' />
			<form
				className={styles.items}
				onSubmit={handleSubmit(handleSave)}
			>
				<Controller
					name='img'
					control={control}
					render={({ field }) => <ImageUpload
						currentImageUrl={user?.img || 'https://png.klev.club/uploads/posts/2024-06/png-klev-club-m6sy-p-znachok-profilya-png-21.png'}
						onImageChange={(file) => field.onChange(file)} />}
				/>
				<div
					className={styles.mainInfo}
				>
					<Field {...register('username', {

					})}
						placeholder='Username'
						defaultValue={user?.username || ''} />
					<Field {...register('email', {

					})}
						placeholder='Email'
						defaultValue={user?.email || ''} />

					<Field
						value={password}
						placeholder='Password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
						type='password'
					/>
					<Button
						title='Save'
					/>
				</div>
			</form>
		</section>
	)
}

export default Profile