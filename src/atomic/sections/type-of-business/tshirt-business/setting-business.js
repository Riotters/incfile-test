import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/oval-green-2.inline.svg";
import ContentCenter from "../../../partials/content-center";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <ContentCenter>
                <TextCenterLayout
                    headline="The Next Steps: Running a T-Shirt Business"
                    headlineWidth="700"
                    textWidth="700"
                    text="Once you've legally created your T-shirt business, you’ll need to get some other things in place."
                />
            </ContentCenter>

            <ImageBoxes>
                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of your workshop</h4>
                    <p>
                        If you’re using a print-on-demand service, you should be able to run your business from your home. If you’re printing yourself, you will likely need a warehouse or something similar.
                    </p>
                </TopImageBox>

                <TopImageBox image="permits-licences" color={color.blue3}>
                    <h4>Permits and licenses</h4>
                    <p>
                        Running a T-shirt business comes with certain rules, regulations and legalities you need to be aware of. Incfile offers a Business License Research Package for you, or you can take the time to do the research yourself.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing</h4>
                    <p>
                        Branding and marketing are vital to help you build a distinctive identity. This is one of the areas that you should invest plenty of time and resources into.
                    </p>
                </TopImageBox>

                <TopImageBox image="organization-change-02" color={color.green3}>
                    <h4>Processes</h4>
                    <p>
                        Make sure you understand all your profit margins and get strong analytics in place so you can understand exactly what is and isn’t selling.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        It’s unlikely that you will need to hire employees in the early days of your business. Instead, you might work with freelance designers, marketers and similar.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" color={color.yellow3}>
                    <h4>Equipment</h4>
                    <p>
                        Branding and marketing are vital to help you build a distinctive identity. This is one of the areas that you should invest plenty of time and resources into.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and taxes</h4>
                    <p>
                        What kind of bank account will you get? Do you need a business credit card? How will you pay your business taxes? These are important questions to consider so your T-shirt business stays in the green. Here at Incfile, we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Business maintenance</h4>
                    <p>
                        Most states require businesses to file an Annual Report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Your federal, state, regional and city business licenses and permits may need to be renewed on a regular basis, typically once a year.
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
