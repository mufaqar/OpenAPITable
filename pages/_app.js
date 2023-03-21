import Layout from '../components/Layout';
import '../styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
