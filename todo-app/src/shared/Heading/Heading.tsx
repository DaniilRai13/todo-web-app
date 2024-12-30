import { FC } from "react"
import styles from './Heading.module.scss'
import cn from 'classnames'

interface IHeading {
  title: string
  className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
  return (
    <h3 className={cn(styles.heading, className)}>{title}</h3>
  )
}

export default Heading
