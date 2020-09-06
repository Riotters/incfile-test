import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";

const SettingBusiness = () => (
    <WrapperContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Oval2>
            <OvalSvg/>
        </Oval2>

        <Container>
            <TextCenterLayout
                headline="Setting up Your Travel Agency Business Operations"
                headlineWidth="700"
                text="Once you've legally created your travel agency business, you’ll need to get some other things in place."
            />
            <ImageBoxes>
                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of Your Travel Agency</h4>
                    <p>
                        Many new tourism entrepreneurs choose to be work-from-home travel agents. In almost all cases
                        this is the right choice, as you will be able to prove out your travel agent business model
                        before investing in separate or shared office space. Don't forget that if you work from home,
                        you can write off part of your utility and housing costs against your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        You will need a separate business bank account
                        for your travel agency business. You might also want to consider a business credit card.
                        Additionally, you will also need to keep careful bookkeeping records and file business and
                        personal taxes. Here at Incfile we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing Your Travel Agency</h4>
                    <p>
                        You can’t spread yourself too thin as an influencer, so it’s important to focus your attention
                        on the right social networks. Brands and marketing agencies are seeking out influencers on
                        Instagram, YouTube, and Facebook. Other networks like Twitter and Pinterest can also be popular
                        for the right niches. We recommend starting on just one or two social media networks and
                        building up your engagement, reputation and follower count.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Processes</h4>
                    <p>
                        The right software and processes will make running your travel agency business much easier. See
                        our list of the best apps and software at the end of this guide. You may also want to look into
                        specialized travel agency software that can integrate with major tourism providers and make
                        planning your itineraries and bookings that much easier.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Use the Right Social Networks</h4>
                    <p>
                        The equipment needed to run a travel agency business is likely to just be a computer and
                        a smartphone. Of course, you will also need to invest in good travel agency software that will
                        make administering your tourism business that much easier.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service"
                             color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        To begin with, you probably won’t need to hire anyone else for your travel agency business,
                        especially if you’re a good administrator.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </WrapperContainer>
);

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 50%, #f2f6ff);
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
    left: 0;
    top: 394px;
    width: 570px;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    bottom: 351px;
    width: 420px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

export default SettingBusiness;
