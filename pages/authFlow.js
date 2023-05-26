import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

function Test() {
  const auth = useAuth();

  console.log('auth', auth);

  switch (auth.activeNavigator) {
    case 'signinSilent':
      return <div style={{ margin: '200px' }}>Signing you in...</div>;
    case 'signoutRedirect':
      return <div style={{ margin: '200px' }}>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div style={{ margin: '200px' }}>Loading...</div>;
  }

  if (auth.error) {
    return <div style={{ margin: '200px' }}>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div style={{ margin: '200px' }}>
        Hello {auth.user?.profile.sub}{' '}
        <button onClick={() => void auth.removeUser()}>Log out</button>
      </div>
    );
  }

  useEffect(() => {
    auth.signinRedirect()
  }, [auth]);

  return (
   <div></div>
  );
}

export default Test;
