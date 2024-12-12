import { icons, LucideProps } from 'lucide-react'
import { FC } from 'react'
import { INavigateSideProps } from '../config/pageRoutes'

type IconProps = Pick<INavigateSideProps, 'icon'> & LucideProps

export const Icon: FC<IconProps> = ({ icon, ...props }) => {
	const LucideIcon = icons[icon]

	return <LucideIcon {...props} />
}