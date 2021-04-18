import type { AppProps } from 'next/app'
import Shell from 'src/shell'
import { WeatherProvider } from 'src/stores/weather'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </WeatherProvider>
  )
}

export default MyApp
