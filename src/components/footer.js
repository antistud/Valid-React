import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";

const SiteFooter = (props) => {
  function MenuItems1() {
    return (
      <>
        <MenuItem href="/posts" label="Blog" />
        <MenuItem href="/about" label="About" />
        <MenuItem href="/form/contact" label="Contact" />
        <MenuItem href="/join" label="Join The Team" />
      </>
    );
  }

  function MenuItems2() {
    return <></>;
  }
  function MenuItems3() {
    return (
      <>
        <ButtonItem href="https://app.valid.care/" label="Login" />
        <ButtonItem
          href="https://buy.stripe.com/7sI16Z7qY1JE7Go5kk"
          label="Sign Up"
          backgroundColor="#8C30F5"
          color="white"
        />
      </>
    );
  }

  function MenuItem({ href, label }) {
    let selected = window.location.pathname.includes(href);

    return (
      <div style={{ padding: 8, margin: 4, fontWeight: selected ? 800 : 3000 }}>
        <a href={href} className="home-link">
          {label}
        </a>
      </div>
    );
  }

  function ButtonItem({ href, label, color, backgroundColor }) {
    let selected = window.location.pathname.includes(href);

    return (
      <div
        style={{
          padding: "8px 12px",
          minWidth: 60,
          textAlign: "center",
          margin: 4,
          fontWeight: selected ? 800 : 3000,
          borderRadius: 6,
          border: "1px solid #ccc",
          color: color || "black",
          backgroundColor: backgroundColor || "white",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        <a href={href} className="home-link">
          {label}
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="home-footer">
        <footer className="home-container17">
          <img
            alt="image"
            src="/5_crop_white-200h.png"
            className="home-image6"
          />
          <div className="home-divider" style={{ marginTop: 30 }}></div>
          <div style={{ width: "100%", display: "flex", paddingTop: 30 }}>
            <div style={{ flex: 1, textAlign: "left", width: 300 }}>
              <MenuItems1 />
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <MenuItems2 />
            </div>
            <div style={{ flex: 1, textAlign: "right", width: 300 }}>
              <MenuItems3 />
            </div>
          </div>
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
    </>
  );
};

export default SiteFooter;
