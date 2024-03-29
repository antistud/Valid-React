import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'
import FeatureCard from './feature-card';
import { Helmet } from 'react-helmet';

const PageHeader = (props) => {
    return (
        <>
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
                    </div>
                </div>
            </div>
        </>
    );
}


export default PageHeader;