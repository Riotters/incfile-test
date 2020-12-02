import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";

import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";

import Accordion from "../../../organisms/accordion/accordion";

import Container from "../../../../components/container";

import BusinessLicenseIcon from "../../../../images/icons/business-licenses-and-permits.inline.svg";
import StateBusinessIcon from "../../../../images/icons/state-business-licenses-and-permits.inline.svg";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import TaxesIcon from "../../../../images/icons/other-taxes.inline.svg";
import FederalBusinessIcon from "../../../../images/icons/federal-business-licenses-and-permits.inline.svg";
import BusinessInsuranceIcon from "../../../../images/icons/business-insurance.inline.svg";
import AgentIcon from "../../../../images/icons/registered-agent.inline.svg";
import MaintainingIcon from "../../../../images/icons/maintaining-your-cleaning-business.inline.svg";
import CalcIcon from "../../../../images/icons/finances-and-your-business.inline.svg";
import BusinessLicensesColoredIcon from "../../../../images/icons/business-licenses-and-permits-colored.inline.svg";
import StateBusinessColoredIcon from "../../../../images/icons/state-business-licenses-and-permits-colored.inline.svg";
import FederalBusinessColoredIcon from "../../../../images/icons/federal-business-licenses-and-permits-colored.inline.svg";
import BusinessInsuranceColoredIcon from "../../../../images/icons/business-insurance-colored.inline.svg";
import AgentColoredIcon from "../../../../images/icons/registered-agent-colored.inline.svg";
import TaxesColoredIcon from "../../../../images/icons/other-taxes-colored.inline.svg";
import MaintainingColoredIcon from "../../../../images/icons/maintaining-your-cleaning-business-colored.inline.svg";
import CalcColoredIcon from "../../../../images/icons/finances-and-your-business-colored.inline.svg";

import { BusinessInsuranceAccordionContent, FinancesAccordionContent, MaintainingAccordionContent, TaxesAccordionContent } from "../../../../static/type-of-business/laundromat";
import VisibilitySensor from "../../../../components/VisibilitySensor";

const ButtonList = [
  {
    title: "Local Business License",
    icon: BusinessLicensesColoredIcon,
    tabId: "local-business",
  },
  {
    title: "State Business License",
    icon: StateBusinessColoredIcon,
    tabId: "state-business",
  },
  {
    title: "Federal Business License",
    icon: FederalBusinessColoredIcon,
    tabId: "federal-business",
  },
  {
    title: "Business Insurance",
    icon: BusinessInsuranceColoredIcon,
    tabId: "business-insurance",
  },
  {
    title: "Registered Agent",
    icon: AgentColoredIcon,
    tabId: "registered-agent",
  },
  {
    title: "Taxes",
    icon: TaxesColoredIcon,
    tabId: "taxes",
  },
  {
    title: "Maintaining Your Business",
    icon: MaintainingColoredIcon,
    tabId: "maintaining",
  },
  {
    title: "Finances",
    icon: CalcColoredIcon,
    tabId: "finance",
  },
];

const TabScrollable = ({ layout, columns }) => {
  const [isActive, setActive] = useState(0);

  const handleClick = (index, elementId) => {
    setActive(index);
    let element = document.getElementById(elementId);

    if (null !== element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Wrapper>
      <Container>
        <Wrapper layout={layout}>
          <TabsWrapper className="slideUp enter" layout={layout}>
            <StickyContainer>
              <Sticky layout={layout} columns={columns}>
                {ButtonList.map((item, index) => {
                  return (
                    <Tab key={index} onClick={() => handleClick(index, item.tabId)} className={`accordian-tab${isActive === index ? " active" : ""}`}>
                      <Icon>
                        <item.icon />
                      </Icon>
                      <Content>
                        <span>{item.title}</span>
                        <Arrow className="tabArrow">
                          <ArrowSVG />
                        </Arrow>
                      </Content>
                    </Tab>
                  );
                })}
              </Sticky>
            </StickyContainer>
          </TabsWrapper>

          <PanelWrapper>
            <Heading size={3}>Rules, Regulations and Laws for Your Laundromat Business</Heading>
            <Paragraph big mixed={true}>
              Of course, along with running a business there are certain rules, regulations and legalities you need to be aware of. We can also help with researching your business licensing needs.
            </Paragraph>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible, ...rest }) => {
                console.log(isVisible, rest);
                if (isVisible) {
                  handleClick(0);
                }
                return (
                  <div id={ButtonList[0].tabId}>
                    <TextBlockWithImage
                      SvgImage={BusinessLicenseIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        Local Business Licenses and Permits
                      </Paragraph>

                      <Paragraph big>Your region, county or city may require you to have licenses or permits to operate a business. Talk to your city’s Chamber of Commerce to learn about your local licensing and permit requirements.</Paragraph>
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible }) => {
                if (isVisible) {
                  handleClick(1);
                }
                return (
                  <div id={ButtonList[1].tabId}>
                    <TextBlockWithImage
                      SvgImage={StateBusinessIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        State Business Licenses and Permits
                      </Paragraph>

                      <Paragraph big mixed={true}>
                        You can find all the information you need about statewide licenses and permits on your state’s Secretary of State website. You can also find those details in our <Link to="/llc-state-information/">state-by-state guides to company formation.</Link> Alternatively, the Small
                        Business Administration website has a <a href="https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" target="_blank" rel="noopener noreferrer">list of licenses and permits by state.</a>
                      </Paragraph>
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible }) => {
                if (isVisible) {
                  handleClick(2);
                }
                return (
                  <div id={ButtonList[2].tabId}>
                    <TextBlockWithImage
                      SvgImage={FederalBusinessIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        Federal Business Licenses and Permits
                      </Paragraph>

                      <Paragraph big>The Small Business Administration provides details of any national or federal licenses and permits you might need.</Paragraph>
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible }) => {
                if (isVisible) {
                  handleClick(3);
                }
                return (
                  <div id={ButtonList[3].tabId}>
                    <TextBlockWithImage
                      SvgImage={BusinessInsuranceIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        Business Insurance
                      </Paragraph>

                      <Paragraph big>Most landscaping businesses should have comprehensive business insurance. There are various types.</Paragraph>

                      <Accordion tab content={BusinessInsuranceAccordionContent} />
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible }) => {
                if (isVisible) {
                  handleClick(4);
                }
                return (
                  <div id={ButtonList[4].tabId}>
                    <TextBlockWithImage
                      SvgImage={AgentIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        Registered Agent
                      </Paragraph>

                      <Paragraph big mixed={true}>
                        All businesses need to have a Registered Agent. These are individuals or other businesses that can accept legal documents on behalf of your landscaping company.
                      </Paragraph>
                      <Paragraph big>
                        Although you can act as your own registered agent, we recommend using a professional service. It ensures there will always be someone available to receive important legal documentation on your behalf and also removes your name and address from the public record.
                      </Paragraph>
                      <Paragraph big mixed={true}>
                        When you incorporate through us, we provide a <Link to="/manage-your-company/registered-agent/">complete Registered Agent service free</Link> for the first year.
                      </Paragraph>
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible }) => {
                if (isVisible) {
                  handleClick(5);
                }
                return (
                  <div id={ButtonList[5].tabId}>
                    <TextBlockWithImage
                      SvgImage={TaxesIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        Taxes
                      </Paragraph>

                      <Paragraph big>Taxes are a fact of life. If you’re in business, there are various ways you will need to file and pay them.</Paragraph>

                      <Accordion tab content={TaxesAccordionContent} />

                      <Paragraph big mixed={true} style={{ marginTop: "48px" }}>
                        As a rule of thumb, we recommend keeping back around a third of your earnings to pay your taxes. We can even prepare and file your tax returns for you.
                      </Paragraph>
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible }) => {
                if (isVisible) {
                  handleClick(6);
                }
                return (
                  <div id={ButtonList[6].tabId}>
                    <TextBlockWithImage
                      SvgImage={MaintainingIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        Maintaining Your Laundromat Business
                      </Paragraph>

                      <Paragraph big>There are certain forms and legalities you need to follow to keep your laundromat business in good standing.</Paragraph>

                      <Accordion tab={0} content={MaintainingAccordionContent} />

                      <Paragraph big mixed={true} style={{ marginTop: "48px" }}>
                        As a rule of thumb, we recommend keeping back around a third of your earnings to pay your taxes. We can even <Link to="/business-accounting/">prepare and file your tax returns for you</Link>.
                      </Paragraph>
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>

            <VisibilitySensor partialVisibility minTopValue={0}>
              {({ isVisible }) => {
                if (isVisible) {
                  handleClick(7);
                }
                return (
                  <div id={ButtonList[7].tabId}>
                    <TextBlockWithImage
                      SvgImage={CalcIcon}
                      textBackgroundColor="transparent"
                      imageBackgroundColor={color.orange2}
                      imageShadowColor={shadow.orange2}
                      imageShadowOpacity={0.5}
                      boxShadow={false}
                      paddingLeft={0}
                      style={{ marginTop: "140px" }}
                      circleShadowY={40}
                      circleShadowBlure={80}
                      width={100}
                      widthUnit="%"
                    >
                      <Paragraph big flex flexAlign={true} style={{ color: color.black, fontWeight: "bold" }} mixed={true}>
                        Finances and Your Laundromat Business
                      </Paragraph>

                      <Paragraph big>You need money to run a successful laundromat business. Here are our tips on staying financially healthy.</Paragraph>

                      <Accordion tab={0} content={FinancesAccordionContent} />
                    </TextBlockWithImage>
                  </div>
                );
              }}
            </VisibilitySensor>
          </PanelWrapper>
        </Wrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 115px;
  position: relative;

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
  position: relative;

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

  h3 {
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    padding-left: 30px;
  }
`;

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

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
  width: 50%;
`;

const StickyContainer = styled.div`
  position: relative;
  height: 100%;
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children, ...props }) => {
  return <ButtonBox {...props}>{children}</ButtonBox>;
};

export default TabScrollable;
