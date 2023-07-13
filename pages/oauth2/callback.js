import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'react-oidc-context';
import { gothamFont } from '../../helpers/gothamFont';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';

const Callback = () => {
  const auth = useAuth();
  const router = useRouter();
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const stateValue = urlParams.get('state');
    localStorage.setItem('state', stateValue);
    const currentPage = localStorage.getItem('currentPage');
    setPageUrl(currentPage);

    if (auth.isAuthenticated) {
      localStorage.setItem('tmfUser', JSON.stringify(auth.user));
    }

    setTimeout(() => {
      window.location.href =
        currentPage ||
        process.env.NEXT_PUBLIC_HOST_DOMAIN ||
        'https://www.tmforum.org/';
    }, 1);
  }, [auth, router]);

  return (
    <div className="redirect-container">
      <Link href="https://www.tmforum.org/">
        <Image
          src={'/oda/open-apis/table/images/tmf-logo.svg'}
          alt="logo"
          width={135.99}
          height={28.472}
        />
      </Link>
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
        <Link
          className="redirect-link"
          href={
            pageUrl ||
            process.env.NEXT_PUBLIC_HOST_DOMAIN ||
            'https://www.tmforum.org/'
          }
        >
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
