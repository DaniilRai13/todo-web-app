import { FC } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
interface IButton {
	title: string
	classNames?: string
	isLoading?: boolean
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: FC<IButton> = ({ title, classNames, onClick, isLoading }) => {
	return (
		<button className={cn(styles.button, classNames)} onClick={onClick}>{isLoading ? 'Loading...' : title}</button>
	)
}

export default Button