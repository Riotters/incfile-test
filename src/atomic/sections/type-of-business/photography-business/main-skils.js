import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/oval-blue-5.inline.svg";

const MainSkils = () => (
    <WrapperContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Container>
            <TextCenterLayout
                headline="What Are the Main Skills, Expertise and Experience to be a Successful Photography Entrepreneur?"
                headlineWidth="700"
                text="If you want to be a successful photographer, the main skills and experience you will need are:"
            />
            <ImageBoxes>
                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing skills</h4>
                    <p>
                        Establish the various software and business processes you need to run your new venture in the most efficient, optimized way.
                    </p>
                </TopImageBox>

                <TopImageBox image="business-administration" color={color.yellow3}>
                    <h4>Business management skills</h4>
                    <p>
                        You will likely focus on word of mouth and referral marketing in the beginning since it’s low cost and can create good buzz around your business.
                    </p>
                </TopImageBox>

                <TopImageBox image="secondary-photography-skills" color={color.blue3}>
                    <h4>Secondary photography skills</h4>
                    <p>
                        Get the equipment you need to run your business. Ideally you should already have everything you need, but you might be able to beg, borrow or buy secondhand.
                    </p>
                </TopImageBox>

                <TopImageBox image="specialized-photography-skills-2" color={color.red3}>
                    <h4>Specialized photography skills</h4>
                    <p>
                        You will want extensive training and certification
                        in your chosen area.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </WrapperContainer>
);

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
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
    top: 50%;
    
    svg {
        transform: scaleX(-1);
    }
`;

export default MainSkils;
