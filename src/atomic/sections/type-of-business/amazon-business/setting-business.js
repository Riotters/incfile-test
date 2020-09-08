import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "gatsby";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Container>
            <TextCenterLayout
                headline="Setup & Maintain Your Amazon Business"
                headlineWidth="700"
                text="Once you've legally created your Amazon business you’ll need to get some other things in place."
            />
            <ImageBoxes>
                <TopImageBox image="location" color={color.red3}>
                    <h4>Business Location</h4>
                    <p>
                        Where are you going to run your business? Will you work from home, get an office, use a shared
                        working space or something else? In most cases, unless you are planning to store products, it’s
                        best to start an Amazon business from your home.
                    </p>
                </TopImageBox>

                <TopImageBox image="permits-licences" color={color.blue3}>
                    <h4>Permits & Licenses</h4>
                    <p>
                        Running an Amazon business could come with certain rules, regulations and legalities you need to
                        be aware of. Incfile can conduct a <Link to="/">Business License Research</Link> package for
                        you, or you can take
                        the time to do the research yourself.
                    </p>
                    <AbsoluteCurve>
                        <Curve/>
                    </AbsoluteCurve>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances & Taxes</h4>
                    <p>
                        What kind of <Link to="/">bank account</Link> will you get? And how will you pay your business taxes? How do you
                        find the <Link to="/">best business credit card</Link>? These are all important things to consider, so your Amazon
                        business stays in the green. <Link to="/">Check out our quick guide to finances and taxes for Amazon sellers</Link>.
                    </p>
                </TopImageBox>

                <TopImageBox image="organization-change-02" color={color.green3}>
                    <h4>Processes</h4>
                    <p>
                        What business processes are you going to use to run your business efficiently and effectively?
                        You will need efficient processes for managing inventory, dealing with suppliers, ordering
                        stock, looking at competitors and completing market research.
                    </p>

                </TopImageBox>

                <TopImageBox image="side-4" color={color.purple3}>
                    <h4>Equipment</h4>
                    <p>
                        What equipment do you need to manage your Amazon business? Make sure you understand exactly what
                        you need to spend, so you can write it off against business expenses. In most cases, you won’t
                        need any specialized equipment or supplies unless you are planning to ship products yourself.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Business Maintenance</h4>
                    <p>
                        Most states require businesses to file an <Link to="/">Annual Report</Link> report once a year. You will also be
                        expected to pay estimated taxes on what you plan to earn in the current business year. And, your
                        federal, state, regional and city <Link to="/">business licenses and permits</Link> may need to be renewed on a
                        regular basis, typically once a year.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        Do you need to hire employees to help you out? This may change as your business grows, but try
                        to think ahead about what sort of experts you may need.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software</h4>
                    <p>
                        Is there software that can help you manage and market your business? There are dozens of
                        software applications designed specifically to help Amazon sellers. <Link to="/">Here aresome great starting
                        points</Link>.
                    </p>
                </TopImageBox>
            </ImageBoxes>

            <ContentCenter>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{url: "/", text: "Start your business with us, today!"}} />
            </ContentCenter>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
    background: rgb(255,255,255);
    background: ${gradient.blue3};
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
  padding-bottom: 80px;

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
    top: 227px; 
    width: 720px;
    opacity: 0.5;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    top: -153px;
    right: -115px;
    width: 115px;
    display: none;
    transform: rotate(-90deg);
  
    @media (min-width: 1200px){
        display: block;
    }
    
    svg {
        path{
            fill: #d2e0fe;
        }
    }
`;


export default SettingBusiness;
