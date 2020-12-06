import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout
                headline="Setting Up Your Drinking Establishment"
                headlineWidth={770}
                textWidth={770}
                text="Once you've legally created your bar or club business you’ll need to get some other things in place."
            />
        </ContentCenter>

        <Container>

            <ImageBoxes>
                <TopImageBox image="location" color={color.red3}>
                    <Heading size={3} template={4}>Your Bar or Club's Location</Heading>
                    <p>
                        As we’ve discussed before, location is everything for this type of business. It’s worth holding out for a great location, since local traffic and pedestrian patterns will have a major impact on your success.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <Heading size={3} template={4}>Marketing a Bar or Nightclub</Heading>
                    <p>
                        You will probably need to build a website and should also get professional branding, marketing and business cards.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" color={color.yellow3}>
                    <Heading size={3} template={4}>Equipment Needed</Heading>
                    <p>
                        Running a bar or club is all about the furniture, fixtures and fittings. You’ll need to outfit your space first and then develop a good inventory of the stock you’re going to be selling. Depending on what your bar does, you may need other specialized equipment like commercial cooking and kitchen facilities or brewing gear.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <Heading size={3} template={4}>Employees</Heading>
                    <p>
                        You will almost certainly need to hire employees
                        to help you out. Staff turnover in the bar and club business tends to be high and positions are not very well-paid, so expect to always be on the lookout for new servers and bar staff.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #f2f6ff 100%);
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;
`;


const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;
  width: 100%;
  max-width: 970px;
  
  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const GreenCurve = styled.div`
    position: absolute;
    right: -115px;
    bottom: -122px;
    width: 115px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 266px;
    width: 100%;
      
      @media (min-width: 570px){
        width: 570px;
      }
`;

export default SettingBusiness;
