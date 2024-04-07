import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/primary-button";
import BasicPageLayout, { BlogPageLayout } from "../layouts/basic-page";
import DB from "../data/db";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import moment from "moment";
import "./home.css";

const About = (props) => {
  const [page, setPage] = useState(null);
  const { name } = props.match.params;

  return (
    <BlogPageLayout>
      <div
        style={{
          zIndex: 100,
          width: "100%",
          maxWidth: 1050,
          minHeight: 600,
          paddingBottom: 200,
        }}
      >
        <div>
          <div style={{ padding: 80 }}>
            <div style={{ fontWeight: 700, fontSize: 54 }}>About Valid</div>
            <div style={{ maxWidth: 500 }}>
              At Valid, our core commitment is to redefine the healthcare
              administration landscape. We understand the significant challenges
              healthcare providers face with insurance and intake that are often
              cumbersome, time-consuming, and prone to errors. Our mission is to
              alleviate these burdens, enabling healthcare providers to
              concentrate on what truly matters: patient care.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: 80,
              backgroundColor: "#eee",
              marginTop: 80,
              borderRadius: 10,
            }}
          >
            <div style={{ flex: 1, minWidth: 400 }}>
              <div
                style={{
                  backgroundImage:
                    "url(https://us-east-1-shared-usea1-02.graphassets.com/clulby54r00av07lh1umf40ff/cluop5q7gmqf207k4j8248t40)",
                  backgroundSize: "cover",
                  height: 260,

                  width: "80%",
                  borderRadius: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            </div>
            <div style={{ flex: 1, padding: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 34 }}>Our Vision</div>
              We envision a future where healthcare providers can focus their
              time and resources on delivering exceptional patient care rather
              than being burdened by administrative tasks. By leveraging
              cutting-edge technology and innovative solutions, we aim to create
              a seamless experience for both providers and patients within the
              healthcare ecosystem.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: 80,
            }}
          >
            <div style={{ flex: 1, padding: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 34 }}>Our Approach:</div>
              <div style={{ paddingTop: 30 }}>
                <b>Unified Intake Platform:</b> At the heart of our innovation
                is our unified intake platform, designed to simplify and
                accelerate the insurance verification and intake processes. This
                platform acts as a bridge between healthcare providers and
                insurance companies, ensuring real-time data exchange and
                streamlined communication. By automating these processes, we not
                only minimize administrative overhead but also enhance accuracy,
                reducing the risk of claim denials and delays.
              </div>
              <div style={{ paddingTop: 30 }}>
                <b>Empowering Care Providers:</b> Our technology empowers
                healthcare providers by offering them tools that are intuitive,
                reliable, and efficient. With our solutions, providers can
                easily onboard new patients, verify insurance eligibility, and
                track their status in real-time. This level of transparency and
                control is unprecedented in the healthcare sector and marks a
                significant step towards operational excellence.
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: 80,
              backgroundColor: "#181920",
              marginTop: 80,
              color: "#eee",
            }}
          >
            <div style={{ flex: 1, padding: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 34 }}>
                Our Vision Expanded:
              </div>
              <div style={{ paddingTop: 30 }}>
                <b>Focus on Patient Care: </b>
                In the future we envision, healthcare providers are liberated
                from the shackles of administrative tasks. With the time and
                resources saved, they can invest more in delivering exceptional
                patient care, enhancing the patient experience, and improving
                healthcare outcomes. Our ultimate goal is to create an ecosystem
                where administrative efficiency and patient care go hand in
                hand.
              </div>
              <div style={{ paddingTop: 30 }}>
                <b>Technological Innovation: </b>
                We are committed to continuous innovation, harnessing the power
                of the latest technologies to refine and enhance our platform.
                This includes exploring areas like artificial intelligence,
                machine learning, and blockchain to further optimize healthcare
                administration processes.
              </div>
              <div style={{ paddingTop: 30 }}>
                <b>Collaborative Ecosystem: </b>
                We see ourselves not just as a service provider but as a partner
                in the healthcare ecosystem. We aim to foster collaborations
                with healthcare providers, insurance companies, and other
                stakeholders to ensure that our solutions are comprehensive,
                inclusive, and aligned with the needs of all parties.
              </div>
              <div style={{ paddingTop: 30 }}>
                <b>Global Impact: </b>
                While our immediate focus is on transforming healthcare
                administration at the local level, our vision extends globally.
                We aspire to adapt and scale our solutions to different
                healthcare systems around the world, contributing to a universal
                improvement in healthcare efficiency and patient satisfaction.
              </div>
              <div style={{ paddingTop: 30 }}>
                <b>Sustainability and Ethics: </b>
                In all our endeavors, we are committed to sustainability and
                ethical practices. We believe that technology should be used
                responsibly, with a keen awareness of its impact on society and
                the environment. Our approach is patient-centric, data-secure,
                and compliant with all relevant regulations, ensuring that we
                not only advance healthcare administration but also contribute
                positively to the broader community.
              </div>
              <div style={{ paddingTop: 30 }}>
                In conclusion, Valid is not just a company; it's a catalyst for
                change in the healthcare industry. By revolutionizing insurance
                verification and claims management, we're setting a new standard
                for efficiency and care quality, paving the way for a future
                where healthcare providers can devote their best to patient
                care, supported by seamless, intuitive, and reliable
                administrative processes
              </div>
            </div>
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 54,
              textAlign: "center",
              paddingTop: 120,
              paddingBottom: 20,
            }}
          >
            Meet the Team
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: 1, padding: 40, textAlign: "center" }}>
              <div
                style={{
                  backgroundImage:
                    "url(https://us-east-1-shared-usea1-02.graphassets.com/clulby54r00av07lh1umf40ff/clunevllmgfr107lfueb04ivr)",
                  backgroundSize: "cover",
                  height: 200,
                  width: 200,
                  borderRadius: 100,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div style={{ fontWeight: 700, fontSize: 32 }}>Jon Rhoades</div>
              <div style={{ fontWeight: 400, fontSize: 22, paddingBottom: 40 }}>
                Technology Lead
              </div>
              With over 18 years of experience in the technology industry, Jon
              Rhoades brings a wealth of expertise to our team. His background
              includes spearheading major technology rollouts and fostering
              startup culture, making him instrumental in driving our
              technological innovation forward.
              <div style={{ fontWeight: 600, paddingTop: 40 }}>
                <a href="https://www.linkedin.com/in/jon-rhoades/">
                  Connect with Jon on LinkedIn
                </a>
              </div>
            </div>
            <div style={{ flex: 1, padding: 40, textAlign: "center" }}>
              <div
                style={{
                  backgroundImage:
                    "url(https://us-east-1-shared-usea1-02.graphassets.com/clulby54r00av07lh1umf40ff/cluneuogugfjd07k4ewneayql)",
                  backgroundSize: "cover",
                  height: 200,
                  width: 200,
                  borderRadius: 100,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div style={{ fontWeight: 700, fontSize: 32 }}>Chase Francl</div>
              <div style={{ fontWeight: 400, fontSize: 22, paddingBottom: 40 }}>
                Healthcare Specialist
              </div>
              As the founder of ValiData Outcome Services and President/CEO of
              the Mid-Plains Center for Behavioral Healthcare Services, Inc.,
              Chase Francl is deeply rooted in the healthcare industry. His
              firsthand knowledge of provider challenges and commitment to
              offering impactful solutions make him an invaluable asset to our
              team.
              <div style={{ fontWeight: 600, paddingTop: 40 }}>
                <a href="https://www.linkedin.com/in/chase-francl-3342b2b1/">
                  Connect with Chase on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogPageLayout>
  );
};

export default About;
