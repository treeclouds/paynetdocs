import React from 'react';
import Image from '@theme/IdealImage';

import PaynetLogo from "@site/static/img/paynet-white.svg"

import DocusaurusIcon from "@site/static/img/docusaurus.svg"
import StoplightIcon from "@site/static/img/stoplight.svg"
import TailwindIcon from "@site/static/img/tailwind.svg"
import AwsIcon from "@site/static/img/aws.svg"
import GitlabIcon from "@site/static/img/gitlab.svg"

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer>
      <div className="bg-gray-700">
        {links}
      </div>
      <div className='bg-gray-800'>
        <div className='section__width section__width--small footer__wrapper'>
          {(logo || copyright) && (
            <div className="footer__top">
              <PaynetLogo />
              {logo && <div className="">{logo}</div>}
              {copyright}
              <a href='#' className='t16 font-gray-400 bold'>Terms & Conditions</a>
            </div>
          )}
          <hr className="w-100 bg-gray-700"/>

          <div className="footer__bottom">
            <p className="t16 bold font-gray-200">Technology using:</p>
            <div className="footer-tech__wrapper">
              <div className="footer-tech__item">
                <DocusaurusIcon />
                <p className="t16 font-gray-400">Docusaurus</p>
              </div>
              <div className="footer-tech__item">
                <StoplightIcon />
                <p className="t16 font-gray-400">Stoplight.io</p>
              </div>
              <div className="footer-tech__item">
                <TailwindIcon />
                <p className="t16 font-gray-400">tailwindcss</p>
              </div>
              <div className="footer-tech__item">
                <AwsIcon />
                <p className="t16 font-gray-400">AWS</p>
              </div>
              <div className="footer-tech__item">
                <GitlabIcon />
                <p className="t16 font-gray-400">GitLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
