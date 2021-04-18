import useWeather from 'src/stores/weather'
import { WeatherResponse } from 'src/types/weather'
import CommonMetaTags from './components/common-meta-tags'
import SplashScreen from './components/splash-screen'
import styles from './shell.module.css'

type ShellProps = {
  children: React.ReactNode
}

function getIsCityDark(city: WeatherResponse['city']) {
  const currentTimestamp = Date.now() / 1000
  return currentTimestamp > city.sunset || currentTimestamp < city.sunrise
}

function Shell({ children }: ShellProps) {
  const { data, isLoading, isFailed } = useWeather()

  const isDark = data ? getIsCityDark(data.city) : false

  return (
    <>
      <CommonMetaTags />
      <SplashScreen isLoading={isLoading} isFailed={isFailed} />
      <main className={styles.main} data-theme={isDark ? 'dark' : 'light'}>
        {children}
      </main>
    </>
  )
}

export default Shell
