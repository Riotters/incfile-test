import React from "react"
import styled from "styled-components"
import {Panel, Tabs, useTabState} from "@bumaga/tabs"
import OverviewSVG from "../../../../images/icons/social-media-business.inline.svg"
import ArrowSVG from "../../../../images/arrow.inline.svg"
import {Collapse} from "react-collapse"
import VisibilitySensor from "../../../../components/VisibilitySensor"
import LightIcon from "../../../../images/icons/light.inline.svg";
import CalcIcon from "../../../../images/icons/series-is-this-business-for-you.inline.svg";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSVG from "../../../../images/oval-blue-2.inline.svg";
import OvalGreenSVG from "../../../../images/oval-green.inline.svg";
import Container from "../../../../components/container";
import BlueBoxWithAbsoluteText from "../../../molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../../../components/adventages";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import {color} from "../../../atoms/styles/colors"
import {shadow} from "../../../atoms/styles/shadows"
import Colorbox from "../../../../components/color-box";
import {
    AveragePricingFollowerCount,
    AveragePricingNiche
} from "../../../../static/type-of-business/social-media-influencer";
import AveragePricing from "../../../molecules/mixed-blocks/average-pricing";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({children}) => {
    const {isActive, onClick} = useTabState()

    return (
        <ButtonBox
            className={cn("accordion-tab", isActive && "active")}
            onClick={onClick}
        >
            {children}
        </ButtonBox>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 115px;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
  }

  .accordion-panel {
    overflow: hidden;
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${props => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${props => (props.layout !== "grid" ? "40%" : "")};
  }

  @media (min-width: 1200px) {
    max-width: ${props => (props.layout !== "grid" ? "370px" : "")};
  }
`

const Sticky = styled.div`
  display: ${props => (props.layout === "grid" ? "grid" : "flex")};
  flex-direction: ${props => (props.layout !== "grid" ? "column" : "")};
  grid-template-columns: ${props => (props.columns ? `repeat(${props.columns}, 1fr)` : "")};
  grid-gap: ${props => (props.layout === "grid" ? "30px" : "")};
  position: ${props => (props.layout !== "grid" ? "sticky" : "")};
  top: 100px; 
`

const PanelWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 24px;

  h3 {
    margin-bottom: 48px;
  }
`

const ButtonBox = styled.button`
  height: 78px;
  line-height: 78px;
  color: #4e4e4e;
  background: #fff;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 20px 30px 0 #e6e6e6;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 7px;
  border: none;
  z-index: 0;

  &.active {
    box-shadow: 0 40px 80px 0 #e6e6e6;
    font-weight: 600;
    z-index: 1;

    .tabArrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 50px;
  opacity: 0.75;

  @media (min-width: 992px) {
    width: 80px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 24px;
  border-left: 1px solid #f4f4f4;

  span {
    color: #4e4e4e;
    font-family: Avenir;
    font-size: 13px;
    white-space: nowrap;

    @media (min-width: 769px) {
      font-size: 16px;
    }
  }

  .tabArrow {
    opacity: 0;
    transform: translateX(-3px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    svg {
      path {
        fill: #1d1d1d;
      }
    }
  }

  &:hover {
    .tabArrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  margin-right: 10px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: #5088fd;
    }
  }
`

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
    width: 50%;
`;

const Oval = styled.div`
  height: 100%;
  width: 100%;
  max-height: 420px;
  max-width: 420px;
  position: absolute;
  left: 0;
  top: 0;
`

const OvalBottom = styled.div`
  height: 100%;
  width: 100%;
  max-height: 420px;
  max-width: 420px;
  position: absolute;
  right: 0;
  bottom: 0;
`

const PageTabs = ({layout, columns}) => (
    <Wrapper>
        <Oval>
            <OvalSVG/>
        </Oval>
        <OvalBottom>
            <OvalGreenSVG/>
        </OvalBottom>
        <Container>
            <Wrapper layout={layout}>
                <VisibilitySensor partialVisibility once>
                    {({isVisible}) => (
                        <Tabs>
                            <TabsWrapper className={isVisible ? "slideUp enter" : "slideUp"} layout={layout}>
                                <Sticky layout={layout} columns={columns}>
                                    <Tab>
                                        <Icon>
                                            <OverviewSVG/>
                                        </Icon>
                                        <Content>
                                            <span>Social Media Business</span>
                                            <Arrow className="tabArrow">
                                                <ArrowSVG/>
                                            </Arrow>
                                        </Content>
                                    </Tab>
                                    <Tab>
                                        <Icon>
                                            <LightIcon/>
                                        </Icon>
                                        <Content>
                                            <span>Why This Industry</span>
                                            <Arrow className="tabArrow">
                                                <ArrowSVG/>
                                            </Arrow>
                                        </Content>
                                    </Tab>
                                    <Tab>
                                        <Icon>
                                            <CalcIcon/>
                                        </Icon>
                                        <Content>
                                            <span>Is This Business For You?</span>
                                            <Arrow className="tabArrow">
                                                <ArrowSVG/>
                                            </Arrow>
                                        </Content>
                                    </Tab>
                                </Sticky>
                            </TabsWrapper>
                            {/* <Panels> */}
                            <Collapse isOpened={true}>
                                <Panel>
                                    <PanelWrapper
                                        className={
                                            isVisible ? "slideUp enter panel1" : "slideUp panel1"
                                        }
                                        layout={layout}
                                    >
                                        <Heading size={3}>Starting a Business as a Social Media Influencer</Heading>
                                        <Paragraph big>
                                            Social networks like Instagram and YouTube are dominated by influencers
                                            whose followers act as a built-in audience for photogenic or disruptive
                                            brands. And it’s easy to see why — in a digital media landscape that throws
                                            ads at us everywhere we go, some people turn to celebrities and social media
                                            stars for advice on what products they love.
                                        </Paragraph>
                                        <Paragraph big style={{marginBottom: "50px"}}>
                                            The question is, how can you become a social influencer and marketer and
                                            start a business based on the brands and products you share with your
                                            followers? It’s a crowded space, but for those who make it as influencer
                                            marketers, the rewards can be significant. We’ll share information on what
                                            it means to be an influencer, how you can turn that into a business, the
                                            best platforms to use and other useful advice.
                                        </Paragraph>

                                        <Heading size={3} style={{fontSize: "20px"}}>How Social Media Influencer
                                            Marketing Works on Instagram, YouTube and Other Networks</Heading>
                                        <Paragraph big>
                                            Here’s how brands, influencers, social networks and end customers interact
                                            in influencer marketing.
                                        </Paragraph>

                                        <CountingTextBoxed number={1}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Brand or Marketing Agency Finds an Influencer With the Right
                                                    Audience
                                                </Heading>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    Once they understand audience demographics, a brand will look for
                                                    influencers who have that audience. They will explore areas like
                                                    follower counts, the influencer’s interests, the type of posts they
                                                    create and various other factors. They will narrow influencers down
                                                    to a short list and identify those most likely to connect with their
                                                    desired target market.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={2}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Brand Identifies a Product or Service
                                                </Heading>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    Brands have certain products or services that they want to promote
                                                    to audiences that are hard to reach via other means. For example,
                                                    they may have a new clothing line targeted at women between the ages
                                                    of 18 and 22. The brand decides which products they want to promote
                                                    and defines an audience for each one, typically including age,
                                                    gender, location, interests and similar demographics.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={3}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Approach the Influencer and Arrange Terms for Sharing the Product
                                                </Heading>
                                                <Paragraph bottomPadding={0}>
                                                    This is where it gets interesting. Typically, a brand or marketing
                                                    agency will approach individual influencers and discuss terms for
                                                    promoting their products. This will include areas like:
                                                </Paragraph>

                                                <ListWrapper>
                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                How the brand, product or service will be represented
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                Social networks where the influencer will share their
                                                                posts
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                Payment amounts for promoting the brand, product or
                                                                service (on a per post, per purchase, campaign or other
                                                                basis)
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                How often the influencer is expected to post on their
                                                                social media accounts
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                Any hashtags and language that needs to be included in
                                                                posts
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                How the results of the campaign will be tracked
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>
                                                </ListWrapper>
                                            </div>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={4}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Social Media Influencer Posts About the Brand, Product or Service
                                                </Heading>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    After terms have been agreed to, the influencer will create posts to
                                                    promote the brand, product or service. They might use predesigned
                                                    imagery, photograph a product themselves or work with a brand or
                                                    marketing agency on other types of content. Once the posts have been
                                                    created, they are then shared with the audience, typically on a
                                                    predefined timetable.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={5}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Audience Interacts and Buys the Product
                                                </Heading>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    The post is shared with the audience and they purchase the offering
                                                    based on the influencer’s endorsement. The brand or marketing agency
                                                    will track the success of their social media influencer marketing
                                                    campaigns based on the revenue they generate. This helps the brand
                                                    understand their return on investment and which influencers are most
                                                    effective.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                    </PanelWrapper>
                                </Panel>
                                <Panel>
                                    <PanelWrapper className="panel2" layout={layout}>
                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Statistics on the Power of the Social Media Influencer Marketing Industry
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "76px"}}>
                                            Social media influencer marketing has some impressive numbers to
                                            back it up:
                                        </Paragraph>

                                        <BlueBoxWithAbsoluteText absoluteText="1.5M"
                                                                 text="There were over 1.5 million influencer posts on Instagram in 2017."/>
                                        <BlueBoxWithAbsoluteText absoluteText="$2B"
                                                                 text="Worth of influencer marketing industry in 2017, and is expected to be worth $10 billion over the next couple of years."/>
                                        <BlueBoxWithAbsoluteText absoluteText="18-34"
                                                                 text="Almost three-quarters of influencers on Instagram are in the 18-to-34 age range."/>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Even micro-influencers are being sought out by brands, as they see higher levels of engagement than traditional celebrities and other marketing channels."
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Influencer marketing generates a high return on investment for brands and marketing agencies (by as much as 600 percent)."
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Influencer marketing is the fastest growing promotional channel."
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="The influencer marketing industry was worth around $2 billion in 2017 and is expected to be worth $10 billion over the next couple of years."
                                                width="100%"
                                            />
                                        </div>

                                        <Paragraph big style={{marginBottom: "76px"}}>
                                            As you can see, if you’ve got the makings of an influencer marketer, the
                                            size and growth potential of the industry could give you an amazing
                                            opportunity.
                                        </Paragraph>
                                    </PanelWrapper>
                                </Panel>
                                <Panel>
                                    <PanelWrapper className="panel3" layout={layout}>
                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            What It Means to Be a Social Media Influencer on Instagram, YouTube and
                                            Other Networks
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            If this sounds like something you want to be involved with, it’s important
                                            to understand what brands and marketing agencies are looking for. This could
                                            include:
                                        </Paragraph>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="A large follower count (preferably 100,000 followers or more)"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="An active presence across one or more social media networks, especially Instagram, Facebook and YouTube"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="A niche for yourself, whether that’s sharing makeup and fashion tips, reviewing the latest technology or having a strong opinion and viewpoint"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Plenty of interactions from your followers, including onward sharing, likes and favorites"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="An audience that is difficult to reach through traditional marketing channels, like teens and young women"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="A deep, personal connection with your fans and followers"
                                                width="100%"
                                            />
                                        </div>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            How You Will Spend Your Days as a Social Media Influencer
                                        </Heading>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            The main area you’ll be focusing on is creating original content. Your
                                            followers will spot when you’re just sharing generic marketing messages, so
                                            you need to personalize all of your posts. This could involve taking videos
                                            of you using or wearing the product, staging beautiful photography or
                                            creating engaging descriptions and copy.
                                        </Paragraph>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            You’ll need to post regularly as well — not just for the offerings you’re
                                            being paid to promote, but about other aspects of your interests and life.
                                            This helps to keep your followers engaged and encourages more people to
                                            become fans.
                                        </Paragraph>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            You will also be reporting and sharing from others in your social network
                                            and interacting with your followers to build personal connections. You may
                                            also be seeking out marketing deals yourself and contacting agencies and
                                            brands to offer your services.
                                        </Paragraph>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            How Instagram and Other Social Media Influencers Make Money
                                        </Heading>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            Influencers make money because brands and agencies pay them to promote their
                                            products or services. You may get paid in several ways based on multiple
                                            metrics:
                                        </Paragraph>

                                        <Colorbox className="box" color={color.blue3}>
                                            <Heading size={4}>Here’s how social media influencers make money:</Heading>

                                            <ul className="display-list">
                                                <li>
                                                    One time for a single post
                                                </li>
                                                <li>
                                                    Multiple times, for each post you make in a particular influencer
                                                    marketing campaign
                                                </li>
                                                <li>
                                                    A set amount, based on the number of interactions, likes, shares and
                                                    other metrics on your posts
                                                </li>
                                                <li>
                                                    A percentage, based on the revenue generated as a result of your
                                                    audience buying products and services
                                                </li>
                                            </ul>

                                        </Colorbox>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            You should work with the brand or marketing agency to agree on payment terms
                                            that fairly represent the effort you’re putting in and the results they
                                            expect to see. In terms of how much you can make, Instagram broke down the
                                            average of what influencers were charging by follower count and category.
                                            Here’s what they found:
                                        </Paragraph>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            Average Pricing Based on Follower Count
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            {AveragePricingFollowerCount.map((item, index) => {
                                                const rowLenght = AveragePricingFollowerCount.length;

                                                return (
                                                    <AveragePricing key={index} SvgIcon={item.icon} text={item.text}
                                                                    first={(index === 0)}
                                                                    last={(rowLenght === index + 1)}/>
                                                )
                                            })}
                                        </div>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            Average Pricing Based on Niche
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            {AveragePricingNiche.map((item, index) => {
                                                const rowLenght = AveragePricingNiche.length;

                                                return (
                                                    <AveragePricing
                                                        key={index}
                                                        SvgIcon={item.icon}
                                                        text={item.text}
                                                        first={(index === 0)}
                                                        last={(rowLenght === index + 1)}
                                                        backgroundColor={color.orange3}
                                                    />
                                                )
                                            })}
                                        </div>

                                    </PanelWrapper>
                                </Panel>
                            </Collapse>
                            {/* </Panels> */}
                        </Tabs>
                    )}
                </VisibilitySensor>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default PageTabs;
