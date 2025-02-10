import { FC } from 'react'
import styles from './MainHeader.module.scss'
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector'
import { Icon } from '../../../shared/LucidIcon'
import { useActions } from '../../../shared/hooks/useActions'
import Button from '../../../shared/Button/Button'
import { useModalActions } from '../../../provider/ModalProvider'
import CreateTaskModal from '../../../shared/Modal/CreateTaskModal'

const MainHeader: FC = () => {
	const { user } = useTypedSelector(({ user }) => user)
	const { logout } = useActions()
	const { setOpen } = useModalActions()
	return (
		<header className={styles.header}>
			<Button
				title='New Task'
				icon='Plus'
				size={20}
				color='black'
				style={{ color: 'black' }}
				onClick={() => setOpen(true)}
			/>
			<CreateTaskModal />
			<div className={styles.profile}>
				<div className={styles.exit} onClick={logout}>
					<Icon icon='LogOut' color='black' size={16} />
					<h3>Log</h3>
				</div>
				<div className={styles.profileImg}>
					<img alt='image' src={user?.img || ''} />
				</div>
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