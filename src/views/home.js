import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Valid</title>
        <meta property="og:title" content="Valid" />
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
          <div className="home-mid">
            <span className="home-text">About</span>
            <span className="home-text01">Products</span>
            <span className="home-text02">Pricing</span>
            <span className="home-text03">Blog</span>
            <span className="home-text04">Jobs</span>
            <span className="home-text05">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container02">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01"
              >
                <div className="home-container04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link02"
              >
                <div className="home-container05">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link03"
              >
                <div className="home-container06">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <div className="home-container07">
            <p className="home-text06">
              <span>Elimi</span>
              <span>
                nate
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                the cost of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>denied insurance</span>
              <br></br>
            </p>
            <span className="home-text14">
              <span>
                Valid makes
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text16">healthcare</span>
              <span>
                {' '}
                more affordable for everyone
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>by </span>
              <span className="home-text20">
                eliminating
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text21">denied</span>
              <span className="home-text22"> claims</span>
              <span> for care providers</span>
              <br></br>
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
      <div className="home-features">
        <h2 className="Headline2 home-text26">Insurance Done Better</h2>
        <span className="home-text27">
          <span>
            Discover how Valid can revolutionize insurance verification for your
            healthcare organization or practice.
          </span>
          <br></br>
        </span>
        <div className="home-features1">
          <FeatureCard
            text="Verify in real-time to accelerate payment processing and reduce the risk of denied claims."
            card_title="Streamline Processing"
            rootClassName="feature-card-root-class-name"
          ></FeatureCard>
          <FeatureCard
            text="Eliminate administrative burden of insurance verification, allowing care providers to focus on delivering quality patient care."
            image_src="/02.svg"
            card_title="Automate Processes"
            rootClassName="feature-card-root-class-name1"
          ></FeatureCard>
          <FeatureCard
            text="Reduce your costs associated with  inefficient verification  processes, and improve  the financial performance for your organization."
            image_src="/03.svg"
            card_title="Reduce Costs"
            rootClassName="feature-card-root-class-name2"
          ></FeatureCard>
          <FeatureCard
            text="Eliminate redundancies and allocate more time towards  delivering exceptional patient care."
            image_src="/04.svg"
            card_title="Enhanced Patient Care"
            rootClassName="feature-card-root-class-name3"
          ></FeatureCard>
          <FeatureCard
            text="Avoid common billing errors and increase your successful  claims. "
            image_src="/05.svg"
            card_title="Limit Risk"
            rootClassName="feature-card-root-class-name4"
          ></FeatureCard>
          <FeatureCard
            text="Reduce the risk of delayed and denied payments."
            image_src="/06.svg"
            card_title="Get Paid Quicker"
            rootClassName="feature-card-root-class-name5"
          ></FeatureCard>
        </div>
      </div>
      <div className="home-testimonials">
        <div className="home-feature1">
          <div className="home-container08">
            <img alt="image" src="/4-300h.png" className="home-image3" />
          </div>
          <div className="home-container09">
            <h3 className="home-text30">Built for Confidence</h3>
            <span className="home-text31">
              Unlike other solutions that offer a best guess on coverage, Valid
              offers 100% confidence in your verifications through data that’s
              pulled directly from the payer portal to eliminate any doubt.
            </span>
          </div>
        </div>
        <div className="home-container10"></div>
      </div>
      <div className="home-feature11">
        <div className="home-container11">
          <img alt="image" src="/1-300h.png" className="home-image4" />
        </div>
        <div className="home-container12">
          <h3 className="home-text32 Headline3">Safe and Secure</h3>
          <span className="home-text33">
            Valid offers complete HIPAA🔒 compliant health insurance
            infrastructure to spin up your Healthcare app quickly – think of
            Valid as the fasted and easiest way to start collecting insurance
            information!
          </span>
        </div>
      </div>
      <div className="home-feature12">
        <div className="home-container13">
          <img alt="image" src="/2-300h.png" className="home-image5" />
        </div>
        <div className="home-container14">
          <h3 className="home-text34 Headline3">Real-Time</h3>
          <span className="home-text35">
            Real-time verification offers immediate and accurate access to
            patient coverage information, vastly outpacing the inefficiencies
            and delays associated with manual verification processes.
          </span>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container15">
          <h2 className="home-text36 Headline2">Get Started</h2>
        </div>
      </div>
      <div className="home-container16">
        <a
          href="https://calendly.com/_valid/30min"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link05 button"
        >
          Care Provider
        </a>
        <a
          href="https://calendly.com/_valid/30min"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link06 button"
        >
          Developer
        </a>
      </div>
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
    </div>
  )
}

export default Home
