import React, {useRef, useEffect} from 'react'
import Image from '@theme/IdealImage';

import { Wrapper, CardBannerWrapper, BannerCaptionWrapper, CardProductSection, CardProductWrapper, TextBesidesIcon, CardProductListWrapper, HeaderBannerWrapper } from './element';
import Card from "../Card/index.js"
import CardBanner from "../CardBanner/index.js"

import DuitNow from "@site/static/img/duitnow.svg"
import AccentLeft from "@site/static/img/accent-left.svg"
import AccentRight from "@site/static/img/accent-right.svg"
import MyDebit from "@site/static/img/mydebit.svg"
import Jompay from "@site/static/img/jompay.svg"
import Rocket from "@site/static/img/rocket-gray.svg"
import Code from "@site/static/img/api-gray.svg"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const DashboardHome = () => {
  const { siteConfig } = useDocusaurusContext()
  const rive = require("@rive-app/canvas");
  const canvasRefDoc = useRef(null);
  useEffect(() => {
    if (canvasRefDoc.current) {
      const r = new rive.Rive({
        src: 'img/paynet_docs.riv',
        canvas: canvasRefDoc.current,
        stateMachines: 'State Machine 1',
        autoplay: true,
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
        },
      });
    }
  }, []);

  return (
    <>
      <Wrapper>
        <HeaderBannerWrapper>
          <BannerCaptionWrapper>
            <h1 className='t26sm-t42lg'>Documentations {siteConfig.themeConfig.GLOBAL_URL}</h1>
            <p className='t16sm-t23lg font-gray-500'>See guides, references and resources to help you build with PayNet</p>
          </BannerCaptionWrapper>
          <canvas className='d-flex' ref={canvasRefDoc} width={500} height={500}></canvas>
          <AccentLeft className='accent accent-left'/>
          <AccentRight className='accent accent-right'/>
        </HeaderBannerWrapper>
        <CardBannerWrapper>
          <CardBanner
            image= {<Rocket />}
            title="Getting Started"
            text="See guides, references and resources to help you build with PayNet"
            href="/documentation/getting-started"
            cta="Quick start"
          />
          <CardBanner
            image= {<Code />}
            title="API Reference"
            text="Explore our API reference page to gain a comprehensive understanding of our API"
            href="/api-reference"
            cta="Explore now"
          />
        </CardBannerWrapper>
      </Wrapper>
      <CardProductSection>
        <h2 className='t26sm-t35lg bold font-gray-700'>Our Products</h2>
        <CardProductListWrapper>
          <TextBesidesIcon>
            <DuitNow />
            <h3 className='t21sm-t23lg bold font-gray-700'>DuitNow Transfer</h3>
          </TextBesidesIcon>

          <CardProductWrapper>
          <Card
            title="Credit Transfer"
            text="Fast and convenient payment method that allows instant transfer of funds between bank accounts using proxy (Mobile number, NRIC, passport number, etc)"
          />
          <Card
            title="NAD"
            text="Signing on/off and echo with DuitNow system. Ensuring its smooth operation and reliable service delivery."
          />
          <Card
            title="Network Administration"
            text="National Addressing Database (NAD) allows users to register and link their accounts to a proxy of their choosing, facilitating seamless fund transfers"
          />
          </CardProductWrapper>
        </CardProductListWrapper>

        <CardProductListWrapper>
          <TextBesidesIcon>
            <DuitNow />
            <h3 className='t21sm-t23lg bold font-gray-700'>DuitNow Online Banking</h3>
          </TextBesidesIcon>

          <CardProductWrapper>
          <Card
            title="DuitNow Online Banking/ Wallets"
            text="Fast and convenient payment method that allows online purchases, and send/receive money conveniently through a digital platform."
          />
          <Card
            title="DuitNow Autodebit"
            text="Service that allows authorized automatic deductions from their bank accounts for recurring payments such as bills, subscriptions, or loan repayments"
          />
          </CardProductWrapper>
        </CardProductListWrapper>

        <CardProductListWrapper>
          <TextBesidesIcon>
            <DuitNow />
            <h3 className='t21sm-t23lg bold font-gray-700'>DuitNow QR</h3>
          </TextBesidesIcon>

          <CardProductWrapper>
            <Card
              title="Domestic QR"
              text="Enables quick, seamless and secure payments by scanning QR codes. Users can make payments at participating merchants by simply scanning the DuitNow QR code"
            />
            <Card
              title="Cross Border Outward QR"
              text="Enables customers with a foreign Bank Account to make payments via their chosen mobile banking appilication by scanning the QR code generated by local merchants in Malaysia."
            />
            <Card
              title="Cross Border Inward QR"
              text="Enables Malaysians abroad to make payments via their mobile banking or e-payment application by scanning the merchants' QR code."
            />
            <Card
              title="Customer-Presented QR"
              text="Enables customers to generate and present their own QR codes to merchants for scanning, allowing for convenient and contactless transactions."
            />
          </CardProductWrapper>
        </CardProductListWrapper>

        <CardProductListWrapper>
          <TextBesidesIcon>
            <DuitNow />
            <h3 className='t21sm-t23lg bold font-gray-700'>DuitNow Bill Payment</h3>
          </TextBesidesIcon>

          <CardProductWrapper>
            <Card
              title="Bill Payment"
              text="Make bill payments online anytime, anywhere from your online banking"
            />
          </CardProductWrapper>
        </CardProductListWrapper>

        <CardProductListWrapper>
          <TextBesidesIcon>
            <MyDebit />
            <h3 className='t21sm-t23lg bold font-gray-700'>MyDebit</h3>
          </TextBesidesIcon>

          <CardProductWrapper>
            <Card
              title="MyDebit Tokenisation"
              text="Allows issuers to manage the digital issuance of tokenized MyDebit payment credentials."
            />
          </CardProductWrapper>
        </CardProductListWrapper>

        <CardProductListWrapper>
          <TextBesidesIcon>
            <MyDebit />
            <h3 className='t21sm-t23lg bold font-gray-700'>FPX</h3>
          </TextBesidesIcon>

          <CardProductWrapper>
            <Card
              title="Business To Customer (B2C)"
              text="Fast and conveinient way that allows individual customers to make payments for online purchases directly from their bank accounts, providing a convenient and reliable payment"
            />
            <Card
              title="Business To Business Model 1 (B2B1)"
              text="Enables businesses customers to make one-time payments directly from their bank accounts, providing a convenient and reliable payment option for e-commerce transactions"
            />
            <Card
              title="Business To Business Model 2 (B2B2)"
              text="Enables businesses customers to initiate payments automatically in batches to FPX. Larger organization can thus link their internal accounting system to FPX"
            />
          </CardProductWrapper>
        </CardProductListWrapper>

        <CardProductListWrapper>
          <TextBesidesIcon>
            <Jompay />
            <h3 className='t21sm-t23lg bold font-gray-700'>JomPAY</h3>
          </TextBesidesIcon>

          <CardProductWrapper>
            <Card
              title="Biller Notification System (BNS)"
              text="Responsible for sending the Biller Notification information to the Biller once the Payer has successfully completed a JomPAY transaction at their Bank"
            />
            <Card
              title="Biller Registration System (BRS)"
              text="Bill Registration System (BRS) allows Biller Bank to make an online web service call for validating and notifying successful biller registration"
            />
          </CardProductWrapper>
        </CardProductListWrapper>
      </CardProductSection>
    </>
  )
}

export default DashboardHome