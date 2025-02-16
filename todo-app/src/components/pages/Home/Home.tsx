import { FC, useEffect } from 'react'
import { useActions } from '../../../shared/hooks/useActions'
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector'
import styles from './Home.module.scss'
import TasksStatistic from './TasksStatistic/TasksStatistic'
const Home: FC = () => {
	const { user } = useTypedSelector(({ user }) => user)
	const { getTasks } = useActions()

	useEffect(() => {
		if (user) {
			getTasks(user.id)
		}
	}, [getTasks, user])

	return (
		<div className={styles.home}>
			<div className={styles.tasksInfoInner}>
				<div className={styles.tasksInfo}>
					<TasksStatistic
						title='In process'
						iconName='Hourglass'
						style={{ background: 'rgb(243 215 35' }} />
					<TasksStatistic
						title='In pending'
						iconName='Loader' />
					<TasksStatistic
						title='Completed'
						iconName='BookmarkCheck'
						style={{ background: '#77d69f' }} />
					<TasksStatistic
						title='Expired'
						iconName='BookmarkCheck'
						style={{ background: 'rgba(228, 80, 80, 0.7803921569)' }} />
				</div>
			</div>
		</div>
	)
}

export default Home