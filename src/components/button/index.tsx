import classnames from 'classnames'
import styles from './button.module.css'

function Button({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return <button {...props} className={classnames(styles.button, className)} />
}

export default Button
