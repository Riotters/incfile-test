import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {Link} from "@reach/router";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <TextCenterLayout
            headline="Set up & Maintain Your Restaurant Business"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your restaurant business, you’ll need to get some other things in place."
        />

        <Container>

            <ImageBoxes>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Business location</h4>
                    <p>
                        This is one of the most important choices for a restaurant owner. You will need to find a
                        location that’s easily accessible, can meet the needs of your staff and guests and that won’t
                        eat into your profit margins too much. Getting your business premises right is one of the most
                        challenging aspects for a new restaurateur.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment and ingredients</h4>
                    <p>
                        Restaurants need a lot of upfront capital outlay on equipment, fixtures, furniture and
                        decoration. From kitchen equipment through to tables, chairs, plates and silverware, you will
                        need to carefully budget everything you spend. Add to that the cost
                        of ingredients, and you will need to keep a tight rein on expenses.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <Paragraph mixed>
                        What kind of bank account will you get? Do you need a <Link to="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024">business credit card</Link>? How will you pay
                        your business taxes? These are important questions to consider so your restaurant business stays
                        in the green. Here at Incfile, we can even <Link to="/business-accounting/">help you file your taxes</Link>.
                    </Paragraph>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        You will need to hire employees throughout your restaurant business. From executive chefs to bar
                        staff and servers to assistant cooks, getting your staff balance right is essential to your
                        success.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing</h4>
                    <p>
                        Your restaurant likely needs its own website, and you will also need to develop a local brand,
                        logo and other marketing collateral. You should engage with local marketing firms who understand
                        your immediate marketplace and can provide advice on getting your name out there.
                    </p>
                </TopImageBox>

                <TopImageBox image="permits-licences" color={color.blue3}>
                    <h4>Permits and licenses</h4>
                    <p>
                        Running a restaurant business comes with certain rules, regulations and legalities you need to
                        be aware of, especially around staff health and safety and food hygiene and preparation. Incfile
                        can conduct
                        a <Link to="business-license-research-package/">Business License Research</Link> package for you, or you can take the time to do the research
                        yourself.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Business maintenance</h4>
                    <p>
                        Most states require businesses to file an <Link to="/manage-your-company/annual-report">Annual Report</Link> report once a year. You will also be
                        expected to pay estimated taxes on what you plan to earn in the current business year. Your
                        federal, state, regional and city <Link to="/business-license-research-package/">business licenses and permits</Link> may need to be renewed on a
                        regular basis, typically once a year.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software</h4>
                    <p>
                        There’s a variety of software products specifically
                        for restaurants that can make managing one much easier. From taking orders to food preparation
                        and point of sale, the right software can make running
                        a restaurant more efficient and cost effective.
                    </p>
                </TopImageBox>
            </ImageBoxes>
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
    top: 134px;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default SettingBusiness;
