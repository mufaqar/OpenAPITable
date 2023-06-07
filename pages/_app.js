import Layout from '../components/Layout';
import '../styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { AuthProvider } from 'react-oidc-context';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  const [formsLoaded, setFormsLoaded] = useState(false);

  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    events: {
      page_view: 'Page View',
      file_download: 'File Download',
    },
  };

  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }

  const oidcConfig = {
    authority: `${process.env.NEXT_PUBLIC_AUTHORITY}/idp/oidc`,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    scope: 'openid profile email phone address tmf',
  };

  useEffect(() => {
    if (formsLoaded) {
      MktoForms2.loadForm(
        '//app-ab16.marketo.com',
        '021-WLD-815',
        process.env.NEXT_PUBLIC_MARKETO_FORM_ID
      );
    }
  }, [formsLoaded]);

  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <AuthProvider {...oidcConfig}>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <AuthProvider {...oidcConfig}>
        <Layout>
          <div className="container">
            <Script
              src="//app-ab16.marketo.com/js/forms2/js/forms2.min.js"
              strategy="afterInteractive"
              onLoad={() => setFormsLoaded(true)}
            />

            <form
              id={`mktoForm_${process.env.NEXT_PUBLIC_MARKETO_FORM_ID}`}
              style={{ display: 'none' }}
            ></form>
          </div>
          <Component {...pageProps} />
          <Script id="marketo-donwload" strategy="afterInteractive">
            {`
        
            
            function trackclick(url,type,api,email,event){
              event.preventDefault();

                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('rel', 'noopener noreferrer');
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();       
                

              var myForm = MktoForms2.allForms()[0];    

                myForm.onSuccess(function(vals,thanksURL){           
                  return false;                
                });       
                        
              myForm.addHiddenFields({
                //These are the values which will be submitted to Marketo
                'document type': type,
                title: api,
                'strategic program': 'Open API Program',
                program: 'API Project',
                topic: 'API',
                app: 'Open API Table - ${process.env.NEXT_PUBLIC_ENVIRONMENT}',
                permalink: url,
                Email: email
                });
                myForm.submit();                                  
              }`}
          </Script>
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
