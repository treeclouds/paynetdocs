import React, {useRef, useEffect} from 'react'

import DuitNow from "@site/static/img/duitnow.svg"
import AccentLeftMobile from "@site/static/img/api-accent-left-mobile.svg"
import AccentRightMobile from "@site/static/img/api-accent-right-mobile.svg"
import AccentRightDesktop from "@site/static/img/api-accent-right-desktop.svg"
import AccentLeftDesktop from "@site/static/img/api-accent-left-desktop.svg"

import ChevronRight from "@site/static/img/chevron-right-blue.svg"

import MyDebit from "@site/static/img/mydebit.svg"
import Jompay from "@site/static/img/jompay.svg"
import FileGray from "@site/static/img/file-gray.svg"
import FileBlue from "@site/static/img/file-blue.svg"

import { ApiLinkCard, ApiLinkWrapper, BannerCaptionWrapper, CardProductItem, CardProductListWrapper, CardProductSection, HeaderBannerWrapper, TextBesidesIcon, Wrapper } from './element.js';

const DashboardApiReference = () => {
  const rive = require("@rive-app/canvas");
  const canvasRefApi = useRef(null);
  useEffect(() => {
    if (canvasRefApi.current) {
      const r = new rive.Rive({
        src: '../img/paynet_api.riv',
        canvas: canvasRefApi.current,
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
            <h1 className='t26sm-t42lg'>API Reference</h1>
            <p className='t16sm-t23lg font-gray-500'>Unlocking the full potential of PayNet. Find all the information you need to integrate Paynet's API</p>
          </BannerCaptionWrapper>
          <canvas className='d-flex' ref={canvasRefApi} width={500} height={500}></canvas>
          <AccentLeftMobile className='mobile-only accent accent-left'/>
          <AccentRightMobile className='mobile-only accent accent-right'/>
          <AccentLeftDesktop className='desktop-only accent accent-left'/>
          <AccentRightDesktop className='desktop-only accent accent-right'/>
        </HeaderBannerWrapper>
      </Wrapper>
      <CardProductSection>
        <h2 className='t26sm-t35lg bold font-gray-700'>Explore API reference</h2>
        <CardProductListWrapper>
          <CardProductItem>
            <TextBesidesIcon className='api-prod__header'>
              <DuitNow />
              <h3 className='t21sm-t23lg bold font-gray-700'>DuitNow Transfer</h3>
            </TextBesidesIcon>
            <div className='api-prod__content'>
              <p className='t16sm-t18lg font-gray-500'>Transfer your funds to any DuitNow ID including mobile number, MyKad/Passport number, Army/Police number and Business Registration number.</p>
              <TextBesidesIcon>
                <p> <a href="/api-reference/credit-transfer" className='t14sm-t16lg bold font-blue-500'>See documentation </a> </p>
                <ChevronRight />
              </TextBesidesIcon>
            </div>
            <ApiLinkWrapper className='card-link__wrapper'>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/credit-transfer" className='t16sm-t18lg ml-2'>Credit Transfer </a> </h4>
                </div>
                <div className='badge badge--info t14 bold ml-2'>Beta</div>
              </ApiLinkCard>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                   <h4> <a href="/api-reference/nad" className='t16sm-t18lg ml-2'>National Addressing Database (NAD) </a> </h4> 
                </div>
                <div className='badge badge--info t14 bold ml-2'>Beta</div>
              </ApiLinkCard>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/network-administration" className='t16sm-t18lg ml-2'>Network administration </a> </h4>
                </div>
                <div className='badge badge--info t14 bold ml-2'>Beta</div>
              </ApiLinkCard>
            </ApiLinkWrapper>
          </CardProductItem>
          <CardProductItem>
            <TextBesidesIcon className='api-prod__header'>
              <DuitNow />
              <h3 className='t21sm-t23lg bold font-gray-700'>DuitNow Online Banking</h3>
            </TextBesidesIcon>
            <div className='api-prod__content'>
              <p className='t16sm-t18lg font-gray-500'>A faster and more seamless checkout for individual customers on e-commerce and m-commerce platforms with simple redirection to their online banking or eWallet application.</p>
              <TextBesidesIcon>
                <p> <a href="/api-reference/dobw" className='t14sm-t16lg bold font-blue-500'> See documentation </a> </p>
                <ChevronRight />
              </TextBesidesIcon>
            </div>
            <ApiLinkWrapper className='card-link__wrapper'>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/dobw" className='t16sm-t18lg ml-2'>DuitNow online banking/wallets (merchant) </a> </h4>
                </div>
              </ApiLinkCard>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/autodebit" className='t16sm-t18lg ml-2'>DuitNow autodebit (merchant) </a> </h4>
                </div>
                <div className='badge badge--info t14 bold ml-2'>Beta</div>
              </ApiLinkCard>
            </ApiLinkWrapper>
          </CardProductItem>
          <CardProductItem>
            <TextBesidesIcon className='api-prod__header'>
              <DuitNow />
              <h3 className='t21sm-t23lg bold font-gray-700'>DuitNow QR</h3>
            </TextBesidesIcon>
            <div className='api-prod__content'>
              <p className='t16sm-t18lg font-gray-500'>An interoperable QR standard that allows Malaysians to make payments and receive funds from any participating Bank and eWallet with just one QR code.</p>
              <TextBesidesIcon>
                <p> <a href="/api-reference/qr" className='t14sm-t16lg bold font-blue-500'> </a> See documentation</p>
                <ChevronRight />
              </TextBesidesIcon>
            </div>
            <ApiLinkWrapper className='card-link__wrapper'>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/qr" className='t16sm-t18lg ml-2'>DuitNow QR API </a> </h4>
                </div>
              </ApiLinkCard>
            </ApiLinkWrapper>
          </CardProductItem>
          <CardProductItem>
            <TextBesidesIcon className='api-prod__header'>
              <MyDebit />
              <h3 className='t21sm-t23lg bold font-gray-700'>FPX</h3>
            </TextBesidesIcon>
            <div className='api-prod__content'>
              <p className='t16sm-t18lg font-gray-500'>Make secure and real-time online payments for various services and product by using your Internet Banking accounts through checkout in a click.</p>
              <TextBesidesIcon>
                <p> <a href="/api-reference/fpx-webview-bank" className='t14sm-t16lg bold font-blue-500'>See documentation </a> </p>
                <ChevronRight />
              </TextBesidesIcon>
            </div>
            <ApiLinkWrapper className='card-link__wrapper'>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/fpx-webview-bank" className='t16sm-t18lg ml-2'>Bank webview services </a> </h4>
                </div>
              </ApiLinkCard>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/fpx-services" className='t16sm-t18lg ml-2'>FPX services </a> </h4>
                </div>
              </ApiLinkCard>
            </ApiLinkWrapper>
          </CardProductItem>
          <CardProductItem>
            <TextBesidesIcon className='api-prod__header'>
              <MyDebit />
              <h3 className='t21sm-t23lg bold font-gray-700'>MyDebit</h3>
            </TextBesidesIcon>
            <div className='api-prod__content'>
              <p className='t16sm-t18lg font-gray-500'>Electronic payment system that enables consumers to make purchases and transactions using their local bank savings or current accounts via debit cards.</p>
              <TextBesidesIcon>
                <p> <a href="/api-reference/tsp-issuer" className='t14sm-t16lg bold font-blue-500'> See documentation </a> </p>
                <ChevronRight />
              </TextBesidesIcon>
            </div>
            <ApiLinkWrapper className='card-link__wrapper'>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/tsp-issuer" className='t16sm-t18lg ml-2'>Tokenisation services for issuer </a> </h4>
                </div>
              </ApiLinkCard>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/tsp-acq" className='t16sm-t18lg ml-2'>Tokenisation services for acquirer/merchant </a> </h4>
                </div>
              </ApiLinkCard>
            </ApiLinkWrapper>
          </CardProductItem>
          <CardProductItem>
            <TextBesidesIcon className='api-prod__header'>
              <Jompay />
              <h3 className='t21sm-t23lg bold font-gray-700'>JomPAY</h3>
            </TextBesidesIcon>
            <div className='api-prod__content'>
              <p className='t16sm-t18lg font-gray-500'>Online bill payment platform that allows users to pay their bills quickly and securely through their online banking accounts.</p>
              <TextBesidesIcon>
                <p> <a href="/api-reference/jompay-bns" className='t14sm-t16lg bold font-blue-500'>See documentation </a> </p>
                <ChevronRight />
              </TextBesidesIcon>
            </div>
            <ApiLinkWrapper className='card-link__wrapper'>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/jompay-bns" className='t16sm-t18lg ml-2'>Biller notification services </a> </h4>
                </div>
              </ApiLinkCard>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/jompay-brs" className='t16sm-t18lg ml-2'>Biller registration services </a> </h4>
                </div>
              </ApiLinkCard>
              <ApiLinkCard>
                <div className='d-flex align-items-center'>
                  <FileGray className='icon-default'/>
                  <FileBlue className='icon-active'/>
                  <h4> <a href="/api-reference/jompay-bvs" className='t16sm-t18lg ml-2'>Biller validation services </a> </h4>
                </div>
              </ApiLinkCard>
            </ApiLinkWrapper>
          </CardProductItem>
        </CardProductListWrapper>
      </CardProductSection>
    </>
  )
}

export default DashboardApiReference
