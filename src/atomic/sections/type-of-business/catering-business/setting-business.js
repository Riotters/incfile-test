import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import ContentCenter from "../../../partials/content-center";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <ContentCenter>
                <TextCenterLayout
                    headline="Set up & Maintain Your Catering Business"
                    headlineWidth="700"
                    textWidth="700"
                    text="Once you've legally created your catering business, you’ll need to get some other things in place."
                />
            </ContentCenter>

            <ImageBoxes>
                <TopImageBox image="location" color={color.red3}>
                    <h4>Business location</h4>
                    <p>
                        Depending on the size of your business, you will need a location with excellent kitchen facilities. It must be easily accessible, should meet the needs of your staff and clients and shouldn’t eat into your profit margins too much.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        You will need to hire employees throughout your catering business. From chefs to serving staff to assistant cooks, getting your staff balance right is essential to your success.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        What kind of bank account will you get? And how will you pay your business taxes? These are all important things to consider so your catering business stays in the green. Here at Incfile, we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="permits-licences" color={color.babyblue3}>
                    <h4>Permits and licenses</h4>
                    <p>
                        Running a catering business comes with certain rules, regulations and legalities you need to be aware of, especially around staff health and safety and food hygiene and preparation. Incfile can conduct a Business License Research package for you, or you can take the time to do the research yourself.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing</h4>
                    <p>
                        Your catering business likely needs its own website, and you will also need to develop a local brand, logo and other marketing collateral. You should engage with local marketing firms who understand your immediate marketplace and can provide advice on getting your name out there.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment and ingredients</h4>
                    <p>
                        Think about the business processes and software that you’re going to use to run your business efficiently and effectively.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software</h4>
                    <p>
                        Your catering business likely needs its own website, and you will also need to develop a local brand, logo and other marketing collateral. You should engage with local marketing firms who understand your immediate marketplace and can provide advice on getting your name out there.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Business maintenance</h4>
                    <p>
                        Most states require businesses to file an Annual Report report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Four federal, state, regional and city business licenses and permits may need to be renewed on a regular basis, typically once a year.
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
    width: 720px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

export default SettingBusiness;
