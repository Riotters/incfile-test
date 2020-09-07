import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import ContentCenter from "../../../partials/content-center";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Oval2>
            <OvalSvg2/>
        </Oval2>

        <Container>
            <ContentCenter>
                <TextCenterLayout
                    headline="Setting up Your Handyman Business Operations"
                    headlineWidth="700"
                    textWidth="700"
                    text="Once you've legally created your handyman business, you’ll need to get some other things in place."
                />
            </ContentCenter>

            <ImageBoxes>
                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of Your Handyman Business</h4>
                    <p>
                        Although it’s likely that you can run much of your handyman business from a home office, there are a couple of areas where you may need more space. First, if you’re building items offsite for installation at a client’s home, you’ll need a shop with the right space and tools for whatever you’re working on. Second, if you need to hold materials before using them, you’ll need a storage location. Look into the costs of renting these spaces versus buying them outright for yourself.
                    </p>
                    <br/>
                    <p>
                        Don't forget that if you work from home, you can write off part of your utility and housing costs against your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="providing-products-and-services" color={color.green3}>
                    <h4>Equipment for Your Handyman Business</h4>
                    <p>
                        Like any modern business, you’ll need a computer and a smartphone to help you run your business. In addition to that, you’ll need tools and possibly specialized equipment. Good tools are likely to be a significant portion of your startup budget, whether that’s simple hand tools or large, floor-mounted shop tools for bigger jobs. If you need larger equipment for one-off jobs, you can easily rent them from a local provider so you don’t have the capital cost of buying specialized equipment yourself.
                    </p>
                    <br/>
                    <p>
                        You’ll also need to buy materials for your handyman jobs, although you can build that pricing into your quotes and estimates. If you need a truck or van for your handyman business, you can normally depreciate that against your profits so you pay less tax.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing Your Handyman Business</h4>
                    <p>
                        Marketing will be a huge part of your handyman business. Naturally, you will need an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place. You will probably want to focus most of your attention on local advertising. Look at Google Local listings, Facebook local groups and locally-based social networks like Nextdoor.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        You will need a separate business bank account for your handyman business. You might also want to consider a business credit card. Additionally, you will need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        To begin with, you probably won’t need to hire anyone else for your handyman business, especially if you’re a good administrator. As you get busier, you might want to go into partnership with another handyman, or even train an apprentice.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software</h4>
                    <p>
                        The right software and processes will make running your handyman business much easier. See our list of the best apps and software at the end of this guide.
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
  
  @media (min-width: 1200px) {
        display: block;
  }
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 266px;
    width: 570px;
    display: none;
    
    @media (min-width: 1200px) {
        display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 342px;
    width: 570px;
    display: none;
  
  @media (min-width: 1200px) {
        display: block;
  }
`;

export default SettingBusiness;
