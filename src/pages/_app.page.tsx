import type { AppProps } from 'next/app'
import { globalStyle } from '../styles/globals'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
