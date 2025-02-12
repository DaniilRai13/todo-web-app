import Heading from '../../../shared/Heading/Heading'
import PasswordChangeForm from './PasswordChangeForm/PasswordChangeForm'
import styles from './Profile.module.scss'
import ProfileChangeForm from './ProfileChangeForm/ProfileChangeForm'

const Profile = () => {
	return (
		<section className={styles.profile}>
			<Heading title='Account Information' />
			<div className={styles.items}>
				<ProfileChangeForm />
				<PasswordChangeForm />
			</div>
		</section>
	)
}

export default Profile