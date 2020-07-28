import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import styled from "styled-components";
import Top from "../../components/partials/sections/top";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import AirBnb1Tabs from "../../fragments/type-of-business/airbnb-1/airbnb-1-tabs";
import Container from "../../atomic/container";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import OkIcon from "../../images/icons/ok.inline.svg";
import {color} from "../../components/styles/colors";
import AirbnbBusinessPlan from "../../fragments/type-of-business/airbnb-1/airbnb-business-plan";
import AirBnB1BusinessStructure from "../../fragments/type-of-business/airbnb-1/business-structure";
import TopImageBox from "../../components/top-image-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import LeftImageRightContent from "../../components/partials/blocks/left-content-right-image";
import BlueContainer from "../../fragments/type-of-business/airbnb-1/blue-container";

const AirBnb1 = () => (
    <Layout>
        <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit"
             description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."/>
        <Top imageName="airbnb" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start an Airbnb</h1>
            <p>Airbnb has only been with us since 2008, but over the last few years,
                it’s turned over half a million people into entrepreneurs.</p>
            <Buttonsbox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                    Start Now
                </Button>
            </Buttonsbox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <AirBnb1Tabs/>

        <BlueContainer />

        <Container>
            <AirbnbBusinessPlan />
        </Container>

        <OrangeContainer>
            <Container>
                <AirBnB1BusinessStructure/>
            </Container>
        </OrangeContainer>

        <GreenContainer>
            <Container>
                <TextCenterLayout
                    headline="Setting Up Your Airbnb Business Operations"
                    headlineWidth="700"
                    text="Once you've legally created your bar or club business you’ll need to get some other things in place."
                />
                <Imageboxes>
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
                    </TopImageBox>

                    <TopImageBox image="software" color={color.blue3}>
                        <h4>Software and Processes</h4>
                        <p>
                            The right software and processes will make running your Airbnb business much easier. See our
                            list of the best apps and software at the end of this guide.
                        </p>
                    </TopImageBox>
                </Imageboxes>
            </Container>
        </GreenContainer>

        <OrderNow>
            <Container>
                <LeftImageRightContent image="after-formation" imageWidth="515" textWidth="570">
                    <h2>The Complete "Start Your Business" Checklist</h2>
                    <p>A Clear and Comprehensive Guide to Starting Your Business the Right Way</p>
                    <Buttonsbox>
                        <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                            Business Checklist
                        </Button>
                    </Buttonsbox>
                </LeftImageRightContent>
            </Container>
        </OrderNow>

        <Container style={{paddingTop: "100px", paddingBottom: "100px"}} width={750}>
            <Heading style={4}>
                Rules, Regulations, and Licenses for Airbnbs
            </Heading>
            <Paragraph big>
                Even though you’re running an Airbnb business, you can’t escape real-world licenses, permits and regulations. You will need to explore local, state and federal licenses and permits, and we can also help out with researching your business licensing needs.
            </Paragraph>
            <Paragraph big>
                It’s also very important to consider local zoning laws, ordinances and permits. Some municipalities don’t allow just anyone to set themselves up as an Airbnb host, and if you do, you could be fined. Check with your local and regional authorities what their requirements are for Airbnb hosts.
            </Paragraph>
        </Container>
    </Layout>
);

const OrderNow = styled.section`
  background-color: ${color.orange3};
  position: relative;
  padding: 64px 0;
`;

const GreenContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,248,243,1) 100%);
    padding-bottom: 100px;
    padding-top: 100px;
`;

const Imageboxes = styled.div`
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

const OrangeContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(254,246,237,1) 100%);
    padding-bottom: 100px;
`;

const Buttonsbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default AirBnb1;
