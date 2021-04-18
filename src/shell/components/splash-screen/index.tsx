import classnames from 'classnames'
import React from 'react'
import Button from 'src/components/button'
import Spinner from 'src/components/spinner'
import styles from './splash-screen.module.css'

type SplashScreenProps = {
  isLoading: boolean
  isFailed: boolean
}

function SplashScreen({ isLoading, isFailed }: SplashScreenProps) {
  const [isHidden, setIsHidden] = React.useState<boolean>(false)

  const retry = () => window.location.reload()

  React.useEffect(() => {
    if (!isLoading && !isFailed) {
      const timeoutId = setTimeout(() => setIsHidden(true), 400)

      return () => clearTimeout(timeoutId)
    }
  }, [isLoading, isFailed])

  if (isHidden) {
    return null
  }

  return (
    <div
      className={classnames(styles.splash, {
        [styles.splash_hidden]: !isLoading && !isFailed
      })}
    >
      <img
        src="/logo-icons/192x192.png"
        alt="Weather App"
        className={styles.splash__logo}
      />
      <div className={styles.splash__status}>
        {isFailed ? <Button onClick={retry}>Try Again</Button> : null}
        {isLoading ? <Spinner /> : null}
      </div>
    </div>
  )
}

export default SplashScreen
