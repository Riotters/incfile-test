import React from "react";
import styled from "styled-components";
import Container from "../../../atomic/container";
import TextCenterLayout from "../../../components/partials/blocks/heading-center";
import {Paragraph} from "../../../atomic/atoms/typography/paragraph";
import Adventages from "../../../components/adventages";
import {color} from "../../../components/styles/colors";
import {shadow} from "../../../components/styles/shadows";
import Curve from "../../../atomic/atoms/shapes/curve";
import OvalSvg from "../../../images/oval-babyblue-1.inline.svg";
import OvalSvgBottom from "../../../images/oval-babyblue-2.inline.svg";
import CurveSvg from "../../../images/curve-babyblue-1.inline.svg";

const AirbnbTaxes = () => (
    <BabyBlueContainer>

        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <Container>
            <TextCenterLayout headline="Airbnb Taxes"/>

            <TextWrapper>
                <Paragraph big>
                    <Curve color={color.babyblue1}
                           style={{position: "absolute", left: "-29px", top: "-25px", transform: "rotate(-90deg)"}}/>
                    Even though you’re running an Airbnb business, you can’t escape real-world licenses, permits and
                    regulations. You will need to explore local, state and federal licenses and permits, and <span
                    className="big blue">we can also
                    help out with researching your business licensing needs.</span>
                </Paragraph>
                <Paragraph big>
                    It’s also very important to consider local zoning laws, ordinances and permits. Some
                    municipalities don’t allow just anyone to set themselves up as an Airbnb host, and if you do, you
                    could
                    be fined. Check with your local and regional authorities what their requirements are for Airbnb
                    hosts.
                </Paragraph>
            </TextWrapper>
        </Container>

        <Service>
            <Container>
                <TextCenterLayout headline="Maintaining Your Airbnb Business"
                                  text="There are certain forms and legalities you need to follow to keep your Airbnb business in good standing."/>
                <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    {adventages.items.map(item => (
                        <Adventages style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
                                    circleText={item.circleText} headline={item.headline} text={item.text}
                                    circlePosition="center" circleBackgroundColor={color.blue1}
                                    circleBackgroundShadow={shadow.blue1}/>
                    ))}
                </AdventagesBox>
            </Container>
        </Service>

    </BabyBlueContainer>
);

const BabyBlueContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,248,255,1) 100%);
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;
`;

const TextWrapper = styled.div`
    width: 100%;
    position: relative;
    
    @media (min-width: 750px) {
        width: 750px;
        margin: 48px auto 100px;
    }
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 970px;
  padding: 140px 0;
  margin: 0 auto;
  position: relative;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 300px;
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -115px;
    top: 24px;
`;

const adventages = {
    items: [
        {
            circleText: 1,
            headline: "File an Annual Report",
            text: "Depending on the state you’re located in, you will probably have to file a report every year. This report tells the state about any major changes to your daycare business, and we can file your Annual Report on your behalf.",
            url: "/manage-your-company/annual-report",
            urlText: "Annual Report"
        },
        {
            circleText: 2,
            headline: "Pay estimated taxes",
            text: "You will be expected to pay estimated taxes on what you plan to earn in the current business year. Typically, you will need to pay estimated taxes in April, June, September and January (of the following year)."
        },
        {
            circleText: 3,
            headline: "Renew Business Permits and Licenses",
            text: "Your federal, state, regional and city licenses and permits may need to be renewed on a regular basis, typically once a year."
        },
        {
            circleText: 4,
            headline: "File your taxes",
            text: "You will need to file your taxes once a year."
        },
        {
            circleText: 5,
            headline: "Pay payroll and sales taxes",
            text: "If applicable, you will need to make payroll and sales tax payments on a regular basis."
        },
        {
            circleText: 6,
            headline: "Prepare Your Taxes",
            text: "You will need to work with your accountant to prepare all the taxes you need to pay."
        },
    ]
}

export default AirbnbTaxes;
