import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import CupIcon from "../../images/icons/we-know-it-can-be-daunting-to-start-a-brewery-business.inline.svg";
import {color} from "../../components/styles/colors";
import TypeBusiness from "../../atomic/sections/type-of-business/brewery-business/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/brewery-business/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/brewery-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/brewery-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/brewery-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/brewery-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/brewery-business/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/brewery-business/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/brewery-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/brewery-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CkeckText from "../../components/static-check/text-only";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import CircleSvg from "../../images/circle-percentage.inline.svg";
import TabsOvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import {tabs} from "../../static/type-of-business/brewery-business";
import {TabPanel} from "react-tabs";

const GymPersonalTraining = () => (
    <Layout>
        <SEO
            title="How to Start a Brewery Business"
            description="Breweries are one of the most exciting types of businesses to be involved with. You get to create delicious drinks, host a community of people, indulge in the craft of brewing and provide all sorts of additional benefits like a bar, food, music and more."
        />

        <Top ovalColor="sun" imageName="brewery-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Brewery Business</h1>
            <p>Breweries are one of the most exciting types of businesses to be involved with. You get to create
                delicious drinks, host a community of people, indulge in the craft of brewing and provide all sorts of
                additional benefits like a bar, food, music and more.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow
                        content={{url: `${process.env.ORDER_URL}/form-order-now.php`, text: "Start Now"}}/>
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabsWrapper>
            <TabsOval>
                <TabsOvalSvg/>
            </TabsOval>
            <ReactTabs content={tabs}>
                <TabPanel>
                    <PanelWrapper>
                        <Paragraph big>
                            Brewery tourism is on the rise - from beer-centric cities like Portland, Seattle, Denver or
                            Asheville, to places where beer is just another great reason to go there, like Chicago, New
                            York or San Diego. Remember, too, that breweries encompass all sorts of different types of
                            brewing
                            operations - from the traditional craft beer microbrewery to cideries, distilleries or
                            winemakers, there’s a brewery for every style and palate.
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={CupIcon} color={color.green3} curve
                                  curveColor={color.blue1}>
                            <Heading size={2} template={4} left>We know it can be daunting to start a brewery business, and we’re here to
                                help.</Heading>
                            <Paragraph>We’ve supported over 100,000 people to form their business and provided answers,
                                guidance and support to transform them into entrepreneurs. We’ll guide you through what
                                you need to know to start your brewery business.</Paragraph>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                To get you off on the right foot, here’s our simple guide to starting up a successful
                                brewery business. From highlighting important facts to validating your ideas, and from
                                choosing the right structure to learning your options for managing and running your
                                business, you’ll find the
                                answers you need.
                            </Paragraph>
                        </Colorbox>

                        <Paragraph big style={{
                            marginTop: "48px",
                            fontFamily: "Avenir",
                            fontWeight: "900",
                            color: color.black
                        }}>
                            Read on for some insight into creating your own brewery business and becoming an
                            entrepreneur. In this guide we will cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Statistics on why you should start a brewery business</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Choosing the right business structure for your brewery
                                        company</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Deciding if a brewery business could be right for you</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Proving your brewery business can work</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Ideas for the type of brewery business that you could
                                        form</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Where to find brewery business groups, forums and support</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Setting up your canine business, including location, equipment,
                                        employees, taxes, finances, licenses and more</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Setting up your brewery business, including location, equipment,
                                        employees, taxes, finances, licenses and more</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Helpful software for brewery business owners</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Brewery business planning</Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>
                    </PanelWrapper>
                </TabPanel>

                <TabPanel>
                    <PanelWrapper>
                        <Heading size={2} template={3} left>Why You Should Start a Brewery or Microbrewery</Heading>
                        <Paragraph big>So, just how popular are breweries in the U.S.? You’d be surprised.</Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="6,200" text="Number of craft breweries across the U.S."/>
                        <BlueBoxWithAbsoluteText absoluteText="30M"
                                                 text="Barrels of beer breweries collectively produce every year."/>
                        <BlueBoxWithAbsoluteText absoluteText="$25B"
                                                 text="Total worth of beer craft breweries sold every year."/>

                        <CircleWithText textInsideCircle="98"
                                        textLine="Of all U.S. breweries are independently owned craft breweries"
                                        SvgChart={CircleSvg} withBg={true} symbol="%"/>

                        <div style={{marginBottom: "30px", marginTop: "80px"}}>
                            <Adventages headline="Craft beer volumes are growing by 5 percent a year." width="100%"/>
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Millennials are the group most familiar with and most likely to consume craft beer."
                                width="100%"/>
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages headline="Craft breweries employ over 130,000 people." width="100%"/>
                        </div>

                        <Paragraph big>Cideries, distilleries and winemakers have also seen excellent growth and good
                            future business prospects.</Paragraph>
                        <Paragraph big>As you can see, there are plenty of opportunities to start up your own brewery
                            business. We’ll help you be part of that success.</Paragraph>
                    </PanelWrapper>
                </TabPanel>

                <TabPanel>
                    <PanelWrapper>
                        <Heading size={2} template={3} left>Is a Brewery Right for You?</Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Although it can be exciting to form a brewery business, there will be significant demands on
                            you as a small business owner. Here are some of the things you can expect.
                        </Paragraph>

                        <Heading size={3}>A Day in the Life of a Brewery Business Owner</Heading>
                        <Paragraph big>Here are some of the typical tasks you’ll be performing for your brewery business
                            on a daily basis:</Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Checking the status and timings of the latest brews
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Ensuring you have enough beer in stock for customers
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Managing employees and schedules to ensure proper staffing
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Working with product manufacturers, marketers and other organizations
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Making financial decisions, paying bills and reconciling accounts
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Booking music, entertainment and events
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Dealing with inevitable day-to-day problems as they arise
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>Skills Needed by a Brewery Entrepreneur</Heading>
                        <Paragraph big>The following skills will be very useful in your role as a brewery small business
                            owner:</Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You will probably manage staff, so you will need to be a good people manager
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    It’s possible you will interact with the public, so interpersonal skills are
                                    essential
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You will need to conduct market research to learn what to brew and what to sell
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You will need to be prompt and have excellent timekeeping skills
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You will work with product manufacturers on merchandise, glasses, packaging and more
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Marketing is essential to a successful brewery, so expect to spend plenty of time on
                                    that
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Capital expenses can be high, so you’ll need to be a good administrator and
                                    financial manager
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    If you have adjunct businesses like a brewpub, bar or restaurant, you will need to
                                    manage those as well
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>What Your Brewery Customers Are Looking For</Heading>
                        <Paragraph big>Your brewery customers are looking for a variety of unique features in your
                            brewery, including:</Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    A great atmosphere and sense of community
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Fun music and events that they can take part in
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    An excellent selection of styles and flavors of beers or other alcoholic beverages
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Helpful information on the tastes, brewing process and origin of beers
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Friendly and knowledgeable staff to help them choose the right drink
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Unique and distinctive branding and packaging of your beverages
                                </Paragraph>
                            </TextBoxed>
                        </div>
                    </PanelWrapper>
                </TabPanel>
            </ReactTabs>
        </TabsWrapper>

        <TypeBusiness/>

        <ValidatingBusinessIdea/>

        <BusinessPlan/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <InsuranceBusinessSection/>

        <Taxes/>

        <ToolsAndLinks/>

        <Conclusion to={process.env.ORDER_URL + "/form-order-now.php"}
                    buttonTitle="Start your Brewery Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>Although starting a brewery can be tough and requires plenty of money, the rewards can be
                even bigger. Profit margins on beer are typically very good, and with sound financial management, you
                can turn a good brewery into a thriving business.</Paragraph>
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

const TabsWrapper = styled.div`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

const TabsOval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default GymPersonalTraining;
