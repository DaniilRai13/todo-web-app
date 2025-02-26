import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import styles from './Layout.module.scss'
import MainHeader from './MainHeader/MainHeader'
import Navigation from './Navigation/Navigation'

const Layout: FC = () => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className={styles.container}>
			<MainHeader />
			<div className={styles.layout}>
				<Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
				<motion.main
					className={styles.main}
				>
					<Outlet />
				</motion.main>
			</div>
			<Footer />
		</div>
	)
}

export default Layout