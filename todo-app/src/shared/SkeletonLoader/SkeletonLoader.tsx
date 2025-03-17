import cn from 'classnames';
import { FC } from 'react';
import styles from './SkeletonLoader.module.scss';
interface CustomSkeletonProps {
	width?: string | number;
	height?: string | number;
	borderRadius?: string | number;
	className?: string;
	count?: number;
}

const CustomSkeleton: FC<CustomSkeletonProps> = ({
	width = '100%',
	height = 'auto',
	borderRadius = '0px',
	className = '',
	count = 1,
}) => {
	const skeletons = Array.from({ length: count }, (_, index) => (
		<div
			key={index}
			className={`${styles.skeleton}`}
			style={{
				width,
				height,
				borderRadius,
				marginBottom: '10px',
			}}
		/>
	));

	return (
		<div className={cn(styles.skeletonsContainer, className)}>{skeletons}</div>
	);
};

export default CustomSkeleton;
