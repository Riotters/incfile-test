import HTMLReactParser from "html-react-parser";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { getFullPricesAndFilings } from "../../../api/Api";
import RatingRow from "../../../atomic/atoms/boxes/rating-row";
import Buttonsbox from "../../../atomic/atoms/boxes/top-buttons-box";
import Curve from "../../../atomic/atoms/icons/curve";
import Oval from "../../../atomic/atoms/icons/oval";
import { color, gradient } from "../../../atomic/atoms/styles/colors";
import CartBlock from "../../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../../atomic/molecules/blocks/rating-block";
import Button from "../../../atomic/molecules/buttons/button";
import Accordion from "../../../atomic/organisms/accordion/accordion";
import ContentCenter from "../../../atomic/partials/content-center";
import HeadingCenter from "../../../atomic/partials/heading-center";
import Top from "../../../atomic/partials/top";
import PacketsSection from "../../../atomic/sections/learning-center-entity/alaska-corporation/packets";
import Rocket from "../../../atomic/sections/learning-center-entity/alaska-corporation/rocket";
import ComplianceRequirementBox from "../../../atomic/state-corporation/compliance-requirement-box";
import FilingTimeAndPriceBox from "../../../atomic/state-corporation/filing-time-and-price-box";
import LightBoxVideo from "../../../components/LightBox";
import SEO from "../../../components/seo";
import { getUrlParam } from "../../../helpers/utils";
import Curve2SVG from "../../../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import OvalSvg3 from "../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalSvg2 from "../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg4 from "../../../images/ovals/top-right-transparent-orange3.inline.svg";
import {
    questions,
    service
} from "../../../static/learning-center-entity/kentucky-corporation";
import { statesArray } from "../../../static/states-v2";


const PPCCorporationLayoutV2 = ({ stateCode, videoID, content }) => {
    const gclidQuery = getUrlParam('gclid') ? `&gclid=${getUrlParam('gclid')}` : '';
    const state = statesArray.filter((state) => state.code === stateCode)[0];
    const stateName = state ? state.name : "";
    const [dataApi, setDataApi] = React.useState({});
    const [
        filingTimeAndRequirementHeader,
        setFilingTimeAndRequirementHeader,
    ] = React.useState("");

    React.useEffect(() => {
        getFullPricesAndFilings(state.name, "Corporation").then((data) => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(
                `Learn more about incorporating in ${data.prices.state}`
            );
        });
    }, [state.name]);

    return (
        <>
            <SEO
                robots="noindex, follow"
                title={`${stateName} Corporation Filing`}
                description={`Form a Corporation in ${stateName}`}
            />
            <Top
                imageName="mr-bulb-corporation-california-8302"
                imageAlt={`form a corporation in ${stateName}`}
                ovalColor="purple-2"
                headlineWidth="560"
            >
                <h1>{HTMLReactParser(content.topHeader)}</h1>
                <p>
                    {HTMLReactParser(
                        content.topText ?? `$0 + State Fee & 1st Year FREE Registered Agent`
                    )}
                </p>
                <Buttonsbox>
                    <Button
                        externalLink
                        theme="primary56"
                        arrow
                        content={{
                            text: `Start My Corporation`,
                            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation${stateCode ? `&entityState=${stateCode}` : ''}${gclidQuery}`,
                        }}
                    />
                </Buttonsbox>

                <RatingRow>
                    <CartBlock />
                    <RatingBlock />
                </RatingRow>
            </Top>

            <ServiceSection>
                <Oval className="oval" height={420} width={420} top="20" right="0">
                    <OvalSvg2 />
                </Oval>
                <Oval className="oval" height={720} width={720} top="60" left="0">
                    <OvalSvg3 />
                </Oval>
                <HeadingCenter
                    headline={service.header}
                    textWidth="590"
                    text={service.text}
                    bottomMargin="48"
                    bottomMarginLG="48"
                />
                <ContentCenter style={{ marginBottom: "120px" }}>
                    <Curve top="-115" left="80" rotate={180} color={color.blue2}>
                        <Curve2SVG />
                    </Curve>
                    <LightBoxVideo
                        alt="what is a corporation"
                        thumbnailVideo="comparison-chart-video-3611"
                        videoID="372490609"
                        vimeo
                    />
                </ContentCenter>

                {/* Filing Times & Requirement section */}
                <ContentCenter contentWidth={970}>
                    <HeadingCenter
                        headline={filingTimeAndRequirementHeader}
                        textWidth="770"
                        bottomMargin="48"
                        bottomMarginLG="80"
                    />
                    <FilingTimeAndPriceBox data={dataApi} />
                    <ComplianceRequirementBox data={dataApi} style={{ margin: 0 }} />
                </ContentCenter>
            </ServiceSection>

            <PacketsSection data={dataApi} compacted={true} />

            <QuestionSection>
                <Oval className="oval" height={570} width={570} top="20" right="0">
                    <OvalSvg4 />
                </Oval>
                <HeadingCenter
                    headline={`Commonly Asked Questions For Starting a ${stateName} Corporation`}
                    textWidth="770"
                />
                <ContentCenter style={{ marginBottom: "48px" }}>
                    <Accordion
                        content={questions}
                        curve
                        curveColor={color.blue1}
                        curveLeft="-15px"
                    />
                </ContentCenter>
                <ContentCenter style={{ marginBottom: "48px" }}>
                    <Button
                        content={{
                            text: `View all corporation FAQ's`,
                            url: `/research-topics/c-corporation-info/`,
                        }}
                        width={300}
                        padding="12px 48px"
                    />
                </ContentCenter>
            </QuestionSection>

            <Rocket urlParams={`?entityType=CCorporation${stateCode ? `&entityState=${stateCode}` : ''}${gclidQuery}`} />
        </>
    );
};

const QuestionSection = styled.section`
  background-image: ${gradient.orange3};
  position: relative;
  padding-top: 100px;
  margin-top: 24px;
  margin-bottom: 56px;

  @media (min-width: 769px) {
    margin-top: 56px;
    margin-bottom: 148px;
  }
`;

const ServiceSection = styled.section`
  background-image: ${gradient.blue3};
  padding-top: 56px;
  position: relative;
  margin-bottom: 56px;
  overflow: hidden;

  @media (min-width: 769px) {
    padding-top: 120px;
    margin-bottom: 104px;
  }
`;

export default PPCCorporationLayoutV2;

PPCCorporationLayoutV2.propTypes = {
  stateCode: PropTypes.string.isRequired,
  content: {
    topHeader: PropTypes.string.isRequired,
  },
};
