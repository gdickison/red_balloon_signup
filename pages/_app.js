import '../styles/globals.css'
import PlausibleProvider from 'next-plausible'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain='redballoon.work' customDomain='https://analytics.redballoon.work' selfHosted='true'>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"/>
      </Head>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
