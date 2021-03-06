import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import ContentCenter from "../../../partials/content-center";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "@reach/router";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout
                headline="Setting up Your Landscaping Business"
                headlineWidth={770}
                textWidth={770}
                text="Once you've legally created your landscaping business, you’ll need to get some other things in place."
            />
        </ContentCenter>

        <Container>

            <ImageBoxes>
                <TopImageBox image="location" imageAlt="location" color={color.red3}>
                    <Heading size={3} template={4}>Location of Your Business</Heading>
                    <p>
                        Where are you going to run your business from? Will you work from home, get an office or
                        something else? At the very least, you will need space to store equipment, consumables and
                        stock.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" imageAlt="marketing" color={color.purple3}>
                    <Heading size={3} template={4}>Marketing</Heading>
                    <p>
                        You will probably need to build a website, and you will definitely need excellent local
                        marketing expertise.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" imageAlt="employees" color={color.orange3}>
                    <Heading size={3} template={4}>Employees</Heading>
                    <p>
                        It’s unlikely that you will need to hire employees in the early days of your business. Instead,
                        you might work with freelance designers, marketers and similar.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" imageAlt="software" color={color.green3}>
                    <Heading size={3} template={4}>Software</Heading>
                    <p>
                        Special software exists to make it easier to run your landscaping business.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" imageAlt="business maintenance" color={color.babyblue3}>
                    <Heading size={3} template={4}>Business maintenance</Heading>
                    <p>
                        Most states require businesses to file an <Link to="/manage-your-company/annual-report/">Annual Report</Link> once a year. You will also be expected
                        to pay estimated taxes on what you plan to earn in the current business year. Your federal,
                        state, regional and city <Link to="/business-license-research-package/">business licenses and permits</Link> may need to be renewed on a regular
                        basis, typically once a year.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" imageAlt="finance and taxes" color={color.yellow3}>
                    <Heading size={3} template={4}>Finances and taxes</Heading>
                    <p>
                        What kind of bank account will you get? Do you need a business credit card? How will you pay
                        your business taxes? These are important questions to consider so your landscaping business
                        stays in the green. Here at Incfile, we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" imageAlt="equipment" color={color.yellow3}>
                    <Heading size={3} template={4}>Equipment</Heading>
                    <p>
                        What equipment do you need to manage your landscaping business? Depending on the types of
                        services you offer you will need tools like lawnmowers, weed whackers and trimmers. You may also
                        require construction tools, especially if you are doing design and installation. Make sure you
                        understand exactly what you need to spend so you can write it off against business expenses.
                    </p>
                </TopImageBox>
            </ImageBoxes>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
    background: rgb(255,255,255);
    background: ${gradient.green3};
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

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 220px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default SettingBusiness;
