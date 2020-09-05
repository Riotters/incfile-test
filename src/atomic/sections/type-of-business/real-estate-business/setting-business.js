import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-left-transparent-green2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";

const SettingBusiness = () => (
    <WrapperContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Oval2>
            <GreenOval />
        </Oval2>

        <Container>
            <TextCenterLayout
                headline="Set up & Maintain Your Real Estate Investment Business"
                headlineWidth="700"
                text="Once you've legally created your real estate investment business, you’ll need to get some other things in place."
            />
            <ImageBoxes>

                <TopImageBox image="permits-licences" color={color.babyblue3}>
                    <h4>Permits & Licenses</h4>
                    <p>
                        Running a real estate business comes with certain rules, regulations and legalities you need to
                        be aware of. Incfile can conduct a Business License Research package for you, or you can take
                        the time to do the research yourself. Check out our blog post on real estate business legalities
                        to follow for more information.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.red3}>
                    <h4>Marketing</h4>
                    <p>
                        Do you need to build a website? Should you have a logo designed professionally? Will you need
                        business cards? Since real estate is such a networking-based business, you'll probably want to
                        develop strong branding and use it on collateral you can hand out at in-person events.
                    </p>
                </TopImageBox>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Business Location</h4>
                    <p>
                        Where are you going to run your business from? Will you work from home, get an office, use a shared working space or something else? Many real estate investors can easily work from home.
                    </p>
                </TopImageBox>

                <TopImageBox image="organization-change-02" color={color.green3}>
                    <h4>Process</h4>
                    <p>
                        What business processes are you going to use to run your business efficiently and effectively? You should come up with good processes for negotiation, managing legal details and more.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software</h4>
                    <p>
                        Is there software that can help you manage and market your business? Real estate investors should focus specifically on scheduling, customer relationship management, project management, document management and task management.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" color={color.yellow3}>
                    <h4>Equipment</h4>
                    <p>
                        What equipment do you need to manage your real estate investment business? What about transportation or specialized equipment? Make sure you understand exactly what you need to spend so you can write it off against business expenses.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Business Maintenance</h4>
                    <p>
                        Most states require businesses to file an Annual Report report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Also, your federal, state, regional and city business licenses and permits may need to be renewed on a regular basis, typically once a year.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        Do you need to hire employees to help you out? Read our 10 must-know tips for hiring for your business.
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
    left: 0;
    top: 0;
    width 720px;
    display: none;
  
    @media (min-width: 1200px) {
       display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: 220px;
    width 720px;
    transform: scaleX(-1);
    display: none;
  
    @media (min-width: 1200px) {
       display: block;
    }
`;

export default SettingBusiness;
