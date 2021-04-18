import classnames from 'classnames'
import styles from './circle.module.css'

type CircleProps = {
  size: string
  className?: string
}

function Circle({ size, className }: CircleProps) {
  return (
    <span
      style={{ width: size, height: size }}
      className={classnames(styles.circle, className)}
    />
  )
}

export default Circle
