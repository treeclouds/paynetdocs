import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from '@docusaurus/router';
import Layout from "@theme/Layout";
import { Wrapper, BackWrapper} from "./_element";
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
export default function Hello() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  
  const goBack = () => {
    history.goBack();
  };

  return (
    <Layout title="Hello" description="Hello React Page">
      <BackWrapper>
        <div className={"d-flex b-right-gray-200 desktop-only"}>
          <div className={"back-button__wrapper"}>
            <div className={"sidebar-back"} onClick={goBack}>
              <div class="black-icon"></div> <span>Back</span></div>
          </div>
          <div className={"empty-content"}></div>
        </div>
      </BackWrapper>
      <Wrapper>
        <API
          apiDescriptionUrl="/openapi/duitnow/duitnow-payment-v2.yml"
          router="memory"
        />
      </Wrapper>
    </Layout>
  );
}


