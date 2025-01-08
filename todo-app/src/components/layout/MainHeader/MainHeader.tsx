import { FC } from 'react'
import NewTaskButton from '../../../shared/create-task-button/NewTaskButton'
import styles from './MainHeader.module.scss'
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector'
import { Icon } from '../../../shared/LucidIcon'
import { useActions } from '../../../shared/hooks/useActions'

const MainHeader: FC = () => {
	const { user } = useTypedSelector(({ user }) => user)
	const { logout } = useActions()
	return (
		<header className={styles.header}>
			<NewTaskButton />
			<div className={styles.profile}>
				<div className={styles.exit} onClick={logout}>
					<Icon icon='LogOut' color='black' size={16} />
					<h3>Log</h3>
				</div>
				<div className={styles.profileImg}><img alt='image' /></div>
				<div className={styles.info}>
					<h3 className={styles.name}>
						{user?.username ? user.username : 'User'}
					</h3>
					<h5 className={styles.email}>
						{user?.email}
					</h5>
				</div>
			</div>
		</header>
	)
}

export default MainHeader