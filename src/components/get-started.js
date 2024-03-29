import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const GetStarted = (props) => {
    return (
        <>
            <div className="home-feature2">
                <div className="home-container15">
                    <h2 className="home-text36 Headline2">Get Started</h2>
                </div>
            </div>
            <div className="home-container16" style={{
                maxWidth: "100vw",
                marginLeft: 19
            }}>
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
        </>
    );
}


export default GetStarted;