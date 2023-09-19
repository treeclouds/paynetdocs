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
  const uppercaseWords = ['JWS', 'NAD'];

  // Define words to exclude from capitalization
  const lowercaseWords = ['and', 'to'];

  // Handle the specific case: business-to-consumer
  if (segment.toLowerCase().includes('b2c')) {
    const modifiedLabel = segment
        .replace(/b2c/i, 'Business to Consumer (B2C)')
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => {
            const lowercaseWord = word.toLowerCase();
            if (lowercaseWords.includes(lowercaseWord)) {
                return lowercaseWord; // Keep excluded words in lowercase
            } else if (uppercaseWords.includes(lowercaseWord)) {
                return word.toUpperCase(); // Keep specified words in uppercase
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize other words
            }
        })
        .join(' ');;

    return (
      <a className="breadcrumb-segment d-flex t14sm-t16lg font-gray-600">
        {modifiedLabel}
      </a>
    );
  }else if (segment.toLowerCase().includes('b2b')) {
    const modifiedLabel = segment
        .replace(/b2b/i, 'Business to Business (B2B)')
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => {
            const lowercaseWord = word.toLowerCase();
            if (lowercaseWords.includes(lowercaseWord)) {
                return lowercaseWord; // Keep excluded words in lowercase
            } else if (uppercaseWords.includes(lowercaseWord)) {
                return word.toUpperCase(); // Keep specified words in uppercase
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize other words
            }
        })
        .join(' ');;

    return (
      <a className="breadcrumb-segment d-flex t14sm-t16lg font-gray-600">
        {modifiedLabel}
      </a>
    );
  }else if (segment.toLowerCase().includes('brs')) {
    const modifiedLabel = segment
        .replace(/brs/i, 'Biller Registration System (BRS)')
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => {
            const lowercaseWord = word.toLowerCase();
            if (lowercaseWords.includes(lowercaseWord)) {
                return lowercaseWord; // Keep excluded words in lowercase
            } else if (uppercaseWords.includes(lowercaseWord)) {
                return word.toUpperCase(); // Keep specified words in uppercase
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize other words
            }
        })
        .join(' ');;

    return (
      <a className="breadcrumb-segment d-flex t14sm-t16lg font-gray-600">
        {modifiedLabel}
      </a>
    );
  }

  const label = segment
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => {
      const lowercaseWord = word.toLowerCase();
      if (lowercaseWords.includes(lowercaseWord)) {
        return lowercaseWord; // Keep excluded words in lowercase
      } else if (uppercaseWords.includes(lowercaseWord)) {
        return word.toUpperCase(); // Keep specified words in uppercase
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize other words
      }
    })
    .join(' ');

  return (
    <a className="breadcrumb-segment d-flex t14sm-t16lg font-gray-600" href={segment === "home" ? "/docs/getting-started" : null}>
      {segment === "home" ? (
        <a className="breadcrumb-segment d-flex" href="/docs/getting-started">
          <HomeImage />
        </a>
      ) : (
        label
      )}
    </a>
  );
}

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
        <a className="breadcrumb-segment d-flex" href="/docs/getting-started">
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