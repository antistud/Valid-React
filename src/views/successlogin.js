import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import PrimaryButton from "../components/primary-button";
import FeatureCard from "../components/feature-card";
import "./home.css";
import BasicPageLayout from "../layouts/basic-page";

const SuccessLogin = (props) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Do something with the token
      localStorage.setItem("token", token);
      console.log(token);
    }

    if (window.location.pathname.includes("/join")) {
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(["openForm", "T8pL6T"]);
    }
  }, []);

  // Rest of the code...

  return (
    <BasicPageLayout
      cardsTitle="Intake Done Better"
      cardsSubtitle="Discover how Valid can revolutionize intake for your healthcare organization or practice."
    >
      <div className="home-hero">
        <div
          style={{
            fontSize: 44,
            fontFamily: "Inter",
            fontWeight: 800,
            lineHeight: 1,
            paddingBottom: 14,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 900,
          }}
        >
          <div>Welcome to the party</div>
          <div style={{ fontSize: 24, fontWeight: "normal", paddingTop: 10 }}>
            Thank you for checking out Login.Health
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: "normal",
              padding: 20,
              border: "1px solid #000",
              cursor: "pointer",
              width: "fit-content",
              color: "#fff",
              borderRadius: 8,
              backgroundColor: "#000",
            }}
            onClick={() => {
              window.location.href = "https://profile.login.health/profile";
            }}
          >
            Check out your profile{" "}
          </div>
        </div>
      </div>
    </BasicPageLayout>
  );
};

export default SuccessLogin;
