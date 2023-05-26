import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

function Test() {
  const auth = useAuth();

  console.log('auth', auth);



  useEffect(() => {
    const tmfUser = JSON.parse(localStorage.getItem('tmfUser'));
    if (!tmfUser) {
        void auth.signinRedirect()
    }
    
  }, []);

  return (
   <div></div>
  );
}

export default Test;
