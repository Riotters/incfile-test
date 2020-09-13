import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "gatsby";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <TextCenterLayout
                headline="Setting up Your Teen Business and Business Operations"
                headlineWidth="700"
                text="Once you've legally created your teen business, you’ll need to get some other things in place."
            />
            <ImageBoxes>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location</h4>
                    <p>
                        The location you work from will be defined by the type of teen business you start. Some
                        businesses can be run successfully from home, although others may need a specific location.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Process</h4>
                    <p>
                        The right software and processes will make running your teen business much easier. See our list
                        of the best apps and software at the end of this guide.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing</h4>
                    <p>
                        Marketing to your local neighborhood is much easier than marketing to a broader audience. Spend
                        some time and effort identifying who your audience is and the best channels to reach them. If
                        you’re selling online, you will probably want an awesome website, but you'll also need to get
                        branding, newsletters, digital ads, social media accounts and other channels in place. If you’re
                        selling locally, then signs and flyers should work.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        If you make more than $400 a year (around $8 a week) from your teen business, you will need to
                        keep careful bookkeeping records and file business and personal taxes. Here at Incfile <Link to="/">we can
                        even help you file your taxes</Link>. If you have an LLC, you will also need a separate business bank
                        account.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment</h4>
                    <p>
                        Depending on the type of teen business you run, equipment needs will vary widely.
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

const GreenCurve = styled.div`
    position: absolute;
    right: -115px;
    bottom: -122px;
    width: 115px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 429px;
    width: 100%;
      
    @media (min-width: 570px){
       width: 570px;
    }
`;

export default SettingBusiness;
