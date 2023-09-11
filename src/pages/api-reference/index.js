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

  // const yaml = require('js-yaml');
  // const fs   = require('fs');

  // useEffect(() => {
  //   const loadYamlFile = () => {
  //     try {
  //       const filePath = path.resolve(__dirname, '/openapi/duitnow/duitnow-payment-v2.yml'); // Replace with the actual path to your YAML file
  //       const yamlText = fs.readFileSync("/openapi/duitnow/duitnow-payment-v2.yml", 'utf-8');
  //       const parsedYamlData = jsYaml.safeLoad(yamlText);
  //          //coba console log
  //       if(parsedYamlData){
  //       setLoading(false);
  //       }
       
  //     } catch (error) {
  //       console.error('Error loading YAML file:', error);
  //     }
  //   };

  //   loadYamlFile();
   
  //   return () => {
     
  //   };
  // }, []); 

  // useEffect(() => {
  //   if (setLoading === false) {
  //     console.log('YAML data has been fully loaded:');
  //   }
  // }, []);

  return (
    <Layout title="Hello" description="Hello React Page">
      <BackWrapper>
        <div className={"d-flex b-right-gray-200 desktop-only"}>
          <div className={"back-button__wrapper"}>
            <div className={"sidebar-back b-right-gray-200"} onClick={goBack}><span>{"\<"}</span> Back</div>
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


