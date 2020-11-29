import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const MainSkils = () => (
    <WrapperContainer>

        <Oval>
            <OvalSvg />
        </Oval>

        <TextCenterLayout
            headline="What Are the Main Skills, Expertise and Experience to be a Successful Photography Entrepreneur?"
            headlineWidth={770}
            textWidth={770}
            text="If you want to be a successful photographer, the main skills and experience you will need are:"
        />

        <Container>

            <ImageBoxes>
                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing skills</h4>
                    <p>
                        Branding, local advertising, local search-engine optimization, understanding of local businesses and freelance photography job market.
                    </p>
                </TopImageBox>

                <TopImageBox image="business-administration" color={color.yellow3}>
                    <h4>Business management skills</h4>
                    <p>
                        Accounting, financial management, administration and client relationship management.
                    </p>
                </TopImageBox>

                <TopImageBox image="secondary-photography-skills" color={color.blue3}>
                    <h4>Secondary photography skills</h4>
                    <p>
                        Photo editing and manipulation (like Photoshop), post-production skills, etc.
                    </p>
                </TopImageBox>

                <TopImageBox image="specialized-photography-skills-2" color={color.red3}>
                    <h4>Specialized photography skills</h4>
                    <p>
                        You will want extensive training and certification in your chosen area.
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
    bottom: 0;
    opacity: 0.5;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default MainSkils;
