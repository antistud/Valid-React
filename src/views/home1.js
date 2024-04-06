import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import './home.css'
import BasicPageLayout from '../layouts/basic-page'

const Home = (props) => {
  return (
    <BasicPageLayout cardsTitle="Intake Done Better" cardsSubtitle="Discover how Valid can revolutionize intake for your healthcare organization or practice.">
      <div className="home-hero">
        <div className="home-container07">
          <p className="home-text06">
            <span> One login for all <br />healthcare</span>
          </p>
          <b>Instant-Intake for patients</b>
          Patient have one password for all of their <br />
          healthcare apps and you have instant, <br />
          accurate, and verified patient information
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

    </BasicPageLayout >
  )
}

export default Home
