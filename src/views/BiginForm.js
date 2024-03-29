import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'

import SecondaryButton from '../components/secondary-button'
import forms from '../data/forms'
import GetStarted from '../components/get-started'
import Features from '../components/features'
import ValueProps from '../components/value-props'



const BiginForm = (props) => {


  // url params name
  const { form } = props.match.params

  let formDetails = forms[form];

  return (
    <div className="home-container">
      <Helmet>
        <title>Valid</title>
        <meta
          name="description"
          content="Valid accelerates insurance for care providers by offering real-time verifications"
        />
        <meta property="og:title" content="Valid" />
        <meta
          property="og:description"
          content="Valid accelerates insurance for care providers by offering real-time verifications…… So that they can get paid quicker and eliminate the threat of denied claims.  "
        />

      </Helmet>
      <div data-role="Header" className="home-header-container">
        <header className="home-header">
          <div className="home-logo">
            <img alt="image" src="/5_crop1-200h.png" className="home-image" />
          </div>
          <div className="home-container01"></div>
          <div className="home-menu"></div>
        </header>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo1">
              <img
                alt="image"
                src="/logotype-dark.svg"
                className="home-image1"
              />
            </div>
            <div data-role="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>

        </div>
      </div>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div
          style={{ zIndex: 100, width: "100%", maxWidth: 1050, }}
        >
          <div
            style={{ display: "flex", flexWrap: "wrap", height: "100%", paddingTop: 50, paddingBottom: 150 }}
          >
            <div
              style={{ flex: 1, minWidth: 300, padding: 20 }}
            >

              <div style={{
                fontWeight: 900,
                fontSize: 44,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 1,
                paddingBottom: 14
              }}>
                {formDetails?.title.map((line) => {
                  return (
                    <>
                      {line}  <br />
                    </>
                  )
                })}
              </div>
              <span >
                {formDetails?.subtitle.map((line) => {
                  return (
                    <>
                      {line}   <br />
                    </>
                  )
                })}
                <div
                  style={{
                    fontSize: 24,
                  }}
                >
                  {formDetails.dates && formDetails?.dates.map((line) => {
                    return (
                      <>
                        {line}   <br />
                      </>
                    )
                  })}

                </div>
                {formDetails.dates && (<div style={{ fontSize: "small" }}>(recording available after event)</div>)}

                <br></br>
                <br className="home-text22"></br>

              </span>
              {formDetails.buttonTitle && (
                <a
                  href={formDetails.buttonUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  <PrimaryButton
                    button={formDetails.buttonTitle}
                    className="home-component"
                  ></PrimaryButton>
                </a>
              )}
            </div>
            <div style={{
              flex: 1,
              minWidth: 300
            }}>
              <div style={{
                border: "0px solid black",
                borderRadius: 10,
                zIndex: 100,
                backgroundColor: "#fff",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
                overflow: "hidden",
                flex: 1,
                width: "100%",
                margin: 0
              }}>
                <iframe style={{ overflow: "hidden", marginBottom: -10 }} width='100%' height={formDetails?.formHeight} src={formDetails?.form}></iframe>
              </div>
            </div>
          </div>
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
      <div className="home-features">
        <h2 className="Headline2 home-text26">{formDetails?.cardsTitle}</h2>
        <span className="home-text27">
          <span>
            {formDetails.cardsSubtitle}
          </span>
          <br></br>
        </span>
        <ValueProps />
      </div>
      {/* Features */}
      <Features />
      <GetStarted />
      <div className="home-footer">
        <footer className="home-container17">
          <img
            alt="image"
            src="/5_crop_white-200h.png"
            className="home-image6"
          />
          <div className="home-divider"></div>
          <div className="home-container18">
            <span className="home-text37 Body2">
              © 2022 VALID DOT CARE, Inc
            </span>
            <div className="home-container19">
              <a
                href="https://www.instagram.com/project_valid/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <div className="home-container20">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=%23project_valid"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <div className="home-container21">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                    <path d="M64 384h192v576h-192v-576z"></path>
                    <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://nimble-juniper-1b9.notion.site/Project_Valid-936b40a15c9141d499b00298635abdbf?pvs=4"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <div className="home-container22">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M682 470l-298 170v-342zM896 726v-512h-768v512h768zM896 128q36 0 61 25t25 61l-2 512q0 34-25 59t-59 25h-214v86h-340v-86h-214q-36 0-61-24t-25-60v-512q0-36 25-61t61-25h768z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div >
  )
}

export default BiginForm
