import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'react-oidc-context';

const Callback = () => {
  const auth = useAuth();
  const router = useRouter();
  console.log('auth', auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      localStorage.setItem('tmfUser', JSON.stringify(auth.user));
    }
    router.push('/');
  }, [auth, router]);

  return (
    <div style={{ margin: '200px' }}>
      <h1>successfully logged in</h1>
      <Link href={'/'}>
        <button>home page</button>
      </Link>
    </div>
  );
};

export default Callback;
