import React from 'react';
import IsEqual from 'react-fast-compare';

function Home(): JSX.Element {
  return (
    <div>
      <p>Home</p>
    </div>
  );
}

export default React.memo(Home, IsEqual);
