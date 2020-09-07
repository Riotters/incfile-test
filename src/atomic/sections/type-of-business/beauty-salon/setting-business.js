import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/ovals/top-left-transparent-green2.inline.svg";
import ContentCenter from "../../../partials/content-center";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <ContentCenter>
                <TextCenterLayout
                    headline="Set up Your Beauty Salon Business"
                    headlineWidth="700"
                    textWidth="700"
                    text="Once you've legally created your beauty salon business, you’ll need to get some other things in place."
                />
            </ContentCenter>

            <ImageBoxes>
                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing</h4>
                    <p>
                        Local marketing and strong branding will be essential to your success. You will likely need a website and a strong social media presence too.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software</h4>
                    <p>
                        There are many types of beauty salon management software solutions that can help you manage your business much more efficiently and effectively.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Business maintenance</h4>
                    <p>
                        Most states require businesses to file an Annual Report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Your federal, state, regional and city business licenses and permits may need to be renewed on a regular basis, typically once a year.
                    </p>
                </TopImageBox>

                <TopImageBox image="permits-licences" color={color.babyblue3}>
                    <h4>Permits and licenses</h4>
                    <p>
                        What kind of bank account will you get? Do you need a business credit card? How will you pay your business taxes? These are important questions to consider so your beauty salon business stays in the green. Here at Incfile, we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        You will need to hire skilled, approachable employees. This is probably the area of the business you should spend the most time on — your people are the face of your beauty salon, and customer advocacy will be driven by how well they treat your clientele.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment</h4>
                    <p>
                        You will need equipment, furniture, fixtures, consumables and inventory to sell. Think about any hardware and transportation you might need. Make sure you understand exactly what you need to spend so you can write it off against business expenses.
                    </p>
                    <GreenCurve>
                        <Curve/>
                    </GreenCurve>
                </TopImageBox>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of your workshop</h4>
                    <p>
                        A great location is essential. You will want to be in an area with lots of foot traffic and accessibility, preferably around other businesses who are targeting the same type of clientele as you.
                    </p>
                </TopImageBox>
            </ImageBoxes>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,248,243,1) 100%);
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

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    width: 970px;
    margin: 0 auto;
  }
`;

const GreenCurve = styled.div`
    position: absolute;
    right: -115px;
    bottom: -122px;
    width: 115px;
    display: none;
  
      @media (min-width: 720px){
        display: block;
      }
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 720px;
    display: none;
  
      @media (min-width: 720px){
        display: block;
      }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: 220px;
    width: 720px;
    transform: scaleX(-1);
    display: none;
  
      @media (min-width: 720px){
        display: block;
      }
`;
export default SettingBusiness;
