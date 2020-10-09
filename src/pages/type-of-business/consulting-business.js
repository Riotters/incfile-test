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
import Tab1Icon from "../../images/icons/consulting-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import {Heading} from "../../atomic/atoms/typography/heading";
import CkeckText from "../../components/static-check/text-only";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TabsSection from "../../atomic/partials/tabs";
import TypeBusiness from "../../atomic/sections/type-of-business/consulting-business/type-business";
import BusinessStructure from "../../atomic/sections/type-of-business/consulting-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/consulting-business/setting-business";
import ToolsAndLinks from "../../atomic/sections/type-of-business/consulting-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import Rings from "../../images/rings.inline.svg";
import {RingText} from "../../static/type-of-business/consulting-business";
import OvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import {color} from "../../atomic/atoms/styles/colors";

const ConsultingBusiness = () => (
    <Layout>
        <SEO title="How to Start a Consulting Business"
             description="If you have valuable insight and expertise you want to share, then starting a consulting business is a great way to monetize your strategic approach, skills and experience. Consultants come in many different types with specialists in hundreds of niches using thousands of varied skills and techniques."/>

        <Top ovalColor="yellow" imageName="consulting-business-main" imageAlt="Mr Bulb with seedling"
             headlineWidth={700}>
            <h1>How to Start a Consulting Business</h1>
            <p>
                If you have valuable insight and expertise you want to share,
                then starting a consulting business is a great way to monetize
                your strategic approach, skills and experience. Consultants come
                in many different types with specialists in hundreds of niches
                using thousands of varied skills and techniques.
            </p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{text: "Start Now", url: "/"}} />
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
                    <TabTitle title="Consulting Business" SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Other businesses hire consulting experts because they want to “buy in” expert opinions,
                            ideas
                            and resources that don’t exist in their organization already. If you have a proven track
                            record
                            of transforming businesses for the better, you can turn that into paid insight, exchanging
                            your
                            time and skill set for well-paid consulting jobs. Consulting provides deep insight to an
                            organization without them having to hire expert staff on a permanent or long-term basis.
                        </Paragraph>

                        <Paragraph big>
                            Due to the expertise offered by consultants, the rates charged are normally high. So a
                            consulting business is a great business to start if you want to make a great income and not
                            work
                            very many hours.

                            But where do you start? In this guide we’ll explore everything you need to do to set up your
                            consulting business and maximize your chances for success. We’ll cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Types of consulting business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Resources for your consulting business
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
                                        Information on taxes and finances for your consulting business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Questions you should ask to see
                                        if you’re ready to start a consulting business
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
                                        ... and much more
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>

                        <Paragraph big style={{fontWeight: "bold", marginTop: "48px", color: color.black}}>
                            By the time you’ve read through our complete consulting business guide, you will have all
                            the
                            information you need to set up and manage a thriving consulting business. Let’s get into it.
                        </Paragraph>

                        <Button arrow theme="primary48"
                                content={{text: "Download: Start a Consulting Business Guide", url: "/"}}
                                width="444px"/>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Key Consulting Business Background Data and Statistics
                        </Heading>
                        <Paragraph big>
                            This all points to the consulting industry being ripe with new opportunities for focused
                            entrepreneurs, so now might be the perfect time to dive into starting your consulting
                            business.
                            Incfile is here to help you form your consulting business and understand the ins and outs of
                            owning a consulting company.
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "52px"}}>
                            The consulting space is dominated by several major businesses including PwC, Deloitte, Ernst
                            and
                            Young, Boston Consulting Group, McKinsey, Accenture, IBM and KPMG. But don't be deterred —
                            there
                            is still room for a small boutique consulting firm to do very well.
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="1.4M"
                                                 text="People are employed in the management and technical consulting services in the U.S."/>
                        <BlueBoxWithAbsoluteText absoluteText="$150"
                                                 text="The typical consulting fee an hour at entry-level and over 0300 an hour for experienced consultants."/>

                        <div style={{marginBottom: "30px", marginTop: "48px"}}>
                            <Adventages
                                headline="The amount of revenue generated by event planning businesses has risen by almost 4% each year"
                                width="100%"
                            />
                        </div>

                        <ColorFulCircleWithTextAndList titleWidth="100%" list={RingText.list} withBg={true}
                                                       CircleSVG={Rings}
                                                       title="The global business consulting market was worth $250 billion in 2016, up from $205 billion in 2011. This overall total breaks down into the following industries:"/>
                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Questions to Ask Before You Start a Consulting Business
                        </Heading>
                        <Paragraph big style={{marginBottom: "24px", fontWeight: "bold", color: color.black}}>
                            Is Consulting Entrepreneurship For You?
                        </Paragraph>
                        <Paragraph big>
                            If you want to be a consultant, you need to demonstrate industry-leading expertise. You must
                            bring unique insight, techniques, methods and experience to solving business issues in your
                            niche.
                        </Paragraph>
                        <Paragraph big>
                            As a consultant you will be expected to get a very quick understanding of an organization's
                            problems, spend time analyzing those issues and come up with practical examples of how to
                            make
                            changes.
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Being a consultant is all about “demonstrating your value.” Businesses will be expecting
                            excellent results for the fees they are paying, so it’s all about delivering in accordance
                            with
                            those expectations.
                        </Paragraph>

                        <Paragraph big style={{marginBottom: "24px", fontWeight: "bold", color: color.black}}>
                            What Are the Main Skills, Expertise and Experience to Be a Successful Consulting
                            Entrepreneur?
                        </Paragraph>
                        <Paragraph big>
                            The specific skills, expertise and experience for a consultant depend on the niche you
                            decide to
                            go into, but here are some general guidelines:
                        </Paragraph>

                        <div style={{marginBottom: "30px", marginTop: "48px"}}>
                            <Adventages
                                headline="Networking"
                                text="You must be good at dealing with others and building networks and connections between people."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Measurement and analysis"
                                text="You will need to be able to measure and understand the current shape of an issue. Then you will have to carry out analysis to identify specifically where problems are so you can make recommendations for improvement."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Implementation"
                                text="You must have experience at working with project managers or other people making changes in an organization as you will need buy-in to turn your ideas into practical actions that deliver a result."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Questioning"
                                text="Consulting starts with asking questions, and lots of them. You must be an expert at understanding exactly what an issue is, defining it and finding out the changes that need to be made."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Techniques and methods"
                                text="You will need a large toolbox of techniques and methods for improvement. These could be proven tools, frameworks or approaches that have worked in the past. You will also need an up-to-date understanding of industry best practice and benchmarks."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "120px"}}>
                            <Adventages
                                headline="Niche and industry expertise"
                                text="Perhaps most important of all, you must have established insight, experience and authority in your chosen area. You need to demonstrate thoughtful, innovative approaches that will deliver practical, sustainable transformation for your client."
                                width="100%"
                            />
                        </div>

                        <Paragraph big style={{marginBottom: "24px", fontWeight: "bold", color: color.black}}>
                            What Are the Main Skills, Expertise and Experience to Be a Successful Consulting
                            Entrepreneur?
                        </Paragraph>
                        <Paragraph big>
                            Consultants come across many challenges. These start with finding clients — consultant
                            services
                            can be expensive, so building up a network of good leads and opportunities is vital. You
                            will
                            want to build up a robust pipeline of work to ensure your business is profitable.
                        </Paragraph>
                        <Paragraph big>
                            Next, you will need to establish strong methods for working with people. Key skills include
                            gathering information, carrying out analysis and making recommendations.
                        </Paragraph>
                        <Paragraph big>
                            As business needs change, you must be flexible and adaptable. You will have to use your
                            experience to understand what is going on below the surface of an issue and then use tools
                            and
                            techniques to resolve the underlying problems.
                        </Paragraph>
                        <Paragraph big>
                            Finally, you need to deliver sustainable results. This means getting involved with project
                            managers, business analysts and operations experts to check that your recommendations are
                            being
                            implemented in the best possible way.
                        </Paragraph>

                        <Button arrow theme="primary48"
                                content={{text: "Download: Start a Consulting Business Guide", url: "/"}}
                                width="444px"/>

                    </PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
        </TabsWrapper>

        <TypeBusiness/>

        <BusinessStructure/>

        <SettingBusiness/>

        <ToolsAndLinks/>

        <Conclusion to="/" buttonTitle="Start your Event Planning Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                If you have experience and insight into a particular industry, sector or niche, then consulting could be
                a viable business option for you. Combine your experience with an innovative approach, strong skills,
                and proven results, and you will be off to a great start in your new career as a consultant.
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
    margin-top: 100px;
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    
    @media (min-width: 420px) {
        width: 420px;
    }
`;

export default ConsultingBusiness;
