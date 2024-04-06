import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'
import FeatureCard from './feature-card';
import { Helmet } from 'react-helmet';

const PageHeader = (props) => {

    const [showMenu, setShowMenu] = React.useState(false);

    function MenuItems() {
        return (
            <>
                {/* <MenuItem href="/posts" label="Blog" /> */}
                <MenuItem href="/page/about" label="About" />
                <MenuItem href="/form/contact" label="Contact" />
                <ButtonItem href="https://app.valid.care/" label="Login" />
                <ButtonItem href="https://buy.stripe.com/7sI16Z7qY1JE7Go5kk" label="Sign Up" backgroundColor="#8C30F5" color="white" />
            </>
        );
    }


    function isMobile() {
        return window.innerWidth < 768;
    }

    function MenuItem({ href, label }) {
        let selected = window.location.pathname.includes(href);

        return (
            <div style={{ padding: 8, margin: 4, fontWeight: selected ? 800 : 3000 }}>
                <a href={href} className="home-link">{label}</a>
            </div>
        );
    }


    function ButtonItem({ href, label, color, backgroundColor }) {
        let selected = window.location.pathname.includes(href);

        return (
            <div style={{
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
                fontWeight: 600
            }}>
                <a href={href} className="home-link">{label}</a>
            </div>
        );
    }

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
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 20px",
                        borderBottom: "0px solid #e0e0e0",
                        flex: 1,
                        flexWrap: "wrap",
                        flexDirection: isMobile() ? "column" : "row"
                    }}>
                        <div style={{ flex: 1 }}>
                            <a href="/">
                                <div className="home-logo" >
                                    <img alt="image" src="/5_crop1-200h.png" className="home-image" />
                                </div>
                            </a>
                        </div>
                        {isMobile() ? <>
                            {showMenu ? (
                                <>
                                    <div style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        flexDirection: "column",
                                        padding: 10,
                                        width: "100%",
                                        borderRadius: 8,
                                        backgroundColor: "white",
                                    }}>

                                        <MenuItems />
                                    </div>
                                    <div
                                        onClick={() => setShowMenu(false)}
                                        style={{ padding: 4, margin: 4, marginTop: 18, backgroundColor: "white", width: 100, borderRadius: 8, height: 34, paddingTop: 16 }}>
                                        <div style={{ marginLeft: "auto", marginRight: "auto", height: 3, width: 32, backgroundColor: "black", transform: "rotate(45deg)" }} ></div>
                                        <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: -3, height: 3, width: 32, backgroundColor: "black", transform: "rotate(-45deg)" }} ></div>
                                    </div></>) : (
                                <>
                                    <div style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        flexDirection: "column",

                                        textAlign: "center"
                                    }}>
                                        <div
                                            onClick={() => setShowMenu(true)}
                                            style={{ padding: 4, margin: 4, marginTop: 10, backgroundColor: "white", width: 100, borderRadius: 8 }}>
                                            <div style={{ margin: "2px auto", height: 3, width: 22, backgroundColor: "black" }} ></div>
                                            <div style={{ margin: "2px auto", height: 3, width: 22, backgroundColor: "black" }} ></div>
                                            <div style={{ margin: "2px auto", height: 3, width: 22, backgroundColor: "black" }} ></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </> : <>
                            <div style={{
                                display: "flex",
                                flexWrap: "wrap",
                            }}>
                                <MenuItems />
                            </div></>}

                    </div>
                </header>
            </div>
        </>
    );
}


export default PageHeader;