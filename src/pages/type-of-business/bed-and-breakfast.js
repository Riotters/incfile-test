import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import Tab1Icon from "../../images/icons/bed-and-breakfast.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import TabsSection from "../../atomic/partials/tabs";
import Colorbox from "../../components/color-box";
import QuestionIcon from "../../images/icons/the-question-is-just-where-do-you-start.inline.svg";
import {color} from "../../components/styles/colors";
import TypeBusiness from "../../atomic/sections/type-of-business/bed-and-breakfast/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/bed-and-breakfast/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/bed-and-breakfast/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/bed-and-breakfast/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/bed-and-breakfast/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/bed-and-breakfast/order-now";
import Regulations from "../../atomic/sections/type-of-business/bed-and-breakfast/regulations";
import InsuranceBusiness from "../../atomic/sections/type-of-business/bed-and-breakfast/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/bed-and-breakfast/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/bed-and-breakfast/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CkeckText from "../../components/static-check/text-only";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import CircleSvg from "../../images/circle-graph.inline.svg";
import FurnishingsAndEquipment
    from "../../atomic/sections/type-of-business/bed-and-breakfast/furnishings-and-equipment";
import TabsOvalSvg from "../../images/ovals/top-left-transparent-red3.inline.svg";

const BedAndBreakfast = () => (
    <Layout>
        <SEO title="How to Start a Bed and Breakfast or Hotel Business"
             description="A bookstore is one of the most enduring and traditional types of business you could open. Despite this, there have been plenty of challenges to the bookstore model over the last few years, with the increase in ecommerce, the rise of Amazon and the move toward ebooks."/>

        <Top ovalColor="purple-2" imageName="bed-and-breakfast-main" imageAlt="Mr Bulb with seedling"
             headlineWidth={700}>
            <h1>How to Start a Bed and Breakfast or Hotel Business</h1>
            <p>
                What could be better than creating the perfect location and
                ambiance for people to enjoy their vacation? A bed and breakfast
                or hotel business is a great way to provide a desirable destination
                for travelers and a sustainable income for yourself.
            </p>
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

        <TabsWrapper>
            <TabsOval>
                <TabsOvalSvg/>
            </TabsOval>
            <TabsSection style={{marginTop: "100px"}}>
                <TabHeading>
                    <TabTitle title="Guesthouse or hotel" SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>

                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Paragraph big>
                            We all want to broaden our horizons — and as travel keeps becoming easier, your hotel could
                            be perfectly positioned to take advantage.
                        </Paragraph>
                        <Paragraph big>
                            There’s a lot of thinking that goes into creating a boutique hotel or B&B business. You need
                            to decide the type of B&B experience you want to create, make the day-to-day running as
                            efficient as possible and market yourself to the right vacationers.
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={QuestionIcon} color={color.green3} curve
                                  curveColor={color.blue1}>
                            <Heading size={4}>
                                The question is, just where do you start?
                            </Heading>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                Here at Incfile, we know the answer, and we’ve shared it with more than 100,000 people
                                who we've helped to form their businesses. Since 2004, we’ve supported hospitality
                                entrepreneurs just like you, and we’re proud to have been a part of the bed and
                                breakfast business revolution.
                            </Paragraph>
                        </Colorbox>

                        <Paragraph big style={{marginTop: "72px", marginBottom: "24px", fontFamily: "Avenir-Heavy", color: color.black}}>
                            To get you off on the right foot, here’s our simple guide to starting
                            up a successful bed and breakfast business.
                        </Paragraph>

                        <Paragraph big style={{marginBottom: "72px"}}>
                            From highlighting important facts to validating your ideas, and from choosing the right
                            structure to your options for managing and running your business, you’ll find the answers
                            you need.
                        </Paragraph>

                        <Paragraph big style={{marginBottom: "48px", fontFamily: "Avenir-Heavy", color: color.black}}>
                            Read on for some insight into creating your own bed and breakfast business and becoming an
                            entrepreneur. In this guide we will cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Facts and figures about the success
                                        of bed and breakfast businesses
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Business plans for hotel and B&B companies
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        How to find out if a boutique hotel business is right for you
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Where to find bed and breakfast business groups, forums and support
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        How to validate your bed and breakfast business idea
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        How to validate your bookstore business idea
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Useful online tools for hospitality business owners
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Setting up your hotel business, including location, equipment, employees, taxes,
                                        finances, licenses and more
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        How to choose whether your hospitality business should be an LLC or corporation
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Ideas for opening a hotel business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Why You Should Start a New Bed and Breakfast
                        </Heading>
                        <Paragraph big>
                            You might be wondering just how popular bed and breakfasts are.
                            Is it a growing sector, and can you make money running a boutique hotel? The statistics
                            might surprise you.
                        </Paragraph>
                        <Paragraph big>
                            As you can see, there are plenty of opportunities to start up your own bed and breakfast
                            business. We’ll help you be part of that success.
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="17K"
                                                 text="Number of B&Bs, boutique hotels and inns in the U.S."/>
                        <BlueBoxWithAbsoluteText absoluteText="5%"
                                                 text="Growth of the industry every year"/>
                        <BlueBoxWithAbsoluteText absoluteText="$3B"
                                                 text="Revenue of the industry per year as a whole"/>

                        <CircleWithText styles={{marginBottom: "80px"}} textInsideCircle="44"
                                        textLine="Average occupancy rate of B&Bs in the U.S."
                                        SvgChart={CircleSvg} withBg={true} symbol="%"/>

                        <Adventages
                            headline="The average daily rate for a room is around $150"
                            width="100%"
                        />

                        <Adventages
                            headline="Most B&Bs have between four and eleven rooms, with six being the average"
                            width="100%"
                        />

                        <Adventages
                            headline="The most popular locations for bed and breakfasts (in descending order) are small villages, rural locations and urban vacation spots"
                            width="100%"
                        />

                        <Adventages
                            headline="Almost three-quarters of boutique hotel owners are couples, and 80 percent of all B&B owners live on the premises of their lodging"
                            width="100%"
                        />

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Is a B&B Business Right for You?
                        </Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Although it can be exciting to open your own bed and breakfast, there will be significant
                            demands on you as a small business owner. Here are some of the things you can expect.
                        </Paragraph>

                        <Heading size={3}>
                            A Day in the Life of a Bed and Breakfast Business Owner
                        </Heading>
                        <Paragraph big>
                            Here are some of the typical tasks you’ll be performing for your bed and breakfast business
                            on a daily basis:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Answering the phone, giving room rates and availability
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Greeting guests and showing them to their rooms
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Cleaning rooms, changing linens and similar day-to-day maintenance
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Taking payment for stays at your B&B
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Answering questions about local attractions, tours, restaurants and similar
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Cooking meals for breakfasts and possibly other times
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "24px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Buying supplies including cleaning materials and food
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            Skills Needed by a Hotel Entrepreneur
                        </Heading>
                        <Paragraph big>
                            The following skills will be very useful in your role as a bed and breakfast small business
                            owner:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    The following skills will be very useful in your role as a bed and breakfast small
                                    business owner:
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Good interpersonal skills for dealing with vacationers
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Reasonable financial management and administration skills to run your boutique hotel
                                    business
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Some skill with cooking and day-to-day hotel management
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Strong understanding of the various supplies you’ll need
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            What Your B&B Customers Are Looking For
                        </Heading>
                        <Paragraph big>
                            The needs of your vacationers will change depending on where you’re located, the type of
                            experience you offer, their expectations and several other factors. For example, guests
                            might want a combination of the following:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    An inexpensive room that’s just a place to sleep
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    A B&B with spectacular views of the surrounding area
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Beautiful decorations, furniture and amenities
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    A fantastic location within easy walking distance of great food and tourist
                                    attractions
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Paragraph big>
                            Ultimately, your guests want a combination of comfort, interest and value for money. The
                            balance between these will vary widely depending on the type of vacationer you’re trying to
                            attract.
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

        <FurnishingsAndEquipment/>

        <OrderNow/>

        <Regulations/>

        <InsuranceBusiness/>

        <Taxes/>

        <ToolsAndLinks/>

        <Conclusion to="/" buttonTitle="Start your Bed and Breakfast Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                The B&B or boutique hotel industry is the perfect choice if you love hospitality and want to provide an
                amazing experience for your guests. We hope this guide has inspired you to find the right idea for the
                type of hospitality you want to provide. Good luck!
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
    position: relative;
`;

const TabsOval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: scaleY(-1);
    
    @media (min-width: 420px){
        width: 420px;
    }
`;
export default BedAndBreakfast;
