import { FC } from 'react'
import { Icon } from '../LucidIcon'
import styles from './NewTaskButton.module.scss'
const NewTaskButton: FC = () => {
	return (
		<button className={styles.button}>
			<Icon icon='Plus' size={16} color='#000' />
			<h3 className={styles.text}>New Task</h3>
		</button>
	)
}

export default NewTaskButton