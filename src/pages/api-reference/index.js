import React from "react";
import Layout from "@theme/Layout";
import { Wrapper } from "./_element";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <Wrapper>
        <p>Content here</p>
      </Wrapper>
    </Layout>
  );
}
