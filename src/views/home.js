import React from "react";

import { Helmet } from "react-helmet";

import PrimaryButton from "../components/primary-button";
import "./home.css";
import BasicPageLayout from "../layouts/basic-page";

const Home = (props) => {
  return (
    <BasicPageLayout
      cardsTitle="Instant Check-in"
      cardsSubtitle="Discover how Valid can revolutionize patient information for your healthcare organization or practice."
    >
      <div className="home-hero">
        <div className="home-container07">
          <p className="home-text06">
            <span>Elimi</span>
            <span>nate</span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>the cost of invalid</span>
            <br></br>
            <span> patient information</span>
            <br></br>
          </p>
          <span className="home-text15">
            <span className="home-text16">
              Instant verified patient information
            </span>
            <br></br>
            <span className="home-text18">Valid </span>
            <span className="home-text19">accelerates intake by</span>
            <br className="home-text20"></br>
            <span className="home-text21">
              eliminating patient info re-entry
            </span>
            <br className="home-text22"></br>
            <br className="home-text24"></br>
            <br></br>
          </span>
          <a
            href="https://calendly.com/_valid/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link04"
          >
            <PrimaryButton
              button="Setup a Demo"
              className="home-component"
            ></PrimaryButton>
          </a>
        </div>
        <img alt="image" src="/22-400w.png" className="home-image2" />
      </div>
    </BasicPageLayout>
  );
};

export default Home;
