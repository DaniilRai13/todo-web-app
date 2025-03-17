import { FC } from 'react';
import { handleTaskStatus } from '../../../../common/handleTaskStatus';
import { useTypedSelector } from '../../../../shared/hooks/useTypedSelector';
import TaskStatistic from './TasksStatistic/TaskStatistic';
import styles from './TasksStatistic.module.scss';

const TasksStatistics: FC = () => {
	const { tasks } = useTypedSelector(({ tasks }) => tasks);

	return (
		<div className={styles.tasksInfo}>
			<TaskStatistic
				title='In process'
				iconName='Hourglass'
				count={handleTaskStatus.inProcess(tasks)}
				style={{ background: 'rgb(243 215 35' }}
			/>
			<TaskStatistic
				title='In pending'
				iconName='Loader'
				count={handleTaskStatus.inPending(tasks)}
			/>
			<TaskStatistic
				title='Completed'
				iconName='BookmarkCheck'
				style={{ background: '#77d69f' }}
				count={handleTaskStatus.completed(tasks)}
			/>
			<TaskStatistic
				title='Expired'
				iconName='BookmarkCheck'
				style={{ background: 'rgba(228, 80, 80, 0.7803921569)' }}
				count={handleTaskStatus.expired(tasks)}
			/>
		</div>
	);
};

export default TasksStatistics;
