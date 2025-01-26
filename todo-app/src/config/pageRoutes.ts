import { icons } from 'lucide-react'

interface IPageRoutes {
	home: string
	auth: string
}

export const pageRoutes: IPageRoutes = {
	home: '/',
	auth: 'auth'
}

export interface INavigateSideProps {
	name: string,
	icon: IconNames,
	color: string
	link: string
}
export type IconNames = keyof typeof icons
export const navigateSideProps: INavigateSideProps[] = [
	{
		name: 'Overview',
		icon: 'LayoutGrid',
		color: '#59b081',
		link: '/overview'
	},
	{
		name: 'Todos',
		icon: 'NotebookPen',
		color: '#c84848',
		link: '/todo-list'
	},
	{
		name: 'Calendar',
		icon: 'CalendarDays',
		color: '#b46cd1',
		link: '/calendar'
	},
	{
		name: 'Profile',
		icon: 'UserRoundPen',
		color: '#F59E0B',
		link: '/profile'
	},
]