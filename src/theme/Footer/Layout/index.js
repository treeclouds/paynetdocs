import React from 'react';

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
              <p>Logo</p>
              {logo && <div className="">{logo}</div>}
              {copyright}
              <a href='#' className='font-gray-400 bold'>Terms & Conditions</a>
            </div>
          )}
          <hr className="w-100 my-0" />

          <div className="footer__bottom">
            <p className="t16 bold font-gray-200">Technology using:</p>
            <div className="footer-tech__wrapper">
              <div className="footer-tech__item">
                <img src="static/images/docusaurus.svg" alt="docusaurus logo" className=""/>
                <p className="t16 font-gray-400">Docusaurus</p>
              </div>
              <div className="footer-tech__item">
                <img src="static/images/stoplight.svg" alt="stoplight logo" className=""/>
                <p className="t16 font-gray-400">Stoplight.io</p>
              </div>
              <div className="footer-tech__item">
                <img src="static/images/tailwind.svg" alt="tailwind logo" className=""/>
                <p className="t16 font-gray-400">tailwindcss</p>
              </div>
              <div className="footer-tech__item">
                <img src="static/images/aws.svg" alt="aws logo" className=""/>
                <p className="t16 font-gray-400">AWS</p>
              </div>
              <div className="footer-tech__item">
                <img src="static/images/gitlab.svg" alt="gitlab logo" className=""/>
                <p className="t16 font-gray-400">GitLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
