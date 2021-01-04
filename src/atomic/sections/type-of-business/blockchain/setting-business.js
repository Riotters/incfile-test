import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg/>
        </Oval2>

        <TextCenterLayout
            headline="How to Move Your Business to the Blockchain"
            headlineWidth={770}
            textWidth={770}
            text="If you do decide to become a blockchain startup and develop software and applications on a blockchain framework, there are a few steps you’ll need to follow."
        />

        <Container>
            <ImageBoxes>

                <TopImageBox image="ongoing-filling-requirements" color={color.blue3}>
                    <Heading size={3} template={4}>Decide on Exactly What Parts of Your Business, Information, and Technology You Want to Use the
                        Blockchain For</Heading>
                    <p>
                        If you do decide a blockchain solution would work best, it’s important to understand the scope
                        of the solution. Carefully establish exactly what functionality you want to get from the
                        blockchain and create scoping and project documents
                    </p>
                </TopImageBox>

                <TopImageBox image="business-planning-and-funding" color={color.orange3}>
                    <Heading size={3} template={4}>Build Your Blockchain Solution Into Your Business Plan, Costs, Revenues and Profit
                        Estimates</Heading>
                    <p>
                        The choice to move to a blockchain application may affect your costs, revenue and profit
                        margins. Ensure you understand the costs associated with developing a blockchain application and
                        build them into your business model and forecasts.
                    </p>
                </TopImageBox>

                <TopImageBox image="business-plan-tips" color={color.purple3}>
                    <Heading size={3} template={4}>Decide on the Best Framework for Your Blockchain Application</Heading>
                    <p>
                        There are several ways to go about building
                        a blockchain application. You may be able to adapt
                        an existing application and use it for your needs. Alternatively, you can use an established
                        blockchain “protocol” like Ethereum and build an application
                        on top of it. Finally, you could develop your own blockchain protocol and application from
                        scratch. Note that each of these will have significant differences in terms of cost, technical
                        expertise, capabilities and customization options.
                    </p>
                </TopImageBox>

                <TopImageBox image="executive-relationship-and-culture-coaching" color={color.babyblue3}>
                    <Heading size={3} template={4}>
                        Develop the Blockchain Application
                        in Partnership With All Stakeholders
                    </Heading>
                    <p>
                        As you start building a blockchain application and business, ensure you have regular feedback
                        on requirements from all parties that will be using the application. Take their feedback into
                        account when developing the software, so you can create a finished product that’s completely fit
                        for purpose.
                    <br /><br />
                        As you develop your blockchain business, you can refine your business plan and application
                        so it perfectly meets everyone’s needs. That will help your business become a success by making
                        use of this exciting new technology.
                    </p>
                </TopImageBox>

                <TopImageBox image="confirm-that-a-blockchain-application-is-the-best-for-your-need" color={color.blue3}>
                    <Heading size={3} template={4}>Confirm That a Blockchain Application
                        Is the Best Solution for Your Business Needs</Heading>
                    <p>
                        It’s worth spending some time exploring and confirming that a blockchain solution really is the best choice for your startup. Speak to your chief technology officer, consultants, development partners and others to independently verify if a blockchain solution is the right choice, or if something else could work better.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
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

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 394px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 184px;
    width: 100%;
    transform: rotate(180deg);
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default SettingBusiness;
