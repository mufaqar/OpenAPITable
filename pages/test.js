import React from 'react';
import { useAuth } from 'react-oidc-context';

function Test() {
  const auth = useAuth();

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

  return (
    <button
      style={{ margin: '200px' }}
      onClick={() => void auth.signinRedirect()}
    >
      Log in
    </button>
  );
}

export default Test;
