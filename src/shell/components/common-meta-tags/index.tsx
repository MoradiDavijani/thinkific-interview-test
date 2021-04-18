import Head from 'next/head'

const title = 'Weather Forecast'
const description =
  'Weather app provides 5 days weather forecasts and current weather conditions for cities worldwide.'

export default function CommonMetaTags() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
      />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" href="/logo-icons/32x32.png" sizes="32x32" />
      <link rel="icon" href="/logo-icons/192x192.png" sizes="192x192" />
      <link rel="icon" href="/logo-icons/512x512.png" sizes="512x512" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/logo-icons/192x192.png"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Weather" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      <meta name="theme-color" content="#f2fbff" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Weather Forecast" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="dns-prefetch" href="//openweathermap.org" />
    </Head>
  )
}
