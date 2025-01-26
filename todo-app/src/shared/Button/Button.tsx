import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import { Icon } from '../LucidIcon'
import { IconNames } from '../../config/pageRoutes'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
	classNames?: string
	isLoading?: boolean
	icon?: IconNames,
	size?: number,
	color?: string,
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButton> = ({ title, icon, size, color, classNames, onClick, isLoading, ...props }) => {
	return (
		<button
			className={cn(styles.button, classNames)}
			onClick={onClick}
			{...props}
		>
			{icon && <Icon
				icon={icon}
				size={size}
				color={color}
			/>}
			{isLoading ? <h3>Loading...</h3> : <h3>{title}</h3>}
		</button>
	)
}

export default Button