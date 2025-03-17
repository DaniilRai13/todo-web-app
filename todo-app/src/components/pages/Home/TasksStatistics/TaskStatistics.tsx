import { FC } from 'react';
import { handleTaskStatus } from '../../../../common/handleTaskStatus';
import { useTypedSelector } from '../../../../shared/hooks/useTypedSelector';
import TasksStatistic from './TasksStatistic/TasksStatistic';
import styles from './TaskStatistics.module.scss';

const TaskStatistics: FC = () => {
	const { tasks } = useTypedSelector(({ tasks }) => tasks);

	return (
		<div className={styles.tasksInfo}>
			<TasksStatistic
				title='In process'
				iconName='Hourglass'
				count={handleTaskStatus.inProcess(tasks)}
				style={{ background: 'rgb(243 215 35' }}
			/>
			<TasksStatistic
				title='In pending'
				iconName='Loader'
				count={handleTaskStatus.inPending(tasks)}
			/>
			<TasksStatistic
				title='Completed'
				iconName='BookmarkCheck'
				style={{ background: '#77d69f' }}
				count={handleTaskStatus.completed(tasks)}
			/>
			<TasksStatistic
				title='Expired'
				iconName='BookmarkCheck'
				style={{ background: 'rgba(228, 80, 80, 0.7803921569)' }}
				count={handleTaskStatus.expired(tasks)}
			/>
		</div>
	);
};

export default TaskStatistics;
