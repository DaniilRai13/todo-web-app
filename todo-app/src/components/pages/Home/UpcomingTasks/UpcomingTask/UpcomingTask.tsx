import { ITask } from '@config/user.data';
import dayjs from 'dayjs';
import { FC } from 'react';
import styles from './UpcomingTask.module.scss';

const UpcomingTask: FC<{ task: ITask }> = ({ task }) => {
	const formattedDate = dayjs(task.endDate).format('DD.MM.YYYY, h:mm A');

	return (
		<div className={styles.task}>
			<div className={styles.status}>{task.status}</div>

			<div className={styles.taskItems}>
				<div className={styles.title}>{task.title}</div>
				<div className={styles.priority}>
					<div className={styles.priorityText} data-priority={task.priority}>
						{task.priority}
					</div>
				</div>
				<div className={styles.description}>{task.description}</div>
			</div>
			<div className={styles.date}>
				<h4 className={styles.dateTitle}>Ending:</h4>
				<div className={styles.dateInfo}>{formattedDate}</div>
			</div>
		</div>
	);
};

export default UpcomingTask;
