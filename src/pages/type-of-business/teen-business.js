import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import Tab1Icon from "../../images/icons/teen-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import MegafornIcon from "../../images/icons/megafon.inline.svg";
import {color} from "../../components/styles/colors";
import {Heading} from "../../atomic/atoms/typography/heading";
import Adventages from "../../components/adventages";
import TabsSection from "../../atomic/partials/tabs";
import TypeBusiness from "../../atomic/sections/type-of-business/teen-business/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/teen-business/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/teen-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/teen-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/teen-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/teen-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/teen-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/teen-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/teen-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Image from "../../atomic/atoms/image/image";

const TeenBusiness = () => (
    <Layout>
        <SEO title="How to Start a Teen Business"
             description="The internet has revolutionized business — it has broadened marketplaces, made products and services available to every one and lowered the barriers to starting a successful company. With the right approach and understanding, anyone can become a successful online entrepreneur."/>

        <Top ovalColor="sun" imageName="teen-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Teen Business</h1>
            <p>
                Some entrepreneurs start young, and there are no rules that say
                you need to be in your twenties or older before you start a business.
                If you’re just earning a few dollars a week, there probably aren’t any
                big advantages to creating a formal business right now. But if you’re
                making more than that — or you want other people to take your work seriously - it might be worth going a
                step further.
            </p>
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
                <TabTitle title="Teen Business" SvgIcon={Tab1Icon}/>
                <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon}/>
            </TabHeading>

            <CollapseWrapper>
                <PanelWrapper>
                    <Paragraph big>
                        If you’re too young to form a business yourself, your parents may be able to help. If your state
                        does allow teenagers to register their own company, why not stand out from the crowd and boost
                        your business to the next level?
                    </Paragraph>

                    <Colorbox className="box" theme="icon" Icon={MegafornIcon} color={color.purple3} curve
                              curveColor={color.purple1}>
                        <Heading size={4}>
                            We know it can be daunting to start a teen business, and we’re here to help.
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            We’ve helped over 250,000 people form their business and provided answers, guidance and
                            support to transform them into entrepreneurs.
                        </Paragraph>
                    </Colorbox>

                    <Paragraph big style={{marginTop: "48px"}}>
                        Here is our simple guide to starting up a successful teen business. We’ll share some business
                        ideas that are suitable for kids, teens and students, and let you know how to get your business
                        off the ground. From exploring the types of business you can start to the legalities of setting
                        up your business and the realities of your day-to-day operations, this guide is here to help.
                    </Paragraph>
                    <Paragraph big>
                        Read on for some insight into creating your own teen business and becoming an entrepreneur.
                    </Paragraph>

                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        Why You Should Become a Teen Entrepreneur
                    </Heading>
                    <Paragraph big style={{marginBottom: "52px"}}>
                        You might be surprised at the number of teen businesses out there. Here are some interesting
                        facts:
                    </Paragraph>

                    <div style={{marginBottom: "30px", marginTop: "48px"}}>
                        <Adventages
                            headline="Around a quarter of teenagers work in some capacity"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px", marginTop: "48px"}}>
                        <Adventages
                            headline="Around a quarter of teenagers work in some capacity"
                            width="100%"
                        />
                    </div>

                    <BubblesWrapper>
                        <Bubbles>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-color"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-color"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-color"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-color"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-color"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-color"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4"/>
                            </BubbleImage>
                            <BubbleImage>
                                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4"/>
                            </BubbleImage>
                        </Bubbles>
                        <Text>
                            8 out of 10 teens want to work for themselves
                        </Text>
                    </BubblesWrapper>

                    <Paragraph big>
                        This is why teen businesses are so exciting. So how can you be part of that success? We're here
                        to help you figure that out.
                    </Paragraph>
                </PanelWrapper>

            </CollapseWrapper>
        </TabsSection>

        <TypeBusiness/>

        <ValidatingBusinessIdea/>

        <BusinessPlan/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <Taxes/>

        <ToolsAndLinks/>

        <Conclusion to="/" buttonTitle="Start your Teen Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                The internet has made teen entrepreneurship available
                to everyone. If you can find a great idea, build a niche, develop your reputation and put together a solid business plan, you will have every chance for success.
            </Paragraph>
        </Conclusion>
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

const BubblesWrapper = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 30px;
    margin-bottom: 50px;
`;

const Bubbles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;

const Text = styled.div`
    text-align: center;
    font-family: Avenir-Heavy, sans-serif;
    font-size: 20px;
    color: #1d1d1d;
    max-width: 500px;
    margin: 0 auto;
`;

const BubbleImage = styled.div`
    width: 20%;
    margin-bottom: 40px;
    
    > div{
        width: 74px;
        margin: 0 auto;
        height: 110px;
    }
`;

export default TeenBusiness;
