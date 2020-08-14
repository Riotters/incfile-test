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
                                        <Heading size={3} >Starting a Business as a Social Media Influencer</Heading>
                                        <Paragraph big>
                                            Social networks like Instagram and YouTube are dominated by influencers whose followers act as a built-in audience for photogenic or disruptive brands. And it’s easy to see why — in a digital media landscape that throws ads at us everywhere we go, some people turn to celebrities and social media stars for advice on what products they love.
                                        </Paragraph>
                                        <Paragraph big style={{marginBottom: "50px"}}>
                                            The question is, how can you become a social influencer and marketer and start a business based on the brands and products you share with your followers? It’s a crowded space, but for those who make it as influencer marketers, the rewards can be significant. We’ll share information on what it means to be an influencer, how you can turn that into a business, the best platforms to use and other useful advice.
                                        </Paragraph>

                                        <Heading size={3} style={{fontSize: "20px"}}>How Social Media Influencer Marketing Works on Instagram, YouTube and Other Networks</Heading>
                                        <Paragraph big>
                                            Here’s how brands, influencers, social networks and end customers interact in influencer marketing.
                                        </Paragraph>

                                        <CountingTextBoxed number={1}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Brand or Marketing Agency Finds an Influencer With the Right Audience
                                                </Heading>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    Once they understand audience demographics, a brand will look for influencers who have that audience. They will explore areas like follower counts, the influencer’s interests, the type of posts they create and various other factors. They will narrow influencers down to a short list and identify those most likely to connect with their desired target market.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={2}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Brand Identifies a Product or Service
                                                </Heading>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    Brands have certain products or services that they want to promote to audiences that are hard to reach via other means. For example, they may have a new clothing line targeted at women between the ages of 18 and 22. The brand decides which products they want to promote and defines an audience for each one, typically including age, gender, location, interests and similar demographics.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={3}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Approach the Influencer and Arrange Terms for Sharing the Product
                                                </Heading>
                                                <Paragraph bottomPadding={0}>
                                                    This is where it gets interesting. Typically, a brand or marketing agency will approach individual influencers and discuss terms for promoting their products. This will include areas like:
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
                                                                Social networks where the influencer will share their posts
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                Payment amounts for promoting the brand, product or service (on a per post, per purchase, campaign or other basis)
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                How often the influencer is expected to post on their social media accounts
                                                            </Paragraph>
                                                        </CkeckText>
                                                    </div>

                                                    <div>
                                                        <CkeckText>
                                                            <Paragraph big bottomMargin={16}>
                                                                Any hashtags and language that needs to be included in posts
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
                                                    After terms have been agreed to, the influencer will create posts to promote the brand, product or service. They might use predesigned imagery, photograph a product themselves or work with a brand or marketing agency on other types of content. Once the posts have been created, they are then shared with the audience, typically on a predefined timetable.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={5}>
                                            <div>
                                                <Heading size={4} style={{fontSize: "16px"}}>
                                                    Audience Interacts and Buys the Product
                                                </Heading>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    The post is shared with the audience and they purchase the offering based on the influencer’s endorsement. The brand or marketing agency will track the success of their social media influencer marketing campaigns based on the revenue they generate. This helps the brand understand their return on investment and which influencers are most effective.
                                                </Paragraph>
                                            </div>
                                        </CountingTextBoxed>

                                    </PanelWrapper>
                                </Panel>
                                <Panel>
                                    <PanelWrapper className="panel2" layout={layout}>
                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Why You Should Start a New Boutique Clothing Business
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "76px"}}>
                                            Clothing is one of the most popular retail sectors. Here are some surprising
                                            statistics:
                                        </Paragraph>

                                        <BlueBoxWithAbsoluteText absoluteText="$20B"
                                                                 text="Clothing boutiques earn over $20 billion in the U.S. every year"/>
                                        <BlueBoxWithAbsoluteText absoluteText="150K"
                                                                 text="There are over 150,000 boutique clothing businesses in the U.S., employing over 250,000 people"/>
                                        <BlueBoxWithAbsoluteText absoluteText="$700K"
                                                                 text="Worldwide revenue for online clothing is expected to rise to over $700 billion by 2022"/>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="On average, a boutique clothing business earns over $130,000 a year and employs between one and two people"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="The traditional, brick-and-mortar clothing boutique is facing challenges, so more clothing entrepreneurs are selling online"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Worldwide revenue for online clothing is expected to rise to over $700 billion by 2022"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="The average online customer spends between $280 and $300 a year on clothes"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "48px"}}>
                                            <Adventages
                                                headline="Online boutique revenue is expected to grow by around 9 percent a year in the U.S."
                                                width="100%"
                                            />
                                        </div>

                                        <Paragraph big style={{marginBottom: "76px"}}>
                                            This is why Airbnb businesses are so exciting — how can you be a part of
                                            that success? We're here to help you figure that out.
                                        </Paragraph>
                                    </PanelWrapper>
                                </Panel>
                                <Panel>
                                    <PanelWrapper className="panel3" layout={layout}>
                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            An Online Boutique vs. a Brick-and-Mortar Store
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            One of the biggest questions a boutique clothing entrepreneur will need to
                                            answer is whether to start a traditional, in-person boutique, an online
                                            boutique or a combination of the two. Each of these options has advantages
                                            and challenges.
                                        </Paragraph>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Starting a Traditional Brick-and-Mortar Clothing Boutique
                                        </Heading>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            Advantages
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="You get visibility on the street, so passing customers can drop into your clothing store"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="It’s easy to browse a range of clothing quickly so customers can find something they like"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Customers can try on clothing right then to see how they look"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Returns of clothing are likely to be minimal"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="There’s likely to be less competition, depending on where you’re located"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="You can display clothes and create an atmosphere for your boutique to build ambiance"
                                                width="100%"
                                            />
                                        </div>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            Disadvantages
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="Your startup costs will be high as you will need to lease retail space and pay for fixtures, fittings and other expenses for your store"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="Ongoing bills can be high, especially for lighting and heating"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="Staff should be onsite whenever you are open, which means you’ll likely need to pay someone else if you want to take a break or vacation"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="You will need to hold garments in a variety of styles and sizes, which locks up cash flow"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="The traditional clothing boutique business in the U.S. is shrinking at a rate of around 2 percent a year"
                                                width="100%"
                                            />
                                        </div>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Starting an Online Clothing Boutique
                                        </Heading>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            Advantages
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Much lower startup costs, including expenses involved in setting up an ecommerce website, buying inventory and marketing"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Your ongoing expenses will be much lower since you can run an online boutique by yourself"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="The online clothing boutique business is growing"
                                                width="100%"
                                            />
                                        </div>

                                        <Heading size={3} style={{fontSize: "20px", textAlign: "left"}}>
                                            Disadvantages
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="It’s more difficult for potential customers to browse items like they could in a store"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="There’s much more competition for online clothing sales, as they’re not limited by location or geography"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="Because customers can’t try clothing on before they purchase, return rates can be very high (some estimates indicate returns will be around half of what you sell!)"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                circleBackgroundColor={color.red1}
                                                circleBackgroundShadow={shadow.red1}
                                                disadventage={true}
                                                headline="It’s much harder to distinguish yourself online than in a physical location"
                                                width="100%"
                                            />
                                        </div>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            It’s vital to decide on the approach you want to take. The advice we present
                                            in the rest of this guide can apply to either type of clothing boutique, so
                                            please bear in mind the type you want to start when applying it to your own
                                            circumstances.
                                        </Paragraph>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Is a Boutique Right for You?
                                        </Heading>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            Although it can be exciting to form a boutique clothing business, there will be significant demands on you as a small business owner. Here are some of the things you can expect.
                                        </Paragraph>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            A Day in the Life of a Retail Business Owner
                                        </Heading>

                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            Here are some of the typical tasks you’ll be performing for your boutique clothing business on a daily basis.
                                        </Paragraph>

                                        <CountingTextBoxed number={1}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Seek out new clothing and garments that would fit well with your boutique
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={2}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Build your brand and focus on your unique clothing styles
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={3}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Provide advice to customers on clothes that match their personal taste
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={4}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Sell clothing to customers and deal with customer service and returns
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={5}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Handle the marketing for your boutique clothing business
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={6}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Deal with clothing suppliers and distribution of your garments
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={7}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Handle financial and administrative management
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Skills Needed by a Boutique Business Entrepreneur
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            The following skills will be very useful in your role as a boutique clothing small business owner.
                                        </Paragraph>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Ability to research new trends and tastes in the clothing marketplace and garment industry"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="A strong eye for style and branding so you can develop a unique niche for your clothes"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Good insight into customer tastes to help you sell clothes and manage inventory"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "48px"}}>
                                            <Adventages
                                                headline="Financial management acumen so you can price items appropriately and pay bills"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "48px"}}>
                                            <Adventages
                                                headline="Excellent interpersonal skills to help you deal with and sell to customers"
                                                width="100%"
                                            />
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
