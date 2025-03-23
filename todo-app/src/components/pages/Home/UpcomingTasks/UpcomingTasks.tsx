import Button from '@shared/Button/Button';
import Heading from '@shared/Heading/Heading';
import SkeletonLoader from '@shared/SkeletonLoader/SkeletonLoader';
import { FC } from 'react';
import UpcomingTask from './UpcomingTask/UpcomingTask';
import styles from './UpcomingTasks.module.scss';
import useUpcomingTasks from './useUpcomingTasks';

const UpcomingTasks: FC = () => {
	const { isLoading, setIsShowMore, isShowMore, visibleTasks } =
		useUpcomingTasks();

	return (
		<section className={styles.upcomingTasks}>
			<Heading title='upcoming tasks' className={styles.title} />
			<div className={styles.tasksWrapper}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.upcomingSkeletons}
						height={300}
					/>
				) : (
					<div className={styles.tasks}>
						{visibleTasks.map(task => (
							<UpcomingTask key={task.uid} task={task} />
						))}
					</div>
				)}
			</div>
			<Button
				title={isShowMore ? 'Show less' : 'Show more'}
				classNames={styles.upcomingBtn}
				onClick={() => setIsShowMore(!isShowMore)}
				disabled={isLoading}
			/>
		</section>
	);
};

export default UpcomingTasks;
