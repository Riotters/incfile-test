import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import TabsSection from "../../atomic/partials/tabs";
import Colorbox from "../../components/color-box";
import FoodTruckIcon from "../../images/icons/food-truck.inline.svg";
import MegafornIcon from "../../images/icons/megafon.inline.svg";
import {color} from "../../components/styles/colors";
import SvgChart from "../../images/chart.inline.svg";
import TypeBusiness from "../../atomic/sections/type-of-business/food-truck-business/type-business";
import ValidatingBusinessIdea
    from "../../atomic/sections/type-of-business/food-truck-business/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/food-truck-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/food-truck-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/food-truck-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/food-truck-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/food-truck-business/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/food-truck-business/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/food-truck-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/food-truck-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CkeckText from "../../components/static-check/text-only";
import OvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";

const FoodTruckBusiness = () => (
    <Layout>
        <SEO title="How to Start a Food Truck Business"
             description="Starting a food truck can be an excellent introduction to the world of running your own business."/>

        <Top ovalColor="yellow" imageName="food-truck-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Food Truck Business</h1>
            <p>
                Starting a food truck can be an excellent introduction
                to the world of running your own business.
            </p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{url: "/", text: "Start Now"}} />
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabsWrapper>
            <Oval>
                <OvalSvg/>
            </Oval>
            <TabsSection>
                <TabHeading>
                    <TabTitle title="Food Truck" SvgIcon={FoodTruckIcon}/>
                    <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Paragraph big>
                            Food trucks are self-contained ventures that will give you plenty of exposure to essential
                            business skills. From creating a great menu to sourcing ingredients, and preparing meals to
                            making a profit, you’ll need to get up to speed quickly.
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={MegafornIcon} color={color.green3} curve
                                  curveColor={color.green1}>
                            <Heading size={4}>
                                We know it can be daunting to start a food truck business, and we’re here to help.
                            </Heading>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                We’ve supported over 100,000 people to form their business and provided answers,
                                guidance
                                and support to transform them into entrepreneurs. We’ll guide you through what you need
                                to
                                know
                                to start your food truck business and get it off the ground.
                            </Paragraph>
                        </Colorbox>

                        <Paragraph big style={{marginTop: "48px"}}>
                            Read on for some insight into creating your own food truck business and becoming a
                            food-based
                            entrepreneur. In this guide we’ll cover:
                        </Paragraph>

                        <Paragraph big style={{fontFamily: "Avenir", fontWeight: "900", color: color.black}}>
                            Read on for some insight into creating your own gym, fitness center
                            or personal training business and becoming an entrepreneur. In this guide we will cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Food truck business planning
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Food truck business planning
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Deciding whether a food truck business could be right for you
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Groups, forums and support for food truck business owners
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Ideas for the type of food business
                                        you could form
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Helpful software for food truck businesses
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Statistics on why you should start
                                        a food truck business selling meals
                                        to the public
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Setting up your food truck business including location, equipment, employees,
                                        taxes,
                                        finances, licenses and more
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Why You Should Start a Food Truck
                        </Heading>
                        <Paragraph big>
                            Food trucks are incredibly popular. Aside from the initial cost of the food truck and
                            equipment,
                            the barriers to entry are fairly low, which makes them an ideal starting point for
                            food-based
                            entrepreneurs. Here are some statistics on the growth and staying power of food truck
                            businesses:
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "80px"}}>
                            This is why food truck businesses are so exciting — how can you be part of that success?
                            We're
                            here to help you figure that out.
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="4,000"
                                                 text="Approximate number of?food truck businesses in the U.S."/>
                        <BlueBoxWithAbsoluteText absoluteText="$2B"
                                                 text="Estimated worth of food truck industry in the U.S per year."/>
                        <BlueBoxWithAbsoluteText absoluteText="$1000K"
                                                 text="The average startup cost for a food truck business."/>

                        <CircleWithText style={{marginBottom: "80px"}} withBg={true} SvgChart={SvgChart}
                                        textInsideCircle="7" symbol="%"
                                        textLine="Is the annual growth in food truck revenue as a whole"/>

                        <Adventages
                            headline="The most popular types of food trucks are desserts, Central and South American, mixed ethnicity, Greek Mediterranean, Asian and traditional American food like burgers, sandwiches and hot dogs"
                            width="100%"
                        />

                        <Adventages
                            headline="The industry employs around 15,000 people"
                            width="100%"
                        />

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Is Running a Food Truck Business Right for You?
                        </Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Although it can be exciting to form a food truck business, there will
                            be significant demands on you as a small business owner. Here are some of the things you can
                            expect.
                        </Paragraph>

                        <Heading size={3}>
                            A Day in the Life of a Food Truck Owner
                        </Heading>
                        <Paragraph big>
                            Here are some of the typical tasks you’ll be performing for your food truck business on a
                            daily
                            basis.
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Checking you have enough ingredients for all the meals you’re offering and ordering
                                    food
                                    to build up your stock
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Refining your menu so you can make good food at a reasonable cost and sell it for a
                                    profit
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Talking with venue owners and event organizers to see if you can sell food at
                                    certain
                                    locations
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Preparing food before you start your day to reduce preparation time later
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Working long hours to meet diner demands throughout the day and night
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Keeping up to date with all the licenses and permits you need to run
                                    a healthy, hygienic food truck
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Marketing your business through social media and other channels
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Managing your finances so you have enough profits to pay yourself and stay operating
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Maintaining your food truck and equipment so it stays in good repair
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Interacting with members of the public
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Preparing, cooking and serving food
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            Skills Needed When You’re Opening and Operating a Food Truck
                        </Heading>
                        <Paragraph big>
                            The following skills will be very useful in your role as a food truck small business owner:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Inspiration to think up interesting food combinations, flavors and meals
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Good understanding of your ingredients costs, your operating expenses and your
                                    profits
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Strong interpersonal and customer service skills for negotiating venues and serving
                                    food
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Ability to work in a small, confined space for many hours a day
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Excellent administration skills to stay on top of ordering ingredients, managing
                                    cash,
                                    profit margins, getting permits, etc.
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            What Your Food Truck Customers Are Looking For
                        </Heading>
                        <Paragraph big>
                            Although the needs of your food truck customers may vary, they might expect:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Well-prepared, nutritious, wholesome food
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Interesting food served in a new or unusual way
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Exciting and inspirational flavor combinations
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Food that can meet unique dietary needs
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Food “on-the-go” for people who are just grabbing a quick bite
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Paragraph big>
                            Understanding who your customers are and what they want will be a big part of the success of
                            your food truck business.
                        </Paragraph>

                    </PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
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

        <Conclusion to="/" buttonTitle="Start your Foodtrack Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                Find the right niche, and your food truck business could
                be an enormous success. You’ll certainly learn quickly if it’s right for you, and with perseverance you
                can turn a food truck into
                a very profitable venture.
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

const TabsWrapper = styled.section`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px){
      margin-top: 21px;
  }
`;


const Oval = styled.div`
    width: 100%;
    left: 0;
    top: 0px;
    position absolute;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;


export default FoodTruckBusiness;
