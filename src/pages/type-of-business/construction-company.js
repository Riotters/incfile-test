import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../components/partials/sections/top";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import ConstructionIcon from "../../images/icons/construction-company.inline.svg";
import MegafonIcon from "../../images/icons/megafon.inline.svg";
import LightIcon from "../../images/icons/light.inline.svg";
import CalcIcon from "../../images/icons/calc.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import {Heading} from "../../atomic/atoms/typography/heading";
import Colorbox from "../../components/color-box";
import {color} from "../../atomic/atoms/styles/colors";
import CkeckText from "../../components/static-check/text-only";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/static-check/circle-checkmark-text-boxed";
import TypeOfBusiness from "../../atomic/sections/type-of-business/construction-company/type-of-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/construction-company/validating-business";
import BusinessPlan from "../../atomic/sections/type-of-business/construction-company/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/construction-company/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/construction-company/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/construction-company/order-now";
import Regulations from "../../atomic/sections/type-of-business/construction-company/regulations";
import InsuranceBusiness from "../../atomic/sections/type-of-business/construction-company/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/construction-company/taxes";
import UsefulTools from "../../atomic/partials/useful-tools";
import {toolsList} from "../../static/type-of-business/travel-agency";
import Conclusion from "../../atomic/sections/general/conclusion";
import styled from "styled-components";
import ToolsAndLinks from "../../atomic/sections/type-of-business/construction-company/tools";

const ConstructionCompany = () => (
    <Layout>
        <SEO title="How to Start a Travel Agency"
             description="Everyone likes traveling — new horizons, beautiful destinations and unique experiences mean we love packing our bags and spending time away from work and home."/>

        <Top ovalColor="sun" imageName="construction-company" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Construction Company</h1>
            <p>The need for residential, commercial or industrial property
                is constantly growing as the population increases.</p>
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
                <TabTitle title="Construction Company" SvgIcon={ConstructionIcon}/>
                <TabTitle title="Why this industry?" SvgIcon={LightIcon}/>
                <TabTitle title="Is This Business For You?" SvgIcon={CalcIcon}/>
            </TabHeading>

            <CollapseWrapper>
                <PanelWrapper>
                    <Paragraph big style={{marginBottom: "40px"}}>
                        This means there will always be a demand for good builders who can turn an architectural plan
                        into a beautiful structure. If you have the trade skills and the expertise, starting a
                        construction business could be a great way
                        to build a solid future.
                    </Paragraph>

                    <Heading size={3}>
                        There’s plenty of room for specialty construction businesses
                        too, so finding the right building niche will help you get a reputation for specific expertise.
                    </Heading>

                    <Paragraph big style={{marginBottom: "40px"}}>
                        Since construction businesses also tend to be local, if you find an area where there’s a large
                        demand for property, that could give you
                        a significant boost.
                    </Paragraph>

                    <Colorbox className="box" theme="icon" Icon={MegafonIcon} color={color.green3} curve
                              curveColor={color.blue1}>
                        <Heading size={4}>We want to help you get your construction business off the ground.</Heading>

                        <Paragraph bottomMargin={0}>
                            Since 2004, we’ve helped over 100,000 people to become entrepreneurs, starting exciting
                            businesses and bringing their ideas
                            to life. We’ll give you the support, guidance and advice you need
                            to create a business and make it into a success.
                        </Paragraph>

                    </Colorbox>

                    <Heading size={3} style={{fontSize: "20px", marginTop: "48px"}}>
                        From validating your business and doing the research to filing your paperwork and running your business, this guide will help you out.
                    </Heading>

                    <Paragraph big style={{marginBottom: "40px"}}>
                        We’ll talk you through the main things you need to do to get your construction business off of the ground.
                    </Paragraph>

                    <Heading size={3} style={{fontSize: "20px"}}>
                        Read on for some insight into creating your own construction business and becoming an entrepreneur. In this guide we will cover:
                    </Heading>

                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Statistics on why you should start
                                    a construction business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Learning if a construction business could be right for you
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Ideas for the type of construction business that you could form
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    How to validate your construction business idea
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Business plans for construction companies
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Where to find construction business groups, forums and support
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Helpful software for construction business owners
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    How to choose whether your construction business should
                                    be an LLC or corporation
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    How to start your construction business with information
                                    on equipment, employees, location, permits, finance, taxes and more
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                    </ListWrapper>

                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        Why You Should Start a New Construction Business
                    </Heading>

                    <Paragraph big>
                        You might wonder how successful construction businesses are - we’ve got the facts.
                    </Paragraph>

                    <Paragraph big bottomMargin={52}>
                        This is why construction businesses are so exciting - how can you be part of that success? We're here to help you figure that out.
                    </Paragraph>

                    <BlueBoxWithAbsoluteText absoluteText="900B"
                                             text="How to choose whether your construction business should be an LLC or corporation"/>
                    <BlueBoxWithAbsoluteText absoluteText="$1.2T"
                                             text="The U.S. has one of the largest construction markets in the world, with expenditures of over $1.2 trillion"/>
                    <BlueBoxWithAbsoluteText absoluteText="$1.4T"
                                             text="Expected construction expenditures grow by 2021."/>

                    <div style={{marginBottom: "30px", marginTop: "70px"}}>
                        <Adventages
                            headline="The U.S. construction industry is responsible for over 4% of U.S. GDP"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Currently, the majority of growth in the construction industry is in residential building"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Public sector construction saw the slowest growth"
                            width="100%"
                        />
                    </div>
                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        Is a Construction Business Right for You?
                    </Heading>

                    <Paragraph big bottomMargin={52}>
                        Although it can be exciting to form a construction business, there will
                        be significant demands on you as a small business owner. Here are some of the things you can expect.
                    </Paragraph>

                    <Heading size={3}>
                        A Day in the Life of a Construction Business Owner
                    </Heading>

                    <Paragraph big bottomMargin={52}>
                        Here are some of the typical tasks you’ll be performing for your construction business on a daily basis.
                    </Paragraph>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Working with architects and engineers to finalize plans and details
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Coordinating with tradesmen and contractors on specialized services
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Project managing people, resources, materials, timings and deadlines
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Carrying out construction activities yourself
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Troubleshooting issues and problems with the construction process
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "48px"}}>
                        <Paragraph bottomMargin={0}>
                            Purchasing and managing supplies and materials
                        </Paragraph>
                    </TextBoxed>

                    <Heading size={3}>
                        Skills Needed by a Construction Business Entrepreneur
                    </Heading>

                    <Paragraph big bottomMargin={52}>
                        The following skills will be very useful in your role as a construction small business owner.
                    </Paragraph>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Excellent project management skills so you can coordinate the build from beginning to end
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Great interpersonal skills for managing tradesmen, contractors and others
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            An eye for detail to ensure a high-quality outcome
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Good personal construction skills
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed style={{marginBottom: "8px"}}>
                        <Paragraph bottomMargin={0}>
                            Analysis and problem-solving expertise
                        </Paragraph>
                    </TextBoxed>

                </PanelWrapper>
            </CollapseWrapper>
        </TabsSection>

        <TypeOfBusiness/>

        <ValidatingBusinessIdea/>

        <BusinessPlan/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <InsuranceBusiness/>

        <Taxes/>

        <ToolsAndLinks />

        <Conclusion to="/" buttonTitle="Start your Travel Agency Business with us, today">
            <Heading size={3} style={{fontSize: "40px", marginTop: "300px"}}>
                Conclusion
            </Heading>

            <Paragraph big>
                The internet has lowered the barriers to finding the perfect vacation, but many people still need the
                experience and expertise that a great travel agent provides. Find the right niche, get your marketing
                right and you could see huge success as a travel agent.
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

export default ConstructionCompany;
