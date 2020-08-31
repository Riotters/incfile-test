import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/oval-green-2.inline.svg";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <TextCenterLayout
                headline="Setting up Your Event Planning Business Operations"
                headlineWidth="700"
                text="Once you've legally created your planning business, you’ll need to get some other things in place."
            />
            <ImageBoxes>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing Your Party Planning Business</h4>
                    <p>
                        Marketing will be a huge part of your party or event planning business, and most of your
                        advertising will target local clients. Naturally, you will need
                        an awesome website, but you'll also need to get branding, newsletters, digital ads, social media
                        accounts and other channels in place. Be sure
                        to target your identified niche and promote the unique selling points of your planning business.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment Needed by an Event Planner</h4>
                    <p>
                        You will almost certainly use onsite equipment, fixtures, features and furnishings for your
                        parties and events, or you will rent them as needed. To begin with, you probably won’t need to
                        hold much stock yourself — but it will be helpful to have an excellent idea of what your vendors
                        can provide. You will need equipment for your home office, including a computer, laptop or
                        tablet.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        You will need a separate business bank account
                        for your party planning business. You might also want
                        to consider a business credit card. Additionally, you will need to keep careful bookkeeping
                        records and file business and personal taxes. Here at Incfile
                        we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Process</h4>
                    <p>
                        You will need a separate business bank account
                        for your party planning business. You might also want
                        to consider a business credit card. Additionally, you will need to keep careful bookkeeping
                        records and file business and personal taxes. Here at Incfile
                        we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        To begin with, you probably won’t need to hire anyone else for your event planning business,
                        especially if you’re a good administrator. You will
                        be relying on vendors to provide staff and expertise, including contracting with local temporary
                        staffing businesses to provide workers for events. You will also work with locations like hotels
                        to source employees for parties held on their premises.
                    </p>
                </TopImageBox>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of Your Planning Business</h4>
                    <p>
                        Although you will be arranging parties and events
                        in big locations, it’s likely you can administer and manage your party planning business from
                        home
                        or a shared working space. This is great as it reduces your office costs considerably. Don't
                        forget that if you work from home, you can write off part of your utility and housing costs
                        against your taxes.
                        <br/><br/>
                        If you need to meet with clients, you can go to their home or place of work, hire a meeting room
                        at a local hotel or arrange to meet elsewhere.
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
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 220px;
`;

export default SettingBusiness;
