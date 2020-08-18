import React from "react"
import styled from "styled-components"
import { Tabs, Panel, useTabState } from "@bumaga/tabs"
// import { motion } from "framer-motion"
import Container from "../../container"
import ArrowLink from "../../../components/arrow-link"
import BookSVG from "../../../images/icons/book.inline.svg"
import WrenchSVG from "../../../images/icons/wrench.inline.svg"
import ArrowSVG from "../../../images/arrow.inline.svg"
import { Collapse } from "react-collapse"
import { color } from "../../atoms/styles/colors";
import IconSVG from "../../../images/icons/generally-arrow.inline.svg"
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import VisibilitySensor from "../../../components/VisibilitySensor"
import { Heading } from "../../atoms/typography/heading"
import { Paragraph } from "../../atoms/typography/paragraph"

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

const icons = [<BookSVG />, <WrenchSVG />]

const CCorpTabs = ({layout, columns, content}) => (
    <Container>
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
                        <Heading size="3">{content.content[0].header}</Heading>
                        <Paragraph big>{content.content[0].text}</Paragraph>
                        <IconTextColorBox color={color.orange3} Icon={IconSVG} content={content.content[0].box} bottomMargin="48" rounded curve curveColor={color.yellow1}/>
                        <Paragraph big>{content.content[0].text2}</Paragraph>
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
)
export default CCorpTabs
