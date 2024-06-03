import React from "react";
import PrimaryButton from "../components/primary-button";
import forms from "../data/forms";
import BasicPageLayout from "../layouts/basic-page";
import HubspotForm from "react-hubspot-form";

const ContactForm = (props) => {
  // url params name
  const { form } = props.match.params;

  let formDetails = forms[form];

  return (
    <BasicPageLayout
      cardsTitle={formDetails?.cardsTitle}
      cardsSubtitle={formDetails.cardsSubtitle}
    >
      <div style={{ zIndex: 100, width: "100%", maxWidth: 1050 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            paddingTop: 50,
            paddingBottom: 150,
          }}
        >
          <div style={{ flex: 1, minWidth: 300, padding: 20 }}>
            <div
              style={{
                fontWeight: 900,
                fontSize: 44,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 1,
                paddingBottom: 14,
              }}
            >
              {formDetails?.title.map((line) => {
                return (
                  <>
                    {line} <br />
                  </>
                );
              })}
            </div>
            <span>
              {formDetails?.subtitle.map((line) => {
                return (
                  <>
                    {line} <br />
                  </>
                );
              })}
              <div
                style={{
                  fontSize: 24,
                }}
              >
                {formDetails.dates &&
                  formDetails?.dates.map((line) => {
                    return (
                      <>
                        {line} <br />
                      </>
                    );
                  })}
              </div>
              {formDetails.dates && (
                <div style={{ fontSize: "small" }}>
                  (recording available after event)
                </div>
              )}

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
          <div
            style={{
              flex: 1,
              minWidth: 300,
            }}
          >
            <div
              style={{
                border: "0px solid black",
                borderRadius: 10,
                zIndex: 100,
                backgroundColor: "#fff",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
                overflow: "hidden",
                flex: 1,
                width: "100%",
                margin: 0,
                padding: 20,
              }}
            >
              <HubspotForm
                portalId="46363409"
                formId="6e352e52-6be4-4eb8-89af-d426f58d2960"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
        </div>
      </div>
    </BasicPageLayout>
  );
};

export default ContactForm;
