import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import TabsSection from "../../atomic/partials/tabs";
import Tab1Icon from "../../images/icons/digital-nomad.inline.svg";
import BusinessStructure from "../../atomic/sections/type-of-business/digital-nomad/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/digital-nomad/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/digital-nomad/order-now";
import ToolsAndLinks from "../../atomic/sections/type-of-business/digital-nomad/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Adventages from "../../components/adventages";
import CkeckText from "../../components/static-check/text-only";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import {RingText} from "../../static/type-of-business/digital-nomad";
import RingSvg from "../../images/rings-3.inline.svg"
import JobsAnywhere from "../../atomic/sections/type-of-business/digital-nomad/jobs-anywhere";
import OvalSvg from "../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import OvalSvg2 from "../../images/ovals/bottom-right-transparent-green3.inline.svg";
import {color} from "../../atomic/atoms/styles/colors";

const GymPersonalTraining = () => (
    <Layout>
        <SEO title="Travel & Work from Anywhere as a Digital Nomad"
             description="There's a great appeal to being able to work from anywhere in the world, and those who take advantage of this remote-working lifestyle are called digital nomads."/>

        <Top ovalColor="darkblue" imageName="digital-nomad-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>Travel & Work from Anywhere as a Digital Nomad</h1>
            <p>
                There's a great appeal to being able to work from anywhere
                in the world, and those who take advantage of this remote-working
                lifestyle are called "digital nomads."
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
            <Oval2>
                <OvalSvg2/>
            </Oval2>
            <TabsSection style={{marginTop: "100px"}}>
                <TabHeading>
                    <TabTitle title="Digital Nomad Business" SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Heading size={3}>Starting a Digital Nomad business</Heading>
                        <Paragraph big>
                            The barriers to entry for international travel and starting a business are all but gone, and
                            digital nomads are at the forefront of combining these two areas to create successful
                            enterprises they can operate from anywhere in the world.
                        </Paragraph>
                        <Paragraph big>
                            Whether it's running a dropshipping business from Bali, developing a successful software
                            application from Rio De Janeiro or selling digital products from Seoul, there's vast
                            opportunity
                            for those with ideas, vision and an entrepreneurial spirit.
                        </Paragraph>
                        <Paragraph big>
                            Of course, it's not all new horizons and worldwide customers — running a digital nomad
                            business
                            can be a big challenge. That's why we put together this guide to give you all the
                            information
                            you need to start a digital nomad business and enter the world of the adventuring
                            entrepreneur.
                        </Paragraph>

                        <Paragraph big style={{marginTop: "48px", fontFamily: "Avenir-Heavy", color: color.black}}>
                            Digital Nomad business formation guide
                        </Paragraph>

                        <Paragraph big>
                            In this guide, we'll explore everything you need to do to work
                            remotely through your own digital nomad business.
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Understanding the world of the digital nomad
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Information on taxes and finances for your digital nomad business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Key digital nomad statistics
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Hiring remote employees
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Questions you should ask to see if you're ready to start a digital nomad
                                        business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Checking off marketing and administration tasks
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
                                        Resources for your digital nomad business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        The various rules and regulations you will need to follow
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        And much more
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>

                        <Paragraph big style={{marginTop: "48px"}}>
                            By the time you've read through our complete digital nomad business guide, you will have all
                            the information you need to set up and manage a thriving venture. Let's get into it.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            What is a Digital Nomad?
                        </Heading>
                        <Paragraph big>
                            So, what is a digital nomad business? There are lots of definitions, but we think a digital
                            nomad business is one where you can run the business from anywhere in the world with an
                            internet connection, sometimes even when you're on the road.
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "80px"}}>
                            For example, a digital nomad business might be:
                        </Paragraph>

                        <Adventages
                            headline="Boutique studios providing specialized fitness and well-being services are becoming increasingly popular"
                            width="100%"
                        />

                        <Adventages
                            headline="Dropshipping business"
                            text="Where you provide a storefront for people to purchase from you. They make the purchase and your supplier sends it to them directly."
                            width="100%"
                        />

                        <Adventages
                            headline="Software as a Service (SaaS) company"
                            text="You provide an online application that your customers pay a monthly subscription to use."
                            width="100%"
                        />

                        <Adventages
                            headline="Affiliate Marketing Website"
                            text="Where you provide expert advice and reviews of products. If people click your links to buy the products from a retailer, you get a percentage of the order as revenue"
                            width="100%"
                        />

                        <Adventages
                            headline="Information Product"
                            text="Like an ebook, online course or other resource that customers pay for."
                            width="100%"
                        />

                        <Adventages
                            headline="Freelance Service"
                            text="Like copywriting, web design or graphic design."
                            width="100%"
                        />

                        <Paragraph big>
                            In fact, the only requirement to being a digital nomad is the ability to work remotely from
                            anywhere. That means developers, creatives, sellers, marketers, freelance writers, gig
                            providers and more can all be digital nomads. The idea of the "gig economy" and the digital
                            nomad go hand-in-hand.
                        </Paragraph>

                        <Heading size={3}>
                            Key Stats about the Digital Nomad Life
                        </Heading>
                        <Paragraph big style={{marginBottom: "80px"}}>
                            So, what are the stats and background information on digital nomads and how these changes in
                            business will impact the way we work? Glad you asked...
                        </Paragraph>

                        <ColorFulCircleWithTextAndList list={RingText.list} title={RingText.title} CircleSVG={RingSvg}
                                                       withBg={true}/>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Questions to Ask Before Becoming a Digital Nomad
                        </Heading>
                        <Paragraph big style={{fontFamily: "Avenir-Heavy", color: color.black}}>
                            Is Digital Nomad Entrepreneurship For You?
                        </Paragraph>

                        <Paragraph big>
                            Being a digital nomad has big risks and big rewards. On the risk side you have to deal with
                            a large amount of uncertainty in terms of cash flow, projects, clients and more. On the
                            reward side, you get to work from anywhere, succeed entirely on your own merits and have the
                            satisfaction of creating a business that helps others be successful.
                        </Paragraph>

                        <Paragraph big style={{marginTop: "48px", fontFamily: "Avenir-Heavy", color: color.black}}>
                            What Are the Main Skills, Expertise and Experience to be a Successful Digital Nomad
                            Entrepreneur?
                        </Paragraph>
                        <Paragraph big>
                            If you want to be successful as a digital nomad, here are the main skills you need to have:
                        </Paragraph>

                            <Adventages
                                headline="Excellent interpersonal skills"
                                text="You will need to deal with contractors, local authorities, clients and buyers all the time. Great interpersonal skills and the ability to handle people well are essential."
                                width="100%"
                            />

                            <Adventages
                                headline="Excellent communication skills"
                                text="You need the ability to over-communicate to your clients and keep them happy over email, phone or chat."
                                width="100%"
                            />

                            <Adventages
                                headline="Customer relationship nurturer"
                                text="Keeping clients and customers happy is vital to long-term success."
                                width="100%"
                            />

                            <Adventages
                                headline="Ability to work from anywhere"
                                text="You have to be comfortable with working from the local coffeeshop, the beach, your AirBNB room or somewhere else."
                                width="100%"
                            />

                            <Adventages
                                headline="Financial flexibility"
                                text="Staying on top of finances and ensuring you have enough coming in crucial to your peace-of-mind."
                                width="100%"
                            />

                            <Adventages
                                headline="Dealing with change"
                                text="Client needs can change fast. Marketplaces evolve. You travel. The ability to deal with changing circumstances is critical."
                                width="100%"
                            />
                    </PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
        </TabsWrapper>

        <JobsAnywhere/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <ToolsAndLinks/>

        <Conclusion to="/" buttonTitle="Start your Digital Nomad Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                There's nothing like the freedom and satisfaction of running a successful digital nomad business. The
                combination of location independence, doing awesome work, keeping clients happy and seeing the world is
                a potent mix. Why not get started and ...
            </Paragraph>
        </Conclusion>
    </Layout>
);

const TabsWrapper = styled.section`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px){
      margin-top: 21px;
  }
`;

const Oval = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(-1);
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    top: 436px;
    right: 0;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

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

export default GymPersonalTraining;
