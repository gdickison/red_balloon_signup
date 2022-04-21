import '../styles/globals.css'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain='redballoon.work' customDomain='https://analytics.redballoon.work' selfHosted='true'>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
