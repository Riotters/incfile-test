import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-left-transparent-green2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "gatsby";

const SettingBusiness = () => (
    <WrapperContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Oval2>
            <GreenOval/>
        </Oval2>

        <TextCenterLayout
            headline="Running a Business as a Working Nomad"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your digital nomad business you'll need to get some other things in place."
        />

        <Container>
            <ImageBoxes>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        How will you run your finances while remote? What kind of expat tax breaks do digital nomads
                        get? These are all important things to consider so your digital nomad business stays in the
                        green.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Process</h4>
                    <p>
                        Is there software that can help you manage and market your business? See our list of software at
                        the end of this article for some great starting points.
                    </p>
                </TopImageBox>

                <TopImageBox image="organization-change-02" color={color.green3}>
                    <h4>Process</h4>
                    <p>
                        If you’re running a gym, the location will be vital. You’ll need somewhere that’s easily
                        accessible, with enough space for all the equipment you’ll need and classes you want to run.
                        These types of spaces can be hard to find, so engage a commercial real estate agent who can
                        provide options for renting and leasing space. Remember to take into account specialized needs
                        like flooring for classes, reinforced areas
                        for weights and multiple power points for fitness equipment.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.red3}>
                    <h4>Marketing</h4>
                    <p>
                        Do you need to build a website for your digital nomad business? (We're going to always go with a
                        YES for that one.) Should you have a logo designed professionally? Will you need business cards?
                        Think through a professional brand and pieces that make your business appear official and
                        professional when working remotely.
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

                <TopImageBox image="location" color={color.red3}>
                    <h4>Business Location</h4>
                    <p>
                        Where are you going to run your business from? The joy of being a digital nomad is you can
                        theoretically run it from anywhere, but you'll need to make sure you have all the necessary
                        facilities — an internet connection, somewhere to work from, access to a phone etc.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-3" color={color.orange3}>
                    <h4>Equipment</h4>
                    <p>
                        What equipment do you need to manage your digital nomad business apart from a laptop, computer,
                        smartphone or tablet? What about transportation or specialized equipment? Make sure you
                        understand exactly what you need to spend so you can write it off against business expenses.
                        Grab extras of computer equipment such as chargers because these things are often hard to find
                        or expensive in some international locations.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </WrapperContainer>
);

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.green3};
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
    left: 0;
    top:0px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: 220px;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 720px){
        width: 720px;
    }
`;
export default SettingBusiness;
