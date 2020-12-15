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
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import BookIcon from "../../images/icons/we-know-it-can-be-daunting-to-start-a-bookstore-business.inline.svg";
import { color } from "../../components/styles/colors";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/bookstore/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/bookstore/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/bookstore/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/bookstore/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/bookstore/order-now";
import Regulations from "../../atomic/sections/type-of-business/bookstore/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/bookstore/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/bookstore/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/bookstore/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CkeckText from "../../components/static-check/text-only";
import OvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { tabs } from "../../static/type-of-business/bookstore";
import { TabPanel } from "react-tabs";

const GymPersonalTraining = () => (
  <Layout>
    <SEO
      title="How to Open a Bookstore | Starting a Bookstore Business"
      description="We want to help you get your bookstore off the ground. Read our guide for ideas, tips, and important things to know before you get started."
    />

    <Top
      ovalColor="sun"
      imageName="bookstore-main"
      imageAlt="Mr Bulb with seedling"
      headlineWidth={700}
    >
      <h1>How to Open an Independent Bookstore Business</h1>
      <p>
        A bookstore is one of the most enduring and traditional types of
        business you could open. Despite this, there have been plenty of
        challenges to the bookstore model over the last few years, with the
        increase in ecommerce, the rise of Amazon and the move toward ebooks.
      </p>
      <ButtonsBox>
        <Button
          theme="primary56"
          marginMD="0 24px 0 0"
          arrow
          content={{
            url: `${process.env.ORDER_URL}/form-order-now.php`,
            text: "Start Now",
          }}
        />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <TabsWrapper>
      <Oval>
        <OvalSvg />
      </Oval>
      <ReactTabs style={{ marginTop: "100px" }} content={tabs}>
        <TabPanel>
          <PanelWrapper>
            <Paragraph big>
              Against this background, you might wonder if it’s worth opening up
              a book shop — the good news is that with some careful planning and
              research, you could create a successful store that spreads
              information, entertainment and delight.
            </Paragraph>
            <Paragraph big>
              Of course it might not be easy, but entrepreneurs with the right
              approach can turn a passion for literature and manuscripts into a
              center of knowledge that your customers will love.
            </Paragraph>

            <Colorbox
              className="box"
              theme="icon"
              Icon={BookIcon}
              color={color.green3}
              curve
              curveColor={color.orange2}
            >
              <Heading size={2} template={4} left>
                We know it can be daunting to start a bookstore business, and
                we’re here to help.
              </Heading>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                We’ve supported over 100,000 people to form their business and
                provided answers, guidance and support to transform them into
                entrepreneurs. We’ll guide you through what you need to know to
                start your bookstore business and get it off the ground.
              </Paragraph>
            </Colorbox>

            <Paragraph big style={{ marginTop: "48px", fontWeight: "bold" }}>
              Read on for some insight into creating your own bookstore business
              and becoming an entrepreneur. In this guide we will cover:
            </Paragraph>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Statistics on why you should start a bookstore business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Choose the right business structure for your bookstore
                    company
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to find out if a boutique hotel business is right for
                    you
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Useful online tools for bookstore business owners
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Ideas for the type of bookstore business that you could form
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
                    Setting up your bookstore business (including location,
                    equipment, employees, taxes, finances, licenses and more)
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Bookstore business planning</Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={3}>Why You Should Start a New Bookstore</Heading>
            <Paragraph big>
              There are some great reasons to start a new bookstore business in
              the U.S. Aside from giving life to your interest in great writing,
              it’s also a good opportunity to build a community around
              literature and make some money. Here are some of the facts around
              bookshops:
            </Paragraph>

            <BlueBoxWithAbsoluteText
              absoluteText="10B"
              text="Approximate sales of books per year"
            />
            <BlueBoxWithAbsoluteText
              absoluteText="2.7B"
              text="More than this number are the books sold in the U.S. each year"
            />
            <BlueBoxWithAbsoluteText
              absoluteText="2,3000"
              text="Number of independent"
            />

            <div style={{ marginBottom: "30px", marginTop: "80px" }}>
              <Adventages
                headline="The number of independent bookstores grew by 35% between 2009 and 2015, with nearly 600 stores opened"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="In 2017, print book sales were up almost 11% from 2013, and sales of printed books have increased every year for the last five years."
                width="100%"
              />
            </div>

            <Paragraph big>
              This might be surprising given the size and influence of Amazon
              and digital media, but people are moving away from their screens
              to the comfort of the pages of a good story.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={3}>Is a Bookstore Business Right for You?</Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
              Although it can be exciting to form a bookstore business, there
              will be significant demands on you as a small business owner. Here
              are some of the things you can expect.
            </Paragraph>

            <Heading size={3}>A Day in the Life of a Bookstore Owner</Heading>
            <Paragraph big>
              Here are some of the typical tasks you’ll be performing for your
              bookstore business on a daily basis.
            </Paragraph>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Understanding the types of books that your customers want and
                  ordering them
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Keeping up with the newest releases
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Reordering stock that you’ve sold and making arrangements with
                  book distributors
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Selling books to people and managing staff
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Building a sense of community around your bookstore
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Maintaining the look and feel of your store
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Dealing with administration like financial management
                </Paragraph>
              </TextBoxed>
            </div>

            <Heading size={3}>
              Skills Needed by a Bookstore Entrepreneur
            </Heading>
            <Paragraph big>
              The following skills will be very useful in your role as a
              bookstore small business owner.
            </Paragraph>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Good interpersonal skills for dealing with employees and
                  customers
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Insight into what your customers want
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Excellent recordkeeping skills to stay on top of your
                  inventory and your finances
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Attention to detail of how you present and market your
                  bookstore business
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Great networking skills to build your presence in the local
                  community
                </Paragraph>
              </TextBoxed>
            </div>

            <Heading size={3}>
              What Your Bookstore Customers Are Looking For
            </Heading>
            <Paragraph big>
              The secret to running a successful bookstore is to create an
              excellent customer experience. One of the reasons independent
              bookshops are growing is that buying online doesn’t provide a
              sense of personal service or community. Bookstores that can meet
              those needs by understanding and providing what customers want are
              the most likely to succeed.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={3}>
              How to Focus Your Bookstore on People and the Community
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
              Here are some ideas for creating personal connections with
              customers and building a sense of community:
            </Paragraph>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Specialize in a particular niche of books and provide deep
                  insight into those areas — for example, you might focus on
                  first editions, foreign language manuscripts or books on
                  particular topics
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Hire expert staff or become a subject matter expert yourself
                  so you can share useful recommendations and information on the
                  books you’re selling
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Create personal relationships with regular customers and ask
                  them what types of books they would like you to carry
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Provide a comfortable ambiance and atmosphere (for example,
                  with comfortable well-lit areas where people can browse books)
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Think about adding a small cafe or coffee services to your
                  bookstore, both to help people relax and as an additional
                  revenue stream
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Hold community events and meetups in a friendly space
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Create book clubs, discussion groups and reading goals for
                  your customers
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Host special events like author readings
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Get people to share information about your bookstore on social
                  media
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Partner with other businesses in your city to hold “pop up”
                  events
                </Paragraph>
              </TextBoxed>
            </div>

            <Heading size={3}>Selling Books Online</Heading>
            <Paragraph big>
              You don’t need to limit yourself to just selling books over the
              counter. You can expand into wider markets by creating an online
              presence. Whether you sell through a third-party marketplace like
              Amazon or you have your own ecommerce site, you can create a
              useful additional revenue stream.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>
      </ReactTabs>
    </TabsWrapper>

    <ValidatingBusinessIdea />

    <BusinessPlan />

    <BusinessStructure />

    <SettingBusiness />

    <OrderNow />

    <Regulations />

    <InsuranceBusinessSection />

    <Taxes />

    <ToolsAndLinks />

    <Conclusion
      to={process.env.ORDER_URL + "/form-order-now.php"}
      buttonTitle="Start your Bookstore Business with us, today"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>
      <Paragraph big>
        With the right approach and customer relationships, your bookstore could
        be a huge success. Identify your niche, build your community, provide an
        excellent service and get your marketing right - that way you’ll get
        noticed and can share your love of books with everyone. Good luck!
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
  @media (min-width: 992px) {
    margin-top: 21px;
  }
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

export default GymPersonalTraining;
