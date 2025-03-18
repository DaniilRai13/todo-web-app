import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { FC, useEffect } from 'react';
import styles from './Home.module.scss';

import TasksStatistics from './TasksStatistics/TasksStatistic';
import UpcomingTasks from './UpcomingTasks/UpcomingTasks';
const Home: FC = () => {
	const { user } = useTypedSelector(({ user }) => user);

	const { getTasks } = useActions();

	useEffect(() => {
		if (user) {
			getTasks(user.id);
		}
	}, [getTasks, user]);

	return (
		<div className={styles.home}>
			<div className={styles.tasksInfoInner}>
				<TasksStatistics />
			</div>
			<UpcomingTasks />
		</div>
	);
};

export default Home;
