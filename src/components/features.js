import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";

const Features = (props) => {
  return (
    <>
      <div className="home-testimonials">
        <div className="home-feature1">
          <div className="home-container08">
            <img alt="image" src="/4-300h.png" className="home-image3" />
          </div>
          <div className="home-container09">
            <h3 className="home-text30">Built for Confidence</h3>
            <span
              className="home-text31"
              style={{
                maxWidth: "100vw",
              }}
            >
              Unlike other solutions that offer a best guess on coverage, Valid
              offers 100% confidence in your verifications through data that’s
              pulled directly from the payer portal to eliminate any doubt.
            </span>
          </div>
        </div>
      </div>
      <div className="home-feature11">
        <div className="home-container11">
          <img alt="image" src="/1-300h.png" className="home-image4" />
        </div>
        <div className="home-container12">
          <h3 className="home-text32 Headline3">Safe and Secure</h3>
          <span className="home-text33">
            Valid offers complete HIPAA🔒 compliant health insurance
            infrastructure to spin up your Healthcare app quickly – think of
            Valid as the fasted and easiest way to start collecting insurance
            information!
          </span>
        </div>
      </div>
      <div className="home-feature12">
        <div className="home-container13">
          <img alt="image" src="/2-300h.png" className="home-image5" />
        </div>
        <div
          className="home-container14"
          style={{
            maxWidth: "100vw",
          }}
        >
          <h3 className="home-text34 Headline3">Real-Time</h3>
          <span className="home-text35">
            Real-time verification offers immediate and accurate access to
            patient coverage information, vastly outpacing the inefficiencies
            and delays associated with manual verification processes.
          </span>
        </div>
      </div>
    </>
  );
};

export default Features;
