import classnames from 'classnames'
import styles from './button.module.css'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'link'
}

function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classnames(
        styles.button,
        { [styles.button_link]: variant === 'link' },
        className
      )}
    />
  )
}

export default Button
