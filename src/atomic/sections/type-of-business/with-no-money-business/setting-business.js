import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <TextCenterLayout
            headline="Setting Up Your Business and Business Operations"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your business, you’ll need to get some other things in place."
        />

        <Container>

            <ImageBoxes>

                <TopImageBox image="location" imageAlt="location" color={color.red3}>
                    <Heading size={3} template={4}>Location of your business</Heading>
                    <p>
                        Setup a location to run your business from. To keep costs down, you will likely start by working from home, a shared workspace or even a coffee shop.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" imageAlt="equipment" color={color.yellow3}>
                    <Heading size={3} template={4}>Equipment</Heading>
                    <p>
                        Get the equipment you need to run your business. Ideally you should already have everything you need, but you might be able to beg, borrow or buy secondhand.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" imageAlt="marketing" color={color.purple3}>
                    <Heading size={3} template={4}>Marketing</Heading>
                    <p>
                        You will likely focus on word of mouth and referral marketing in the beginning since it’s low cost and can create good buzz around your business.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" imageAlt="software and process" color={color.blue3}>
                    <Heading size={3} template={4}>Software and processes</Heading>
                    <p>
                        Establish the various software and business processes you need to run your new venture in the most efficient, optimized way.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.blue3};
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
    top: 174px;
    width: 100%;
    opacity: 0.5;
    z-index: -1;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default SettingBusiness;
