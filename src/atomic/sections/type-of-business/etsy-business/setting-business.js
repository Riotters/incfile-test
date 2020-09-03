import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/ovals/top-left-transparent-green2.inline.svg";
import ContentCenter from "../../../partials/content-center";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <OvalRight>
            <GreenOval/>
        </OvalRight>

        <Container>
            <ContentCenter>
                <TextCenterLayout
                    headline="Setting up Your Life or Business Coaching Operations"
                    headlineWidth="700"
                    textWidth="700"
                    text="Once you've legally created your Etsy business, you’ll need to get some other things in place. The most obvious first step is to create your Etsy seller account at etsy.com. Etsy will walk you through creating a seller profile, adding your products, and creating store policies, like those for returns and exchanges and customer service. You'll want to have attractive product photos and descriptive listings to help people find your products."
                />
                <TextCenterLayout
                    textWidth="700"
                    text="There are other logistical matters you'll need to consider in order to get your Etsy shop up and running. These include:"
                />
            </ContentCenter>

            <ImageBoxes>
                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of your workshop</h4>
                    <p>
                        Where are you going to create your products and run your business from? Some crafters may have a workshop at home, but remember you will need to store inventory and manage shipping. This can take up a lot of space. As your business grows, you might think about getting a more professional crafting space, complete with an area that's well lit for product photos.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software that Integrates with Etsy</h4>
                    <p>
                        Is there software that can help you manage and market your Etsy business? Some tools integrate with Etsy to help you manage your orders, estimate profits, create email campaigns, manage social media posts, or take better photos. There are also software platforms that help you cross-sell on other platforms, like Facebook. Explore whether these tools can help you run your business more effectively.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing on Etsy</h4>
                    <p>
                        You will need to develop a brand and use digital marketing channels to drive traffic to your Etsy shop. This can include using keyword optimization in your Etsy listings so you show up in results, or it could include email and social media marketing. You also might want to consider paying for Etsy ads to get your listings more views. You'll find lots of great advice on these topics in the "Etsy Business Resources" later in this guide.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment</h4>
                    <p>
                        What equipment do you need to manage your Etsy business? You will need a computer and smartphone at minimum, but you will also require crafting tools, machinery and raw materials. Make sure you account for likely demand and possible waste. Understand exactly what you need to spend so you can write it off against business expenses.
                    </p>

                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        What kind of bank account will you get? Do you need a business credit card? How will you pay your business taxes? These are important questions to consider so your Etsy business stays in the green. Here at Incfile, we can even help you file your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="permits-licences" color={color.babyblue3}>
                    <h4>Life or Business Coach Qualification, Certification and Training</h4>
                    <p>
                        Running an Etsy business comes with certain rules, regulations and legalities you need to be aware of. Incfile offers a Business License Research Package for you or you can take the time to do the research yourself.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Business maintenance</h4>
                    <p>
                        Most states require businesses to file an Annual Report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Your federal, state, regional and city business licenses and permits may need to be renewed on a regular basis, typically once a year.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        To begin with, you probably won’t need to hire anyone else for your life or business coaching
                        business, especially if you’re a good administrator.
                    </p>

                    <GreenCurve>
                        <Curve/>
                    </GreenCurve>
                </TopImageBox>

                <TopImageBox image="organization-change-02" color={color.green3}>
                    <h4>Employees</h4>
                    <p>
                        Make sure you have the right processes in place to understand what your most popular products are and analytics on how your business is doing. Etsy has some built-in analytics that will help you here, but you'll want to make sure you know how to get these reports and that you look at them regularly. Again, you'll find helpful advice on developing these processes in the "Etsy Business Resources" later in this guide.
                        <br /><br />
                        You'll also want to find ways to manage your finances carefully and create your products in a cost-effective manner. Sometimes this can mean searching out cheaper resources for your raw materials, or cutting down on the time it takes to craft each individual item.
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
    left: 0;
    top: 0;
    width: 720px;
    
`;

const OvalRight = styled.div`
    position: absolute;
    right: 0;
    top: 220px;
    width: 720px;
    transform: scaleX(-1);
`;
export default SettingBusiness;
