import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";

const Features = (props) => {
  function Item({ image, title, text, flexDirection = "row" }) {
    return (
      <div
        style={{
          maxWidth: 900,
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 60,
          flexDirection: flexDirection,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <img alt="image" src={image} className="home-image3" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            textAlign: flexDirection == "row" ? "left" : "right",
          }}
        >
          <h3 className="home-text30">{title}</h3>
          <span
            className="home-text31"
            style={{
              maxWidth: "100vw",
              minWidth: 300,
            }}
          >
            {text}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#F7F7F7",
          width: "100vw",
          paddingTop: 50,
          paddingBottom: 50,
        }}
        className=""
      >
        <Item
          image="/4-300h.png"
          title="Built for Confidence"
          text="Unlike other solutions that offer a best guess on coverage, Valid offers 100% confidence in your verifications through data that’s pulled directly from the payer portal to eliminate any doubt."
        />
        <Item
          flexDirection="row-reverse"
          image="/1-300h.png"
          title="Safe and Secure"
          text="Valid offers complete HIPAA🔒 compliant health insurance infrastructure to spin up your Healthcare app quickly – think of Valid as the fasted and easiest way to start collecting insurance information!"
        />
        <Item
          image="/2-300h.png"
          title="Real-Time"
          text="Real-time verification offers immediate and accurate access to patient coverage information, vastly outpacing the inefficiencies and delays associated with manual verification processes."
        />
      </div>
    </>
  );
};

export default Features;
