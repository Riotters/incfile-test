import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import MegafonIcon from "../../images/icons/megafon.inline.svg";
import ColorfulRing from "../../images/rings.inline.svg";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import {Heading} from "../../atomic/atoms/typography/heading";
import Colorbox from "../../components/color-box";
import {color} from "../../atomic/atoms/styles/colors";
import CkeckText from "../../components/static-check/text-only";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/static-check/circle-checkmark-text-boxed";
import TypeOfBusiness from "../../atomic/sections/type-of-business/publishing-company-business/type-of-business";
import ValidatingBusinessIdea
    from "../../atomic/sections/type-of-business/publishing-company-business/validating-business";
import BusinessPlan from "../../atomic/sections/type-of-business/publishing-company-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/publishing-company-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/publishing-company-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/publishing-company-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/publishing-company-business/regulations";
import InsuranceBusinessSection
    from "../../atomic/sections/type-of-business/publishing-company-business/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/publishing-company-business/taxes";
import Conclusion from "../../atomic/sections/general/conclusion";
import styled from "styled-components";
import ToolsAndLinks from "../../atomic/sections/type-of-business/publishing-company-business/tools";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import {RingText, tabs} from "../../static/type-of-business/publishing-company-business";
import OvalSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import {TabPanel} from "react-tabs";

const ConstructionCompany = () => (
    <Layout>
        <SEO title="How to Start Publishing Company"
             description="Everyone likes traveling — new horizons, beautiful destinations and unique experiences mean we love packing our bags and spending time away from work and home."/>

        <Top ovalColor="blue" imageName="publishing-company-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start Publishing Company</h1>
            <p>The world of publishing is changing fast, and if you have an interesting and unique approach, you can
                create a thriving publishing business.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow
                        content={{url: `${process.env.ORDER_URL}/form-order-now.php`, text: "Start Now"}}/>
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
            <ReactTabs content={tabs}>
                <TabPanel>
                    <PanelWrapper>
                        <Paragraph big style={{marginBottom: "40px"}}>
                            Consumers are increasingly moving away from traditional publishing formats like paper books
                            and newspapers and consuming more of their content
                            digitally. It’s not just the written word either — videos, radio shows, podcasts and other
                            digital media are becoming increasingly popular.
                        </Paragraph>

                        <Heading size={2} template={3} left>For an entrepreneur with the right idea, publishing can be a great industry to
                            get into.</Heading>

                        <Paragraph big style={{marginBottom: "40px"}}>
                            From the solo blog writer to the head of a content publishing agency, there are
                            opportunities for publishers of all types. While it’s true that the internet has lowered
                            barriers to entry, if you can find a good publishing niche, you can build a reputation as a
                            place for entertaining,
                            insightful and trustworthy content.
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={MegafonIcon} color={color.babyblue3} curve
                                  curveColor={color.babyblue1}>
                            <Heading size={3} template={4}>We know it can be daunting to start a publishing business, and we’re here
                                to help.</Heading>

                            <Paragraph bottomMargin={0}>We’ve supported over 100,000 people to form their business and
                                provided answers, guidance and support to transform them into entrepreneurs.</Paragraph>
                        </Colorbox>

                        <Paragraph big style={{marginBottom: "40px", marginTop: "48px"}}>
                            To get you off on the right foot, here’s our simple guide to starting a successful
                            publishing business. From highlighting important facts to validating your ideas, and from
                            choosing the right structure to your learning about your options for managing and running
                            your business, you’ll
                            find the answers you need here.
                        </Paragraph>

                        <Heading size={3} style={{fontSize: "20px"}}>
                            Read on for some insight into creating your own publishing business and becoming an
                            entrepreneur. In this guide we will cover:
                        </Heading>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Statistics on why you should start a publishing company</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Learning if a publishing business could be right for you</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Different types of publishing companies</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>How to validate your publishing business idea</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Helpful software for publishing business owners</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Groups, forums and support for publishing company owners</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Setting up your publishing business, including location, equipment,
                                        employees, taxes, finances, licenses and more</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>How to choose whether your publishing company should be an LLC or
                                        corporation</Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>Publishing business planning</Paragraph>
                                </CkeckText>
                            </ListBox>
                        </ListWrapper>
                    </PanelWrapper>
                </TabPanel>

                <TabPanel>
                    <PanelWrapper>
                        <Heading size={2} template={3} left>Why You Should Start a New Travel Agency</Heading>

                        <Paragraph big>This is why publishing businesses are so exciting — how can you be part of that
                            success? We're here to help you figure that out.</Paragraph>

                        <Paragraph big bottomMargin={52}>
                            Because publishing is changing so rapidly, we thought it would be interesting to share some
                            facts and figures on the current state of the industry:
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="$26B"
                                                 text="The U.S. book publishing industry is worth over a year."/>
                        <BlueBoxWithAbsoluteText absoluteText="$18B"
                                                 text="The revenue from digital publishers across all formats a year."/>
                        <BlueBoxWithAbsoluteText absoluteText="$2.7B"
                                                 text="Approximate numbers of?books sold every year"/>

                        <ColorFulCircleWithTextAndList style={{marginTop: "70px"}} CircleSVG={ColorfulRing}
                                                       title={RingText.title} list={RingText.list} withBg={true}/>

                        <Adventages
                            headline="Physical and online retail each account for about half of the book publishing market"
                            width="100%"/>

                        <Adventages
                            headline="Adult nonfiction is the fastest-growing area, with a 5 percent annual increase"
                            width="100%"/>

                        <Adventages headline="Downloaded audio content is the fastest growing of publisher products"
                                    width="100%"/>
                    </PanelWrapper>
                </TabPanel>

                <TabPanel>
                    <PanelWrapper>
                        <Heading size={2} template={3} left>Is a Publishing Company Right for You?</Heading>

                        <Paragraph big bottomMargin={52}>
                            Although it can be exciting to form a publishing business, there will be significant demands
                            on you as a small business owner. Here are some of the things you can expect:
                        </Paragraph>

                        <Heading size={3}>A Day in the Life of a Publisher</Heading>

                        <Paragraph big bottomMargin={52}>
                            Here are some of the typical tasks you’ll be performing for your publishing business on a
                            daily basis:
                        </Paragraph>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Working with writers on new content ideas and
                                pitches</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Possibly writing content yourself</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Working with editors to polish work</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Establishing how you are going to make money from
                                publishing</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Sharing the latest articles and publications on social media and
                                other forums</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Working with artists, developers and others to add images,
                                context and other interactive content</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "48px"}}>
                            <Paragraph bottomMargin={0}>Working with distributors to share content</Paragraph>
                        </TextBoxed>

                        <Heading size={3}>Skills Needed by a Publisher</Heading>

                        <Paragraph big bottomMargin={52}>
                            The following skills will be very useful in your role as a publishing small business owner:
                        </Paragraph>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>The ability to know what will appeal to your
                                audience</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Developing a strong brand, approach and tone of voice so you
                                have a distinctive style</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Skimming through multiple pitches and ideas to identify those
                                that have commercial appeal and value to consumers</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Juggling multiple freelancers or employees to present content in
                                the best possible way</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Collaborating with media outlets and posting on social media to
                                maximize content visibility</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "48px"}}>
                            <Paragraph bottomMargin={0}>Deciding on future publishing schedules and content strategies
                                and commissioning relevant work</Paragraph>
                        </TextBoxed>

                        <Heading size={3}>What Your Customers Are Looking For</Heading>

                        <Paragraph big bottomMargin={52}>
                            There’s a market for almost all types of publishing, so well-researched, interesting work
                            will likely find an audience. Your content should inform, educate, entertain, or inspire the
                            consumer.
                        </Paragraph>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Inform: Tell your audience something they didn’t know about
                                before</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Educate: Share skills and instructions to achieve a specific
                                outcome</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>Entertain: Amuse or otherwise engage with your media
                                consumers</Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "48px"}}>
                            <Paragraph bottomMargin={0}>Inspire: Share stories and anecdotes to involve and move your
                                consumers</Paragraph>
                        </TextBoxed>
                    </PanelWrapper>
                </TabPanel>
            </ReactTabs>
        </TabsWrapper>

        <TypeOfBusiness/>

        <ValidatingBusinessIdea/>

        <BusinessPlan/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <InsuranceBusinessSection/>

        <Taxes/>

        <ToolsAndLinks/>

        <Conclusion to={process.env.ORDER_URL + "/form-order-now.php"}
                    buttonTitle="Start your Publishing Company Business with us, today">
            <Heading size={3} style={{fontSize: "40px", marginTop: "300px"}}>
                Conclusion
            </Heading>

            <Paragraph big>The internet has made publishing entrepreneurship available to everyone. If you can find a
                great niche, understand your audience and put together a solid publishing business plan, you will have
                every chance for success.</Paragraph>
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

const Oval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default ConstructionCompany;
