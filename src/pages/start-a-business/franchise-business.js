import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Heading } from "../../atomic/atoms/typography/heading";
import Adventages from "../../components/adventages";
import CkeckText from "../../components/static-check/text-only";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import {
  RingText,
  tabs,
} from "../../static/type-of-business/franchise-business";
import RingSvg from "../../images/rings-6.inline.svg";
import AdventagesSection from "../../atomic/sections/type-of-business/franchise-business/adventages-disadventages";
import IsItForYou from "../../atomic/sections/type-of-business/franchise-business/is-is-for-you";
import FranchiseStructure from "../../atomic/sections/type-of-business/franchise-business/franchise-structure";
import BusinessStructure from "../../atomic/sections/type-of-business/franchise-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/franchise-business/setting-business";
import ToolsAndLinks from "../../atomic/sections/type-of-business/franchise-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import TabOvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import styled from "styled-components";
import { color } from "../../atomic/atoms/styles/colors";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";
import CompleteCheckListSection from "../../atomic/sections/type-of-business/general/complete-checklist-section";

const FranchiseBusiness = () => (
  <Layout>
    <SEO
      title="How to Start a Franchise Business | Starting a Franchise Business"
      description="If you have the start-up capital starting a franchise business may be the right way to go. Franchise businesses have all the tools to help you succeed."
    />

    <Top
      ovalColor="sun-2"
      imageName="franchise-business-main"
      imageAlt="franchise business"
      headlineWidth={700}
    >
      <h1>How to Start a Franchise Business</h1>
      <p>
        What do household names like Subway, Cinnabon, Jiffy Lube, Ace Hardware,
        Hertz, Marriott, Dunkin’ Donuts, 7-Eleven, Jimmy Johns and H&R Block all
        have in common? They’re all franchises — businesses that license out
        their name, backing, branding and processes to entrepreneurs who want to
        own a piece of the pie and grow a business without worrying about things
        like branding and marketing.
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
      <TabOval>
        <TabOvalSvg />
      </TabOval>

      <ReactTabs content={tabs} style={{ marginTop: "75px" }}>
        <TabPanel>
          <PanelWrapper>
            <Paragraph big>
              A franchise can be a great opportunity for a business owner with
              some capital to invest in their own and their employees’ future.
              It gives entrepreneurs an opportunity to partner with some of the
              biggest brands in the U.S. and provides built-in resources,
              training and expertise. In exchange for a franchise fee and
              royalties, they will provide you with support, training, stock,
              expertise and marketing to launch your franchise quickly.
            </Paragraph>
            <Paragraph
              big
              style={{
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              In this guide we’ll explore everything you need to do to set up
              your franchise business and maximize your chances for success.
              We’ll cover:
            </Paragraph>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How you can understand the world of franchises
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Questions you should ask to see if you’re ready to start a
                    franchise business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to plan out your franchise business and the best legal
                    structure for your new organization
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
                    Information on taxes and finances for your franchise
                    business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to hire employees, marketing and administration
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Resources for your franchise business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>... and much more</Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>

            <Paragraph big>
              By the time you’ve read through our complete franchise business
              guide, you will have all the information you need to set up and
              manage a thriving franchise business. Let’s get into it.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Understanding the World of the Franchise Business
            </Heading>

            <Paragraph
              big
              style={{
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Key Franchise Business Background Data and Statistics
            </Paragraph>

            <Paragraph big style={{ marginBottom: "48px" }}>
              The size and success of franchise businesses might surprise you:
            </Paragraph>

            <BlueBoxWithAbsoluteText
              absoluteText="800K"
              text="Franchise establishments across the country employing nearly 9 million people."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="$900B"
              text="Total revenue generated by franchise businesses every year."
            />

            <Adventages
              headline="Around one in seven franchise businesses are owned by U.S. military veterans."
              width="100%"
            />

            <Adventages
              headline="Franchises exist across many sectors — fast food, restaurants, convenience stores, retailers, financial advice, hotels, car rentals, service providers and many more."
              width="100%"
            />

            <Adventages
              headline="There are over 3,000 franchisors licensing out partnerships to entrepreneurs who can benefit from the support they provide."
              width="100%"
            />

            <ColorFulCircleWithTextAndList
              CircleSVG={RingSvg}
              list={RingText.list}
              withBg={true}
            />

            <Paragraph big style={{ marginTop: "48px" }}>
              In other words, franchising is a significant, successful and
              diverse part of the U.S. economy. Franchise businesses do very
              well in the U.S.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>
      </ReactTabs>
    </TabsWrapper>

    <AdventagesSection />

    <IsItForYou />

    <FranchiseStructure />

    <BusinessStructure />

    <SettingBusiness />

    <CompleteCheckListSection />

    <ToolsAndLinks />

    <Conclusion
      to={process.env.ORDER_URL + "/form-order-now.php"}
      buttonTitle="Start your Franchise Business with us, today"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>
      <Paragraph big>
        Starting a franchise business is an amazing opportunity for many
        entrepreneurs. Provided you have the capital to back you up and you can
        meet the franchisor’s rules and regulations, you will see huge benefits
        from their branding, market reach and support. With a vast array of
        franchises available, you’re sure to find something that meets your
        vision for the future.
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

const TabOval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;
export default FranchiseBusiness;
