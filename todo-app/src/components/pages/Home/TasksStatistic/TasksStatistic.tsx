import { CSSProperties, FC } from 'react'
import { INavigateSideProps } from '../../../../config/pageRoutes'
import { Icon } from '../../../../shared/LucidIcon'
import styles from './TasksStatistic.module.scss'

interface ITasksStatProps {
	title: string
	iconName: INavigateSideProps['icon']
	style?: CSSProperties | undefined
}
const TasksStatistic: FC<ITasksStatProps> = ({ title, iconName, style = {} }) => {

	return (
		<div className={styles.statistic} style={style}>
			<div className={styles.icon}>
				<Icon icon={iconName} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.status}>{title}</h3>
				<h3 className={styles.count}>24 tasks</h3>
			</div>
		</div>
	)
}

export default TasksStatistic