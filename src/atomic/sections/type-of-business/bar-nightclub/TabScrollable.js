import React, {useState} from "react";
import styled from "styled-components";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";

import Container from "../../../../components/container";
import VisibilitySensor from "../../../../components/VisibilitySensor";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import BusinessLicensesColoredIcon from "../../../../images/icons/business-licenses-and-permits-colored.inline.svg";
import BusinessInsuranceColoredIcon from "../../../../images/icons/business-insurance-colored.inline.svg";
import AgentColoredIcon from "../../../../images/icons/registered-agent-colored.inline.svg";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import CkeckText from "../../../../components/static-check/text-only";
import TextBoxed from "../../../molecules/static-check/circle-checkmark-text-boxed";

const ButtonList = [
    {
        title: "Local Business License",
        icon: BusinessLicensesColoredIcon,
        tabId: "local-business"
    },
    {
        title: "Business Insurance",
        icon: BusinessInsuranceColoredIcon,
        tabId: "business-insurance"
    },
    {
        title: "Agent and taxes",
        icon: AgentColoredIcon,
        tabId: "registered-agent"
    }
];

const TabScrollable = ({layout, columns}) => {
    const [isActive, setActive] = useState(0);

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <Wrapper>
            <Container>
                <Wrapper layout={layout}>
                    <VisibilitySensor partialVisibility once>
                        {({isVisible}) => (
                            <>
                                <TabsWrapper className={isVisible ? "slideUp enter" : "slideUp"} layout={layout}>
                                    <StickyContainer>
                                        <Sticky layout={layout} columns={columns}>
                                            {ButtonList.map((item, index) => {
                                                return (
                                                    <Tab key={index}
                                                         onClick={() => handleClick(index)}
                                                         className={`accordian-tab${isActive === index ? " active" : ""}`}>
                                                        <Icon>
                                                            <item.icon/>
                                                        </Icon>
                                                        <Content>
                                                            <span>{item.title}</span>
                                                            <Arrow className="tabArrow">
                                                                <ArrowSVG/>
                                                            </Arrow>
                                                        </Content>
                                                    </Tab>
                                                );
                                            })}
                                        </Sticky>
                                    </StickyContainer>
                                </TabsWrapper>

                                <PanelWrapper>
                                    <Heading size={3}>Rules, Regulations and Laws for Bars and Clubs</Heading>
                                    <Paragraph big mixed={true}>
                                        Of course, along with running a business there are many rules, regulations and
                                        legalities you need to be aware of.
                                    </Paragraph>
                                    <Paragraph big mixed={true} style={{fontWeight: "bold"}}>
                                        Liquor Licenses, Business Licenses and Permits
                                    </Paragraph>
                                    <Paragraph big mixed={true}>
                                        Required licenses and permits for your bar or club business will vary depending
                                        on where you're operating and what regulations apply.
                                        In general, there are different permits required at the local, state and federal
                                        levels.
                                    </Paragraph>

                                    <CountingTextBoxed number={1}>
                                        <div>
                                            <Paragraph big style={{fontWeight: "bold", marginBottom: 0}}>
                                                Local
                                            </Paragraph>
                                            <Paragraph bottomMargin={0}>
                                                Your region, county or city may require you to have licenses or permits
                                                to
                                                operate a business. Talk to your city’s Chamber of Commerce to learn
                                                about
                                                your local licensing and permit requirements. In particular, you will
                                                need
                                                to understand the laws around serving alcohol and opening hours.
                                            </Paragraph>
                                        </div>
                                    </CountingTextBoxed>

                                    <CountingTextBoxed number={2}>
                                        <div>
                                            <Paragraph big style={{fontWeight: "bold", marginBottom: 0}}>
                                                State
                                            </Paragraph>
                                            <Paragraph bottomMargin={0}>
                                                You can find all the information you need on statewide licenses and
                                                permits
                                                on the website for your Secretary of State. You can find all those
                                                details
                                                in our state-by-state guides to company formation. Alternatively, the
                                                Small
                                                Business Administration website has a list of licenses and permits by
                                                state.
                                            </Paragraph>
                                        </div>
                                    </CountingTextBoxed>

                                    <CountingTextBoxed number={3}>
                                        <div>
                                            <Paragraph big style={{fontWeight: "bold", marginBottom: 0}}>
                                                Federal
                                            </Paragraph>
                                            <Paragraph bottomMargin={0}>
                                                The Small Business Administration provides details of any national
                                                or federal licenses and permits you might need.
                                            </Paragraph>
                                        </div>
                                    </CountingTextBoxed>

                                    <Paragraph big style={{fontWeight: "bold", marginTop: "48px", marginBottom: 0}}>
                                        When researching your licensing requirements, pay very careful attention to the
                                        following areas:
                                    </Paragraph>

                                    <ListWrapper style={{marginTop: "48px"}}>
                                        <ListBox>
                                            <CkeckText>
                                                <Paragraph big>
                                                    Licenses to serve beer, wine or spirits for consumption on the
                                                    premises
                                                </Paragraph>
                                            </CkeckText>
                                        </ListBox>

                                        <ListBox>
                                            <CkeckText>
                                                <Paragraph big>
                                                    Detailed records of all liquor, wine and beer received from
                                                    suppliers
                                                </Paragraph>
                                            </CkeckText>
                                        </ListBox>

                                        <ListBox>
                                            <CkeckText>
                                                <Paragraph big>
                                                    Licenses to prepare and serve food
                                                </Paragraph>
                                            </CkeckText>
                                        </ListBox>

                                        <ListBox>
                                            <CkeckText>
                                                <Paragraph big>
                                                    Zoning requirements for opening a bar or club
                                                </Paragraph>
                                            </CkeckText>
                                        </ListBox>

                                        <ListBox>
                                            <CkeckText>
                                                <Paragraph big>
                                                    Dealing with are the Alcohol and Tobacco Tax and Trade Bureau (TTB)
                                                    and your local Department of Alcoholic Beverage Control (ABC agency)
                                                </Paragraph>
                                            </CkeckText>
                                        </ListBox>

                                        <ListBox>
                                            <CkeckText>
                                                <Paragraph big>
                                                    Licenses that regulate renovations, entertainment, advertising and
                                                    personnel
                                                </Paragraph>
                                            </CkeckText>
                                        </ListBox>
                                    </ListWrapper>

                                    <Heading size={3} style={{marginTop: "120px", marginBottom: "24px"}}>Business
                                        Insurance</Heading>
                                    <Paragraph big mixed={true}>
                                        Most bar or club businesses should have comprehensive business insurance. There
                                        are different types.
                                    </Paragraph>

                                    <CountingTextBoxed number={1}>
                                        <div>
                                            <Paragraph big style={{fontWeight: "bold", marginBottom: 0}}>
                                                Workers compensation insurance
                                            </Paragraph>
                                            <Paragraph bottomMargin={0}>
                                                This insurance provides coverage for job-related illnesses, disabilities
                                                or injuries that affect employees. Regulations for this insurance vary
                                                from state to state. It typically covers areas like medical costs, loss
                                                of earnings, compensation and retraining.
                                            </Paragraph>
                                        </div>
                                    </CountingTextBoxed>
                                    <CountingTextBoxed number={2}>
                                        <div>
                                            <Paragraph big style={{fontWeight: "bold", marginBottom: 0}}>
                                                General liability insurance
                                            </Paragraph>
                                            <Paragraph bottomMargin={0}>
                                                This insurance protects your business from claims due to being sued and
                                                other legalities. This may include injury to members of the public,
                                                property damage, personal liabilities, legal defense and more. It can
                                                help protect your business from financial penalties and bankruptcy; this
                                                will be vital as you will be serving patrons on your premises.
                                            </Paragraph>
                                        </div>
                                    </CountingTextBoxed>

                                    <Heading size={3} style={{marginTop: "120px", marginBottom: "24px"}}>Registered
                                        Agents</Heading>
                                    <Paragraph big mixed={true}>
                                        All businesses need to have a Registered Agent. These are individuals
                                        or other businesses who can accept legal documents on behalf of your bar or club
                                        company.
                                    </Paragraph>

                                    <Paragraph big mixed={true}>
                                        Although you can act as your own Registered Agent, we recommend using a
                                        professional service. It ensures there will always be someone available to
                                        receive important legal documentation on your behalf and also removes your name
                                        and address from the public record.
                                    </Paragraph>

                                    <Paragraph big mixed={true}>
                                        When you incorporate through us, we provide a complete Registered Agent service
                                        free for the first year.
                                    </Paragraph>

                                    <Paragraph big mixed={true} style={{fontWeight: "bold"}}>
                                        Business Taxes for Bars and Clubs
                                    </Paragraph>
                                    <Paragraph big mixed={true}>
                                        Taxes are a fact of life, and if you’re in business there are various ways you
                                        will need to file and pay them.
                                    </Paragraph>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                File with the IRS
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                Let the IRS know you are setting up a business.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                Payroll tax
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                If you pay employees, you will be liable for payroll tax.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                Self-employment tax
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                Unlike employees, the earnings from your business will be taxed under a
                                                self-employment tax (FICA and Medicaid). This is just over 15 percent of
                                                your earnings.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                State tax
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                Most states do have a state income tax. If yours does, you will be taxed
                                                on your earnings as normal. To register for state tax, see your
                                                Secretary of State website.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                Federal income tax
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                You will need to pay income tax on any profits or earnings you take from
                                                your business. In most cases, profits from the business will “flow
                                                through” to your individual tax return and you will be taxed there.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                Sales tax
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                If you’re selling locally, you may also be liable for collecting and
                                                paying sales tax. To register for sales tax, see your Secretary of State
                                                website.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                Corporation tax
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                If you incorporate as a C Corporation, you will also need to pay
                                                corporation tax — you will be taxed both on your profits as a business
                                                and when you extract earnings from your company. This “double taxation”
                                                is one of the reasons we normally recommend LLCs as a good business
                                                structure, since they avoid this.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <TextBoxed style={{marginBottom: "8px"}}>
                                        <div>
                                            <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                                Other taxes
                                            </Paragraph>
                                            <Paragraph style={{marginBottom: 0}}>
                                                In certain circumstances you may need to pay some other types of taxes.
                                                Talk to your accountant to find out what else you may be liable for.
                                            </Paragraph>
                                        </div>
                                    </TextBoxed>

                                    <Paragraph big style={{marginTop: "48px"}}>
                                        As a rule of thumb, we recommend keeping back around a third of your earnings to
                                        pay your taxes. We can prepare and file your tax returns for you.
                                    </Paragraph>
                                </PanelWrapper>
                            </>
                        )}
                    </VisibilitySensor>
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
  padding-top: 100px;

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
  position: relative;

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

const StickyContainer = styled.div`
    position: relative;
    height: 100%;
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({children, ...props}) => {

    return (
        <ButtonBox
            {...props}
        >
            {children}
        </ButtonBox>
    )
};

export default TabScrollable;
