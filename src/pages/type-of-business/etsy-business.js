import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";

const EtsyBusiness = () => (
    <Layout>
        <SEO title="How to Start an Etsy Business"
             description="Etsy has opened up the world of creativity and ecommerce to a whole new generation of entrepreneurs."/>

        <Top ovalColor="yellow" imageName="etsy-bussines" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start an Etsy Business</h1>
            <p>Etsy has opened up the world of creativity and ecommerce to a whole new generation of entrepreneurs.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                    Start Now
                </Button>
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabsSection>
            <TabHeading>
                <TabTitle title="Etsy Business"/>
                <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
            </TabHeading>

            <CollapseWrapper>
                <PanelWrapper>
                    <Heading size={3}>Starting an Etsy Business</Heading>
                    <Paragraph big>
                        What used to be the purview of craft fairs and market stands can now easily be sold online to a whole new audience.

                    </Paragraph>
                    <Paragraph big style={{marginBottom: "50px"}}>
                        If you want to be a successful Etsy entrepreneur, you need a strong, robust plan for your new business. There’s plenty of competition in the Etsy marketplace, so having a novel approach, creating origina designs and getting proper business discipline in place is essential.
                    </Paragraph>

                    <Heading size={3} style={{marginTop: "48px", fontSize: "20px"}}>Etsy Business formation guide</Heading>
                    <Paragraph big>
                        From validating your business and doing the research to filing your
                        paperwork and running your business, this guide will help you out. Read on
                        for some insight into creating your own life or business coaching company
                        and becoming an entrepreneur who helps people make the best of themselves.
                        In this guide we will cover:
                    </Paragraph>
                </PanelWrapper>

                <PanelWrapper>
                    ds2
                </PanelWrapper>

                <PanelWrapper>
                    ds3
                </PanelWrapper>
            </CollapseWrapper>
        </TabsSection>
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export default EtsyBusiness;
