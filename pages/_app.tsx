import { IntentContextProvider } from '@/contexts/intentContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntentContextProvider>
      <Component {...pageProps} />
    </IntentContextProvider>
  )
}
