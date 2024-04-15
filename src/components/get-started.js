import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";

const GetStarted = (props) => {
  return (
    <>
      <div>
        <div style={{ padding: 50 }}>
          <h2>Get Started</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 0px 100px 0px",
          flexWrap: "wrap",
          maxWidth: "100vw",
          width: "100vw",
          alignContent: "center",
          maxWidth: 900,
        }}
      >
        <div style={{ flex: 1, textAlign: "center", padding: 4 }}>
          <a
            href={"https://calendly.com/_valid/30min"}
            rel="noreferrer noopener"
            className="button"
            style={{
              backgroundColor: "#8C30F5",
              color: "white",
              border: "0px solid #FFC278",
              width: "100%",
              textAlign: "center",
              fontWeight: 600,
              borderRadius: 8,
              maxWidth: 300,
            }}
          >
            Provider
          </a>
        </div>
        <div style={{ flex: 1, padding: 4, textAlign: "center" }}>
          <a
            href={"https://calendly.com/_valid/30min"}
            rel="noreferrer noopener"
            className=" button"
            style={{
              backgroundColor: "#FFC278",
              color: "white",
              border: "0px solid #FFC278",
              width: "100%",
              textAlign: "center",
              fontWeight: 600,
              borderRadius: 8,
              maxWidth: 300,
            }}
          >
            Developer
          </a>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
