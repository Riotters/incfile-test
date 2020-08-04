import React from "react"
import styled from "styled-components"
import {Panel, Tabs, useTabState} from "@bumaga/tabs"
// import { motion } from "framer-motion"
import OverviewSVG from "../../../../images/overview.inline.svg"
import ArrowSVG from "../../../../images/arrow.inline.svg"
import {Collapse} from "react-collapse"
import VisibilitySensor from "../../../../components/VisibilitySensor"
import LightIcon from "../../../../images/icons/light.inline.svg";
import CalcIcon from "../../../../images/icons/calc.inline.svg";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSVG from "../../../../images/oval-blue-2.inline.svg";
import OvalGreenSVG from "../../../../images/oval-green.inline.svg";
import Container from "../../../../components/container";

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

  @media (min-width: 768px) {
    flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
  }

  .accordion-panel {
    overflow: hidden;
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 768px) {
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

  @media (min-width: 768px) {
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

  p {
    margin-bottom: 35px;

    &:nth-child(3) {
      margin-bottom: 24px;
    }
  }

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

    @media (min-width: 768px) {
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

const AirBnb1Tabs = ({layout, columns}) => (
    <Wrapper>
        <Oval>
            <OvalSVG/>
        </Oval>
        <OvalBottom>
            <OvalGreenSVG />
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
                                            <span>Airbnb Business</span>
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
                                        <Heading size={3}>Starting an Airbnb Business</Heading>
                                        <Paragraph big>
                                            The concept of renting out space through Airbnb is relatively
                                            straightforward, but
                                            setting yourself up for success requires a little more work.
                                        </Paragraph>
                                        <Paragraph big style={{marginBottom: "50px"}}>
                                            We don’t think that creating an Airbnb business needs to be daunting, and
                                            we’re here
                                            to help. We’ve supported over 250,000 people to form a business and provided
                                            answers, guidance and support to transform them into entrepreneurs. We’ll
                                            guide you
                                            through what you need to know to start your Airbnb venture and get it off
                                            the
                                            ground.
                                        </Paragraph>
                                        <Heading size={3}>Airbnb Business formation guide</Heading>
                                        <Paragraph big>
                                            From validating your business and doing the research to filing your
                                            paperwork and
                                            running your business, this guide will help you out. Read on for some
                                            insight into
                                            creating your own Airbnb business and becoming an entrepreneur. In this
                                            guide we
                                            will cover:
                                        </Paragraph>

                                        <ListWrapper>
                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Statistics on why you should start an Airbnb business
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Choose the right business structure for your Airbnb company
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        How to find out if an Airbnb business is right for you
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Setting up your Airbnb business including location, equipment,
                                                        employees,
                                                        taxes, finances, licenses and more
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Ideas for the type of Airbnb business that you could form
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Where to find Airbnb business groups, forums and support
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Proving your Airbnb business can work
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Useful online tools for Airbnb business owners
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>

                                            <ListBox>
                                                <CkeckText>
                                                    <Paragraph big bottomMargin={0}>
                                                        Business plans for Airbnb companies
                                                    </Paragraph>
                                                </CkeckText>
                                            </ListBox>
                                        </ListWrapper>

                                    </PanelWrapper>
                                </Panel>
                                <Panel>
                                    <PanelWrapper className="panel2" layout={layout}>
                                        <p>
                                            Incorporating your company is not always an easy process.
                                            Incfile is here to help you decide not only how to
                                            incorporate, but to understand exactly which type of status to
                                            file.
                                        </p>
                                        <p>
                                            Many companies who incorporate are actually charities that do
                                            not intend to make a profit, but rather donate all profits to
                                            another organization. In this case, a charity would want to
                                            incorporate as a nonprofit and, ultimately, apply for tax
                                            exempt status.
                                        </p>

                                        <p>
                                            By having tax exempt status, your donations can be recorded by
                                            donors as not taxable by both the federal and state
                                            government. This is a great incentive to be able to offer your
                                            constituents.
                                        </p>

                                        <p>
                                            People who start nonprofits are driven by passion about a
                                            certain cause. Whatever your cause, creating a nonprofit can
                                            make a difference. We've provided as much information as you
                                            need to know in choosing to incorporate as a nonprofit
                                            corporation.
                                        </p>
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

export default AirBnb1Tabs;
