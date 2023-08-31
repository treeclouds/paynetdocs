import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import { Wrapper } from "./_element";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Hello() {
  const LazyStoplight = React.lazy(() => import("../../components/Spotlight"));
  const noIdeaForWhat = (
    <div style={{ minHeight: "calc(100vh - var(--ifm-navbar-height))" }} />
  );
  return (
    <Layout title="Hello" description="Hello React Page">
      <BrowserOnly>
        {() => (
          <Suspense fallback={noIdeaForWhat}>
            <LazyStoplight apiDescriptionUrl="/openapi/duitnow/duitnow-payment.yml" />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}
