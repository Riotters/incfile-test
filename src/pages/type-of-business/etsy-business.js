import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import Tab1Icon from "../../images/icons/etsy-business.inline.svg";
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
import InvolvedIcon from "../../images/icons/get-involved-with-business-communities.inline.svg"
import {color} from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalOrange2Svg from "../../images/oval-orange-2.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import IconCircle from "../../components/icons/circle";
import ArrowSVG from "../../images/arrow.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company-2.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/etsy-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/etsy-business/order-now";
import {RingText, toolsList} from "../../static/type-of-business/etsy-business";
import HireEmployees from "../../atomic/sections/type-of-business/etsy-business/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import ColorfulRing2 from "../../images/rings-7.inline.svg";
import Adventages from "../../components/adventages";
import AdventagesWithLongText from "../../atomic/molecules/mixed-blocks/adventages-with-long-text";
import TabOvalSvg from "../../images/ovals/bottom-right-transparent-green3.inline.svg";
import TabOval2Svg from "../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import BusinessPlanOvalSvg from "../../images/ovals/top-left-transparent-pink.inline.svg";
import BlueContainerOvalSvg from "../../images/ovals/top-right-transparent-blue.inline.svg";
import Curve from "../../atomic/atoms/shapes/curve";
import {Link} from "gatsby";
import {shadow} from "../../atomic/atoms/styles/shadows";

const EtsyBusiness = () => (
    <Layout>
        <SEO title="How to Start an Etsy Business"
             description="Etsy has opened up the world of creativity and ecommerce to a whole new generation of entrepreneurs."/>

        <Top ovalColor="yellow" imageName="etsy-bussines" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start an Etsy Business</h1>
            <p>Etsy has opened up the world of creativity and ecommerce to a whole new generation of entrepreneurs.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{url: "/", text: "Start Now"}} />

            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabWrapper>
            <TabOval>
                <TabOvalSvg/>
            </TabOval>

            <TabOval2>
                <TabOval2Svg/>
            </TabOval2>

            <TabsSection>
                <TabHeading>
                    <TabTitle title="Etsy Business" SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Heading size={3} style={{marginBottom: "24px"}}>Starting an Etsy Business</Heading>
                        <Paragraph big>
                            What used to be the purview of craft fairs and market stands can now easily be sold online
                            to a
                            whole new audience.

                        </Paragraph>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            If you want to be a successful Etsy entrepreneur, you need a strong, robust plan for your
                            new
                            business. There’s plenty of competition in the Etsy marketplace, so having a novel approach,
                            creating origina designs and getting proper business discipline in place is essential.
                        </Paragraph>

                        <Heading size={3} style={{marginBottom: "24px", fontSize: "20px"}}>Etsy Business formation
                            guide</Heading>
                        <Paragraph big>
                            From validating your business and doing the research to filing your
                            paperwork and running your business, this guide will help you out. Read on
                            for some insight into creating your own life or business coaching company
                            and becoming an entrepreneur who helps people make the best of themselves.
                            In this guide we will cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Understanding the world of Etsy
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Paying taxes for your Etsy business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Deciding if you’re ready to start an Etsy business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Hiring employees, managing finances and administering your Etsy business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Planning out your Etsy business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Locating other resources for your Etsy business
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
                            By the time you’ve read through our complete Etsy business guide, you will have all the
                            information you need to set up and manage a thriving crafting business. Let’s get into it.
                        </Paragraph>
                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3} style={{fontWeight: "bold", fontSize: "24px", marginBottom: "64px"}}>How to
                            Make
                            Money on Etsy</Heading>
                        <Heading big
                                 style={{
                                     fontWeight: "bold",
                                     color: color.black,
                                     fontSize: "24px",
                                     marginBottom: "24px"
                                 }}>
                            Key Background Stats for Etsy Businesses
                        </Heading>
                        <Paragraph big style={{marginBottom: "76px"}}>
                            The size and opportunity in the Etsy marketplace might surprise you:
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="1.7M"
                                                 text="Sellers on Etsy in 2016, making on average $1,800 each"/>
                        <BlueBoxWithAbsoluteText absoluteText="300M"
                                                 text="People purchased goods on Etsy in 2016, spending an average of around $100 each"/>
                        <BlueBoxWithAbsoluteText absoluteText="$3B"
                                                 text="Worth of goods were sold through Etsy in 2016"/>

                        <ColorFulCircleWithTextAndList CircleSVG={ColorfulRing2} title={RingText.title}
                                                       list={RingText.list}
                                                       withBg={true}/>

                        <div style={{marginTop: "48px"}}>
                            <Adventages
                                headline="Etsy is in the top 10 most popular e-commerce websites in the U.S."
                                width="100%"
                            />
                        </div>

                        <Adventages
                            headline="Nearly 55 million people use the platform"
                            width="100%"
                        />

                        <Adventages
                            headline="There are around 50 million products listed for sale on Etsy"
                            width="100%"
                        />

                        <Paragraph big style={{marginTop: "18px"}}>
                            This all points to Etsy being ripe with new opportunities for focused entrepreneurs, so now
                            might be the perfect time to dive into starting your Etsy business. Incfile is here to help
                            you
                            form your Etsy business and understand the ins and outs of owning a company.
                        </Paragraph>
                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3} style={{marginBottom: "24px"}}>The Keys to Success: What Etsy Customers
                            Want</Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            With nearly 2 million sellers and 50 million products already in the Etsy marketplace, you
                            need
                            to stand out from the crowd if you want your Etsy business to be a success. This means
                            understanding what your Etsy customers want from your products. We recommend focusing on
                            several
                            areas:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <Adventages
                                headline="Originality"
                                text="Create beautiful, original designs that showcase your skills and talents. Use your unique creativity and flair to build a “wow” factor into the items you craft — products that your potential customers won’t be able to find anywhere else."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <Adventages
                                headline="Affordability"
                                text="Although customers realize they may need to pay a little more for quality, they’re still looking for a bargain. Make sure you price your products well with enough of a profit margin that you can grow your business, but keep prices low enough that you’re competitive with similar sellers."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <Adventages
                                headline="Presentation"
                                text="Finding the right niche to grow your business in is essential. Your niche will largely be dictated by your own crafting skills, with the most popular categories being jewelry, stickers, clothing, craft supplies, bridal goods and baby shower decorations."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <Adventages
                                headline="Niche"
                                text="Showcase your products in the best possible way. This means using expert photography, good lighting, great backgrounds and the right categories and keywords. Search is one of the main ways customers find items on Etsy, so ensure your descriptions are keyword rich."
                                width="100%"
                            />
                        </div>

                        <Paragraph big style={{marginBottom: "48px"}}>
                            If you can combine these four areas together, you’ll have the perfect ingredients for a
                            successful Etsy business.
                        </Paragraph>

                        <Heading size={3} style={{marginBottom: "24px"}}>
                            Main Priorities for an Etsy Seller
                        </Heading>
                        <Paragraph big>
                            With sellers earning an average of under $2,000 on Etsy in a year, it’s clear that for many
                            people Etsy just provides some side income. If you want to make Etsy a major revenue stream
                            for
                            you, that needs some strong focus and a disciplined approach. Here are the challenges and
                            advantages you need to be aware of.
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <Adventages
                                headline="Competition"
                                text="Search locally, nationally or internationally. There are several in-depth market research reports available for the etsy business in the U.S. You will also want to research demographics in your proposed area — you’re looking for densely-populated areas with lots of renters or students."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <Adventages
                                headline="Branding"
                                text="Although your Etsy shop will be under Etsy’s own branding, you still have the opportunity to create an identity for your business. Look at what other sellers are doing and try to create a brand that stands out from the crowd. With most Etsy users being female, you will want a brand that’s friendly and approachable that speaks to their needs and life circumstances."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <AdventagesWithLongText
                                title="Discipline"
                                width="100%"
                            >
                                <Paragraph big mixed={true} style={{marginBottom: 0, paddingBottom: 0}}>
                                    You need to think of your Etsy shop as an independent business with all the focus
                                    that
                                    one requires. You should have proper plans and processes in place, practice strong
                                    financial management and have an in-depth understanding of your costs, sales prices,
                                    revenue and profit margins. Bear in mind that there are fees you need to pay to
                                    Etsy, as
                                    follows:
                                    <br/><br/>
                                    <SpecialList>
                                        <li>Listing fee of 20 cents per item, payable every four months</li>
                                        <li>Commission of 3.5 percent of the selling price of each product</li>
                                        <li>Payment processing fee of 3 percent of the item selling price plus 20
                                            cents
                                        </li>
                                    </SpecialList>
                                </Paragraph>
                            </AdventagesWithLongText>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <Adventages
                                headline="Marketing"
                                text="Finally, marketing will play a key role in the success of your Etsy business. You will need to develop a strong marketing plan that combines various channels to give you the most visibility and reach. Look into advertising on Etsy itself, organic SEO, paid search marketing, social media marketing and various other digital marketing opportunities. Make sure you can track your return on marketing investment."
                                width="100%"
                            />
                        </div>
                    </PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
        </TabWrapper>

        <BlueContainer>
            <BlueContainerOval>
                <BlueContainerOvalSvg/>
            </BlueContainerOval>
            <Container>
                <CenterBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <TextCenterLayout headlineWidth={770} headline="Developing a Plan for Your Etsy Business"/>
                    <Paragraph big>
                        Before you start your business, there are a few key areas you need to focus on. You will need to
                        establish whether there’s a demand for your Etsy products, look at potential benefits and
                        pitfalls, understand how your business finances might look and ensure everything is in order.
                    </Paragraph>
                    <Paragraph big style={{marginBottom: "40px"}}>
                        In short, you need a business plan — here’s how to think about your business idea.
                    </Paragraph>

                    <Heading size={3} style={{marginBottom: "24px"}}>
                        Do Market Research and Validate Your Etsy Products and Services
                    </Heading>

                    <Paragraph big>
                        Before you launch your Etsy business, you need to understand if there’s a demand for what you’re
                        selling. That means carrying out market research and “validating” your products and services.
                        Here’s how to go about it:
                    </Paragraph>
                </CenterBox>

                <GridSectionList>
                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdentifyIcon}
                                        imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            These are the areas that will set you apart from competitors and encourage customers to come
                            to you. You might have better pricing, a higher-quality service, faster delivery, unique
                            products or some other special feature. Be sure to bring this out in what you do.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon}
                                        imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Carefully review all the possible Etsy sellers who will be competing by selling similar
                            products to you. Look at how they structure their shops, products and pricing. Think about
                            what you could do differently.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={ValidateIcon}
                                        imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Validate your products and services
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Test whether people will commit to spending real money on what you’re offering before
                            over-committing. Create prototypes of key products and test them in the marketplace to see
                            if they generate interest and sales.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon}
                                        imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your Etsy products. See if
                            you can identify new trends that you could take advantage of. Get involved in forums where
                            your likely customers are hanging out.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={InvolvedIcon}
                                        imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Ask questions about Etsy businesses. You can find links to some excellent discussion groups
                            later in the article.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>

                <CenterBox>
                    <Heading size={3}>
                        Understand Your Etsy Business Model and Financial Projections
                    </Heading>
                    <Paragraph big>
                        All businesses need a business model, which is how you will generate sales, provide services and
                        make money. Think about your business model now, because it’s better to have that in place so
                        you can start acquiring customers and generating revenue from day one.
                    </Paragraph>
                    <Paragraph big>
                        You will also need to look at financial projections for your Etsy business. What are your
                        expected sales and revenues? What is your profitability? How much money will you keep in the
                        business to grow it? How much will you pay yourself? If you can, try to plan your revenue for
                        the next month, three months, year and two years.
                    </Paragraph>
                </CenterBox>
            </Container>
        </BlueContainer>

        <SimpleSection>
            <BusinessPlanOval>
                <TabOvalSvg/>
            </BusinessPlanOval>
            <BusinessPlanOval2>
                <BusinessPlanOvalSvg/>
            </BusinessPlanOval2>
            <Container>
                <CenterBox>
                    <Heading>
                        Write a Business Plan for Your Etsy Business
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
                        We’ve got the perfect <Link to="/">guide to writing your business plan.</Link>
                    </Paragraph>
                </CenterBox>
            </Container>
        </SimpleSection>

        <OrangeContainer>

            <Oval>
                <OvalOrange2Svg/>
            </Oval>

            <BusinessOwnerResponsibilities>
                <ImageContent image="unique-business-2" paddingTop="60">
                    <Heading size={4} style={{fontSize: "24px"}}>
                        Do I Need an LLC to Sell on Etsy?
                    </Heading>
                    <Paragraph big>
                        Now that you have all the background information for your Etsy business, it’s time to
                        legally form your business entity. Many people wonder if they should have an LLC for their
                        Etsy business, or if you can run your Etsy shop as a sole proprietor. In most cases, our
                        recommendation is to set up an LLC so you can separate your business and personal assets—but
                        the right business structure for you depends on your business needs. In the U.S., there are
                        five main business structures. They are:
                    </Paragraph>

                    <TextBlockWithImage
                        SvgImage={HandsIcon}
                        textBackgroundColor="transparent"
                        imageBackgroundColor={color.white}
                        imageShadowColor={shadow.white2}
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Sole Proprietorship
                            </FlexLink>
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
                        imageShadowColor={shadow.white2}
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Limited Liability Company or LLC
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            The most common type of business entity. An LLC is fast, simple and inexpensive to setup
                            and maintain. It protects your personal finances and assets and keeps them separate from
                            those of your business.
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
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Series LLC
                            </FlexLink>
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
                        imageShadowColor={shadow.white2}
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                S Corporation
                            </FlexLink>
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
                        imageShadowColor={shadow.white2}
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                C Corporation
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            These are the largest and most complex types of businesses and are far more than the
                            average entrepreneur or business owner will need.
                        </Paragraph>
                    </TextBlockWithImage>

                    <Paragraph big style={{paddingTop: "48px", paddingBottom: 0}} mixed={true}>
                        If you've still got questions about different types of business entities, check out our
                        <Link to="/">in-depth guide</Link>, or hear our answers to the <Link
                        to="/">most common questions</Link> about LLCs vs.
                        corporations.
                    </Paragraph>
                    <Paragraph big style={{paddingTop: "48px", paddingBottom: 0}} mixed={true}>
                        If you're ready to start your Etsy LLC, you can check out our <Link to="/">LLC formation guide
                        for your
                        state</Link>, or have Incfile take care of all the paperwork for you.
                    </Paragraph>

                    <Button theme="primary48" arrow width="365px"
                            content={{url: "/", text: "Start your business with us, today!"}}>
                        Start your business with us, today!
                    </Button>
                </ImageContent>
            </BusinessOwnerResponsibilities>

        </OrangeContainer>

        <SettingBusiness/>

        <OrderNow/>

        <HireEmployees/>

        <ToolsWrapper>
            <ToolsOval>
                <TabOvalSvg/>
            </ToolsOval>
            <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools}
                         headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </ToolsWrapper>

        <Conclusion to="/" buttonTitle="Start your Etsy Business with us, today">
            <Heading size={3} style={{fontSize: "40px"}}>Conclusion</Heading>
            <Paragraph big>
                Etsy is a very empowering marketplace. In particular it’s a great way for female entrepreneurs to get
                started and with the right approach and discipline, it can grow from being a side project to becoming a
                powerful revenue stream. Follow the advice in this Etsy guide, and you’ll be able to create an Etsy
                business selling beautiful and amazing crafted products to the world.
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
    max-width: 770px;
    padding-bottom: 100px;
    position: relative;
    margin: 0 auto;
`;

const GridSectionList = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 70px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const SimpleSection = styled.div`
    padding-top: 100px;
    position: relative;
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
  display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`

const SpecialList = styled.ul`
    list-style-type: none;
    padding-left: 15px;
    
    li{
        margin-bottom: 24px;
        position: relative;
        
        &:before{
            content: "";
            display: block;
            background-color: ${color.green1};
            width: 4px;
            height: 4px;
            border-radius: 50px;
            position: absolute;
            top: 12px;
            left: -12px;
        }
    }
`;

const TabWrapper = styled.section`
      margin-top: 120px;
      position: relative;
      @media (min-width: 992px){
          margin-top: 21px;
      }
`;

const TabOval = styled.div`
    position: absolute;
    width: 420px;
    top: 0;
    left: 0;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const TabOval2 = styled.div`
    position: absolute;
    width: 420px;
    top: 677px;
    right: 0;
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const BlueContainerOval = styled.div`
    position: absolute;
    width: 570px;
    top: 0;
    right: 0;
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const BusinessPlanOval = styled.div`
    position: absolute;
    width: 420px;
    top: 0;
    left: 0;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
    
    svg{
        transform: scaleY(-1);
    }
`;

const BusinessPlanOval2 = styled.div`
    position: absolute;
    width: 720px;
    top: 534px;
    right: 0;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const ToolsOval = styled.div`
    position: absolute;
    width: 720px;
    bottom: 530px;
    right: 0;
    z-index: -1;
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
    
    svg{
        transform: scaleY(-1);
    }
`;

const ToolsWrapper = styled.section`
    position: relative;
`;

const FlexLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export default EtsyBusiness;
