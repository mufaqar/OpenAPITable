import Link from 'next/link';
import React from 'react';

const callback = () => {
  return (
    <div style={{ margin: '200px' }}>
      <h1>successfully logged in</h1>
      <Link href={'/test'}>
        <button>home page</button>
      </Link>
    </div>
  );
};

export default callback;
