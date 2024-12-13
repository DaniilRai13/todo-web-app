import { FC } from 'react'
import Navigation from './Navigation/Navigation'
import { Outlet } from 'react-router'
import styles from './Layout.module.scss'
import MainHeader from './MainHeader/MainHeader'
const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<main className={styles.main}>
				<MainHeader />
				<Outlet />
			</main>
		</div>
	)
}

export default Layout