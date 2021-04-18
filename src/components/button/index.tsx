import classnames from 'classnames'
import styles from './button.module.css'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'link' | 'icon'
}

function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classnames(
        styles.button,
        { [styles.button_link]: variant === 'link' },
        { [styles.button_icon]: variant === 'icon' },
        className
      )}
    />
  )
}

export default Button
