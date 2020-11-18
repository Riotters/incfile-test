import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
// import { motion } from "framer-motion"
import Container from "../../container";
import ArrowLink from "../../../components/arrow-link";
import CaseSVG from "../../../images/icons/case-orange.inline.svg";
import TypesSVG from "../../../images/icons/types-of-llc.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { Collapse } from "react-collapse";
import { color } from "../../atoms/styles/colors";
import IconSVG from "../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import VisibilitySensor from "../../../components/VisibilitySensor";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }

  .accordion-panel {
    overflow: hidden;
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${(props) => (props.layout !== "grid" ? "40%" : "")};
  }

  @media (min-width: 1200px) {
    max-width: ${(props) => (props.layout !== "grid" ? "370px" : "")};
  }
`;

const Sticky = styled.div`
  display: ${(props) => (props.layout === "grid" ? "grid" : "flex")};
  flex-direction: ${(props) => (props.layout !== "grid" ? "column" : "")};
  grid-template-columns: ${(props) => (props.columns ? `repeat(${props.columns}, 1fr)` : "")};
  grid-gap: ${(props) => (props.layout === "grid" ? "30px" : "")};
  position: ${(props) => (props.layout !== "grid" ? "sticky" : "")};
  top: 100px;
`;

const PanelWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 24px;
`;

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
`;

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
`;

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
`;

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
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  const scrollTop = (l) => {
    const el = document.getElementById(l);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    if (typeof window !== "undefined") {
      window.scrollTo({
        top: offsetPosition,
      });
    }
  };

  return (
    <Button
      className={cn("accordion-tab", isActive && "active")}
      onClick={() => {
        onClick();
        scrollTop("tabs-wrapper");
      }}
    >
      {children}
    </Button>
  );
};

const icons = [<CaseSVG />, <TypesSVG />];

const CCorpTabs = ({ layout, columns, content }) => (
  <Container>
    <Wrapper id="tabs-wrapper" layout={layout}>
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Tabs>
            <TabsWrapper className={isVisible ? "slideUp enter" : "slideUp"} layout={layout}>
              <Sticky layout={layout} columns={columns}>
                {content.panels.map((panel, i) => (
                  <Tab>
                    <Icon>{icons[i]}</Icon>
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
                <PanelWrapper className={isVisible ? "slideUp enter panel1" : "slideUp panel1"} layout={layout}>
                  <Heading size="3">{content.content[0].header}</Heading>
                  <Paragraph big>{content.content[0].text}</Paragraph>
                  <IconTextColorBox color={color.yellow3} Icon={IconSVG} content={content.content[0].box} rounded curve />
                </PanelWrapper>
              </Panel>
              <Panel>
                <PanelWrapper className="panel2" layout={layout}>
                  <Heading size="3">How Is an S Corp Different from a C Corp or an LLC?</Heading>
                  <Paragraph big mixed>
                    Unlike traditional <a href="/what-is-c-corporation/">C Corporations, also called C Corps</a>, the S Corporation is not subject to corporate income taxes. Instead, the S Corporation receives different treatment for tax purposes that is generally more favorable to the business
                    owner. The S Corp is a pass-through entity for tax purposes, similar to the <a href="/limited-liability-company/">LLC</a>. This means that the income generated by an S Corporation will flow through to the personal income tax returns of the shareholders, and the S Corp itself
                    generally does not owe any tax liability.
                  </Paragraph>
                  <Paragraph big>
                    Structuring your business as an S Corp also gives you certain flexibility for managing the ownership of the company. The stock of S Corporations is freely transferable, while the interest (ownership) of LLCs is not. This means that the shareholders of S Corporations can sell
                    their ownership interest without obtaining the approval of the other shareholders.
                  </Paragraph>
                  <Paragraph big mixed>
                    Another area of concern for business owners is reducing their liability for self-employment taxes, and an S Corporation can have an advantage over an LLC in this area as well. To visualize how much an S Corporation can save you in taxes, check out our{" "}
                    <a href="/s-corporation-tax-calculator/" title="S Corporation Tax Calculator">
                      S Corporation Tax Calculator
                    </a>
                    .
                  </Paragraph>
                  <Paragraph big mixed>
                    The compensation (salary and bonuses) of S Corporation shareholders is subject to self-employment tax, but not the profits automatically allocated to them as a shareholder. Depending on how you pay yourself throughout the year, and depending on how your income appears on your
                    personal tax return, you can effectively minimize your tax burden by reducing the amount of your business profits that are subject to self-employment taxes. Talk to your accountant or professional tax advisor about the best way to structure your{" "}
                    <a href="/business-accounting/" title="business earnings for tax purposes">
                      business earnings for tax purposes
                    </a>
                    .
                  </Paragraph>
                  <Paragraph big>Although the S Corporation offers significant tax advantages and ownership flexibility, it is not the right choice for every business. There are a few restrictions as well.</Paragraph>
                  <IconListColorBox
                    color={color.green3}
                    content={{
                      header: "An S Corporation must adhere to the following limitations:",
                      list: ["It may not have more than 100 shareholders.", "It is required to be a domestic business entity.", "The shareholders of the S Corporation must be US Citizens or legal residents of the United States.", "The S Corporation is restricted to only one class of stock."],
                    }}
                    bottomMargin="48"
                    rounded
                  />
                  <Paragraph big>Although the S Corporation offers significant tax advantages and ownership flexibility, it is not the right choice for every business. There are a few restrictions as well.</Paragraph>
                  <Paragraph big mixed>
                    Depending on your long-term business goals – for example, if you want your company to be publicly traded, or if you want to have international shareholders, a C Corporation might be a better choice of business entity, because C Corporations have no limitations on ownership and
                    can offer multiple classes of stock. But if you are a U.S.-based business and are satisfied to work and grow within these limitations, the{" "}
                    <a href="/s-corporation-tax-calculator/" title="S Corporation can save you a lot of money">
                      {" "}
                      S Corporation can save you a lot of money{" "}
                    </a>{" "}
                    and avoid a lot of hassles as your company expands.
                  </Paragraph>
                </PanelWrapper>
              </Panel>
            </Collapse>
            {/* </Panels> */}
          </Tabs>
        )}
      </VisibilitySensor>
    </Wrapper>
  </Container>
);
export default CCorpTabs;
