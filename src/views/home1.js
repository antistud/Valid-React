import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import './home.css'
import BasicPageLayout from '../layouts/basic-page'

const Home = (props) => {
  return (
    <BasicPageLayout cardsTitle="Intake Done Better" cardsSubtitle="Discover how Valid can revolutionize intake for your healthcare organization or practice.">
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <div className="home-container07">
            <p className="home-text06">

              <span> One login <br />for all <br />healthcare</span>

            </p>

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
          </div>
          <img alt="image" src="/ValidLogin.png" className="home-image2" style={{ maxHeight: 400, width: "auto" }} />
        </div>
        <img
          alt="image"
          src="/turquoise-circle.svg"
          className="home-turquoise-cirble"
        />
        <img
          alt="image"
          src="/purple-circle.svg"
          className="home-purple-circle"
        />
      </div>
    </BasicPageLayout>
  )
}

export default Home
