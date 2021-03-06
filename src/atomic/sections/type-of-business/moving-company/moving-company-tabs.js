import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalGreenSVG from "../../../../images/ovals/bottom-right-transparent-green3.inline.svg";
import BlueBoxWithAbsoluteText from "../../../molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../../../components/adventages";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import MegafonIcon from "../../../../images/icons/megafon.inline.svg";
import { color } from "../../../../components/styles/colors";
import Colorbox from "../../../../components/color-box";
import ReactTabs from "../../../partials/ReactTabs";
import { tabs } from "../../../../static/type-of-business/moving-company";
import { TabPanel } from "react-tabs";
import PanelWrapper from "../../../organisms/tabs/panel";
import CircleWithText from "../../../molecules/blocks/circle-with-text-block";
import RingsIcon from "../../../../images/rings.inline.svg";
import { CircleText } from "../../../../static/type-of-business/moving-company";

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
  width: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }
`;

const Oval = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalBottom = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const MovingCompanyTabs = () => (
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
            Starting a Moving Company
          </Heading>
          <Paragraph big>
            We’ve never had more choices of where to live or work — that need
            for relocation means there’s plenty of opportunities for starting a
            reliable and trustworthy moving venture.
          </Paragraph>
          <Paragraph big style={{ marginBottom: "50px" }}>
            You’ll need to balance demand for moving services in your local area
            against the costs of buying the equipment and hiring employees to
            help people relocate. You may also want to buy into a moving
            franchise, or strike out on your own and build a company from
            scratch. Perhaps you became interested after helping people move
            through a contract service like U-Haul.
          </Paragraph>

          <Colorbox
            className="box"
            theme="icon"
            Icon={MegafonIcon}
            color={color.yellow3}
            curve
            curveColor={color.yellow1}
          >
            <Heading size={3} template={4}>
              We want to help you get your business off the ground.
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              There are lots of questions involved in starting a moving
              business, and we’re here to help. We’ve supported over 500,000
              people to form their business and provided answers to transform
              them into entrepreneurs. We’ll guide you through what you need to
              know to start your relocation company and get it off the ground.
            </Paragraph>
          </Colorbox>

          <Heading size={3} style={{ marginTop: "50px" }}>
            Moving Business formation guide
          </Heading>
          <Paragraph big>
            From validating your business and doing the research to filing your
            paperwork and running your venture, this guide will help you out.
            We’ll talk you through the main things you need to do to get your
            moving company off of the ground. Read on for some insight into
            creating your own moving business and becoming an entrepreneur. In
            this guide we will cover:
          </Paragraph>

          <ListWrapper>
            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Statistics on why you should start a moving company
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Choosing the right business structure for your moving venture
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How to find out if a moving business is right for you
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How to start your moving business with information on
                  equipment, employees, location, permits, finances, taxes and
                  more
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Different types of relocation businesses
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Groups, forums and support for moving business owners
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  How to validate your moving business idea
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>
                  Useful online tools for moving business owners
                </Paragraph>
              </CkeckText>
            </ListBox>

            <ListBox>
              <CkeckText>
                <Paragraph big>Business plans for moving companies</Paragraph>
              </CkeckText>
            </ListBox>
          </ListWrapper>
        </PanelWrapper>
      </TabPanel>

      <TabPanel>
        <PanelWrapper>
          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            Why You Should Start a New Moving Business
          </Heading>
          <Paragraph big style={{ marginBottom: "76px" }}>
            There are plenty of opportunities for moving business entrepreneurs.
            Here are some surprising statistics on the size and potential of the
            U.S. moving industry:
          </Paragraph>

          <BlueBoxWithAbsoluteText
            absoluteText="3M"
            text="Number of households make interstate moves every year."
          />
          <BlueBoxWithAbsoluteText
            absoluteText="650K"
            text="Number of moves a professional movers assist a year, the remainder are carried out by families themselves"
          />
          <BlueBoxWithAbsoluteText
            absoluteText="35M"
            text="Americans move each year (around 15 million households)"
          />

          <CircleWithText withBg SvgChart={RingsIcon} textLine={CircleText} />

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="The moving industry is primarily made up of small businesses — almost half of all moving businesses employ fewer than five people"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="The average cost of a move is $2,300 in the same state, and $4,300 for interstate relocations"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Household goods account for nearly three-quarters of all items moved, followed by electronic office equipment"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Almost half of all moves are housing related, 30 percent are family related and 20 percent are job-related"
              width="100%"
            />
          </div>

          <Paragraph big>
            This is why moving businesses are so exciting — how can you be part
            of that success? We're here to help you figure that out.
          </Paragraph>
        </PanelWrapper>
      </TabPanel>

      <TabPanel>
        <PanelWrapper>
          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            Is a Moving Business Right for You?
          </Heading>
          <Paragraph big style={{ marginBottom: "48px" }}>
            Before deciding to start a moving business, it’s important to
            understand the skills and approach you’re likely to need
          </Paragraph>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            A Day in the Life of a Moving Business Owner
          </Heading>
          <Paragraph big style={{ marginBottom: "48px" }}>
            Here are some of the typical tasks you’ll be performing for your
            moving business on a daily basis.
          </Paragraph>

          <CountingTextBoxed number={1}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Dealing with customer inquiries on moving logistics
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={2}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Providing quotes for moving based on services needed, quantity of
              goods and distance of move
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={3}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Helping people to pack up their belongings for a safe move
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={4}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Loading and securing goods in a moving truck
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={5}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Driving a moving truck to the required destination
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={6}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Unloading the truck as required by the customer
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={7}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Arranging for maintenance and servicing of vehicles
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={8}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Marketing your moving business
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={9}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Sending out invoices, taking payments and financial management
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={10}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Scheduling required moving services
            </Paragraph>
          </CountingTextBoxed>

          <div style={{ marginBottom: "76px" }}>
            <CountingTextBoxed number={11}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Dealing with employees and assigning tasks
              </Paragraph>
            </CountingTextBoxed>
          </div>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            Skills Needed by a Moving Business Entrepreneur
          </Heading>
          <Paragraph big style={{ marginBottom: "48px" }}>
            The following skills will be very useful in your role as a moving
            business owner:
          </Paragraph>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Good strength, physical fitness and coordination for moving goods and driving trucks"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Strong interpersonal skills for dealing with clients, managing employees and resolving conflicts"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <Adventages
              headline="Reasonable administration skills for business management, scheduling and finances"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="Estimation skills for understanding necessary services and providing accurate quotes"
              width="100%"
            />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <Adventages
              headline="Good marketing skills to build word of mouth and promote your moving business"
              width="100%"
            />
          </div>

          <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
            What Your Moving Customers Are Looking For
          </Heading>
          <Paragraph big>
            Moving is a huge hassle and overhead for almost everyone. Relocating
            customers want peace-of-mind, reliability and trustworthiness.
            Ultimately, they’re paying a fee to a moving company so that they
            don’t need to worry about every tiny detail of moving. They’ll want
            you to have a proven track record, good reviews and to be completely
            up-to-date with your insurance.
          </Paragraph>
          <Paragraph big style={{ marginBottom: "48px" }}>
            Customers may also be looking for a range of services. For example,
            some will want to pack goods themselves, while others are happy to
            pay to have their house packed by professionals. Some will want you
            to collect goods from every room, while others will move things to
            the front door. You’ll need to tweak your services to meet customer
            needs, do what you say you will and be accurate and timely.
          </Paragraph>
        </PanelWrapper>
      </TabPanel>
    </ReactTabs>
  </WrapperMain>
);

export default MovingCompanyTabs;
