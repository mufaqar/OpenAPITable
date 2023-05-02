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
          <div className="container">
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-W21R8NVK4E"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W21R8NVK4E');
        `}
            </Script>
            <Script
              src="//app-ab16.marketo.com/js/forms2/js/forms2.min.js"
              strategy="afterInteractive"
              onLoad={() => setFormsLoaded(true)}
            />

            <form id="mktoForm_4156" style="display:none"></form>
            <script>
              MktoForms2.loadForm("//app-ab16.marketo.com", "021-WLD-815",
              4156);
            </script>
          </div>
          <Component {...pageProps} />
          <Script id="marketo-donwload" strategy="afterInteractive">
            {`<script type='text/javascript'>function trackclick(url,type,api,email){
 
 var myForm = MktoForms2.allForms()[0];
 myForm.addHiddenFields({
 //These are the values which will be submitted to Marketo
 'document type': type,
 title: api,
 'strategic program': 'Open API Program',
 program: 'API Project',
 topic: 'API',
 app: 'Open API Table - Staging',
 permalink: url,
 Email: email
 });
 myForm.submit();
 
redirect(url);
//alert('will redirect to ' + url);
}
function redirect(url){
 window.open(url);
}</script>`}
          </Script>
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
