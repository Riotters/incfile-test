import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-babyblue3.inline.svg";
import OvalGreenSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import BlueBoxWithAbsoluteText from "../../../molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../../../components/adventages";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import MegafonIcon from "../../../../images/icons/megafon.inline.svg";
import { color } from "../../../../components/styles/colors";
import Colorbox from "../../../../components/color-box";
import ReactTabs from "../../../partials/ReactTabs";
import { tabs } from "../../../../static/type-of-business/coach";
import { TabPanel } from "react-tabs";
import PanelWrapper from "../../../organisms/tabs/panel";
import CircleWithText from "../../../molecules/blocks/circle-with-text-block";

const WrapperMain = styled.div`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
  width: 50%;
`;

const Oval = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalBottom = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 112px;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const CoachTabs = () => (
  <WrapperMain>
    <Oval>
      <OvalSVG />
    </Oval>
    <OvalBottom>
      <OvalGreenSVG />
    </OvalBottom>
    <ReactTabs content={tabs}>
      <TabPanel>
        <PanelWrapper>
          <Heading size={2} template={3} left>
            Starting a Coaching Business
          </Heading>
          <Paragraph big>
            If you can provide practical advice and guidance to help people
            change their perspective or their business practices, you could have
            the makings of a great coach. Whether you decide to go into life
            coaching or executive and business coaching, there are plenty of
            excellent opportunities in this growing industry.
          </Paragraph>
          <Paragraph big style={{ marginBottom: "50px" }}>
            The value of life and business coaches is supported by the
            statistics. If you know what makes people or organizations tick, you
            could turn that into pragmatic steps and help people reach their
            potential. It’s important to set up your life or business coaching
            company in the right way.
          </Paragraph>

          <Colorbox
            className="box"
            theme="icon"
            Icon={MegafonIcon}
            color={color.green3}
            curve
            curveColor={color.green1}
          >
            <Heading size={3} template={4}>
              We want to help you get your business off the ground.
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Since 2004, we’ve helped over 500,000 people start exciting
              businesses and bring their ideas to life. We’ll give you the
              support, guidance and advice you need to create a woman-owned
              business and make it into a success.
            </Paragraph>
          </Colorbox>

          <Heading size={3} style={{ marginTop: "48px" }}>
            Coaching Business formation guide
          </Heading>
          <Paragraph big>
            From validating your business and doing the research to filing your
            paperwork and running your business, this guide will help you out.
            Read on for some insight into creating your own life or business
            coaching company and becoming an entrepreneur who helps people make
            the best of themselves. In this guide we will cover:
          </Paragraph>

          <ListWrapper>
            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Statistics on why you should start a life or executive
                  coaching business
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How to choose whether your coaching business should be an LLC
                  or corporation
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How to find out if life or business coaching is right for you
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Different types of life or business coaching ideas
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Groups, forums and support for life or business coaching
                  entrepreneurs
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How to validate your coaching business idea
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Useful online tools for life or business coaching individuals
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>Business plans for coaching companies</Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How to start your life or business coaching venture with
                  information on equipment, employees, location, permits,
                  finance, taxes and more
                </Paragraph>
              </CkeckText>
            </ListBox>
          </ListWrapper>
        </PanelWrapper>
      </TabPanel>

      <TabPanel>
        <PanelWrapper>
          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            Why You Should Start a New Life Coaching Business
          </Heading>
          <Paragraph big>
            Life coaching is about helping people deal with what’s going on in
            their lives and assisting them in creating a better present and
            future. It involves a mix of psychology, counseling, interpersonal
            skills and understanding how you can help a client realize their
            potential.
          </Paragraph>
          <Paragraph big style={{ marginBottom: "76px" }}>
            Here are some statistics on the power of life coaching businesses:
          </Paragraph>

          <BlueBoxWithAbsoluteText
            absoluteText="$10B"
            text="Generated annual revenue in the U.S., Self-improvement as a whole is a very successful sector."
          />
          <BlueBoxWithAbsoluteText
            absoluteText="$1B"
            text="Generated revenue of life coaching in the U.S. each year, and this is expected to grow to around $1.3 billion in 2022."
          />
          <BlueBoxWithAbsoluteText
            absoluteText="$62K"
            text="Average yearly income for life coaches a year, and some coaches can earn over $100,000 a year."
          />

          <CircleWithText
            textInsideCircle={`3.7`}
            symbol={`%`}
            textLine={`Growth of Life Coaching business a year.`}
            withBg
          />

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="The main areas that life coaches help with are personal improvement, family and relationships and weight loss and fitness."
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Many customers for life coaching businesses are located on the East or West Coast of the U.S."
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="The number of coaches in the world increased from 47,500 in 2011 to 53,300 in 2018"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="There are currently around 18,300 life coaches in the U.S."
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="Life coaches normally have multiple clients and typically charge between $200 and $500 a month for services"
              width="100%"
            />
          </div>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            Why You Should Start a Business and Executive Coaching Practice
          </Heading>
          <Paragraph big style={{ marginBottom: "76px" }}>
            Business and executive coaching is very different from life
            coaching. When you’re working with senior management, you need to
            have an excellent understanding of business, strategy, financials,
            organization, culture and the unique pressures that face executives
            when making major decisions.
          </Paragraph>

          <BlueBoxWithAbsoluteText
            absoluteText="$12B"
            text="Generated revenue of Business Coaching in the U.S. a year."
          />
          <BlueBoxWithAbsoluteText
            absoluteText="55K"
            text="Number of business coaching organizations in the U.S. employing over 100,000 people"
          />

          <CircleWithText
            textInsideCircle={`2.8`}
            symbol={`%`}
            textLine={`Growth of the industry a year.`}
            withBg
          />

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="The main areas that business coaches help with are executive development and financial management"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Studies show that there is between a 500 percent and 700 percent return on investment for money spent on business and executive coaching services"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="Business coaching helps executives increase their productivity by over 80 percent"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="Executive coaching delivers improvements to areas like productivity, work quality, organizational strength, customer service, working relationships, cost reductions and profitability"
              width="100%"
            />
          </div>

          <Paragraph big style={{ marginBottom: "76px" }}>
            This is why life or business coaching ventures are so exciting — how
            can you be part of that success? We're here to help you figure that
            out.
          </Paragraph>
        </PanelWrapper>
      </TabPanel>

      <TabPanel>
        <PanelWrapper>
          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            Is Professional Coaching Right for You?
          </Heading>
          <Paragraph big style={{ marginBottom: "48px" }}>
            Although it can be exciting to become a life or business coach,
            there will be significant demands on you. Here are some of the
            things you can expect.
          </Paragraph>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            A Day in the Life of a Life or Business Coach
          </Heading>
          <Paragraph big style={{ marginBottom: "48px" }}>
            Here are some of the typical tasks you’ll be performing on a daily
            basis:
          </Paragraph>

          <CountingTextBoxed number={1}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Marketing for new clients
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={2}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Dealing with inquiries from potential clients
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={3}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Reading the latest research and studies in your field
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={4}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Traveling to meet with clients or having them come to you
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={5}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Holding coaching sessions
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={6}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Writing up coaching sessions
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={7}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Dealing with financials and administration
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={8}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Life coaches: Ongoing training in psychology, counseling and
              related fields
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={9}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Life coaches: Researching specific questions or problems your
              clients may have
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={10}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Business coaches: Learning about the business you’re providing
              coaching for, including strategy, financials and the executive
              team
            </Paragraph>
          </CountingTextBoxed>

          <div style={{ marginBottom: "76px" }}>
            <CountingTextBoxed number={11} style={{ marginBottom: "76px" }}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Business coaches: Research into the sector or industry of the
                business you’re providing coaching for
              </Paragraph>
            </CountingTextBoxed>
          </div>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            Skills Needed by a Life or Business Coach
          </Heading>
          <Paragraph big style={{ marginBottom: "48px" }}>
            The following skills will be very useful in your role as a life or
            business coach:
          </Paragraph>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Excellent interpersonal and influencing skills to talk with and listen to clients"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Powerful analysis and investigative skills to get to the root of an issue"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Good marketing skills to promote your coaching business"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="Strong administration skills so you can stay on top of your schedule and finances"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="Strong research skills so you can understand the history and context of the individuals and businesses you’re helping"
              width="100%"
            />
          </div>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            What Your Coaching Clients Are Looking For
          </Heading>
          <Paragraph big style={{ marginBottom: "48px" }}>
            Ultimately, people come to a coach because they want to improve
            their life or business.
          </Paragraph>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            What Life Coaching Clients Want
          </Heading>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Dealing with particular issues in their past that are stopping them moving forward"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Helping them come to terms with their existing life circumstances and challenges"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Preparing them for the future and giving them useful tools and techniques"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Reassuring them about how you’ve helped previous clients"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Practical help for what they specifically need assistance with (family relationships, nutrition, lifestyle or other areas)"
              width="100%"
            />
          </div>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            What Business Coaching Clients Want
          </Heading>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Proven return on investment for business coaching services"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Demonstrated understanding of their business and sector"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Strong expertise in dealing with specific needs (e.g., productivity, management styles, culture or organizational change)"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Detailed statistics on improvements as a result of business coaching"
              width="100%"
            />
          </div>
        </PanelWrapper>
      </TabPanel>
    </ReactTabs>
  </WrapperMain>
);

export default CoachTabs;
