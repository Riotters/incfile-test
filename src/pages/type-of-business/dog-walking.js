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
import Tab1Icon from "../../images/icons/dog-walking.inline.svg";
import MegafornIcon from "../../images/icons/megafon-2.inline.svg";
import {color} from "../../components/styles/colors";
import TypeBusiness from "../../atomic/sections/type-of-business/dog-walking/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/dog-walking/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/dog-walking/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/dog-walking/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/dog-walking/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/dog-walking/order-now";
import Regulations from "../../atomic/sections/type-of-business/dog-walking/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/dog-walking/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/dog-walking/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/dog-walking/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CkeckText from "../../components/static-check/text-only";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import CircleSvg from "../../images/circle-graph.inline.svg";
import TabsOvalSvg from "../../images/ovals/bottom-left-transparent-orange.inline.svg";

const DogWalking = () => (
    <Layout>
        <SEO title="How to Start a Dog Walking, Pet Sitting or Other Canine Business"
             description="Everyone loves their furry friends, with almost 70 percent of U.S. families (or 85 million households) owning a pet. Dogs are the most popular choice: over 60 million households are home to a canine companion."/>

        <Top ovalColor="sun" imageName="dog-walking-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Dog Walking, Pet Sitting or Other Canine Business</h1>
            <p>
                Everyone loves their furry friends, with almost 70 percent of U.S. families
                (or 85 million households) owning a pet. Dogs are the most popular choice: over 60 million households
                are home to a canine companion.
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
            <TabsOval>
                <TabsOvalSvg />
            </TabsOval>
            <TabsSection>
                <TabHeading>
                    <TabTitle title="Dog Walking" SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Paragraph big>
                            With this huge love of animals across the nation, there's plenty of need
                            for trustworthy, capable and caring people to become dog walkers or pet sitters.
                        </Paragraph>
                        <Paragraph big>
                            You might not think of dog walking or pet sitting as a formal business, but with enough
                            effort
                            it could become an excellent way for you to make money as an animal lover. It’s not just dog
                            walking or pet sitting either - doggy day cares, grooming studios and kennels are all in
                            demand.
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={MegafornIcon} color={color.green3} curve
                                  curveColor={color.orange2}>
                            <Heading size={4}>
                                We want to help you get your business off the ground.
                            </Heading>
                            <Paragraph>
                                Since 2004, we’ve helped over 250,000 people start exciting businesses and bring their
                                ideas
                                to life. We’ll give you the support, guidance and advice you need to create a
                                woman-owned
                                business and make it into a success.
                            </Paragraph>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                Here is our simple guide to starting up a successful dog walking, pet sitting or related
                                canine business. From exploring the types of business you can start, to doing research,
                                to
                                learning about the legalities of setting up your business and the realities of your day
                                to
                                day operations- this guide is here to help. </Paragraph>
                        </Colorbox>

                        <Paragraph big style={{marginTop: "48px", fontFamily: "Avenir-Heavy", color: color.black}}>
                            Read on for some insight into creating your own dog walking or pet sitting business and
                            becoming
                            an entrepreneur. In this guide we will cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Statistics on why you should start
                                        a dog walking, pet sitting or similar business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Choose the right business structure
                                        for your dog walking or pet sitting company
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Learn if a canine-related business could be right for you
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Ideas for the type of dog business that you could form
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Proving your dog walking or pet sitting business can work
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Business plans for dog walking and related companies
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Setting up your canine business, including location, equipment, employees,
                                        taxes,
                                        finances, licenses and more
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Where to find dog walking or pet sitting business groups, forums and support
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Helpful software for pet business owners
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Why You Should Start a New Dog Walking, Pet Sitting
                            or Similar Business
                        </Heading>
                        <Paragraph big>
                            The fact is that pets (and dogs in particular) are more than just animals - they’re family
                            members. As a result, doggy parents lavish lots of love and money on their faithful
                            companions.
                            Here are some amazing statistics across the pet industry as a whole and on dogs in
                            particular:
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="20M"
                                                 text="Approximate number of dogs in households in the U.S."/>
                        <BlueBoxWithAbsoluteText absoluteText="$70B"
                                                 text="Americans spends on their pets each year, which includes food, medicine, vet care, grooming and boarding"/>
                        <BlueBoxWithAbsoluteText absoluteText="$6B"
                                                 text="Americans spends just over a year on grooming and boarding"/>

                        <CircleWithText textInsideCircle="71" textLine="Of people in the U.S. who own a pet have a dog"
                                        SvgChart={CircleSvg} withBg={true} symbol="%"/>

                        <div style={{marginBottom: "30px", marginTop: "80px"}}>
                            <Adventages
                                headline="A little over 10 percent of that ($130) is spent per pet every year on sitting, walking and kennels"
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="On average, the total cost of a dog is around $1,200 a year"
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="High-income households account for around 60 percent of all spending on animals"
                                width="100%"
                            />
                        </div>

                        <Paragraph big>
                            This is why dog walking, pet sitting and similar businesses are so exciting - how can you be
                            part of that success? We're here to help you figure that out.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Is a Dog Walking or Pet Sitting Business Right for You?
                        </Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Although it can be exciting to form a dog walking or pet sitting business, there will be
                            significant demands on you as a small business owner. Here are some of the things you can
                            expect.
                        </Paragraph>

                        <Heading size={3}>
                            A Day in the Life of a Dog Walking or Pet Sitting Business Owner
                        </Heading>
                        <Paragraph big>
                            Here are some of the typical tasks you’ll be performing for your dog walking or pet sitting
                            business on a daily basis:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Visiting the homes of pet owners and forming relationships with them and their
                                    animals
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Understanding any unique needs, likes or dislikes of specific animals
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Finding out about medical, dietary or other canine needs
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Managing your schedule so you can get to all your clients in time
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Going for long walks with the dogs
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Keeping dogs entertained and nourished
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            Skills Needed by a Dog Walking or Pet Sitting Business Entrepreneur
                        </Heading>
                        <Paragraph big>
                            The following skills will be very useful in your role as a dog walking or pet sitting small
                            business owner.
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You will need to have a good understanding of animal behavior and how
                                    to deal with furry friends
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You must be able to manage multiple dogs in close proximity with each other and deal
                                    with any potential issues
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You should have excellent interpersonal skills so you can reassure and talk with pet
                                    owners
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
                                    You will need to build flexibility into your schedule — dogs and owners can be
                                    unpredictable creatures
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You must enjoy being out in all weather, rain or shine
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You must be able to handle pet-related emergencies (they’re not common, but they do
                                    happen)
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You cannot mind dealing with pet toileting and other habits
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            What Your Dog Walking or Pet Sitting Customers
                            Are Looking For
                        </Heading>
                        <Paragraph big>
                            Your customers are trusting you with the well-being and happiness of their animal
                            companions.
                            This means demonstrating some expertise in animal handling and behavior, and having a good
                            track
                            record of caring for canines. Pet owners will want to make sure that their dogs are kept
                            safe,
                            that they won’t escape and that you will be able to deal with any special doggy needs or
                            issues.
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

        <Conclusion to="/" buttonTitle="Start your Daycare Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                If you can find a unique approach and open your canine business in the right area, there’s every chance
                of success. Explore different ideas for a pet sitting, dog walking, grooming, kennel or other business,
                and you’ll find the right one for you. Good luck!
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

const TabsWrapper = styled.div`
    margin-top: 120px;
  position: relative;
  @media (min-width: 992px){
      margin-top: 21px;
  }
`;

const TabsOval = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default DogWalking;
