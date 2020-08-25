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
import Tab1Icon from "../../images/icons/t-shirt-business.inline.svg";
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
import ValidateIcon from "../../images/icons/validate-your-products-and-services.inline.svg"
import TalkIcon from "../../images/icons/talk-to-clients.inline.svg"
import MarketIcon from "../../images/icons/look-for-market-research.inline.svg";
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
import SettingBusiness from "../../atomic/sections/type-of-business/tshirt-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/tshirt-business/order-now";
import {AccordionCounting, RingText, toolsList} from "../../static/type-of-business/tshirt-business";
import HireEmployees from "../../atomic/sections/type-of-business/tshirt-business/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Adventages from "../../components/adventages";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import ColorfulRing from "../../images/rings-2.inline.svg";
import AccordionWithCounting from "../../atomic/organisms/accordion/accordion-with-counting";
import ContentCenter from "../../atomic/partials/content-center";

const TshirtBusiness = () => (
    <Layout>
        <SEO title="How to Start a T-shirt Business"
             description="There can be few things more thrilling than seeing someone wearing a piece of art that you have created. One way to achieve this is to go into the T-shirt business, create amazing designs and then sell them to people online."/>

        <Top ovalColor="green" imageName="t-shirt-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a T-shirt Business</h1>
            <p>
                There can be few things more thrilling than seeing someone
                wearing a piece of art that you have created. One way to
                achieve this is to go into the T-shirt business, create amazing
                designs and then sell them to people online.
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
                <TabTitle title="T-shirt Business" SvgIcon={Tab1Icon}/>
                <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
            </TabHeading>

            <CollapseWrapper>
                <PanelWrapper>
                    <Heading size={3}>Starting a T-shirt business</Heading>
                    <Paragraph big>
                        Historically, only established clothing brands could create and sell T-shirts, but that’s all
                        changed. With the rise of ecommerce and print-on-demand T-shirt services, you can create and
                        start selling T-shirts online in just a couple of days.
                    </Paragraph>
                    <Paragraph big style={{marginBottom: "0px"}}>
                        Don’t be fooled though — running a successful T-shirt printing business can be tough. There are
                        low barriers to entry, so finding the right niche, creating eye-catching designs, branding your
                        business properly, ensuring quality and having great marketing are essential.
                    </Paragraph>

                    <Heading size={3} style={{marginTop: "48px", fontSize: "20px"}}>
                        T-shirt Business formation guide
                    </Heading>
                    <Paragraph big>
                        In this guide we’ll explore everything you need to do to set up your T-shirt business and
                        maximize your chances for success. We’ll cover:
                    </Paragraph>

                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Understanding the world of the T-shirt business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Paying taxes and for your T-shirt business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Deciding if you’re ready to start a T-shirt business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Hiring employees, managing finances and administering your T-shirt business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Planning out your T-shirt business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Locating other resources for your T-shirt business
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
                                    Determining the best legal structure for your new organization
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
                                    And much more
                                </Paragraph>
                            </CkeckText>
                        </ListBox>
                    </ListWrapper>

                    <Paragraph big>
                        By the time you’ve read through our complete T-shirt business guide, you will have all the
                        information you need to set up and manage a thriving T-shirt business. Let’s get into it.
                    </Paragraph>
                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        Understanding the World of the T-Shirt Business
                    </Heading>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        Key T-Shirt Business and Background Data and Statistics
                    </Paragraph>

                    <Paragraph big>
                        It’s important to understand the opportunities in the online T-shirt printing and ecommerce
                        space. Here are the key facts you need to know:
                    </Paragraph>

                    <BlueBoxWithAbsoluteText absoluteText="$3B"
                                             text="Total revenue for online T-shirt printing and sales a year"/>
                    <BlueBoxWithAbsoluteText absoluteText="$10B"
                                             text="Market is expected to grow 2025"/>

                    <ColorFulCircleWithTextAndList CircleSVG={ColorfulRing} title={RingText.title} list={RingText.list}
                                                   withBg={true}/>

                    <div style={{marginBottom: "10px", marginTop: "48px"}}>
                        <Adventages
                            headline="There are over 400 online T-shirt design and printing ecommerce businesses, and the number of businesses is growing by around 11 percent a year"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "10px"}}>
                        <Adventages
                            headline="Together, these companies employ around 2,500 people"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Cafepress, CustomInk, Threadless and Teespring are some of the large businesses in the space"
                            width="100%"
                        />
                    </div>

                    <Paragraph big>
                        This all points to the T-shirt industry being ripe with new opportunities for focused
                        entrepreneurs, so now might be the perfect time to dive into starting your T-shirt business.
                        Incfile is here to help you form your T-shirt business and understand the ins and outs of owning
                        a T-shirt company.
                    </Paragraph>

                    <Heading size={3}>
                        What Your T-Shirt Customers Are Looking for
                    </Heading>

                    <Paragraph big>
                        When it comes to creating a custom T-shirt business, it’s important to stand out — there’s a lot
                        of competition in the space. If you want to be successful, you need to focus on several key
                        areas:
                    </Paragraph>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="The Right Niche"
                            text="It’s impossible to be a generalist in the world of T-shirt commerce — you will need to pick a good niche and stick to it. Carry out online research to see what niches are underserved so you can make a splash in your chosen area. Niches might include areas like a specific band, TV show, art style, current events or something else."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Original Designs"
                            text="When it comes to custom T-shirts, originality is everything. You will either need to create original designs yourself or find a designer you can partner with to create designs based on your ideas. You can also share your designs with your proposed customers to get their feedback."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Strong Branding"
                            text="You want your T-shirt brand to stand out so you can start to build customer loyalty. Spend some time creating a powerful, recognizable brand that you can use on your website, in your marketing and elsewhere."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="High Quality Materials"
                            text="You will want T-shirts that combine comfort, durability and style. It’s worth spending a little more to find higher quality cloth and cuts as these will last longer and stand out in the minds of your customers."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Awesome Marketing"
                            text="There’s a great deal of competition in the T-shirt design space. You will need innovative, audacious marketing to make a splash and get noticed. Combine your niche with your brand to create powerful messages with striking imagery so your customers will remember you."
                            width="100%"
                        />
                    </div>

                    <Paragraph big>
                        If you can combine these four areas together, you’ll have the perfect ingredients for a
                        successful Etsy business.
                    </Paragraph>

                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        The Benefits and Challenges of Being a Successful T-Shirt Entrepreneur
                    </Heading>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        What Are the Main Challenges for a T-Shirt Entrepreneur?
                    </Paragraph>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Low barrier to entry"
                            text="Starting a custom T-shirt business is easy, but being successful is not. You need to narrowly define your niche, build a distinctive brand, create amazing designs and use fantastic marketing. If you can get all of these areas to align, you will have a successful T-shirt business."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Low profit margins"
                            text="The profit margins on custom T-shirts are quite thin. You will need a rock solid understanding of your revenue and finances to ensure you’re able to make a profit on every item sold."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="High initial cost if you print yourself"
                            text="If you choose to print yourself, you will have to outlay the cost of your printing machine and T-shirt stock, in addition to dealing with packing and postage. We recommend using a print-on-demand, dropshipping-style fulfillment service to avoid this."
                            width="100%"
                        />
                    </div>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        What Are the Main Benefits for a T-Shirt Entrepreneur?
                    </Paragraph>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Low overheads"
                            text="If you use a print-on-demand service paired with an ecommerce store, your business can pretty much run itself. You will still need to be involved in marketing and customer service, but the ordering and fulfillment will be taken care of automatically."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Great introduction to entrepreneurship"
                            text="Most T-shirt entrepreneurs don’t stop there. This type of business is a relatively low-risk way to learn about running your own business, especially in the ecommerce space."
                            width="100%"
                        />
                    </div>

                </PanelWrapper>

            </CollapseWrapper>
        </TabsSection>

        <BlueContainer>
            <Container>
                <CenterBox>
                    <TextCenterLayout headline="Developing a Plan for Your Etsy Business"/>
                    <Paragraph big>
                        Before you start your business, there are a few key areas you need to focus on. You will need to
                        establish whether there’s a demand for your T-shirt business services, look at potential
                        benefits and pitfalls, understand how your business finances might look and ensure everything is
                        in order.
                    </Paragraph>
                    <Paragraph big>
                        Here are the steps you’ll need to take to setup your custom T-shirt business.
                    </Paragraph>
                </CenterBox>

                <ContentCenter>
                    <AccordionWithCounting content={AccordionCounting}/>
                </ContentCenter>

                <CenterBox style={{marginTop: "80px"}}>
                    <Paragraph big style={{fontWeight: "bold"}}>Do Market Research and Validate Your Etsy Products and
                        Services</Paragraph>
                    <Paragraph big>
                        Before you launch your T-shirt business, you need to understand if there’s a demand for what
                        you’re selling. That means carrying out market research and “validating” your products and
                        services. Here’s how to go about it:
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
                            to you. You might have better pricing, more exciting designs, an underserved niche, a
                            higher-quality service, faster delivery or some other special feature.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            There are likely to be plenty of competitors. Look through them and see the types of
                            clothing and designs that they are offering so you can find a gap in the market.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={ValidateIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Validate your products and services
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Test whether people will commit to spending real money on what you’re offering.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your T-shirt products.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            See if there are any market research reports for T-shirt businesses
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Ask questions about T-shirt businesses. You can find links to some excellent discussion
                            groups later in the article.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={MarketIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            See if there are any market research reports for T-shirt businesses
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Search locally, nationally or internationally to help you find your T-shirt niche.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>

                <CenterBox>
                    <Heading size={3}>
                        Understand Your Etsy Business Model and Financial Projections
                    </Heading>
                    <Paragraph big>
                        All businesses need a business model, which is how you will generate sales, provide products and
                        make money. Think about your business model now, because it’s better to have that in place so
                        you can start acquiring customers and generating revenue from day one.
                    </Paragraph>
                    <Paragraph big>
                        You will also need to look at financial projections for your T-shirt business. What are your
                        expected sales and revenues? What is your profitability? How much money will you keep in the
                        business to grow it? How much will you pay yourself and others? If you can, try to plan your
                        revenue for the next month, three months, year and two years.
                    </Paragraph>
                </CenterBox>
            </Container>
        </BlueContainer>

        <SimpleSection>
            <Container>
                <CenterBox>
                    <Heading>
                        Write a Business Plan for Your T-Shirt Business
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
                            Choose the Right Business Structure and Register Your T-Shirt Business
                        </Heading>
                        <Paragraph big>
                            Now that you have all the background information for your T-shirt business, it’s time to
                            make it into a reality. Starts by choosing the right structure or “legal entity” for your
                            business. In the U.S., there are four main business structures. They are:
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
                Starting a T-shirt business is a great way to get exposure to the fast-moving worlds of e-commerce and creative products. Although it’s difficult to succeed as a T-shirt entrepreneur, with the right niche, awesome designs and great marketing, you can certainly make an impression. Just remember to stay on top of your profit margins, try new things and learn how your T-shirts can help your customers express themselves.
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
    background: ${color.blue3};
    padding-top: 100px;
    position: relative;
`;

const CenterBox = styled.div`
    width: 100%;
    padding-bottom: 64px;
    
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

export default TshirtBusiness;
