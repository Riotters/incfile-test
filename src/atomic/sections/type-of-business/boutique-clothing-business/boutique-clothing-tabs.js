import React from "react"
import styled from "styled-components"
import {Panel, Tabs, useTabState} from "@bumaga/tabs"
import OverviewSVG from "../../../../images/icons/boutique-clothing-business.inline.svg"
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
import MegafonIcon from "../../../../images/icons/megafon.inline.svg";
import {color} from "../../../../components/styles/colors";
import Colorbox from "../../../../components/color-box";

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

const BoutiqueClothingTabs = ({layout, columns}) => (
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
                                            <span>Botique Clothing Business</span>
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
                                        <Heading size={3}>Starting a Botique Clothing Business</Heading>
                                        <Paragraph big>
                                            Rather than selling everyday garments, boutique businesses focus on specific garments, tastes, designs and customers. If you have a unique taste and can curate the perfect collection, you can certainly start a successful retail clothing business.
                                        </Paragraph>
                                        <Paragraph big style={{marginBottom: "50px"}}>
                                            The question is, just where do you start? Here at Incfile, we know the answer, and we’ve shared it with more than 100,000 people who we've helped to form their businesses. Since 2004, we’ve supported retail entrepreneurs just like you, and we’re proud to have been a part of the business revolution.
                                        </Paragraph>

                                        <Heading size={3}>Botique Clothing Business formation guide</Heading>
                                        <Paragraph big>
                                            Here is our simple guide to starting up a successful boutique clothing business. From researching the type of business you can start, through legalities of setting up your boutique and managing your operations, this guide is here to help. Read on for some insight into creating your own boutique business and becoming an entrepreneur. In this guide we will cover:
                                        </Paragraph>

                                        <ListWrapper>
                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        Facts and figures on the success of boutique garment businesses
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        How to choose whether your clothing business should be an LLC or corporation
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        Whether a retail clothing business could be right for you
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        How to start your boutique business with information on equipment, employees, location, permits, finances, taxes and more
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        Groups, forums and support for life or business coaching
                                                        entrepreneurs
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        Ideas for the type of boutique clothing business that you could form
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        Helpful software for boutique clothing business owners
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        Business plans for coaching companies
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        How to validate your clothing business idea
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big>
                                                        Business plans for boutique clothing companies
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>
                                        </ListWrapper>

                                    </PanelWrapper>
                                </Panel>
                                <Panel>
                                    <PanelWrapper className="panel2" layout={layout}>
                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Why You Should Start a New Boutique Clothing Business
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "76px"}}>
                                            Clothing is one of the most popular retail sectors. Here are some surprising statistics:
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
                                            This is why Airbnb businesses are so exciting — how can you be a part of that success? We're here to help you figure that out.
                                        </Paragraph>
                                    </PanelWrapper>
                                </Panel>
                                <Panel>
                                    <PanelWrapper className="panel3" layout={layout}>
                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            An Online Boutique vs. a Brick-and-Mortar Store
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            One of the biggest questions a boutique clothing entrepreneur will need to answer is whether to start a traditional, in-person boutique, an online boutique or a combination of the two. Each of these options has advantages and challenges.
                                        </Paragraph>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Starting a Traditional Brick-and-Mortar Clothing Boutique
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

                                        <CountingTextBoxed number={1}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Marketing for new clients
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={2}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Dealing with inquiries from potential clients
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={3}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Reading the latest research and studies in your field
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={4}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Traveling to meet with clients or having them come to you
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={5}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Holding coaching sessions
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={6}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Writing up coaching sessions
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={7}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Dealing with financials and administration
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={8}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Life coaches: Ongoing training in psychology, counseling and related
                                                fields
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={9}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Life coaches: Researching specific questions or problems your clients
                                                may have
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <CountingTextBoxed number={10}>
                                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                                Business coaches: Learning about the business you’re providing coaching
                                                for, including strategy, financials and the executive team
                                            </Paragraph>
                                        </CountingTextBoxed>

                                        <div style={{marginBottom: "76px"}}>
                                            <CountingTextBoxed number={11} style={{marginBottom: "76px"}}>
                                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                                    Business coaches: Research into the sector or industry of the
                                                    business you’re providing coaching for
                                                </Paragraph>
                                            </CountingTextBoxed>
                                        </div>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            Skills Needed by a Life or Business Coach
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            The following skills will be very useful in your role as a life or business
                                            coach:
                                        </Paragraph>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Excellent interpersonal and influencing skills to talk with and listen to clients"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Powerful analysis and investigative skills to get to the root of an issue"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Good marketing skills to promote your coaching business"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "48px"}}>
                                            <Adventages
                                                headline="Strong administration skills so you can stay on top of your schedule and finances"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "48px"}}>
                                            <Adventages
                                                headline="Strong research skills so you can understand the history and context of the individuals and businesses you’re helping"
                                                width="100%"
                                            />
                                        </div>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            What Your Coaching Clients Are Looking For
                                        </Heading>
                                        <Paragraph big style={{marginBottom: "48px"}}>
                                            Ultimately, people come to a coach because they want to improve their life or business.
                                        </Paragraph>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            What Life Coaching Clients Want
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Properties that match the listings provided by the host"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Dealing with particular issues in their past that are stopping them moving forward"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Helping them come to terms with their existing life circumstances and challenges"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Preparing them for the future and giving them useful tools and techniques"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Reassuring them about how you’ve helped previous clients"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Reassuring them about how you’ve helped previous clients"
                                                width="100%"
                                            />
                                        </div>

                                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                                            What Business Coaching Clients Want
                                        </Heading>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Proven return on investment for business coaching services"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Demonstrated understanding of their business and sector"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Strong expertise in dealing with specific needs (e.g., productivity, management styles, culture or organizational change)"
                                                width="100%"
                                            />
                                        </div>

                                        <div style={{marginBottom: "30px"}}>
                                            <Adventages
                                                headline="Detailed statistics on improvements as a result of business coaching"
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

export default BoutiqueClothingTabs;
