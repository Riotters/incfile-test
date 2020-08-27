import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import Tab1Icon from "../../images/icons/bar-or-club.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import CkeckText from "../../components/static-check/text-only";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import {color} from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalBlueSmallSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import OvalBlueSvg from "../../images/ovals/top-left-transparent-blue3.inline.svg";
import OvalGreenSvg from "../../images/ovals/top-left-transparent-green3.inline.svg";
import OvalPinkSvg from "../../images/ovals/top-left-transparent-pink.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import IconCircle from "../../components/icons/circle";
import ArrowSVG from "../../images/arrow.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/bar-nightclub/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/bar-nightclub/order-now";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TypeOfBusiness from "../../atomic/sections/type-of-business/bar-nightclub/type-of-business";
import ContentCenter from "../../atomic/partials/content-center";
import Links from "../../atomic/sections/type-of-business/bar-nightclub/links";
import Colorbox from "../../components/color-box";
import TextBoxed from "../../atomic/molecules/static-check/circle-checkmark-text-boxed";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/bar-nightclub/validating-business";
import DominoIcon from "../../images/icons/domino.inline.svg";
import Regulations from "../../atomic/sections/type-of-business/bar-nightclub/regulations";
import InsuranceBusiness from "../../atomic/sections/type-of-business/bar-nightclub/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/bar-nightclub/taxes";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import {RingText} from "../../static/type-of-business/bar-nightclub";
import Circles from "../../images/rings-4.inline.svg";
import {shadow} from "../../atomic/atoms/styles/shadows";
import TabScrollable from "../../atomic/sections/type-of-business/bar-nightclub/TabScrollable";
import HireEmployees from "../../atomic/sections/type-of-business/bar-nightclub/hire-employees";

const BarNightclub = () => (
    <Layout>
        <SEO title="How to Start Bar or Club Business"
             description="Opening a bar, nightclub or pub business is a great way to give your customers the perfect place to meet, drink and socialize. The combination of a good location, friendly staff, great selection and the right ambiance can really help set you apart and make your bar successful."/>

        <Top ovalColor="love" imageName="bar-nightclub-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Bar or Club Business</h1>
            <p>
                If you have some skill with home improvement, DIY or fixing things,
                then running a home handyman business could be right for you.
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

        <section style={{position: "relative"}}>
            <OvalTabs>
                <OvalBlueSmallSvg/>
            </OvalTabs>
            <TabsSection>
                <TabHeading>
                    <TabTitle title="Bar or Club" SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Colorbox color={color.blue3} theme="icon" curve curveColor={color.blue1}>
                            <Paragraph big style={{fontWeight: "bold"}}>
                                If you’re interested in starting a bar, club or other business that serves alcohol,
                                there’s plenty to do.
                            </Paragraph>
                            <Paragraph bottomMargin={0}>
                                You’ll need to balance the competing demands of long hours, regulation, employees and
                                competition. That's why we’ve put together this guide — it explores everything you need
                                to do to set up your bar or club business and maximize your chances for success. We’ll
                                cover:
                            </Paragraph>
                        </Colorbox>

                        <ListWrapper style={{marginTop: "48px"}}>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Understanding the world of the bar
                                        or club
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Finding information on taxes and finances for your bar or club business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Deciding if you’re ready to start
                                        a bar business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Following the various rules and regulations your business requires
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Determining the best legal structure for your new organization
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Managing marketing and administration processes
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Locating resources for your bar
                                        or club business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Planning your bar business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Hiring employees
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        ... and much more
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>

                        <Paragraph big style={{marginTop: "48px"}}>
                            By the time you’ve read through our complete bar business guide, you will have all the
                            information you need to set up and manage a thriving bar, club, pub or similar business.
                            Let’s get into it.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3} style={{marginBottom: "24px"}}>
                            Understanding the Bar and Club Industry
                        </Heading>

                        <Paragraph big style={{marginBottom: "52px"}}>
                            Key Background Stats for Bar and Club Businesses:
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="$25B"
                                                 text="Revenue of bar and nightclub industry in the U.S. every year"/>

                        <BlueBoxWithAbsoluteText absoluteText="1.1 - 1.4"
                                                 text="Percent of sales increase each year"/>


                        <BlueBoxWithAbsoluteText absoluteText="400K"
                                                 text="People employed in the industry"/>


                        <BlueBoxWithAbsoluteText absoluteText="200M"
                                                 text="Barrels of beer are sold every year"/>

                        <ColorFulCircleWithTextAndList list={RingText.list} title={RingText.title} CircleSVG={Circles}/>

                        <div style={{marginBottom: "30px", marginTop: "48px"}}>
                            <Adventages
                                headline="There are over 65,000 bars and clubs throughout the U.S."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Each establishment employs an average of six to seven people."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="The split of alcohol sold tends to be?42% beer, 31% spirits, 10% wine and the remainder as food and non-alcoholic drinks."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Nearly 80 percent of establishments are small businesses employing fewer than 10 people."
                                width="100%"
                            />
                        </div>

                        <Paragraph big>
                            This all points to the bar or club industry being ripe with new opportunities for focused
                            entrepreneurs, so now might be the perfect time to dive into starting your bar or club
                            business. Incfile is here to help you form your business and understand the ins and outs of
                            owning
                            an establishment like this.
                        </Paragraph>

                        <Paragraph big style={{fontWeight: "bold"}}>
                            Understand Your Local Market Opportunity & Customers
                        </Paragraph>
                        <Paragraph big>
                            The bar and club market is very much driven by your customers’ personal incomes and
                            entertainment needs. It’s vital to look at the competition
                            in your local area and find a niche you can fill. It’s easy for an area to become saturated
                            with bars or clubs, so choosing the right location will be vital to your success.
                        </Paragraph>

                        <Paragraph big style={{fontWeight: "bold"}}>
                            What Kind of Bar or Club Should You Open?
                        </Paragraph>
                        <Paragraph big>
                            When you’re looking to start a bar or club, you have plenty of options to help you stand
                            out. It’s important to cater to your customers’ needs. There are many different types of
                            bars or clubs you could run; here are some suggestions:
                        </Paragraph>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Brewhouse and pub
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    where you make and serve your own beer
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Cocktail bar
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    mainly serving spirits and mixers
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Nightclub or dance club
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    where customers can move to the music
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Themed bar
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    like an Irish, Mexican or British pub
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Wine bar
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    with plenty of choices for medium- and high-end wine
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Sports bar
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    where people can enjoy the big game
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Bar
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    specializing in live music or comedy
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <Paragraph big style={{marginTop: "48px"}}>
                            Explore what’s already on offer in your area and think about what your ideal customer would
                            want. Talk to people in the local area about the type of pub or club that might be missing.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            The Challenges of Running a Bar or Club
                        </Heading>

                        <Paragraph big style={{fontWeight: "bold"}}>
                            Is Being a Bar or Club Owner Right for You?
                        </Paragraph>
                        <Paragraph big>
                            The popularity and profitability of your bar or club will depend on balancing several
                            different areas. You’ll need to have loyal, repeat customers, be good at marketing and
                            provide a unique experience for your patrons. Fortunately, there are no large companies that
                            dominate in the bar and nightclub industry — the combined revenue of the 50 largest bar and
                            nightclub companies only accounts for 5 percent of all sales.
                        </Paragraph>
                        <Paragraph big>
                            You’ll also have to work long hours and need to get involved in every aspect of the
                            business, from accepting deliveries to training staff, resolving problems and serving beer.
                            You can compete most effectively by understanding your local customers, providing the right
                            atmosphere and experience and focusing on great customer service.
                        </Paragraph>
                        <Paragraph big>
                            There are low barriers to entry, meaning new bars and clubs open fairly frequently, so there
                            will always be competition. Margins are slim though, so unless a bar or club is
                            well-managed, that competition may not last for long.
                        </Paragraph>

                        <Colorbox color={color.blue3} theme="icon" curve curveColor={color.blue1}>
                            <Paragraph big style={{fontWeight: "bold"}}>
                                There are strict rules, regulations and compliance on serving alcohol that are different from state to state.
                            </Paragraph>
                            <Paragraph bottomMargin={0}>
                                One of the main issues new bar owners will face is getting the right licenses to serve alcohol and food. The type, cost and availability
                                of alcohol licenses vary widely; you may also need a specialized entertainment license.
                            </Paragraph>
                        </Colorbox>

                        <Paragraph big style={{marginTop: "48px"}}>
                            There are low barriers to entry, meaning new bars and clubs open fairly frequently, so there
                            will always be competition. Margins are slim though, so unless a bar or club is
                            well-managed, that competition may not last for long.
                        </Paragraph>

                        <Paragraph big style={{fontWeight: "bold"}}>
                            Skills Needed to Be a Successful Bar or Club Owner
                        </Paragraph>

                        <Paragraph big>
                            If you want to run a bar or club, you’re going to need multiple skills:
                        </Paragraph>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Market research
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    So you know what your customers want and need
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Employee management
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    So you can choose, hire and work with the best people
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Marketing
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    So you can get your name out there and attract customers
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Financial management
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    So you can get the most out of the thin margins
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Negotiation
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    To get the best deals from suppliers and distributors
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Customer service
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    To keep all your patrons happy
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <div>
                                <Paragraph style={{fontWeight: "bold", marginBottom: 0}}>
                                    Time management
                                </Paragraph>
                                <Paragraph style={{marginBottom: 0}}>
                                    So you have enough hours to do everything
                                </Paragraph>
                            </div>
                        </TextBoxed>

                        <Paragraph big style={{fontWeight: "bold", marginTop: "32px", textAlign: "right"}}>
                            ...and many more
                        </Paragraph>

                        <Paragraph big>
                            You will be working long hours, often up early in the morning and staying past closing time. No two days will be quite the same, although many
                            of those days are likely to be tiring! You will need to deal with a high staff turnover and be able to spot good servers and bartenders who will work well with your patrons.
                        </Paragraph>

                    </PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
        </section>

        <ValidatingBusinessIdea/>

        <SimpleSection>
            <OvalGreen>
                <OvalGreenSvg/>
            </OvalGreen>
            <OvalGreen2>
                <OvalGreenSvg/>
            </OvalGreen2>
            <Container>
                <CenterBox>
                    <Heading size={3} style={{fontSize: "40px"}}>
                        Understand Your Bar or Club Business Model and Financial Projections
                    </Heading>
                    <Paragraph big>
                        All businesses need a business model, which details the way you will generate sales, provide services and make money. Think about your business model now, because it’s better to have that in place so you can start acquiring customers and generating revenue from day one.
                    </Paragraph>
                    <Paragraph big>
                        You will also need to look at financial projections for your bar or club business. What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others? If you can, try to plan your revenue out for the next month, three months, year and two years.
                    </Paragraph>
                </CenterBox>
                <CenterBox>
                    <Heading>
                        Write a Business Plan for Your Bar or Club Business
                    </Heading>

                    <Paragraph big>
                        Finally, you should put your business plan together. Business plans do vary slightly, but they should cover the following areas:
                    </Paragraph>

                    <CountingTextBoxed number={1}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An executive summary with the most important points from your business plan
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={2}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Your goals and what you hope to achieve with your bar or club business
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={3}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A description of your business, background information and context
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={4}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A market analysis and likely demand
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={5}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An overview of how your handyman business is structured
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={6}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Your business model
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={7}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            How you will market and sell your offerings
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={8}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Financial projections, revenue and profitability
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={9}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Appendices
                        </Paragraph>
                    </CountingTextBoxed>

                    <Paragraph big mixed={true} style={{marginTop: "50px"}}>
                        We’ve got the perfect <span style={{color: color.blue1, fontWeight: "bold"}}>guide to writing your business plan.</span>
                    </Paragraph>
                </CenterBox>
            </Container>
        </SimpleSection>

        <WhiteContainer>

            <Oval>
                <OvalPinkSvg/>
            </Oval>

            <Container>
                <BusinessOwnerResponsibilities>
                    <ImageContent image="unique-business-2" paddingTop="60">
                        <Heading size={4} style={{fontSize: "24px"}}>
                            Choose the Right Business Structure and Register Your Bar or Club Business
                        </Heading>
                        <Paragraph big>
                            Now that you have all the background information for your bar or club business, it’s time to make it into a reality. That starts by choosing the right structure or “legal entity” for your business. In the US, there are four main business structures. They are:
                        </Paragraph>

                        <TextBlockWithImage
                            SvgImage={HandsIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor={shadow.white2}
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Sole Proprietorship
                            </Paragraph>

                            <Paragraph big>
                                This is the "default" business structure and is what your business will
                                be if you decide not to create a more formal structure. We don't recommend this type of business as it doesn't give you the legal protections you need.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={LimitedIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor={shadow.white2}
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Limited Liability Company or LLC
                            </Paragraph>

                            <Paragraph big>
                                The Limited Liability Company (LLC) is ideal for most handyman businesses. An LLC is
                                easy and inexpensive to set up, and it has the least administrative requirements of any
                                formal business entity.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={SeriesIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor={shadow.white2}
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Series LLC
                            </Paragraph>

                            <Paragraph big>
                                This is a special type of LLC entity that's only available in certain states.
                                It allows you to create "mini" LLCs, each with their own limited liability and separate assets, under the umbrella of a master LLC.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={PlaneIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor={shadow.white2}
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                S Corporation
                            </Paragraph>

                            <Paragraph big>
                                This is a more complex type of business and isn't generally recommended for smaller organization.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={RockerIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor={shadow.white2}
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                C Corporation
                            </Paragraph>

                            <Paragraph big>
                                These are the largest and most complex types of businesses and are far more than the average entrepreneur or business owner will need.
                            </Paragraph>
                        </TextBlockWithImage>

                        <Paragraph big style={{paddingTop: "120px"}} mixed={true}>
                            For more information on the advantages and disadvantages of different types of businesses, please see our in-depth guide. If you’ve still got questions, we’ve answered them to help you choose the right business structure.
                        </Paragraph>
                        <Paragraph big mixed={true}>
                            In most cases our recommendation would be to create an LLC. We’ve got a complete guide to everything you need to do and we can set one up for your bar or club business. LLC formation does vary from state
                            to state, but we’ve got you covered, wherever you are.
                        </Paragraph>

                        <Button theme="primary48" width="365px" arrow>
                            Start your business with us, today!
                        </Button>
                    </ImageContent>
                </BusinessOwnerResponsibilities>
            </Container>
        </WhiteContainer>

        <SettingBusiness/>

        <OrderNow/>

        <TabScrollable />

        <Taxes/>

        <HireEmployees />

        <Links/>

        <Conclusion to="/" buttonTitle="Start your Etsy Business with us, today">
            <Heading size={3} style={{fontSize: "40px"}}>Conclusion</Heading>
            <Paragraph big>
                Although there are many challenges in running a bar or club business, they can still be an excellent way to generate revenue and create a great place for your patrons and employees. Find the perfect location, create the right type of bar, hire excellent people and share your establishment's uniqueness to really stand out.
            </Paragraph>
            <Paragraph big>
                When you’re ready to start your bar or club business, we’re here to help.
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

const BlueContainer = styled.section`
    background: rgb(242,246,255);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(250,251,255,1) 100%);
    padding-top: 100px;
    position: relative;
`;

const CenterBox = styled.div`
    width: 100%;
    padding-bottom: 100px;
    
    @media (min-width: 670px) {
        width: 670px;
        margin: 0 auto;
    }
`;

const SimpleSection = styled.div`
    padding-top: 100px;
    position: relative;
     background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 30%, #f2f8f3);
`;

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const WhiteContainer = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 100px;
    position: relative;
`;

const Oval = styled.div`
  position: absolute; 
  left: 0;
  top: 200px;
  width: 570px; 
`

const OvalTabs = styled.div`
  position: absolute; 
  left: 0;
  top: 0;
  width: 420px; 
`;

const OvalGreen = styled.div`
  position: absolute; 
  left: 0;
  top: 60px;
  width: 420px;
`

const OvalGreen2 = styled.div`
  position: absolute; 
  right: 0;
  bottom: 377px; 
  width: 720px;
  
  svg {
    transform: scaleX(-1);
  }
`

export default BarNightclub;
