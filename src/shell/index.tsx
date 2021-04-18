import React from 'react'
import useWeather from 'src/stores/weather'
import CommonMetaTags from './components/common-meta-tags'
import Header from './components/header'
import SplashScreen from './components/splash-screen'
import styles from './shell.module.css'

type ShellProps = {
  children: React.ReactNode
}

function Shell({ children }: ShellProps) {
  const { data, isLoading, isFailed, recentCities } = useWeather()

  React.useEffect(() => {
    const isDark = data ? data.city.isNightTime : false
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [data])

  return (
    <>
      <CommonMetaTags />
      <SplashScreen
        isLoading={recentCities.length > 0 && isLoading}
        isFailed={isFailed}
      />
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Shell
