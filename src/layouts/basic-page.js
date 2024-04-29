import React from "react";
import PageHeader from "../components/page-header";
import ValueProps from "../components/value-props";
import Features from "../components/features";
import GetStarted from "../components/get-started";
import SiteFooter from "../components/footer";
import WebinarBox from "../components/webinar-box";

const BasicPageLayout = (props) => {
  return (
    <>
      <div className="home-container">
        <PageHeader />
        <div className="home-main">
          <div className="home-blur-background"></div>
          {props.children}
          <img
            alt="image"
            src="/turquoise-circle.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/purple-circle.svg"
            className="home-purple-circle"
          />
        </div>

        <WebinarBox />
        <ValueProps title={props?.cardsTitle} subtitle={props?.cardsSubtitle} />
        <Features />
        <GetStarted />
        <SiteFooter />
      </div>
    </>
  );
};

const BlogPageLayout = (props) => {
  return (
    <>
      <div className="home-container">
        <PageHeader />
        <div className="home-main">
          <div className="home-blur-background"></div>
          {props.children}
          <img
            alt="image"
            src="/turquoise-circle.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/purple-circle.svg"
            className="home-purple-circle"
          />
        </div>
        <WebinarBox />
        <GetStarted />
        <SiteFooter />
      </div>
    </>
  );
};

export default BasicPageLayout;
export { BlogPageLayout };
