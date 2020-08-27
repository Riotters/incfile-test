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
import Tab1Icon from "../../images/icons/catering-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import CkeckText from "../../components/static-check/text-only";
import TextCenterLayout from "../../atomic/partials/heading-left";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../images/icons/identify-your-unique-selling-point.inline.svg";
import LookIcon from "../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import ValidateIcon from "../../images/icons/look-for-market-research.inline.svg"
import TalkIcon from "../../images/icons/talk-to-clients.inline.svg"
import InvolvedIcon from "../../images/icons/get-involved-with-business-communities.inline.svg"
import {color} from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalOrange2Svg from "../../images/oval-orange-2.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import IconCircle from "../../components/icons/circle";
import ArrowSVG from "../../images/arrow.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/catering-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/catering-business/order-now";
import {RingText, toolsList} from "../../static/type-of-business/catering-business";
import HireEmployees from "../../atomic/sections/type-of-business/catering-business/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import RingSvg from "../../images/rings.inline.svg";
import Adventages from "../../components/adventages";
import TypeOfBusiness from "../../atomic/sections/type-of-business/catering-business/type-of-business";

const CateringBusiness = () => (
    <Layout>
        <SEO title="How to Start a Catering Business"
             description="Producing delicious food and experiences for your customers is a great way to make a living. "/>

        <Top ovalColor="sun-2" imageName="catering-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Catering Business</h1>
            <p>
                Producing delicious food and experiences for your customers
                is a great way to make a living.
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

        <TabsSection>
            <TabHeading>
                <TabTitle title="Catering Business" SvgIcon={Tab1Icon}/>
                <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
            </TabHeading>

            <CollapseWrapper>
                <PanelWrapper>
                    <Heading size={3}>Starting a Catering Business</Heading>
                    <Paragraph big>
                        When it comes to food-based businesses, you have a few choices — you could go into business as a
                        restaurateur or start a catering business.
                    </Paragraph>
                    <Paragraph big>
                        A catering business can be a great choice if you don’t want the expense of running a restaurant.
                        You can still earn good margins on the meals you produce without having the overhead of running
                        a restaurant.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold", marginTop: "48px"}}>
                        Catering Business formation guide
                    </Paragraph>

                    <Paragraph big>
                        Running a successful catering business can be a big challenge. Whatever your idea for doing
                        business as a caterer, turning that vision into a company that creates amazing cuisine and
                        delights your customers is doable, so long as you take the right approach. In this guide we’ll
                        cover:
                    </Paragraph>

                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Understanding the world of catering
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Paying taxes for your catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Deciding if you’re ready to start a catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Hiring employees, managing finances and administering your catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Planning out your catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Locating other resources for your catering business
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
                                    Following various rules and regulations
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

                    <Paragraph big>
                        By the time you've read through our complete digital nomad business guide, you will have all the
                        information you need to set up and manage a thriving venture. Let's get into it.
                    </Paragraph>
                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        Understanding the World of the Catering Business
                    </Heading>

                    <Paragraph big>
                        Caterers exist to provide food for major events, parties and functions. They exist to take the
                        stress out of preparing, cooking and serving food. Good catering businesses can expect repeat
                        bookings, and lucky business owners will get long-term agreements to provide food on a regular
                        basis.
                    </Paragraph>
                    <Paragraph big>
                        Caterers and other food establishments are big business in the U.S. Here are some surprising
                        statistics about their popularity.
                    </Paragraph>

                    <BlueBoxWithAbsoluteText absoluteText="$8.6B"
                                             text="Sales of social caterers in 2017, up from $7.7 billion in 2015"/>
                    <BlueBoxWithAbsoluteText absoluteText="$12B"
                                             text="Total revenue for catering businesses in 2017"/>
                    <BlueBoxWithAbsoluteText absoluteText="120K"
                                             text="Catering businesses in the U.S."/>
                    <BlueBoxWithAbsoluteText absoluteText="260K"
                                             text="Caterers employ people, or just over two per catering business"/>

                    <ColorFulCircleWithTextAndList list={RingText.list} title={RingText.title} CircleSVG={RingSvg}
                                                   withBg={true}/>

                    <div style={{marginBottom: "30px", marginTop: "48px"}}>
                        <Adventages
                            headline="The market is growing by 1.3 percent a year"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="The number of cleaning companies is growing by around 1.7 percent each year"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Around 10 percent of cleaning industry revenues come from franchises."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "48px"}}>
                        <Adventages
                            headline="Commercial cleaning contracts are the most reliable type of income for cleaning businesses, with office buildings accounting for nearly a third of such contracts."
                            width="100%"
                        />
                    </div>

                    <Paragraph big>
                        This all points to the cleaning industry being ripe with new opportunities for focused
                        entrepreneurs, so now might be the perfect time to dive into starting your cleaning business.
                        Incfile is here to help you form your cleaning business and understand the ins and outs of
                        owning a cleaning company.
                    </Paragraph>

                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        Questions to Ask Before You Start a Cleaning Business
                    </Heading>

                    <Paragraph big style={{fontWeight: "bold", marginTop: "48px"}}>
                        Is Cleaning Entrepreneurship for You?
                    </Paragraph>

                    <Paragraph big>
                        Running a cleaning business could be a good option if you:
                    </Paragraph>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Have a strong focus on customer service"
                            text="You'll need to make sure all your employees are great at dealing with demanding clients."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Don’t mind staff turnover"
                            text="Cleaning isn’t an extremely well-paid job, so there can be fairly rapid employee turnover."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Marketing"
                            text="Promoting your beauty salon business against a competitive field; local marketing expertise is essential"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Are great at training"
                            text="Your cleaners will need to clean to the very highest quality, so they will need excellent training and materials."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Don’t mind competition"
                            text="The barrier to entry for cleaning businesses is very low, and there are always new entrants into the marketplace."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Operational management"
                            text="Ensuring customers are served well and beauty treatments are provided to the standards you expect"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Enjoy dealing with people"
                            text="Cleaning is a very people-focused business, so you will constantly be interacting with customers and employees."
                            width="100%"
                        />
                    </div>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        What Are the Main Challenges for a Cleaning Entrepreneur?
                    </Paragraph>

                    <Paragraph big>
                        Aside from intense competition and employee turnover, the main challenge for a cleaning
                        entrepreneur will be finding new customers and keeping existing ones happy. You’ll also need a
                        rock-solid understanding of pricing and business finances — if you’re paying other people, your
                        margins will likely be very thin.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        What Does a Day in the Life of a Cleaning Entrepreneur Look Like?
                    </Paragraph>

                    <Paragraph big>
                        On any given day you will be:
                    </Paragraph>

                    <CountingTextBoxed number={1}>
                        <Paragraph bottomMargin={0}>
                            Scheduling appointments for cleaning
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={2}>
                        <Paragraph bottomMargin={0}>
                            Negotiating contracts and setting rates
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={3}>
                        <Paragraph bottomMargin={0}>
                            Dealing with employees
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={4}>
                        <Paragraph bottomMargin={0}>
                            Ordering cleaning supplies
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={5}>
                        <Paragraph bottomMargin={0}>
                            Planning out optimal routes
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={6}>
                        <Paragraph bottomMargin={0}>
                            Developing training on cleaning and customer service
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={7}>
                        <Paragraph bottomMargin={0}>
                            Collecting payments and managing finances
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={8}>
                        <Paragraph bottomMargin={0}>
                            ...and much more
                        </Paragraph>
                    </CountingTextBoxed>
                </PanelWrapper>
            </CollapseWrapper>
        </TabsSection>

        <TypeOfBusiness/>

        <BlueContainer>
            <Container>
                <CenterBox>
                    <TextCenterLayout headline="Plan Your Cleaning Business"/>
                    <Paragraph big>
                        Before you start your business, there are a few key areas you need to focus on. You will need to
                        figure out whether there’s a demand for your cleaning business services, consider potential
                        benefits and pitfalls, understand how your business finances might look and ensure everything is
                        in order.
                    </Paragraph>

                    <Heading size={3} style={{marginTop: "80px"}}>
                        Do Market Research and Validate Your Cleaning Products and Services
                    </Heading>

                    <Paragraph big>
                        Before you launch your cleaning business, you need to understand if there’s a demand for what
                        you’re selling. That means carrying out market research and “validating” your services. Here’s
                        how to go about it:
                    </Paragraph>
                </CenterBox>

                <GridSectionList>
                    <TextBlockWithImage SvgImage={IdentifyIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            These are the areas that will set you apart from competitors and encourage customers to come
                            to you. You might have better pricing, a higher-quality service, faster delivery or some
                            other special feature. Green and eco-based cleaning are becoming increasingly popular, for
                            example.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Consider who your competitors are
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market for your cleaning services.
                            Low barriers to entry mean there is typically lots of competition for cleaners.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Ask questions about cleaning businesses. You may even be able to find some clients there!
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={ValidateIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Look for market research reports for cleaning businesses
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Because cleaning businesses operate in a very localized market, you might want to look at
                            your specific area. These reports don't have to just be about cleaning businesses; if you’re
                            after commercial cleaning clients, check commercial activity in your region, for example.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your cleaning services.
                            This is especially important if you’re going into a specialized area.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>

                <CenterBox>
                    <Heading size={3}>
                        Understand Your Cleaning Business Model and Financial Projections
                    </Heading>
                    <Paragraph big>
                        All businesses need a business model, which will lay out the way you will generate sales,
                        provide services and make money. Think about your business model now, because it’s better to
                        have that in place so you can start acquiring customers and generating revenue from day one.
                    </Paragraph>
                    <Paragraph big>
                        You will also need to look at financial projections for your cleaning business. What are your
                        expected sales and revenues? What is your profitability? How much money will you keep in the
                        business to grow it? How much will you pay yourself and others? If you can, try to plan your
                        revenue out for the next month, three months, year and two years. Margins in the cleaning
                        business are slim, so plan with that in mind.
                    </Paragraph>

                </CenterBox>
            </Container>
        </BlueContainer>

        <SimpleSection>
            <Container>
                <CenterBox>
                    <Heading>
                        Write a Business Plan for Your Cleaning Business
                    </Heading>

                    <Paragraph big>
                        Finally, you should put your business plan together. Business plans do vary slightly, but they
                        should cover the following areas:
                    </Paragraph>

                    <CountingTextBoxed number={1}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An executive summary with the most important points from your business plan
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={2}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Your goals and what you hope to achieve with your coaching business
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={3}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A description of your life or business coaching niche, background information and context
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={4}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A market analysis and likely demand
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={5}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An overview of how your life or business coaching organization is structured
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

        <OrangeContainer>

            <Oval>
                <OvalOrange2Svg/>
            </Oval>

            <Container>
                <BusinessOwnerResponsibilities>
                    <ImageContent image="unique-business-2" paddingTop="60">
                        <Heading size={4} style={{fontSize: "24px"}}>
                            Choose the Right Business Structure and Register Your Cleaning Business
                        </Heading>
                        <Paragraph big>
                            Now that you have all the background information for your cleaning business, it’s time to
                            make it into a reality. That starts by choosing the right structure or “legal entity” for
                            your business. In the U.S., there are four main business structures. They are:
                        </Paragraph>

                        <TextBlockWithImage
                            SvgImage={HandsIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
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
                                This is the "default" business structure and is what your business will be if you decide
                                not to create a more formal structure. We don't recommend this type of business as it
                                doesn't give you the legal protections you need.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={LimitedIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
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
                                The most common type of business entity. An LLC is fast, simple and inexpensive to setup
                                and maintain. It protects your personal finances and assets and is a great way to start
                                your real estate
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={SeriesIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
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
                                This is a special type of LLC entity that's only available in certain states. It allows
                                you to create "mini" LLCs, each with their own limited liability and separate assets,
                                under the umbrella of a master LLC.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={PlaneIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
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
                                This is a more complex type of business and isn't generally recommended for smaller
                                organization.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={RockerIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
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
                                These are the largest and most complex types of businesses and are far more than the
                                average entrepreneur or business owner will need.
                            </Paragraph>
                        </TextBlockWithImage>

                        <Paragraph big style={{paddingTop: "120px"}} mixed={true}>
                            For more information on the advantages and disadvantages of different types of businesses,
                            please see our in-depth guide on business entities. If you still have questions, we’ve
                            answered them to help you choose the right business structure.
                        </Paragraph>
                        <Paragraph big mixed={true}>
                            In most cases our recommendation would be to create an LLC. We have a complete guide to
                            everything you need to do, and we can set one up for your T-shirt business. LLC formation
                            does vary from state to state, but we’ve got you covered, wherever you are.
                        </Paragraph>

                        <Heading size={3}>
                            Special Considerations for Setting up a Cleaning Business Entity
                        </Heading>

                        <Paragraph big mixed={true}>
                            Liability protection and insurance will both be very important for a cleaning business.
                            Although people are careful, accidents can happen, so limiting liability and having good
                            protections in place will be essential.
                        </Paragraph>

                        <Button theme="primary48" width="365px" arrow>
                            Start your business with us, today!
                        </Button>
                    </ImageContent>
                </BusinessOwnerResponsibilities>
            </Container>
        </OrangeContainer>

        <SettingBusiness/>

        <OrderNow/>

        <HireEmployees/>

        <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

        <Conclusion to="/" buttonTitle="Start your Etsy Business with us, today">
            <Heading size={3} style={{fontSize: "40px"}}>Conclusion</Heading>
            <Paragraph big>
                A cleaning business can be a very solid choice for a first-time entrepreneur. The combination of a low
                barrier to entry, focus on strong customer service and the need for excellent interpersonal skills makes
                it an ideal choice.
            </Paragraph>
            <Paragraph big>
                Although there’s lot of competition and plenty of demanding clients, a cleaning business that's run well
                can generate excellent revenue. When you’re ready to start up your cleaning business.
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

const GridSectionList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 100px;
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 970px) {
        width: 970px;
        margin: 100px auto 0;
    }
`;

const SimpleSection = styled.div`
    padding-top: 100px;
`;

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(254,246,237,1) 100%);
    padding-bottom: 100px;
    position: relative;
`;

const Oval = styled.div`
  position: absolute; 
  left: 0;
  top: 200px;
`

export default CateringBusiness;
