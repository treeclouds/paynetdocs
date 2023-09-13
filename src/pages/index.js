import React from 'react';
import Layout from '@theme/Layout';
import { Redirect } from 'react-router-dom';

const Hello = () => {
  // Use the Redirect component to navigate to /documentation
  return (
    <Layout>
      <Redirect to="/documentation" />
    </Layout>
  );
};

export default Hello;
