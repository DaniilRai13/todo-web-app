import Heading from '../../../shared/Heading/Heading'
import styles from './Profile.module.scss'
import { useEffect } from 'react'
import Alert from '../../../shared/notification/Alert'
import { AnimatePresence } from 'framer-motion'
import { saveUserToStorage } from '../../../store/user/user.localstorage'
import ProfileChangeForm from './ProfileChangeForm/ProfileChangeForm'
import PasswordChangeForm from './PasswordChangeForm/PasswordChangeForm'
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector'
import { useActions } from '../../../shared/hooks/useActions'

const Profile = () => {

	const { user, isSuccess, error } = useTypedSelector(({ user }) => user)
	const { resetStatus } = useActions()
	
	useEffect(() => {
		if (isSuccess && user) saveUserToStorage(user)
		if (error || isSuccess) {
			const timer = setTimeout(() => {
				resetStatus()
			}, 2600)

			return () => clearTimeout(timer)
		}
	}, [error, isSuccess, user])

	return (
		<section className={styles.profile}>
			<Heading title='Account Information' />
			<div className={styles.items}>
				<ProfileChangeForm />
				<PasswordChangeForm />
			</div>
			<AnimatePresence>
				{error && <Alert type='error' message={error} />}
				{isSuccess && <Alert type='success' />}
			</AnimatePresence>
		</section>
	)
}

export default Profile