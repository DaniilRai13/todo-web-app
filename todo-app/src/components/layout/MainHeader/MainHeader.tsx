import { FC } from 'react'
import NewTaskButton from '../../../shared/create-task-button/NewTaskButton'
import styles from './MainHeader.module.scss'
const MainHeader: FC = () => {
	return (
		<header className={styles.header}>
			<NewTaskButton />
			<div className={styles.profile}>
				<div className={styles.profileImg}><img alt='image' /></div>
				<div className={styles.info}>
					<h4 className={styles.name}>
						Daniil Rai
					</h4>
					<h5 className={styles.email}>
						testnet02@mail.ru
					</h5>
				</div>
			</div>
		</header>
	)
}

export default MainHeader