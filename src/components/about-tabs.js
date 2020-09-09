import React from "react"
import styled from "styled-components"
import { Tabs, Panel, useTabState } from "@bumaga/tabs"
// import { motion } from "framer-motion"
import ArrowLink from "./arrow-link"
import ContentButton from "../atomic/molecules/buttons/button";
import OverviewSVG from "../images/overview.inline.svg"
import WhatIsSVG from "../images/whatis.inline.svg"
import IsRightForYourSVG from "../images/icons/is-right-for-you.inline.svg"
import ProsAndConsSVG from "../images/icons/pros-cos-nonprofit.inline.svg"
import TypeOfEntitySVG from "../images/icons/types-of-entity.inline.svg"
import HeartStatusSVG from "../images/icons/heart-status.inline.svg"
import QuestionSVG from "../images/icons/question.inline.svg"
import ArrowSVG from "../images/arrow.inline.svg"
import { color } from "./styles/colors"
import IconListColorBox from "../atomic/molecules/text-blocks/icon-h4-list-color"
import AcccordionCounting from '../atomic/organisms/accordion/accordion-with-counting'
import NumericBoxedList from '../atomic/organisms/lists/numeric-boxed-list'
import { Collapse } from "react-collapse"
import VisibilitySensor from "./VisibilitySensor"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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

const Button = styled.button`
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

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <Button
      className={cn("accordion-tab", isActive && "active")}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

const icons = [<OverviewSVG/>, <WhatIsSVG/>, <IsRightForYourSVG/>, <ProsAndConsSVG/>, <TypeOfEntitySVG/>, <HeartStatusSVG/>, <QuestionSVG/>]

const AboutTabs = ({layout, columns, content}) => (
  <Wrapper layout={layout}>
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Tabs>
          <TabsWrapper className={isVisible ? "slideUp enter" : "slideUp"} layout={layout}>
            <Sticky layout={layout} columns={columns}>
              {content.panels.map((panel, i) => (
                <Tab>
                <Icon>
                  {icons[i]}
                </Icon>
                <Content>
                  <span>{panel}</span>
                  <Arrow className="tabArrow">
                    <ArrowSVG />
                  </Arrow>
                </Content>
              </Tab>
              ))}
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
                  exempt status. By having tax exempt status, your donations can
                  be recorded by donors as not taxable by both the federal and
                  state government. This is a great incentive to be able to
                  offer your constituents.
                </p>
                <p>
                  People who start nonprofits are driven by passion about a
                  certain cause. Whatever your cause, creating a nonprofit can
                  make a difference. We've provided as much information as you
                  need to know in choosing to incorporate as a nonprofit
                  corporation.
                </p>
                <h3>Save Time and Money. We'll Handle The Paperwork.</h3>
                <ArrowLink>Form your Nonprofit Corporation today</ArrowLink>
              </PanelWrapper>
            </Panel>
            <Panel>
              <PanelWrapper className="panel2" layout={layout}>
                <h3>What Is a Nonprofit Corporation?</h3>
                <p>A nonprofit corporation is an organization whose purpose is something other than making a profit. A nonprofit donates its revenue to achieve a specific goal that benefits the public, instead of distributing it to shareholders. There are over 1.5 million nonprofit organizations registered in the US.</p>
                
                <p>Being a nonprofit does not mean the organization won’t make a profit. Nonprofits can make money, but all of the money must go back into the organization by paying employee salaries, administrative expenses and other overhead costs. No one person or group owns a nonprofit. Assets from a nonprofit can be sold, but it benefits the whole organization rather than individuals.</p>
                <p>While anyone can incorporate as a nonprofit, only those who pass the stringent standards set forth by the government can achieve tax exempt, or 501c3, status. The process of creating incorporation papers is just the first step in becoming a completely recognized nonprofit organization. We discuss the steps to becoming a nonprofit further into this page.</p>
              </PanelWrapper>
            </Panel>

            <Panel>
              <PanelWrapper className="panel2" layout={layout}>
                <h3>{content.content[2].header}</h3>
                <p>{content.content[2].text}</p>
                <IconListColorBox color={color.blue3} content={content.content[2].box} rounded curve curveColor={color.blue1}/>
              </PanelWrapper>
            </Panel>

            <Panel>
              <PanelWrapper className="panel2" layout={layout}>
                <h3>Advantages and Disadvantages of Starting a Nonprofit</h3>
                <p>There are many advantages to becoming a nonprofit. Tax exemption is a major advantage of becoming a 501c3 classified nonprofit. Once an organization is tax-exempt, any charitable donations made by individuals are tax-deductible. A nonprofit can also receive discounts on postage and advertising rates which makes for more efficient operation.</p>
                <p>Another advantage is legal protection, as the founders and members are generally not held personally responsible for a nonprofit’s debts. The legal advantage is available without 501c3 status, as is the benefits that become available for employees, such as health and retirement plans. Furthermore, a nonprofit corporation that formalizes their existence improve the chances for longevity and success because the mission and vision must be clear and achievable.</p>
                <p>There are few disadvantages of becoming a nonprofit. Nonprofits cost money and time to start. Once a nonprofit is started, you must keep excellent records and make sure to file all paperwork yearly. This can be resolved by hiring the proper professionals to handle such details. Since nonprofits are there to serve the public, they are also under greater public scrutiny.</p>
                <h3>Don't get stuck, let us help you navigate the process.</h3>
                <ArrowLink>Form your Nonprofit Corporation today!</ArrowLink>
              </PanelWrapper>
            </Panel>

            <Panel>
              <PanelWrapper className="panel2" layout={layout}>
                <h3>{content.content[5].header}</h3>
                <p>{content.content[5].text}</p>
                <AcccordionCounting content={content.content[5]} tab/>
                <p style={{ marginTop: 48 + "px" }}>Political parties are also eligible for tax exempt status, but do not fall under the standard nonprofit category.</p>
                <ContentButton content={{text: `Download Our Start a Nonprofit Guide`, url: `#`}} theme="primary56" margin="0 auto 0 0" arrow />
              </PanelWrapper>
            </Panel>

            <Panel>
              <PanelWrapper className="panel2" layout={layout}>
                <h3>{content.content[6].header}</h3>
                <p>{content.content[6].text}</p>

                <NumericBoxedList content={content.content[6].items}/>

                <p style={{ marginTop: 48 + "px" }}>All other steps associated with Incorporation apply to the creation of a nonprofit organization, such as paying fees, registering for business locally and <a href="https://www.incfile.com/manage-your-company/tax-id-ein/">applying for your EIN.</a></p>
              </PanelWrapper>
            </Panel>

            <Panel>
              <PanelWrapper className="panel2" layout={layout}>
                <h3>{content.content[7].header}</h3>
                <AcccordionCounting content={content.content[7]} listColor={{ item: `grey6`, dot: `orange1` }} tab/>
              </PanelWrapper>
            </Panel>

          </Collapse>
          {/* </Panels> */}
        </Tabs>
      )}
    </VisibilitySensor>
  </Wrapper>
)
export default AboutTabs
