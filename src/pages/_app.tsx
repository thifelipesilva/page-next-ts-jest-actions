import GlobalStyle from '@/styles/globalStyles'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu';
import Rodape from '@/components/Rodape';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Menu/>
      <Component {...pageProps} />
      <Rodape/>
    </>
  )
}
