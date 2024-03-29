import React from 'react'
import PageHeader from '../components/page-header';
import ValueProps from '../components/value-props';
import Features from '../components/features';
import GetStarted from '../components/get-started';
import SiteFooter from '../components/footer';


const BasicPageLayout = (props) => {
    return (
        <>
            <div className="home-container">
                <PageHeader />
                {props.children}
                <ValueProps title={props?.cardsTitle} subtitle={props?.cardsSubtitle} />
                <Features />
                <GetStarted />
                <SiteFooter />
            </div>
        </>
    );
}


export default BasicPageLayout;