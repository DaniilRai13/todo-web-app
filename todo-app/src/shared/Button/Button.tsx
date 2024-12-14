import { FC } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
interface IButton {
	title: string
	classNames?: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: FC<IButton> = ({ title, classNames, onClick }) => {
	return (
		<button className={cn(styles.button, classNames)} onClick={onClick}>{title}</button>
	)
}

export default Button