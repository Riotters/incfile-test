import React from "react";
import Container from "../../../atomic/container";
import TextCenterLayout from "../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../components/top-image-box";
import {color} from "../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../images/green-curve.inline.svg";
import GreenOval from "../../../images/oval-green-2.inline.svg";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <TextCenterLayout
                headline="Setting Up Your Airbnb Business Operations"
                headlineWidth="700"
                text="Once you've legally created your bar or club business you’ll need to get some other things in place."
            />
            <ImageBoxes>
                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finance</h4>
                    <p>
                        You will need a separate business bank account for your Airbnb business. You might also want
                        to consider a business credit card. Additionally, you will also need to keep careful
                        bookkeeping records and file business and personal taxes. Here at Incfile we can even help
                        you file your taxes
                    </p>
                </TopImageBox>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of your Airbnb Business</h4>
                    <p>
                        You can almost certainly administer your Airbnb business from home. This is great as it
                        reduces your office costs considerably. Don't forget that if you work from home, you can
                        write off part of your utility and housing costs against your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="side" color={color.purple3}>
                    <h4>Equipment for Your Airbnb Business</h4>
                    <p>
                        It’s likely that the only equipment you will need to run your Airbnb business is a computer,
                        laptop, tablet or smartphone. Of course, you’ll also need to have supplies on hand for your
                        properties.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        You probably don’t need to hire any employees to help run your Airbnb business, but you’ll
                        likely want to contract with cleaners, maintenance crews or a handyman.
                    </p>

                    <GreenCurve>
                        <Curve/>
                    </GreenCurve>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Processes</h4>
                    <p>
                        The right software and processes will make running your Airbnb business much easier. See our
                        list of the best apps and software at the end of this guide.
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

  @media(min-width: 768px) {
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
