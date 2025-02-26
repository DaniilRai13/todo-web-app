import { motion } from "motion/react"
import { FC } from 'react'
import { navigateSideProps } from '../../../config/pageRoutes'
import { Icon } from '../../../shared/LucidIcon'
import styles from '../Layout.module.scss'
import NavigationLink from './NavigationLink'

interface NavigationProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const Navigation: FC<NavigationProps> = ({ isOpen, setIsOpen }) => {
	return (
		<aside>
			<motion.div
				animate={{ width: isOpen ? '200px' : '60px', padding: isOpen ? '50px 0 30px 20px' : '50px 0 30px' }}
				transition={{ type: "spring" }}
				className={styles.asideInner}>
				{isOpen
					? <motion.div
						className={styles.sideOpened}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Icon
							icon='PanelRightOpen'
							color='#EC4899'
							size={24}
							onClick={() => setIsOpen(false)}
						/>
					</motion.div>
					: <motion.div
						className={styles.sideClosed}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Icon
							icon='PanelRightClose'
							size={24}
							onClick={() => setIsOpen(true)}
						/>
					</motion.div>}
				{navigateSideProps.map(item => (<NavigationLink
					key={item.link}
					link={item.link}
					color={item.color}
					name={item.name}
					icon={item.icon}
					isOpen={isOpen}
				/>))}
			</motion.div>
		</aside >
	)
}

export default Navigation