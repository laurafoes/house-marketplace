import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../assets/styles/global'
import theme from '../assets/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Head>
            <title>olar. marketplace</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
    </ThemeProvider>
  )
}
