import { motion } from "motion/react"
import { FC, useState } from 'react'
import { navigateSideProps } from '../../../config/pageRoutes'
import { Icon } from '../../../shared/LucidIcon'
import styles from '../Layout.module.scss'
import NavigationLink from './NavigationLink'
const Navigation: FC = () => {
	const [isOpen, setIsOpen] = useState(true)
	return (
		<motion.aside
			animate={{ width: isOpen ? '15%' : '6%', padding: isOpen ? '40px 20px 20px 20px' : '40px 10px 20px' }}
			transition={{ type: "spring" }}
		>
			{isOpen
				? <motion.div
					className={styles.sideOpened}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				> <Icon
						icon='PanelRightOpen'
						color='#EC4899'
						size={24}
						onClick={() => setIsOpen(false)}
					/></motion.div>
				: <motion.div
					className={styles.sideClosed}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				><Icon
						icon='PanelRightClose'
						size={24}
						onClick={() => setIsOpen(true)}
					/></motion.div>}
			{navigateSideProps.map(item => (<NavigationLink
				key={item.link}
				link={item.link}
				color={item.color}
				name={item.name}
				icon={item.icon}
				isOpen={isOpen}
			/>))}
		</motion.aside>
	)
}

export default Navigation