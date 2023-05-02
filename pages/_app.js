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
    authority: 'https://tmforumhubdev.mvine.com/idp/oidc',
    client_id: 'cc45d352-67aa-4af7-8478-4b0cc76c381e',
    redirect_uri: `https://devbeta.ipsphere.net/oda/open-apis/table/test/oauth2/callback`,
    scope: 'openid profile email phone address tmf',
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
        <Head>
            <script
              type="text/javascript"
              async
              dangerouslySetInnerHTML={{
                __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"G-W21R8NVK4E")`,
              }}
            />
        </Head>
          <Component {...pageProps} />
        </Layout>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=G-W21R8NVK4E`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
