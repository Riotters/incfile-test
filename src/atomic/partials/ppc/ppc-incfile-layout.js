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

    const customers = [
        {
            star: true,
            name: `John F.`,
            city: ``,
            text: `I had an issue with a report that I had filed and received a call from
			Andrew in a very timely manner and he cleared everything up for me and
			got me the documents that I needed. He went above and beyond than
			expected and I greatly appreciated it.`,
        },
        {
            star: true,
            name: `Jade B.`,
            city: ``,
            text: `Very easy to use, there are no questions if I'm doing things wrong or if
			I'm forgetting anything. incfile has it covered.`,
        },
        {
            star: true,
            name: `- Charne T.`,
            city: ``,
            text: `The product information is clear and orders are simple and easy to complete. Incfile.com has been a great help! `,
        },
        {
            star: true,
            name: `Linda D.`,
            city: ``,
            text: `I am very satisfied with the services I received from Incfile. My
			business has been using this service for 3years, keeping me updated on
			all facets pertaining to business. Easy access to my account. Overall a
			great asset to my business.`,
        },
        {
            star: true,
            name: `Susan H.`,
            city: ``,
            text: `I normally get my corp filings from another company, but after
			purchasing a corp thru Incfile.com, and how fast I received everything,
			this is my new go-to for legal business filings. Highly recommend!`,
        },
        {
            star: true,
            name: `David D.`,
            city: ``,
            text: `I have had a great experience starting and maintaining my business
			through IncFile.com. They take care of the details / reporting documents
			so I can tend to the success of my business!`,
        },
    ];
    
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
                {content?.heroHeadLine && <p style={{fontSize: `20px`, marginBottom:`16px`}}>{ parse(content.heroHeadLine)}</p>}
                <h1>{parse(content?.heroTitle ? content.heroTitle : `The Fastest & Easiest Way To Set Up Your LLC`)}</h1>
                <p style={{fontSize: `32px`, color: '#1D1D1D', fontWeight: `bold`}}>Price: $0 + State Fee</p>
                <p>{parse(content?.heroText ? content.heroText : `Join Over <span>500,000</span> Businesses Launched With incfile Since <span>2004</span>`)}</p>

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
            <Opinions content={opinions} customers={customers} />
            <Choose content={choose} stateName={state?.name ? state.name : ''} />
            <Care content={care} showQuotes={true} />
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
    content: {
        rocket: {
            header: `Ready to Start?`,
            text1: `Getting started is easy. Click the Get Started button below. <br>Fill out the basic form steps and just minutes from now you <br>will have your new LLC.`,
            textButton: `Get Started`
        }
    },
    quotes: [
        {
            text: `I am very satisfied with the services I received from Incfile. My business has been using this service for 3 years, keeping me updated on all facets pertaining to business.`,
            author: `Linda`,
            state: ``,
        },
        {
            text: `Everyone at IncFile has been first class and quick to respond to my service needs. I appreciate you going above and beyond and taking the time to educate me.`,
            author: `Tim`,
            state: ``,
        },
    ]
}
