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
import CkeckText from "../../components/static-check/text-only";
import TextCenterLayout from "../../atomic/partials/heading-left";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../images/icons/identify-your-unique-selling-point.inline.svg";
import LookIcon from "../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import ValidateIcon from "../../images/icons/validate-your-products-and-services.inline.svg"
import TalkIcon from "../../images/icons/talk-to-clients.inline.svg"
import InvolvedIcon from "../../images/icons/get-involved-with-business-communities.inline.svg"
import {color} from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";

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
                        What used to be the purview of craft fairs and market stands can now easily be sold online to a
                        whole new audience.

                    </Paragraph>
                    <Paragraph big style={{marginBottom: "50px"}}>
                        If you want to be a successful Etsy entrepreneur, you need a strong, robust plan for your new
                        business. There’s plenty of competition in the Etsy marketplace, so having a novel approach,
                        creating origina designs and getting proper business discipline in place is essential.
                    </Paragraph>

                    <Heading size={3} style={{marginTop: "48px", fontSize: "20px"}}>Etsy Business formation
                        guide</Heading>
                    <Paragraph big>
                        From validating your business and doing the research to filing your
                        paperwork and running your business, this guide will help you out. Read on
                        for some insight into creating your own life or business coaching company
                        and becoming an entrepreneur who helps people make the best of themselves.
                        In this guide we will cover:
                    </Paragraph>

                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Understanding the world of Etsy
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Paying taxes for your Etsy business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Deciding if you’re ready to start an Etsy business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Hiring employees, managing finances and administering your Etsy business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Planning out your Etsy business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Locating other resources for your Etsy business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Determining the best legal structure for your new organization
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Following various rules and regulations
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    And much more
                                </Paragraph>
                            </CkeckText>
                        </ListBox>
                    </ListWrapper>

                    <Paragraph big>
                        By the time you’ve read through our complete Etsy business guide, you will have all the
                        information you need to set up and manage a thriving crafting business. Let’s get into it.
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

        <BlueContainer>
            <Container>
                <CenterBox>
                    <TextCenterLayout headline="Developing a Plan for Your Etsy Business"/>
                    <Paragraph big>
                        Before you start your business, there are a few key areas you need to focus on. You will need to
                        establish whether there’s a demand for your Etsy products, look at potential benefits and
                        pitfalls, understand how your business finances might look and ensure everything is in order.
                    </Paragraph>
                    <Paragraph big>
                        In short, you need a business plan — here’s how to think about your business idea.
                    </Paragraph>

                    <Heading size={3}>
                        Do Market Research and Validate Your Etsy Products and Services
                    </Heading>

                    <Paragraph big>
                        Before you launch your Etsy business, you need to understand if there’s a demand for what you’re
                        selling. That means carrying out market research and “validating” your products and services.
                        Here’s how to go about it:
                    </Paragraph>
                </CenterBox>

                <GridSectionList>
                    <TextBlockWithImage SvgImage={IdentifyIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            These are the areas that will set you apart from competitors and encourage customers to come
                            to you. You might have better pricing, a higher-quality service, faster delivery, unique
                            products or some other special feature. Be sure to bring this out in what you do.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Carefully review all the possible Etsy sellers who will be competing by selling similar
                            products to you. Look at how they structure their shops, products and pricing. Think about
                            what you could do differently.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={ValidateIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Validate your products and services
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Test whether people will commit to spending real money on what you’re offering before
                            over-committing. Create prototypes of key products and test them in the marketplace to see
                            if they generate interest and sales.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your Etsy products. See if
                            you can identify new trends that you could take advantage of. Get involved in forums where
                            your likely customers are hanging out.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Ask questions about Etsy businesses. You can find links to some excellent discussion groups
                            later in the article.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>

                <CenterBox>
                    <Heading size={3}>
                        Understand Your Etsy Business Model and Financial Projections
                    </Heading>
                    <Paragraph big>
                        All businesses need a business model, which is how you will generate sales, provide services and
                        make money. Think about your business model now, because it’s better to have that in place so
                        you can start acquiring customers and generating revenue from day one.
                    </Paragraph>
                    <Paragraph big>
                        You will also need to look at financial projections for your Etsy business. What are your
                        expected sales and revenues? What is your profitability? How much money will you keep in the
                        business to grow it? How much will you pay yourself? If you can, try to plan your revenue for
                        the next month, three months, year and two years.
                    </Paragraph>
                </CenterBox>
            </Container>
        </BlueContainer>

        <SimpleSection>
            <Container>
                <CenterBox>
                    <Heading>
                        Write a Business Plan for Your Etsy Business
                    </Heading>

                    <Paragraph big>
                        Finally, you should put your business plan together. Business plans do vary slightly, but they should cover the following areas:
                    </Paragraph>

                    <CountingTextBoxed number={1}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An executive summary with the most important points from your business plan
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={2}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Your goals and what you hope to achieve with your coaching business
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={3}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A description of your life or business coaching niche, background information and context
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={4}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A market analysis and likely demand
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={5}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An overview of how your life or business coaching organization is structured
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={6}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Your business model
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={7}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            How you will market and sell your offerings
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={8}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Financial projections, revenue and profitability
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={9}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Appendices
                        </Paragraph>
                    </CountingTextBoxed>

                    <Paragraph big mixed={true} style={{marginTop: "50px"}}>
                        We’ve got the perfect <span style={{color: color.blue1, fontWeight: "bold"}}>guide to writing your business plan.</span>
                    </Paragraph>
                </CenterBox>
            </Container>
        </SimpleSection>
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
    width: 100%;
    
    @media (min-width: 576px) { 
        width: 50%; 
    }
`;

const BlueContainer = styled.section`
    background: rgb(242,246,255);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(250,251,255,1) 100%);
    padding-top: 100px;
    position: relative;
`;

const CenterBox = styled.div`
    width: 100%;
    padding-bottom: 100px;
    
    @media (min-width: 670px) {
        width: 670px;
        margin: 0 auto;
    }
`;

const GridSectionList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 100px;
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 970px) {
        width: 970px;
        margin: 100px auto 0;
    }
`;

const SimpleSection = styled.div`
    padding-top: 100px;
`;

export default EtsyBusiness;
