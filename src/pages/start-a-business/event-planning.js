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
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import { color } from "../../components/styles/colors";
import { Heading } from "../../atomic/atoms/typography/heading";
import CkeckText from "../../components/static-check/text-only";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import TypeBusiness from "../../atomic/sections/type-of-business/event-planning/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/event-planning/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/event-planning/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/event-planning/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/event-planning/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/event-planning/order-now";
import Regulations from "../../atomic/sections/type-of-business/event-planning/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/event-planning/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/event-planning/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/event-planning/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import OvalSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";
import FireworksIcon from "../../images/icons/you-will-also-need-to-look-at-financial-projections-for-your-party-or-event-planning-business.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { tabs } from "../../static/type-of-business/event-planning";
import { TabPanel } from "react-tabs";

const EventPlanning = () => (
  <Layout>
    <SEO
      title="Starting an Event or Party Planning Business"
      description="We want to help you get your event planning business off the ground. Read our guide for ideas, tips, and important things to know before you get started."
    />

    <Top
      ovalColor="purple-2"
      imageName="event-planing-main"
      imageAlt="Mr Bulb with seedling"
      headlineWidth={700}
    >
      <h1>How to Start a Party or Event Planning Business</h1>
      <p>
        We’re social creatures - and whether we’re getting together to celebrate
        an occasion, accomplish a shared goal or indulge our interests, there’s
        a strong need for gathering with like-minded people. If you’re a great
        organizer, administrator and project manager, you can turn this desire
        into a party or event planning business.
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
      <TabsOval>
        <OvalSvg />
      </TabsOval>

      <ReactTabs content={tabs}>
        <TabPanel>
          <PanelWrapper>
            <Paragraph big>
              Whether you’re helping others enjoy a special moment, working with
              a business on their event needs or putting together other social
              gatherings, your skills are essential. Here’s why: Most people
              don’t have the time, expertise, networks, discipline or desire to
              coordinate dozens of different moving parts to make an event
              happen. If you’re great at those tasks, then individuals and
              businesses will seek you out for your organizational abilities.
            </Paragraph>

            <Colorbox
              className="box"
              theme="icon"
              Icon={FireworksIcon}
              color={color.purple3}
              curve
              curveColor={color.purple1}
            >
              <Heading size={2} template={4} left>
                We want to help you get your party or event planning business
                off the ground.
              </Heading>
              <Paragraph>
                Since 2004, we’ve helped over 100,000 people to become
                entrepreneurs, starting exciting businesses and bringing their
                ideas to life. We’ll give you the support, guidance and advice
                you need to create a business and make it into a success.
              </Paragraph>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Here is our simple guide to starting up a successful event or
                party planning business. From exploring the types of business
                you can start, to researching the legalities of setting up your
                business and the realities of your day to day operations, this
                guide is here to help.
              </Paragraph>
            </Colorbox>

            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Read on for some insight into creating your own planning business
              and becoming an entrepreneur. In this guide we will cover:
            </Paragraph>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Facts and figures on the success of party or event planning
                    businesses
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Groups, forums and support for party or event planning
                    business owners
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Ideas for types of party or event planning business you
                    could form
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Helpful software for party or event planning business owners
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Deciding whether a party or event planning business could be
                    right for you
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to choose whether your party or event planning business
                    should be an LLC or corporation
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Writing a business plan for your party or event planning
                    business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to validate your party or event planning business idea
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to start your party or event planning business (with
                    information on equipment, employees, location, permits,
                    finance, taxes and more)
                  </Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Why You Should Become an Event Planner
            </Heading>
            <Paragraph big style={{ marginBottom: "52px" }}>
              There are plenty of opportunities in the party and event planning
              space, and it’s a growing industry.
            </Paragraph>

            <BlueBoxWithAbsoluteText
              absoluteText="$5B"
              text="Revenue that the industry brings in every year"
            />
            <BlueBoxWithAbsoluteText
              absoluteText="125k"
              text="Number of party and event planning businesses in the U.S."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="2M"
              text="Number of events organized every year in the U.S."
            />

            <div style={{ marginBottom: "30px", marginTop: "48px" }}>
              <Adventages
                headline="The amount of revenue generated by event planning businesses has risen by almost 4% each year"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="The number of event and party planning businesses has grown by 2.1%, and the number of employees is up by 2.4%"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "48px" }}>
              <Adventages
                headline="The main types of parties that drive this revenue are weddings, birthday parties and corporate social events"
                width="100%"
              />
            </div>

            <Paragraph big>
              As you can see, there are plenty of opportunities to start your
              own party or event planning business. We’ll help you be part of
              that success.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Is a Party or Event Planning Business Right for You?
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
              Although it can be exciting to form a planning business, there
              will be significant demands on you as a small business owner. Here
              are some of the things you can expect.
            </Paragraph>

            <Heading size={3}>A Day in the Life of an Event Planner</Heading>
            <Paragraph big>
              Here are some of the typical tasks you’ll be performing for your
              party or event planning business on a daily basis.
            </Paragraph>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Negotiating and dealing with individuals and businesses who
                  want to use your services
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Understanding and gathering overall needs and detailed
                  requirements for events
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Finding spaces where you can hold events on the client’s
                  behalf
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Planning out events in detail, including all the third parties
                  you’ll need to involve
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Carrying out day-to-day project management to make sure the
                  right people are completing the right activity in the right
                  way at the right time
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Managing the budget, scope, vendors, staff, people, timescales
                  and other aspects of the event
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Dealing with permits, licenses, insurance, transport, lodging,
                  menus, music, security, food and other activities
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Hiring and managing staff to ensure events go smoothly
                </Paragraph>
              </TextBoxed>
            </div>

            <Heading size={3}>
              Skills Needed by a Party or Event Planning Business Entrepreneur
            </Heading>
            <Paragraph big>
              The following skills will be very useful in your role as a party
              or event planning small business owner.
            </Paragraph>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Expert project management skills since you’ll be managing
                  multiple tasks, deadlines, people and third parties for an
                  extended time
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Strong interpersonal and communication skills for managing
                  clients and third parties
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Focus and calmness under pressure as you’ll need to
                  troubleshoot if things don’t go quite to plan
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Good financial and resource management skills so you stay
                  within budget and deliver the scope agreed with the client
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Excellent administration skills so you can complete tasks
                  quickly
                </Paragraph>
              </TextBoxed>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <TextBoxed>
                <Paragraph big bottomMargin={0}>
                  Networking skills to build up trusted connections with
                  vendors, locations, staffing companies and third parties
                </Paragraph>
              </TextBoxed>
            </div>

            <Heading size={3}>
              What Your Party or Event Planning Customers Are Looking For
            </Heading>
            <Paragraph big>
              Ultimately, event and party planning clients want two things: for
              their event to be a success, and for it to run smoothly without
              any problems. They’re hiring you for peace-of-mind, and to make
              sure you can manage the event to a good conclusion.
            </Paragraph>

            <Paragraph big>
              Of course, they’ll also want you to deliver the event or party to
              the budget you’ve agreed, and they’ll expect you to troubleshoot
              any issues so they don’t need to get involved. Hiring an event
              planner is a way for clients to avoid doing the work themselves —
              so if you regularly communicate, provide reassurance and deal with
              everything on their behalf, they’ll be delighted.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>
      </ReactTabs>
    </TabsWrapper>

    <TypeBusiness />

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
      buttonTitle="Start your Event Planning Business with us, today"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>
      <Paragraph big>
        If you have the right discipline, project management ability and
        administration skills, becoming a party and event planner could be a
        great idea. The time to start is now — follow this guide, define your
        business, decide on your areas of focus and enjoy your work as you help
        others celebrate their most important life events.
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

const TabsOval = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default EventPlanning;
