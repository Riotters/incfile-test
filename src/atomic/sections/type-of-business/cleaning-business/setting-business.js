import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>
        <Oval2>
            <GreenOval/>
        </Oval2>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout
                headline="Setting up Your Cleaning Business"
                headlineWidth={770}
                textWidth={770}
                text="Once you've legally created your cleaning business, you’ll need to get some other things in place."
            />
        </ContentCenter>


        <Container>
            <ImageBoxes>
                <TopImageBox image="location" imageAlt="location of cleaning business" color={color.red3}>
                    <Heading size={3} template={4}>Location of your workshop</Heading>
                    <p>
                        Where are you going to run your business from? Will you work from home, get an office, use a shared working space or something else? You will likely run your cleaning business from home, but spend most of your working time in other locations. Alternatively, you may have a small office or commercial space where you can keep materials, provide training and work with employees.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" imageAlt="equipment of cleaning business" color={color.yellow3}>
                    <Heading size={3} template={4}>Equipment</Heading>
                    <p>
                        What equipment do you need to manage your cleaning business? You will need a laptop, computer or smartphone to communicate with clients. You will also need transportation and cleaning supplies. Don’t forget equipment like vacuum cleaners, extendable dusters, steam cleaners and the like. Make sure you understand exactly what you need to spend so you can write it off against business expenses.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" imageAlt="marketing of cleaning business" color={color.purple3}>
                    <Heading size={3} template={4}>Marketing</Heading>
                    <p>
                        You will probably need to build a website and have a brand and logo professionally designed. You should also look into local search advertising.
                    </p>
                </TopImageBox>

                <TopImageBox image="organization-change-02" imageAlt="process of cleaning business" color={color.green3}>
                    <Heading size={3} template={4}>Process</Heading>
                    <p>
                        Think about the business processes and software that you’re going to use to run your business efficiently and effectively.
                    </p>

                    <GreenCurve>
                        <Curve/>
                    </GreenCurve>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" imageAlt="employess of cleaning business" color={color.orange3}>
                    <Heading size={3} template={4}>Employees</Heading>
                    <p>
                        If you’re not doing all the cleaning yourself, you will need to hire employees to help you out. More on that below.
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
    overflow: hidden;
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
    left: 0;
    top: 0;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: 220px;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 720px){
        width: 720px;
    }
`;
export default SettingBusiness;
