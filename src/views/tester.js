import React from "react";
import BasicPageLayout from "../layouts/basic-page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tester = () => {
  return (
    <div>
      <BasicPageLayout
        cardsTitle="Instant Check-in"
        cardsSubtitle="Discover how Valid can revolutionize patient information for your healthcare organization or practice."
      >
        <div
          style={{
            width: "100%",
            maxWidth: 800,
            zIndex: 1,
          }}
        >
          <h1>Welcome to tester!</h1>
          <br />
          <br />
          {/* Add your content here */}
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <h2> Android</h2>
          </div>
          <br />

          <a href="https://play.google.com/apps/internaltest/4701030528684351313">
            <div
              style={{
                backgroundColor: "#8C30F5",
                padding: 10,
                borderRadius: 10,
                color: "white",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Join Android Test Group
            </div>
          </a>
          <div
            style={{
              width: "100%",
              textAlign: "center",

              marginTop: 60,
            }}
          >
            <h2> Apple</h2>
          </div>
          <br />

          <a href="https://testflight.apple.com/join/xhu9u19Y">
            <div
              style={{
                backgroundColor: "#2EC5CE",
                padding: 10,
                borderRadius: 10,
                color: "white",
                textAlign: "center",
                cursor: "pointer",
                marginBottom: 160,
              }}
            >
              Join Apple Test Group
            </div>
          </a>
        </div>
      </BasicPageLayout>
    </div>
  );
};

export default Tester;
