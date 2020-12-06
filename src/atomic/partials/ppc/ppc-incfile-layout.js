import React from 'react';
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { opinions, choose, care } from "../../../static/form/page";
import CartBlock from "../../molecules/blocks/cart-block";
import RatingBlock from "../../molecules/blocks/rating-block";
import RatingRow from "../../atoms/boxes/rating-row";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import Button from "../../molecules/buttons/button";
import Rocket from "../../sections/rocket";
import Opinions from "../../sections/form/opinions";
import Choose from "../../sections/form/choose";
import Care from "../../sections/form/care";
import SEO from '../../../components/seo';
import Top from '../top';
import ButtonVideo from '../../molecules/buttons/button-video';
import { statesArray } from "../../../static/states-v2";

const PPCIncfileLayout = ({
    stateCode,
    videoID,
    vimeo,
    entityType,
    seoTitle,
    seoDesc,
    robots,
    content
}) => {
    const state = stateCode ? statesArray.filter(state => state.code === stateCode)[0] : '';
    const buttonInfo = {
        text: `Get Started`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=${entityType}&entityState=${stateCode}`,
    }
    
    return (
        <>
            <SEO
                robots={robots}
                title={seoTitle}
                description={seoDesc}
            />

            <Top
                ovalColor="darkblue"
                imageName="mr-bulb-get-started-2927"
                imageAlt="Mr Bulb Get Started"
                headlineWidth={700}
                textWidth={400}
                imageMobilePosition="-8%"
            >
                {content.heroHeadLine && <p style={{fontSize: `20px`, marginBottom:`16px`}}>{ parse(content.heroHeadLine)}</p>}
                <h1>{parse(content?.heroTitle ? content.heroTitle : `The Fastest & Easiest Way To Set Up Your LLC`)}</h1>
                <p style={{fontSize: `32px`, color: '#1D1D1D', fontWeight: `bold`}}>Price: $0 + State Fee</p>
                <p>{parse(content?.heroText ? content.heroText : `Join Over <span>250,000</span> Businesses Launched With incfile Since <span>2004</span>`)}</p>

                <Buttonsbox>
                    <Button
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
            <Choose content={choose} />
            <Care content={care} />
            <Rocket
                externalLink
                textHeading={content.rocket.header}
                text1={content.rocket.text1}
                text2=" "
                textButton={content.rocket.textButton}
                url={`?entityType=${entityType}&entityState=${stateCode}`}
            />
        </>
    );
};

export default PPCIncfileLayout;

PPCIncfileLayout.propTypes = {
    state: PropTypes.string,
    vimeo: PropTypes.bool,
    heroTitle: PropTypes.string,
    heroText: PropTypes.string,
    entityType: PropTypes.string,
    stateCode: PropTypes.string,
}

PPCIncfileLayout.defaultProps = {
    videoID: "372490609",
    vimeo: true,
    entityType: '',
    stateCode: '',
    robots: "noindex, follow",
    seoTitle: `Incfile Incoporation Service`,
    seoDesc: `Form an LLC (Limited Liability Company) or Corporation Online`,
}
