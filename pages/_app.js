import Layout from '../components/Layout';
import '../styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { AuthProvider } from 'react-oidc-context';

function MyApp({ Component, pageProps }) {
  const [formsLoaded, setFormsLoaded] = useState(false);

  const oidcConfig = {
    authority: 'https://staging-idp.tmforum.org/idp/oidc',
    client_id: 'cc45d352-67aa-4af7-8478-4b0cc76c381e',
    redirect_uri:
      'https://devbeta.ipsphere.net/oda/open-apis/table/oauth2/callback',
    client_secret: 'a42535d3-b36f-42aa-9038-f556b6121bff',
  };

  useEffect(() => {
    if (formsLoaded) {
      MktoForms2.loadForm('//app-ab16.marketo.com', '021-WLD-815', 4156);
    }
  }, [formsLoaded]);

  return (
    <Provider store={store}>
      <AuthProvider {...oidcConfig}>
        <Layout>
          <Script
            src="//app-ab16.marketo.com/js/forms2/js/forms2.min.js"
            strategy="afterInteractive"
            onLoad={() => setFormsLoaded(true)}
          />
          <form id="mktoForm_4156" style={{ display: 'none' }}></form>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
