import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import PrimaryButton from "../components/primary-button";
import FeatureCard from "../components/feature-card";
import "./home.css";
import BasicPageLayout from "../layouts/basic-page";

const Dataroom = (props) => {
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
        <div className="home-container07">
          <p className="home-text06">
            <span> Your login to the dataroom</span>
          </p>
          <b>Instant Check-in for patients</b>
          Simplifies patient onboarding for healthcare <br />
          providers and removes manual processes <br />
          so they can get paid quicker with less errors
          <span className="home-text15">
            <br></br>
            <br className="home-text22"></br>
          </span>
          <a
            href="https://valid-dataroom.login.health"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link04"
          >
            <PrimaryButton
              button="Login To Dataroom"
              className="home-component"
            ></PrimaryButton>
          </a>
        </div>
        <img
          alt="image"
          src="/ValidLogin.png"
          className="home-image2"
          style={{ maxHeight: 400, width: "auto" }}
        />
      </div>
    </BasicPageLayout>
  );
};

export default Dataroom;
