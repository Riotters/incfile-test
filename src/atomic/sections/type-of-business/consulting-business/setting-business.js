import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "@reach/router";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <TextCenterLayout
            headline="Set up & Maintain Your Consulting BusinessClub Owners"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your consulting business you’ll need to get some other things in place."
        />

        <Container>
            <ImageBoxes>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <Heading size={3} template={4}>Finances and Taxes</Heading>
                    <p>
                        What kind of bank account will you get? Will you need a <Link to="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024">business credit card</Link>? And how will you pay your business taxes? These are all important things to consider so your consulting business stays in the green. Here at Incfile we can even <Link to="/business-accounting/">help you file your taxes</Link>.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <Heading size={3} template={4}>Marketing</Heading>
                    <p>
                        Do you need to build a website? Should you have a logo designed professionally? Will you need business cards? Consultants rely on projecting an extremely professional persona. It is definitely worth getting high-class personal branding together with a website, logo and business cards.
                    </p>
                </TopImageBox>

                <TopImageBox image="permits-licences" color={color.blue3}>
                    <Heading size={3} template={4}>Marketing</Heading>
                    <p>
                        Running a consulting business comes with certain rules, regulations and legalities you need to be aware of. Incfile can conduct a Business License Research package for you, or you can take the time to do the research yourself.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <Heading size={3} template={4}>Employees</Heading>
                    <p>
                        Do you need to hire employees to help you out? Initially you will likely be a “one-man band,” but later on you may want to hire other consultants or administrators who can help free up your time for billable work.
                    </p>
                </TopImageBox>

                <TopImageBox image="organization-change-02" color={color.green3}>
                    <Heading size={3} template={4}>Processes</Heading>
                    <p>
                        What business processes are you going to use to run your business efficiently and effectively? Since you will likely be advising on processes in other businesses, getting your own processes and methods setup as well as possible will definitely make things easier. In particular, you should focus on your research, note-taking, measurement and analysis capabilities.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <Heading size={3} template={4}>Business maintenance</Heading>
                    <p>
                        Most states require businesses to file an <Link to="/manage-your-company/annual-report/">Annual Report</Link> report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. And, your federal, state, regional and city <Link to="/business-license-research-package/">business licenses and permits</Link> may need to be renewed on a regular basis, typically once a year.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-3" color={color.green3}>
                    <Heading size={3} template={4}>Equipment</Heading>
                    <p>
                        What equipment do you need to manage your consulting business? Will you need a laptop, computer, smartphone or tablet? What about transportation or specialized equipment? Make sure you understand exactly what you need to spend so you can write it off against business expenses. Most consultants will likely just require a computer, smartphone and transportation to their client’s business to begin with.
                    </p>
                </TopImageBox>

                <TopImageBox image="location" color={color.red3}>
                    <Heading size={3} template={4}>Business Location</Heading>
                    <p>
                        Where are you going to run your business from? Will you work from home, get an office, use a shared working space or something else? Most consultants will likely start by working from home. As you get more recognized, you may want to use external offices for client meetups.
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
    top: 195px;
    width: 100%;
    
    @media (min-width: 570px) {
        width: 570px;
    }
`;

export default SettingBusiness;
