import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'react-oidc-context';
import { gothamFont } from '../../../helpers/gothamFont';
import Footer from '../../../components/Footer/Footer';

const Callback = () => {
  const auth = useAuth();
  const router = useRouter();
  console.log('Callback auth: ', auth);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const stateValue = urlParams.get('state');
    localStorage.setItem('state', stateValue);
    const currentPage = localStorage.getItem('currentPage');

    if (auth.isAuthenticated) {
      localStorage.setItem('tmfUser', JSON.stringify(auth.user));
    }
    router.push(currentPage || '/');
  }, [auth, router]);

  return (
    <div className="redirect-container">
      <h1 className={gothamFont.className}>
        {auth?.error?.message
          ? `Oops... ${auth.error.message}`
          : `Successfully logged in`}
      </h1>
      <p className={gothamFont.className}>
        You will be redirected automatically in a few seconds.
      </p>
      <p className={gothamFont.className}>
        If you are not redirected, click{' '}
        <Link className="redirect-link" href={'/'}>
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default Callback;

Callback.getLayout = function getLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
