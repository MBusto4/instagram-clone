import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

//need a session provider to keep our session state throughout our app

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
