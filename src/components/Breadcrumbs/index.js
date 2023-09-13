import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import HomeIcons from "@site/static/img/home-gray-small.svg";
;
import {BreadCrumbWrapper} from './element'
const HomeImage = () => (
  <HomeIcons />
);
const Breadcrumbs = () => {
  const location = useLocation();
  const url = location.pathname;
  const pathWithoutHash = url.split("#")[0]; // Remove the hash and get the path
  
  const [isMobileView, setIsMobileView] = useState(false);

  const BreadcrumbEllipsis = () => (
    <span className="breadcrumb-ellipsis">...</span>
  );

  const pathSegments = pathWithoutHash
  .split("/")
  .filter((segment) => segment !== "");
pathSegments.unshift("home");


const BreadcrumbItem = ({ segment }) => {
  // Replace dashes with spaces and capitalize each word
  const label = segment.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  return (
    <a className="breadcrumb-segment d-flex t14sm-t16lg font-gray-600" href={segment === "home" ? "/documentation/getting-started" : null}>
      {segment === "home" ? (
        <a className="breadcrumb-segment d-flex" href="/documentation/getting-started">
          <HomeImage />
        </a>
      ) : (
        label
      )}
    </a>
  );
};

  useEffect(() => {
    setIsMobileView(window.innerWidth <= 768);
    
    // Optional: Add an event listener to update isMobileView on window resize
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);

  }, []);
  if (isMobileView && pathSegments.length > 2) {
    const shortBreadcrumb = (
      <React.Fragment>
        <a className="breadcrumb-segment d-flex" href="/documentation/getting-started">
        <HomeImage />
        </a>
        <div className="breadcrumb-separator"></div> ... <div className="breadcrumb-separator"></div> <p className="font-blue-500 bold mb-0">{pathSegments[pathSegments.length - 1]}</p> 
      </React.Fragment>
    );

    return <BreadCrumbWrapper>{shortBreadcrumb}</BreadCrumbWrapper>;
  } else {
    return (
      <BreadCrumbWrapper className="">
        {
  pathSegments.map((segment, index, array) => {
    if (index === 0 || index >= array.length - 3) {
      return (
        <React.Fragment key={segment}>
          {index > 0 && <span className="breadcrumb-separator"></span>}
          <BreadcrumbItem segment={segment} />
        </React.Fragment>
      );
    } else if (index === array.length - 4) {
      return (
        <React.Fragment key={index}>
          <span className="breadcrumb-separator"></span>
          <BreadcrumbEllipsis />
        </React.Fragment>
      );
    } else {
      return null; // Skip the in-between segments
    }
  })
}
      </BreadCrumbWrapper>
    );
  }
};

export default Breadcrumbs;
