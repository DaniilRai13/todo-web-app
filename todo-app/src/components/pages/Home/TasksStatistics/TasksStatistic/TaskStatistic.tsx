import { CSSProperties, FC } from 'react';
import { INavigateSideProps } from '../../../../../config/pageRoutes';
import { Icon } from '../../../../../shared/LucidIcon';
import styles from './TaskStatistic.module.scss';

interface ITasksStatProps {
	title: string;
	iconName: INavigateSideProps['icon'];
	count: number;
	style?: CSSProperties | undefined;
}
const TaskStatistic: FC<ITasksStatProps> = ({
	title,
	iconName,
	count,
	style = {},
}) => {
	return (
		<div className={styles.statistic} style={style}>
			<div className={styles.icon}>
				<Icon icon={iconName} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.status}>{title}</h3>
				<h3 className={styles.count}>
					{count} {count === 1 ? 'task' : 'tasks'}
				</h3>
			</div>
		</div>
	);
};

export default TaskStatistic;
