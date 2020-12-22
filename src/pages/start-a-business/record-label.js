import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import OvalTabsSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";
import MegafonIcon from "../../images/icons/megafon.inline.svg";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { color } from "../../atomic/atoms/styles/colors";
import CkeckText from "../../components/static-check/text-only";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import Colorbox from "../../components/color-box";
import AboutCreating from "../../atomic/sections/type-of-business/record-label/about-creating";
import BusinessPlan from "../../atomic/sections/type-of-business/record-label/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/record-label/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/record-label/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/record-label/order-now";
import Regulations from "../../atomic/sections/type-of-business/record-label/regulations";
import Taxes from "../../atomic/sections/type-of-business/record-label/taxes";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/record-label/insurance-business";
import ToolsAndLinks from "../../atomic/sections/type-of-business/record-label/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import CircleRing from "../../images/circle-graph.inline.svg";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import { TabPanel } from "react-tabs";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { tabs } from "../../static/type-of-business/record-label";

const RecordLabel = () => (
  <Layout>
    <SEO
      title="How to Start a Record Label"
      description="If you want to get into the music business, then starting your own record company could be a great idea. Whether you’re a band or artist that wants to control your own destiny, or you want to sign and promote the talents of others, owning a record label gives you options."
    />

    <Top
      ovalColor="sun"
      imageName="mr-bulb-record-label-7165.png"
      imageAlt="starting a record label business"
      headlineWidth={700}
    >
      <h1>How to Start a Record Label</h1>
      <p>
        If you want to get into the music business, then starting your own
        record company could be a great idea. Whether you’re a band or artist
        that wants to control your own destiny, or you want to sign and promote
        the talents of others, owning a record label gives you options.
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
        <OvalTabsSvg />
      </TabsOval>
      <ReactTabs style={{ marginTop: "100px" }} content={tabs}>
        <TabPanel>
          <PanelWrapper>
            <Paragraph big>
              The music industry is adapting to changes in how we all consume
              music. The rise of social media, a move to digital distribution
              and the increasing popularity of streaming platforms creates new
              challenges and opportunities. Small, independent record labels can
              react to these changes, and with careful planning and execution,
              they can become a success.
            </Paragraph>

            <Colorbox
              color={color.green3}
              curve
              curveColor={color.green1}
              Icon={MegafonIcon}
              theme={`icon`}
            >
              <Paragraph
                style={{
                  fontFamily: "Avenir",
                  fontWeight: "900",
                  color: "#1d1d1d",
                }}
                big
              >
                We know it can be daunting to start a record label business, and
                we’re here to help.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                We’ve assisted over 500,000 people with forming their business
                and provided answers, guidance and support to transform them
                into entrepreneurs. We’ll guide you through what you need to
                know to start your record label business and get it off the
                ground.
              </Paragraph>
            </Colorbox>

            <Paragraph big style={{ marginTop: "48px" }}>
              From validating your business and doing the research to filing
              your paperwork and running your business, this guide will help you
              out. Read on for some insight into creating your own record label
              business and becoming an entrepreneur. Here’s what you’ll find:
            </Paragraph>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to validate your record label business idea
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Groups, forums and support for record label business owners
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Different types of record label businesses
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Helpful software for record label business owners
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Learn if a record label business is right for you
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Facts and figures on the success of record label businesses
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Setting up your record label business, including location,
                    equipment, employees, taxes, finances, licenses and more
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    How to choose whether your record label business should be
                    an LLC or corporation
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Record label business planning</Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Why You Should Start Your Own Music Label
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
              Although the recording industry is driven by a handful of major
              labels, there’s still room for independent labels to make an
              impact. Here are some statistics on the power of record label
              businesses:
            </Paragraph>

            <BlueBoxWithAbsoluteText
              absoluteText="$18.9B"
              text="Global income from recorded music in 2018, with $7.9 billion generated in the U.S."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="$450M"
              text="Revenue generated by independent record labels in 2019."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="$5B"
              text="Global revenue growth over five years, with the U.S. seeing an increase of $2.9 billion."
            />

            <CircleWithText
              textInsideCircle="60"
              textLine="of recording industry revenue comes from digital services like downloads and streaming."
              withBg={true}
              symbol="%"
              SvgChart={CircleRing}
              style={{ marginBottom: "48px" }}
            />

            <Adventages
              headline="There are almost 3,500 independent record label businesses in the U.S."
              width="100%"
            />

            <Adventages
              headline="Streaming is a major growth industry, with a 33% increase in paid streaming in 2018."
              width="100%"
            />

            <Adventages
              headline="Independent record label income is increasing at around 2.5% a year."
              width="100%"
            />

            <Paragraph big>
              This is why record label businesses are so exciting. So how can
              you be part of that success? We're here to help you figure that
              out.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Is Starting an Independent Record Label Business Right for You?
            </Heading>
            <Paragraph big>
              Although it can be exciting to form a record label business, there
              will be significant demands on you as a small business owner. Here
              are some of the things you can expect.
            </Paragraph>
            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              A Day in the Life of a Record Label Business Owner
            </Paragraph>

            <Paragraph big>
              Here are some typical tasks you’ll be performing for your record
              label business on a daily basis:
            </Paragraph>

            <Adventages
              headline="Finding new artists you want to sign to your record label"
              width="100%"
            />

            <Adventages
              headline="Negotiating contracts with artists, producers, distributors and others involved in the industry"
              width="100%"
            />

            <Adventages
              headline="Arranging for the recording, manufacture, distribution and availability of music"
              width="100%"
            />

            <Adventages
              headline="Marketing and promoting the artist and their music"
              width="100%"
            />

            <Adventages
              headline="Spending money on recording and promotion"
              width="100%"
            />

            <Adventages
              headline="Collecting royalties from various areas and distributing them as required"
              width="100%"
            />

            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Skills Needed by a Record Label Entrepreneur
            </Paragraph>
            <Paragraph big>
              The following skills will be very useful in your role as a record
              label small business owner:
            </Paragraph>

            <Adventages
              headline="An ear for music that other people will enjoy"
              width="100%"
            />

            <Adventages
              headline="Excellent interpersonal skills so that you can manage multiple parties with diverse interests"
              width="100%"
            />

            <Adventages
              headline="Relationships with engineers, producers, musicians and others involved in creating and producing music"
              width="100%"
            />

            <Adventages
              headline="Access to attorneys who can create contracts and help you with other aspects of music industry law"
              width="100%"
            />

            <Adventages
              headline="A good understanding of the potential audience for the artists you sign"
              width="100%"
            />

            <Adventages
              headline="Marketing knowledge so you can promote your music and other artists"
              width="100%"
            />

            <Adventages
              headline="Strong project management skills"
              width="100%"
            />

            <Adventages
              headline="Good financial management skills"
              width="100%"
            />

            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              What Your Record Label Customers Are Looking For
            </Paragraph>
            <Paragraph big>
              As a record company owner, you’re bringing together artists and
              the audiences that will enjoy their music.
            </Paragraph>

            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Artists are looking for:
            </Paragraph>

            <Adventages
              headline="Fair contracts that properly value the creative work they do"
              width="100%"
            />

            <Adventages
              headline="A record label that will promote their music and increase their popularity"
              width="100%"
            />

            <Adventages
              headline="Record companies that are friendly and easy to communicate with"
              width="100%"
            />

            <Adventages
              headline="Labels with multiple methods of distribution, such as physical copies, digital downloads and streaming"
              width="100%"
            />

            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Fans are looking for
            </Paragraph>

            <Adventages headline="New and unique music" width="100%" />

            <Adventages
              headline="Ease of access to music, such as availability on streaming platforms"
              width="100%"
            />

            <Adventages
              headline="An idea of who the artists are and what they represent"
              width="100%"
            />

            <Adventages
              headline="Ways to see the artists, such as at live shows"
              width="100%"
            />
          </PanelWrapper>
        </TabPanel>
      </ReactTabs>
    </TabsWrapper>

    <AboutCreating />
    <BusinessPlan />
    <BusinessStructure />
    <SettingBusiness />
    <OrderNow />
    <Regulations />
    <Taxes />
    <InsuranceBusinessSection />
    <ToolsAndLinks />

    <Conclusion
      to={`${process.env.ORDER_URL}/form-order-now.php`}
      buttonTitle="Start your Record Label Business with us, today"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>

      <Paragraph big>
        If you love music and can handle challenges, record label
        entrepreneurship could be right for you. If you can find great artists,
        manage them well, stay on top of marketing and put together a solid
        business plan, you will have every chance for success.
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
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

const TabsOval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default RecordLabel;
