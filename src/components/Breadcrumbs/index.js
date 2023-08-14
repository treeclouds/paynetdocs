import React from "react";
import { useLocation } from "@docusaurus/router";
import HomeIcon from "../../../static/img/home-icon.png";
import Image from "@theme/IdealImage";
import {BreadCrumbWrapper} from './element'
const HomeImage = () => (
  <Image
    img={HomeIcon}
    style={{
      width: "25px",
      height: "25px",
    }}
  />
);
const Breadcrumbs = () => {
  const separator = " > ";
  const location = useLocation();
  const url = location.pathname;
  const pathWithoutHash = url.split("#")[0]; // Remove the hash and get the path
  const pathSegments = pathWithoutHash
    .split("/")
    .filter((segment) => segment !== "");
  pathSegments.unshift("home");
  const isMobileView = window.innerWidth <= 768;
  if (isMobileView && pathSegments.length > 2) {
    const shortBreadcrumb = (
      <React.Fragment>
        <a className="breadcrumb-segment" href="/getting-started">
        <HomeImage />
        </a>
        {separator} ... {separator} {pathSegments[pathSegments.length - 1]}
      </React.Fragment>
    );

    return <BreadCrumbWrapper>{shortBreadcrumb}</BreadCrumbWrapper>;
  } else {
    return (
      <BreadCrumbWrapper>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            {index > 0 && <span className="breadcrumb-separator">{" > "}</span>}
            <a
              className="breadcrumb-segment"
              href={segment === "home" ? "/getting-started" : null}
            >
              {segment === "home" ? <HomeImage /> : segment}
            </a>
          </React.Fragment>
        ))}
      </BreadCrumbWrapper>
    );
  }
};

export default Breadcrumbs;
