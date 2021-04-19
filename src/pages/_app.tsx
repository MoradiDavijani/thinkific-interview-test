import type { AppProps } from 'next/app'
import React from 'react'
import Shell from 'src/shell'
import { WeatherProvider } from 'src/stores/weather'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(
        () => console.log('Service Worker registered successfully'),
        error => console.log('Service Worker registration failed', error)
      )
    }
  }, [])

  return (
    <WeatherProvider>
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </WeatherProvider>
  )
}

export default MyApp
