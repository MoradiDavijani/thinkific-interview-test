import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Weather Forecast</h1>
    </header>
  )
}

export default Header
