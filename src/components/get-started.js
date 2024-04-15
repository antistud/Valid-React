import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";

const GetStarted = (props) => {
  let route =
    window.location.includes("/user") == true
      ? "/user"
      : "https://calendly.com/_valid/30min";

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
        }}
      >
        <div>
          <a
            href={"https://calendly.com/_valid/30min"}
            rel="noreferrer noopener"
            className="home-link05 button"
          >
            Provider
          </a>
        </div>
        <div>
          <a
            href={"https://calendly.com/_valid/30min"}
            rel="noreferrer noopener"
            className="home-link06 button"
          >
            Developer
          </a>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
