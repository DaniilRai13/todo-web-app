import { FC, useState } from 'react';
import { ITask } from '../../../../../config/user.data';
import Select from '../../../../../shared/Select';
import styles from './UpcomingTask.module.scss';
const UpcomingTask: FC<{ task: ITask }> = ({ task }) => {
	const [priority, setPriority] = useState<ITask['priority']>(task.priority);
	const priorities: ITask['priority'][] = ['low', 'medium', 'high'] as const;
	const changePriority = (option: ITask['priority']) => {
		setPriority(option);
	};
	return (
		<div className={styles.task}>
			<div>{task.title}</div>
			<div className={styles.taskItems}>
				<div className={styles.info}>
					<Select
						title='status'
						options={priorities}
						value={priority}
						changeOptionValue={changePriority}
					/>
				</div>
				<div className={styles.description}>{task.description}</div>
			</div>
			<div className={styles.date}></div>
		</div>
	);
};

export default UpcomingTask;
