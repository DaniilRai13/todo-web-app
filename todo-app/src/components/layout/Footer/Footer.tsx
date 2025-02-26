import { FC } from 'react'
import LOGO from '../../../assets/TASK.gif'
import { Icon } from '../../../shared/LucidIcon'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer>
			<div className={styles.footerInner}>
				<div className={styles.mainContent}>
					<div className={styles.leftSide}>
						<img src={LOGO} alt="logo" />
						<p className={styles.description}>create tasks and chat with friends</p>
					</div>
					<div className={styles.rightSide}>
						<ul>
							<li>
								<a target='_blank' href="https://github.com/DaniilRai13">GitHub</a>
							</li>
						</ul>
						<div className={styles.socials}>
							<ul>
								<li>
									<a href="https://github.com/DaniilRai13">
										<Icon icon='Send' size={22} color='#50a5d2' />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/__da.ni.il__/">
										<Icon icon='Instagram' size={22} color='#df7979' />
									</a>
								</li>
								<li>
									<a href="mailto:dan.eu13@mail.ru" >
										<Icon icon='Mail' size={22} color='#2c61d4' />
									</a>
								</li>
							</ul>
						</div>
					</div>

				</div>
				<hr />
				<div className={styles.madeBy}>Made with <span>❤️</span> by DaniilRai © 2025</div>
			</div>
		</footer>
	)
}

export default Footer