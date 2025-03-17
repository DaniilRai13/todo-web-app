import { FC, useState } from 'react'
import Button from '../../../../shared/Button/Button'
import Heading from '../../../../shared/Heading/Heading'
import { useTypedSelector } from '../../../../shared/hooks/useTypedSelector'
import UpcomingTask from './UpcomingTask/UpcomingTask'
import styles from './UpcomingTasks.module.scss'
const UpcomingTasks: FC = () => {
	const { upcomingTasks } = useTypedSelector(({ tasks }) => tasks)
	const [isShowMore, setIsShowMore] = useState(false)
	const visibleTasks = upcomingTasks.length > 3 && isShowMore
		? upcomingTasks
		: upcomingTasks.slice(0, 3)

	return (
		<section className={styles.upcomingTasks}>
			<Heading className={styles.title}>upcoming tasks</Heading>
			<div className={styles.tasksWrapper}>
				<div className={styles.tasks}>
					{visibleTasks.map((task) => <UpcomingTask
						key={task.uid}
						task={task}
					/>)}
				</div>
			</div>
			<Button
				title={isShowMore ? 'Show less' : 'Show more'}
				classNames={styles.upcomingBtn}
				onClick={() => setIsShowMore(!isShowMore)}
			/>
		</section>
	)
}

export default UpcomingTasks