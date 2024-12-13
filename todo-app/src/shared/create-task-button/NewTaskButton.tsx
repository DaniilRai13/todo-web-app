import { FC } from 'react'
import { Icon } from '../LucidIcon'
import styles from './NewTaskButton.module.scss'
const NewTaskButton: FC = () => {
	return (
		<button className={styles.button}>
			<Icon icon='Plus' size={20} color='#4f2986' />
			<h3 className={styles.text}>New Task</h3>
		</button>
	)
}

export default NewTaskButton