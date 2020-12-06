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
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import {Heading} from "../../atomic/atoms/typography/heading";
import Adventages from "../../components/adventages";
import TypeBusiness from "../../atomic/sections/type-of-business/restaurant-business/type-business";
import BusinessStructure from "../../atomic/sections/type-of-business/restaurant-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/restaurant-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/restaurant-business/order-now";
import ToolsAndLinks from "../../atomic/sections/type-of-business/restaurant-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Chart from "../../images/chart.inline.svg";
import CkeckText from "../../components/static-check/text-only";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import {color} from "../../atomic/atoms/styles/colors";
import TabOvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import {tabs} from "../../static/type-of-business/restaurant-business";
import {TabPanel} from "react-tabs";

const RestaurantBusiness = () => (
    <Layout>
        <SEO
            title="How to Start a Restaurant Business"
            description="There are very few businesses that customers love more than a great restaurant -a place that brings together friends and family to share delicious food andconversation has a special place in the heart of many patrons."
        />

        <Top
            ovalColor="sun"
            imageName="restaurant-business-main"
            imageAlt="Mr Bulb with seedling"
            headlineWidth={700}
        >
            <h1>How to Start a Restaurant Business</h1>
            <p>
                There are very few businesses that customers love more than a great
                restaurant -a place that brings together friends and family to share
                delicious food and conversation has a special place in the heart of many
                patrons.
            </p>
            <ButtonsBox>
                <Button
                    theme="primary56"
                    marginMD="0 24px 0 0"
                    arrow
                    content={{
                        url: `${process.env.ORDER_URL}/form-order-now.php`,
                        text: "Start your business with us, today!",
                    }}
                />
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabsWrapper>
            <TabOval>
                <TabOvalSvg/>
            </TabOval>
            <ReactTabs content={tabs}>
                <TabPanel>
                    <PanelWrapper>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            If you want to help create that type of magic and loyalty, then
                            starting up a restaurant could be a great idea. Don’t be fooled,
                            though. Running a successful restaurant can be a big challenge,
                            and you’ll have to learn to spin multiple plates. That’s why we’ve
                            put together this guide on your first steps for starting a
                            restaurant business.
                        </Paragraph>

                        <Paragraph
                            big
                            style={{
                                fontFamily: "Avenir",
                                fontWeight: "900",
                                color: color.black,
                            }}
                        >
                            Whatever your idea for a restaurant, turning that vision into a
                            place that creates amazing cuisine and delights your customers is
                            doable with the right approach. In this guide we’ll cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        How you can understand the world of the restaurant business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Information on taxes and finances for your restaurant
                                        business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Choosing the best legal structure for your new organization
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        The best legal structure for your new organization
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Some rules and regulations you will need to follow
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Resources for your restaurant business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Questions you should ask to see if you’re ready to start a
                                        restaurant business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>... and much more</Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>

                        <Paragraph big stule={{marginTop: "48px"}}>
                            By the time you’ve read our complete restaurant business guide,
                            you will have all the information you need to set up and manage a
                            thriving restaurant business. Let’s get into it.
                        </Paragraph>
                    </PanelWrapper>
                </TabPanel>

                <TabPanel>
                    <PanelWrapper>
                        <Heading size={2} template={3} left>
                            Understanding the World of the Restaurant Business
                        </Heading>
                        <Paragraph big>
                            Restaurants are one of the oldest types of businesses. People have
                            always wanted to come together to share food, and the opportunity
                            to try different cuisines and styles is part of a good eatery’s
                            appeal.
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "52px"}}>
                            Restaurants and other food establishments are big business in the
                            U.S. As disposable incomes increase, people choose to spend more
                            money on eating out, with Americans currently spending an average
                            of 5 to 6 percent of their income in restaurants. Here are some
                            other great statistics budding restaurant entrepreneurs might find
                            interesting:
                        </Paragraph>

                        <BlueBoxWithAbsoluteText
                            absoluteText="10%"
                            text="The entire U.S. workforce these businesses employs (around 15 million people)"
                        />
                        <BlueBoxWithAbsoluteText
                            absoluteText="$600B"
                            text="Spent in restaurants every year"
                        />

                        <CircleWithText
                            style={{marginBottom: "48px"}}
                            textInsideCircle="5"
                            textLine="Typical sales growth of the restaurant industry every year"
                            withBg={true}
                            SvgChart={Chart}
                            symbol="%"
                        />

                        <Adventages
                            headline="There are over 1 million restaurants in the U.S."
                            width="100%"
                        />

                        <Adventages
                            headline="Nearly 40,000 new restaurants open in the U.S. every year"
                            width="100%"
                        />

                        <Adventages
                            headline="Three quarters of these are independent restaurants, not chains"
                            width="100%"
                        />

                        <Paragraph big>
                            These statistics make the restaurant industry very attractive to
                            aspiring entrepreneurs, but there are big challenges in opening,
                            running and growing a successful restaurant. Restaurants demand a
                            great deal of work, so expect long hours. Add to that the need for
                            staffing, thin profit margins and intense competition...
                            Restaurants are not a field for the faint-hearted!
                        </Paragraph>
                        <Paragraph big>
                            For those with the discipline, focus and commitment, running a
                            restaurant can be a hugely satisfying experience for you, your
                            staff and your patrons.
                        </Paragraph>
                    </PanelWrapper>
                </TabPanel>
            </ReactTabs>
        </TabsWrapper>

        <TypeBusiness/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <ToolsAndLinks/>

        <Conclusion
            to={process.env.ORDER_URL + "/form-order-now.php"}
            buttonTitle="Start your Restaurant Business with us, today"
        >
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                If you want to start a business that’s going to be a challenge, but also
                comes with a huge reward potential, then running a restaurant could be
                right for you. Through the food and drinks you create, you will bring
                joy into people’s lives and give them a reason to choose your business.
                Over time, you will create a reputation as a truly unique eatery and be
                a place that people seek out to make new memories.
            </Paragraph>
            <Paragraph big>What could be better than that?</Paragraph>
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
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

const TabOval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default RestaurantBusiness;
