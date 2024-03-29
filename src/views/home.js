import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import './home.css'
import BasicPageLayout from '../layouts/basic-page'

const Home = (props) => {
  return (
    <BasicPageLayout cardsTitle="Insurance Done Better" cardsSubtitle="Discover how Valid can revolutionize insurance verification for your healthcare organization or practice.">
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <div className="home-container07">
            <p className="home-text06">
              <span>Elimi</span>
              <span>nate</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>the cost of</span>
              <br></br>
              <span>denied insurance</span>
              <br></br>
            </p>
            <span className="home-text15">
              <span className="home-text16">
                Real-time insurance verification
              </span>
              <br></br>
              <span className="home-text18">Valid </span>
              <span className="home-text19">accelerates insurance by</span>
              <br className="home-text20"></br>
              <span className="home-text21">
                eliminating the threat of denied claims
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text22"></br>
              <span className="home-text23">for care providers</span>
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
                button="Get Started"
                className="home-component"
              ></PrimaryButton>
            </a>
          </div>
          <img alt="image" src="/22-400w.png" className="home-image2" />
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
