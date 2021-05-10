import { ThemeProvider } from 'styled-components';
import GlobalContext from '../context';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <Component {...pageProps} />
        <GlobalStyle />
      </GlobalContext>
    </ThemeProvider>
  )
}

export default MyApp
