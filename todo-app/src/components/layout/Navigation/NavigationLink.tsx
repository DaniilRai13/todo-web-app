import { AnimatePresence, motion } from "motion/react"
import { FC } from 'react'
import { NavLink } from 'react-router'
import { INavigateSideProps } from '../../../config/pageRoutes'
import { Icon } from '../../../shared/LucidIcon'
import styles from './NavigationLink.module.scss'

const NavigationLink: FC<INavigateSideProps & { isOpen: boolean }> = ({ link, color, icon, name, isOpen }) => {
	const setActive = ({ isActive }: { isActive: boolean }): string => isActive ? `${styles.active}` : ''

	return (
		<div
			className={styles.nav__link}
		>
			<NavLink
				to={link}
				className={setActive}
				style={isOpen ? { padding: '12px 17px' } : { padding: '12px 0', justifyContent: 'center' }}
			>
				<Icon color={color} icon={icon} size={27} />
				<AnimatePresence>
					{isOpen && <motion.div
						initial={{ opacity: 0, width: 0 }}
						animate={{ opacity: 1, width: 'auto' }}
						exit={{ opacity: 0, width: 0 }}
						transition={{ duration: 0.2 }}
					>{name}</motion.div>}
				</AnimatePresence>
			</NavLink >
		</div >
	)
}

export default NavigationLink