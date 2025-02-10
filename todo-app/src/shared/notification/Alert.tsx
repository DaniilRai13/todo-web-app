import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from './Alert.module.scss'

const Alert: FC<{ type: string, message?: string }> = ({ type, message }) => {
  return (
    <motion.div
      className={cn(styles.alert, {
        [styles.error]: type === 'error',
        [styles.success]: type === 'success',
      })}
      initial={{ opacity: 0, bottom: '10px' }}
      animate={{ opacity: 1, bottom: '30px' }}
      exit={{ opacity: 0, bottom: '10px' }}
      transition={{
        type: 'tween'
      }}
    >
      <h3 className={styles.title}>
        {type === 'success' ?
          'Success' : 'Error'
        }
      </h3>
      {message && <h4 className={styles.text}>
        {message}
      </h4>}
    </motion.div>
  )
}

export default Alert
