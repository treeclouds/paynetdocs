import React from "react";
import Layout from "@theme/Layout";
import { Wrapper } from "./_element";
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <Wrapper>
        <API
          apiDescriptionUrl="/openapi/duitnow/consent-bank-v2.yml"
          router="memory"
        />
      </Wrapper>
    </Layout>
  );
}


