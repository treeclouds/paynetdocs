import { Redirect } from '@docusaurus/router';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const visited = localStorage.getItem('visited');
      if (!visited) {
        localStorage.setItem('visited', 'true');
        window.location.href = '/home';
      }
    }
  }, []);
  return (
    <Redirect to="/home" />
  );
}

