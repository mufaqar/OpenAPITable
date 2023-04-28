import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

const Callback = () => {
  const auth = useAuth();
  console.log('auth', auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      localStorage.setItem('tmfUser', JSON.stringify(auth.user));
    }
  }, [auth]);

  return (
    <div style={{ margin: '200px' }}>
      <h1>successfully logged in</h1>
      <Link href={'/test'}>
        <button>home page</button>
      </Link>
    </div>
  );
};

export default Callback;
