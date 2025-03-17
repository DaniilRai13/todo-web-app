import { FC, useState } from 'react';
import Button from '../../../../shared/Button/Button';
import Heading from '../../../../shared/Heading/Heading';
import { useTypedSelector } from '../../../../shared/hooks/useTypedSelector';
import SkeletonLoader from '../../../../shared/SkeletonLoader/SkeletonLoader';
import UpcomingTask from './UpcomingTask/UpcomingTask';
import styles from './UpcomingTasks.module.scss';
const UpcomingTasks: FC = () => {
	const { upcomingTasks, isLoading } = useTypedSelector(({ tasks }) => tasks);
	const [isShowMore, setIsShowMore] = useState(false);
	const visibleTasks =
		upcomingTasks.length > 3 && isShowMore
			? upcomingTasks
			: upcomingTasks.slice(0, 3);
	console.log(isLoading);
	return (
		<section className={styles.upcomingTasks}>
			<Heading className={styles.title}>upcoming tasks</Heading>
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
