import React from 'react';
import { useLocation } from '@docusaurus/router';

function MyComponent() {
  const location = useLocation();
  const url = location.pathname; // Current URL path
  
  return (
    <div>
      <p>Current URL: {url}</p>
    </div>
  );
}

export default MyComponent;