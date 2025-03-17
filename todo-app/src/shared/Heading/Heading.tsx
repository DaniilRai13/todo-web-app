import cn from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Heading.module.scss';

interface IHeading {
	title?: ReactNode;
	className?: string;
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return <h3 className={cn(styles.heading, className)}>{title}</h3>;
};

export default Heading;
