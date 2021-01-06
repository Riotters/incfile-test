import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import TravelIconColorBox from "../../images/icons/we-know-it-can-be-daunting-to-start-your-own-travel-agency.inline.svg";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Heading } from "../../atomic/atoms/typography/heading";
import Colorbox from "../../components/color-box";
import { color } from "../../atomic/atoms/styles/colors";
import CkeckText from "../../components/static-check/text-only";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/static-check/circle-checkmark-text-boxed";
import TypeOfBusiness from "../../atomic/sections/type-of-business/travel-agency/type-of-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/travel-agency/validating-business";
import BusinessPlan from "../../atomic/sections/type-of-business/travel-agency/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/travel-agency/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/travel-agency/setting-business";
import Regulations from "../../atomic/sections/type-of-business/travel-agency/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/travel-agency/insurance-business";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import { tabs, toolsList } from "../../static/type-of-business/travel-agency";
import Taxes from "../../atomic/sections/type-of-business/travel-agency/taxes";
import OvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import OvalSvg2 from "../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Top from "../../atomic/partials/top";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";
import CircleSvg from "../../images/chart-travel-agency.inline.svg";
import CompleteCheckListSection from "../../atomic/sections/type-of-business/general/complete-checklist-section";

const TravelAgency = () => (
  <Layout>
    <SEO
      title="Become a Travel Agent | Start Your Own Travel Agency"
      description="If you love travel and matching the right people with the ideal vacation, then opening a travel agency could be a great business move. Learn more."
    />

    <Top
      ovalColor="green"
      imageName="travel-agency-main"
      imageAlt="set up a travel agent"
      headlineWidth={700}
    >
      <h1>How to Start a Travel Agency</h1>
      <p>
        Everyone likes traveling — new horizons, beautiful destinations and
        unique experiences mean we love packing our bags and spending time away
        from work and home.
      </p>
      <ButtonsBox>
        <Button
          externalLink
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
      <ReactTabs content={tabs}>
        <TabPanel>
          <PanelWrapper>
            <Paragraph big style={{ marginBottom: "40px" }}>
              That’s why travel agents are so important: they help bring our
              vacation dreams to life and build memories that will stay with us
              forever.
            </Paragraph>

            <Paragraph big style={{ marginBottom: "40px" }}>
              Even with the rise of online travel booking, many vacationers want
              the reassurance of a travel expert to talk them through countries,
              destinations, hotels, flights, tours and more.
            </Paragraph>

            <Paragraph big style={{ marginBottom: "40px" }}>
              If you have the expertise to understand travel itineraries and
              match the right people with the ideal experience, then opening a
              travel agency could be a great business move.
            </Paragraph>

            <Colorbox
              className="box"
              theme="icon"
              Icon={TravelIconColorBox}
              color={color.blue3}
              curve
              curveColor={color.blue1}
            >
              <Heading size={3} template={4}>
                Here’s how social media influencers make money:
              </Heading>

              <Paragraph bottomMargin={0}>
                We’ve helped over 500,000 people form their business and
                provided answers, guidance and support to transform them into
                entrepreneurs. We’ll guide you through what you need to know to
                start your travel agency business and get it off the ground.
              </Paragraph>
            </Colorbox>

            <Paragraph big style={{ marginBottom: "40px", marginTop: "48px" }}>
              To get you started on the right foot, here’s our simple guide on
              how to become a travel agent. From highlighting important facts to
              validating your ideas, and from choosing the right structure to
              managing and running your business, you’ll find the answers you
              need.
            </Paragraph>

            <Heading size={3} style={{ fontSize: "20px" }}>
              Read on for some insight into creating your own travel business
              and becoming an entrepreneur. In this guide we will cover:
            </Heading>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Facts and figures on the success of travel agencies
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Choose the right business structure for your travel agency
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Learning if a travel agency business could be right for you
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Ideas for the type of travel agency that you could form
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Groups, forums and support for travel agency owners
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Helpful software for travel agency business owners
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Proving your travel agency can work</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Travel agency business planning</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to start your travel agency, with information on
                    equipment, employees, location, permits, finances, taxes and
                    more
                  </Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>
          </PanelWrapper>
        </TabPanel>
        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Why You Should Start a New Travel Agency
            </Heading>

            <Paragraph big bottomMargin={52}>
              The demand for travel and expert travel agents is growing.
            </Paragraph>

            <BlueBoxWithAbsoluteText
              absoluteText="900B"
              text="Is spent on private construction in the U.S. every year"
            />
            <BlueBoxWithAbsoluteText
              absoluteText="$17B"
              text="Projected revenue a year for the travel agency industry
in the U.S. by 2020"
            />
            <BlueBoxWithAbsoluteText
              absoluteText="$15BT"
              text="Significant growth of annual revenue in 2015"
            />

            <CircleWithText
              style={{ marginBottom: "48px" }}
              withBg={true}
              textInsideCircle="60"
              symbol="%"
              textLine="Of travel agents report an increase in sales year over year"
              SvgChart={CircleSvg}
            />

            <Adventages
              headline="Travel agency profits have also doubled from around 6 percent of revenue to 12 percent"
              width="100%"
            />

            <Adventages
              headline="Just over three-quarters of travel agent business revenue comes from commission, with the remainder from service fees"
              width="100%"
            />

            <Adventages
              headline="Over the last five years, the number of travel agency businesses has grown by almost 4 percent"
              width="100%"
            />
            <Paragraph big marginTop={32}>
              The time to take advantage is now — we’ll help you be a part of
              that success!
            </Paragraph>
          </PanelWrapper>
        </TabPanel>
        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Is a Travel Agency Business Right for You?
            </Heading>

            <Paragraph big bottomMargin={52}>
              Before deciding to start a travel agency, it’s important to
              understand the skills and approach you’re likely to need.
            </Paragraph>

            <Heading size={3}>A Day in the Life of a Travel Agent</Heading>

            <Paragraph big bottomMargin={52}>
              Here are some of the typical tasks you’ll be performing for your
              travel agency business on a daily basis:
            </Paragraph>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Dealing with inquiries through your website
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Creating itineraries, destinations and activities for customers
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Keeping up to date with the latest offers from tour operators
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Understanding available activities and travel options for
                specific locations
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Booking and administering travel and other vacation plans
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "48px" }}>
              <Paragraph bottomMargin={0}>
                Answering questions and providing information to customers
              </Paragraph>
            </TextBoxed>

            <Heading size={3}>
              Skills Needed by a Travel Agent Entrepreneur
            </Heading>

            <Paragraph big bottomMargin={52}>
              The following skills will be very useful in your role as a travel
              agency small business owner:
            </Paragraph>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Amazing administration skills to stay on top of every customer’s
                travel plans
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Great interpersonal skills for dealing with customers, tourism
                operators, airlines, hotels and more
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                The ability to take in and analyze large amounts of information
                to help customers make the right choice
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Understanding the vacation experience from the customer’s
                perspective and working to make that as good as possible
              </Paragraph>
            </TextBoxed>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>
                Willingness to spend lots of time on travel research and
                destination websites finalizing details
              </Paragraph>
            </TextBoxed>

            <Heading size={3} style={{ marginTop: "32px" }}>
              What Your Travel Agency Customers Are Looking For
            </Heading>

            <Paragraph big bottomMargin={52}>
              Customers come to a travel agent because they want a really great
              experience, and they want a travel agent to help them achieve
              that. Some customers simply don’t want to deal with all the
              administration themselves and use a travel agent to take away that
              burden. Other customers have specialized needs that a dedicated
              travel agent can help them to meet.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>
      </ReactTabs>
    </TabsWrapper>

    <TypeOfBusiness />

    <ValidatingBusinessIdea />

    <BusinessPlan />

    <BusinessStructure />

    <SettingBusiness />

    <CompleteCheckListSection />

    <Regulations />

    <InsuranceBusinessSection />

    <Taxes />

    <ToolsWrapper>
      <OvalTools>
        <OvalSvg />
      </OvalTools>
      <OvalTools2>
        <OvalSvg2 />
      </OvalTools2>
      <UsefulTools
        toolsList={toolsList.tools}
        headlineText={toolsList.headlineText}
        description={toolsList.description}
      />
    </ToolsWrapper>

    <Conclusion
      to={process.env.ORDER_URL + "/form-order-now.php"}
      buttonTitle="Start your Travel Agency Business with us, today"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>

      <Paragraph big>
        The internet has lowered the barriers to finding the perfect vacation,
        but many people still need the experience and expertise that a great
        travel agent provides. Find the right niche, get your marketing right
        and you could see huge success as a travel agent.
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
  width: 100%;
  left: 0;
  top: 0px;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const ToolsWrapper = styled.div`
  position: relative;
  margin-bottom: 200px;
`;

const OvalTools = styled.div`
  width: 100%;
  right: 0;
  top: calc(50% - 210px);
  position: absolute;
  z-index: -1;
  transform: rotate(180deg);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalTools2 = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default TravelAgency;
