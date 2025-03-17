import { FC, useEffect } from 'react';
import { useActions } from '../../../shared/hooks/useActions';
import { useTypedSelector } from '../../../shared/hooks/useTypedSelector';
import styles from './Home.module.scss';

import TaskStatistics from './TasksStatistics/TaskStatistics';
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
				<TaskStatistics />
			</div>
			<UpcomingTasks />
		</div>
	);
};

export default Home;
