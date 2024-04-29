import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";
import FeatureCard from "./feature-card";

const ValueProps = (props) => {
  return (
    <>
      <div className="home-features">
        <h2 className="Headline2 home-text26">{props?.title}</h2>
        <span className="home-text27">
          <span>{props?.subtitle}</span>
          <br></br>
        </span>
        <div style={{ paddingBottom: 50 }} className="home-features1">
          <FeatureCard
            text="Verify in real-time to accelerate payment processing and reduce the risk of denied claims."
            card_title="Streamline Processing"
            rootClassName="feature-card-root-class-name"
          ></FeatureCard>
          <FeatureCard
            text="Eliminate administrative burden of insurance verification, allowing care providers to focus on delivering quality patient care."
            image_src="/02.svg"
            card_title="Automate Processes"
            rootClassName="feature-card-root-class-name1"
          ></FeatureCard>
          <FeatureCard
            text="Reduce your costs associated with  inefficient verification  processes, and improve  the financial performance for your organization."
            image_src="/03.svg"
            card_title="Reduce Costs"
            rootClassName="feature-card-root-class-name2"
          ></FeatureCard>
          <FeatureCard
            text="Eliminate redundancies and allocate more time towards  delivering exceptional patient care."
            image_src="/04.svg"
            card_title="Enhanced Patient Care"
            rootClassName="feature-card-root-class-name3"
          ></FeatureCard>
          <FeatureCard
            text="Avoid common billing errors and increase your successful  claims. "
            image_src="/05.svg"
            card_title="Limit Risk"
            rootClassName="feature-card-root-class-name4"
          ></FeatureCard>
          <FeatureCard
            text="Reduce the risk of delayed and denied payments."
            image_src="/06.svg"
            card_title="Get Paid Quicker"
            rootClassName="feature-card-root-class-name5"
          ></FeatureCard>
        </div>
      </div>
    </>
  );
};

export default ValueProps;
