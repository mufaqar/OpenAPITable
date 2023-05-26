import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

function Test() {
  const auth = useAuth();

  console.log('auth', auth);



  useEffect(() => {
    auth.signinRedirect()
  }, [auth]);

  return (
   <div></div>
  );
}

export default Test;
