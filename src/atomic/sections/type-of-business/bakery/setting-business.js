import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import ContentCenter from "../../../partials/content-center";
import {gradient} from "../../../atoms/styles/colors";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout
                headline="Setting Up Your Bakery Business Operations"
                headlineWidth={770}
                textWidth={770}
                text="Once you've legally created your bakery business, you’ll need to get some other things in place."
            />
        </ContentCenter>

        <Container>

            <ImageBoxes>
                <TopImageBox image="location" imageAlt="Location of your Bakery business" color={color.red3}>
                    <Heading size={3} template={4}>Location Of Your Bakery Business</Heading>
                    <p>
                        The location you choose will depend on the type
                        of bakery you want to run. If you’re only producing baked goods to sell to other businesses, you won’t need a shop front. On the other hand, if you’re selling to the public or operating as a bakery cafe, you’ll need a retail location.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" imageAlt="Equipment for Your Bakery business" color={color.yellow3}>
                    <Heading size={3} template={4}>Equipment For Your Bakery Business</Heading>
                    <p>
                        Bakeries will require specialized equipment. You’ll need a professional kitchen that’s licensed for commercial food production. You’ll need counters, shelf fixtures, display cases and other furniture
                        to show your products. You’ll also require tables and chairs if you want people to eat at your bakery.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" imageAlt="employess" color={color.orange3}>
                    <Heading size={3} template={4}>Employees</Heading>
                    <p>
                        Unless you want to do everything yourself, you’re going to need employees. Bakery owners often work very long hours, and you can’t be making products and service customers at the same time. You’ll need to attract and employ great staff that are well-versed in customer service.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" imageAlt="finance & taxes" color={color.yellow3}>
                    <Heading size={3} template={4}>Finances and taxes</Heading>
                    <p>
                        Unless you want to do everything yourself, you’re going to need employees. Bakery owners often work very long hours, and you can’t be making products and service customers at the same time. You’ll need to attract and employ great staff that are well-versed in customer service.
                    </p>
                </TopImageBox>

                <TopImageBox image="software.png" imageAlt="software and processes" color={color.blue3}>
                    <Heading size={3} template={4}>Software And Processes</Heading>
                    <p>
                        There’s some specialist bakery software out there, and of course you’ll need a point of sale (POS) system. There are many other apps that can help you, see our list at the end of this guide.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" image="Marketing Your Bakery Business" color={color.purple3}>
                    <Heading size={3} template={4}>Marketing</Heading>
                    <p>
                        Marketing will probably be part of your bakery business. At the very least you’ll need signs to attract people in, but you should also look into local advertising, both offline and online. It’s also a good idea to create a website where you can share details and photos of what you bake.
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
    top: 195px;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default SettingBusiness;
