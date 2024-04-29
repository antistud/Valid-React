import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";
import FeatureCard from "./feature-card";

const WebinarBox = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid #e5e5e5",
          minHeight: 300,
          width: "100%",
          maxWidth: 600,
          height: 300,
        }}
      >
        <iframe
          style={{
            width: "100%",
            height: "100%",
            paddingBottom: 0,
            marginBottom: -8,
          }}
          src="https://www.youtube.com/embed/XOs8yE63RwA?si=gw3NrTL9KrtoKrsP&amp;controls=0&amp;showinfo=0&amp;rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default WebinarBox;
