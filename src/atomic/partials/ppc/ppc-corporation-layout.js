import React from 'react';
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { opinions, care } from "../../../static/form/page";
import CartBlock from "../../molecules/blocks/cart-block";
import RatingBlock from "../../molecules/blocks/rating-block";
import RatingRow from "../../atoms/boxes/rating-row";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import Button from "../../molecules/buttons/button";
import Rocket from "../../sections/rocket";
import Opinions from "../../sections/form/opinions";
import Care from "../../sections/form/care";
import SEO from '../../../components/seo';
import Top from '../top';
import ButtonVideo from '../../molecules/buttons/button-video';
import PPCWhyChooseIncfile from './ppc-why-choose-incfile';
import { statesArray } from "../../../static/states-v2";

const PPCCorporationLayout = ({ stateCode, videoID, vimeo }) => {
    const state = statesArray.filter(state => state.code === stateCode)[0];
    const buttonInfo = {
        text: `Launch My Corporation`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=${stateCode}`,
    }

    const top = {
        header: `The Fastest & Easiest Way To Set Up Your ${state.name} Corporation`,
	    text: `Join Over <span>250,000</span> Businesses Launched With incfile Since <span>2004</span>`,
    }

    const whyChooseIncfile = {
        header: `Why Choose IncFile For Your ${state.name} Corporation?`,
        text1: "We're entrepreneurs - just like you.",
        text2: `An ${state.name} Corporation can be the fastest and easiest way to start a business in ${state.name}.`,
        text3: `We make registering a company as easy as possible, so you can focus on the important things. Beyond that, we have a full suite of startup services (like banking and bookkeeping), which means Incfile not only helps you get started, but supports you in your continued success as your one-stop shop.`,
        text4: `Our mission is to provide you with a superior and modern experience at an unparalleled value.`
    }

    return (
        <>
            <SEO
                robots="noindex, follow"
                title={`${state.name} Corporation Filing`}
                description={`Form a Corporation in ${state.name}`}
            />

            <Top
                ovalColor="darkblue"
                imageName="mr-bulb-get-started-2927"
                imageAlt="Mr Bulb Get Started"
                headlineWidth={700}
                textWidth={400}
                imageMobilePosition="-8%"
            >
                <h1>{top.header}</h1>
                <p>{parse(top.text)}</p>
                <Buttonsbox>
                    <Button
                        externalLink
                        content={buttonInfo}
                        theme="primary56"
                        arrow
                        margin="0 0 32px 0"
                    />
                    {vimeo
                        ? <ButtonVideo videoID={videoID} vimeo />
                        : <ButtonVideo videoID={videoID} />
                    }
                </Buttonsbox>
                <RatingRow topMargin="0">
                    <CartBlock />
                    <RatingBlock />
                </RatingRow>
            </Top>
            <Opinions content={opinions} />
            <PPCWhyChooseIncfile content={whyChooseIncfile} />
            <Care content={care} />
            <Rocket
                externalLink
                textHeading={`Easily Start Your <br>${state.name} Corporation Today`}
                text1="There's A Reason More Than 250,000 <br>Businesses Have Started With Incfile"
                text2=" "
                textButton="Launch My Corporation"
                url={`?entityType=CCorporation&entityState=${stateCode}`}
            />
        </>
    );
}

export default PPCCorporationLayout;

PPCCorporationLayout.propTypes = {
    state: PropTypes.string,
    vimeo: PropTypes.bool
}

PPCCorporationLayout.defaultProps = {
    videoID: "oYZShvmf9eQ",
    vimeo: false,
}
