import { FC } from 'react'
import { NavLink } from 'react-router'
import { useModalActions } from '../../../provider/ModalProvider/modalContext'
import Button from '../../../shared/Button/Button'
import { useActions } from '../../../shared/hooks/useActions'
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector'
import { Icon } from '../../../shared/LucidIcon'
import CreateTaskModal from '../../../shared/Modal/CreateTaskModal'
import styles from './MainHeader.module.scss'

const MainHeader: FC = () => {
	const { user } = useTypedSelector(({ user }) => user)
	const { logout } = useActions()
	const { setOpen } = useModalActions()
	return (
		<header className={styles.header}>
			<Button
				title='New'
				icon='Plus'
				size={20}
				color='black'
				style={{ color: 'black' }}
				onClick={() => setOpen(true)}
			><Icon
					icon={'NotebookPen'}
					size={20}
					color={'#000'}
					style={{ marginLeft: '10px', marginRight: '10px' }}
				/></Button>
			<CreateTaskModal />
			<div className={styles.profile}>
				<div className={styles.exit} onClick={logout}>
					<Icon icon='LogOut' color='black' size={16} />
					<h3>Log</h3>
				</div>
				<NavLink to='/profile' className={styles.profileInfo}>
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
				</NavLink>
			</div>
		</header >
	)
}

export default MainHeader