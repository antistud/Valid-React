import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import './TeamMember.css'
import members from '../data/members'
import SecondaryButton from '../components/secondary-button'
import PageHeader from '../components/page-header'
import BasicPageLayout from '../layouts/basic-page'



const TeamMember = (props) => {

  // url params name
  const { name } = props.match.params

  let member = members[name];

  return (
    <BasicPageLayout cardsTitle="Insurance Done Better" cardsSubtitle="Discover how Valid can revolutionize insurance verification for your healthcare organization or practice.">

      <div className="home-hero">
        <div
          style={{
            borderRadius: "10px",
            border: "2px solid black",
            height: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            overflow: "hidden",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
            marginBottom: 40
          }}
        >
          <img alt="image"
            width="auto"
            height="100%"
            src={member.image} className="image" />
        </div>
        <div className="home-container07">
          <p className="home-text06">
            <span>{member.name}</span>
          </p>
          <span className="home-text15">
            <span className="home-text16">
              {member.role}
            </span>
            <br></br>
            <span className="home-text18">{member.bio}</span>
          </span>
          <div
            onClick={() => window.open("mailto:" + member.email, "_blank")}
            style={{ paddingTop: 10, cursor: "pointer" }}>
            ✉️ {member.email}
          </div>
          <div
            onClick={() => window.open("tel:" + member.mobile, "_blank")}
            style={{ paddingTop: 10, cursor: "pointer" }}>
            📞 {member.mobile}
          </div>
          <div style={{ paddingTop: 10, cursor: "pointer" }}>

            <div
              onClick={() => window.open(member.linkedIn, "_blank")}
              style={{ display: "flex" }}
            >
              <div>
                <img width={24} src='/linkedin.svg' />
              </div>
              <div> &nbsp;LinkedIn</div>
            </div>

          </div>
          <br></br>

          {member.vCard && (
            <div style={{ padding: 4 }}>
              <a
                href={member.vCard}
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04"
              >
                <PrimaryButton
                  width="100%"
                  button="📱 Add to Contacts"
                  className="home-component"
                ></PrimaryButton>
              </a>
            </div>
          )}
          {member.calendly && (
            <div style={{ padding: 4 }}>
              <a
                href={member.calendly}
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04"
              >
                <SecondaryButton
                  button="🗓️ Schedule a Meeting"
                  className="home-component"
                ></SecondaryButton>
              </a>
            </div>
          )}
        </div>
      </div>
    </BasicPageLayout>

  )
}

export default TeamMember
