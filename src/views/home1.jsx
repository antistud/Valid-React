import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import PrimaryButton from "../components/primary-button";
import FeatureCard from "../components/feature-card";
import "./home.css";
import BasicPageLayout from "../layouts/basic-page";
import SecondaryButton from "../components/secondary-button";

const Home = (props) => {
  useEffect(() => {
    if (window.location.pathname.includes("/join")) {
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(["openForm", "T8pL6T"]);
    }
  }, []);

  return (
    <BasicPageLayout
      cardsTitle="Intake Done Better"
      cardsSubtitle="Discover how Valid can revolutionize intake for your healthcare organization or practice."
    >
      <div className="home-hero">
        <div
          className="home-container07"
          style={{
            maxWidth: "100vw",
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              lineHeight: 1,
              paddingBottom: 14,
            }}
          >
            <span> Your login to healthcare</span>
          </div>
          <b>Instant Check-in for patients</b>
          Patients can use a single password <br />
          for all their healthcare apps, allowing <br />
          instant access to accurate and verified information.
          <span className="home-text15">
            <br></br>
            <br className="home-text22"></br>
          </span>
          <a
            href="/form/waiting-list"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link04"
          >
            <PrimaryButton
              button="Join the waiting list"
              className="home-component"
            ></PrimaryButton>
          </a>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <a
              href="https://profile-dev.login.health/client/create"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04"
            >
              <SecondaryButton
                button="Create a Sandbox Account"
                className="home-component"
              ></SecondaryButton>
            </a>
          </div>
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

export default Home;
