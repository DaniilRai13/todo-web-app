import { FC, useEffect, useState } from 'react'
import Navigation from './Navigation/Navigation'
import { Outlet } from 'react-router'
import styles from './Layout.module.scss'
import MainHeader from './MainHeader/MainHeader'
import { motion } from 'framer-motion'
import useAnimation from './useAnimation'

const Layout: FC = () => {
	const [isOpen, setIsOpen] = useState(true)
	const { setWindowWidth, getAsideWidth } = useAnimation({ isOpen })

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.layout}>
				<Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
				<motion.main
					className={styles.main}
					initial={{ marginLeft: getAsideWidth() }}
					animate={{ marginLeft: getAsideWidth() }}
				>
					<MainHeader />
					<Outlet />
				</motion.main>
			</div>
		</div>
	)
}

export default Layout