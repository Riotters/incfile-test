import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import styled from "styled-components";
import { color, gradient } from "../components/styles/colors";
import { shadow } from "../components/styles/shadows";
import Button from "../components/button";
import ArrowLink from "../components/arrow-link";
import PathLink from "../atomic/molecules/buttons/path";
import ArrowButton from "../components/arrow-button";
import IconCircle from "../components/icons/circle";
import ArrowSVG from "../images/arrow.inline.svg";
import State from "../components/icons/state";
import Rating from "../components/icons/rating";
import CheckBlueSVG from "../images/circle-status-check-blue.inline.svg";
import CheckSVG from "../images/circle-status-check.inline.svg";
import ExSVG from "../images/circle-status-x.inline.svg";
import Top from "../components/partials/top";
import Footer from "../components/partials/footer";
import NavigationTabs from "../components/tabs/navigation-tabs";
import AboutTabs from "../components/tabs/tabs";
import Accordion from "../components/tabs/accordion";
import Searchbox from "../components/searchbar";
import InputField from "../atomic/molecules/form/input-field";
import Label from "../components/form/label";
import Radio from "../components/form/radio";
import Checkbox from "../components/form/checkbox";
import Dropdown from "../components/form/dropdown";
import CheckText from "../components/static-check/text-only";
import CheckBox from "../components/static-check/text-boxed";
import Checklist from "../components/checklist/checklist";
import TopImageBox from "../atomic/molecules/mixed-blocks/top-image-box";
import { articles } from "../static/blog";
import BlogArticleCard from "../atomic/organisms/cards/blog-article-card";
import OkIcon from "../images/icons/ok.inline.svg";
import { Heading } from "../atomic/atoms/typography/heading";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import TextBlockWithImage from "../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import CountingTextBoxed from "../atomic/molecules/text-blocks/counting-text-boxed";
import Adventages from "../components/adventages";
import InfoCardsSection from "../atomic/partials/info-cards-section";
import { InfoCards } from "../static/type-of-business/airbnb";
import CircleWithText from "../atomic/molecules/blocks/circle-with-text-block";
import CompareTable from "../components/compare-table/compare-table";
import { CompareStateFilingTimes } from "../static/compare-state-filing-times";
import StatesTable from "../components/states-table/states-table";
import { WhichStatesAreFast } from "../static/which-states-are-fast";
import StatesMap from "../components/states-map/states-map";
import Reviews from "../components/reviews/reviews";
import { ReviewsData } from "../static/reviews-data";
import AmountSlider from "../components/amount-slider/amount-slider";
import ChecklistIcon from "../images/icons/wrench-and-pen.inline.svg";

const topimagebox = {
  header: `How Long does it take to file an Annual Report?`,
  text: `The filing time is dependent on the governing state agency. Filing times vary by state it is therefore important that the report is filed well in advance of the due date in order to avoid any potential late filing fees.`,
};

const Section = styled.div`
  width: 100%;
  position: relative;
  background-color: ${color.grey4};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alig-items: center;
  padding-top: 50px;

  @media (min-width: 769px) {
    padding-top: 150px;
  }

  & > h1,
  h2,
  h3,
  h4,
  h5,
  hs6 {
    width: 100%;
    max-width: 600px;
  }

  & > h1 {
    text-align: left;
    margin: 35px 0 25px;
  }

  & > h2 {
    text-align: left;
    margin: 35px 0 25px;
  }

  & > h3 {
    margin: 25px 0 15px;
  }

  & > h4 {
    margin: 20px 0;
  }

  & > h5 {
    margin: 15px 0 0;
  }

  & > h6 {
    margin: 15px 0 0;
  }

  .FormInput {
    width: 100%;
    max-width: 320px;
    margin-right: auto;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => Math.round(props.columns / 2)}, 1fr);
  grid-gap: 30px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const GreyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.grey4};
  padding: 15px;

  @media (min-width: 769px) {
    padding: 25px 75px;
  }
`;

const DarkGreyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.grey1};
  padding: 15px;

  @media (min-width: 769px) {
    padding: 25px 75px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${color.grey4};

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Color = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${(props) => props.color};
  box-shadow: ${(props) => props.shadow};
  border-radius: 3px;

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const ComponentsPage = () => (
  <Layout>
    <SEO title="Components" description="Incfile components presentation page." />
    <Container>
      <Wrapper>
        <h1>Components!</h1>
        <h2>Typography</h2>
        <h3>Header</h3>
        <h6>H1</h6>
        <h1>The five boxing wizards jump quickly</h1>
        <h6>H2</h6>
        <h2>The quick brown fox jumps over the lazy dog</h2>
        <h6>H3</h6>
        <h3>The five boxing wizards jump quickly</h3>
        <h6>H4</h6>
        <h4>The quick brown fox jumps over the lazy dog</h4>
        <h6>H5</h6>
        <h5>The five boxing wizards jump quickly</h5>
        <h6>H6</h6>
        <h6>The quick brown fox jumps over the lazy dog</h6>
        <h2>Colors</h2>
        <h3>Primary colors</h3>
        <GridWrapper columns="7">
          <Color color={color.black} />
          <Color color={color.grey1} />
          <Color color={color.grey2} />
          <Color color={color.grey3} />
          <Color color={color.grey4} />
          <Color color={color.grey5} />
          <Color color={color.white} />
        </GridWrapper>
        <h3>Color 1</h3>
        <GridWrapper columns="7">
          <Color color={color.babyblue1} />
          <Color color={color.blue1} />
          <Color color={color.green1} />
          <Color color={color.orange1} />
          <Color color={color.purple1} />
          <Color color={color.red1} />
          <Color color={color.yellow1} />
        </GridWrapper>
        <h3>Color 2</h3>
        <GridWrapper columns="7">
          <Color color={color.babyblue2} />
          <Color color={color.blue2} />
          <Color color={color.green2} />
          <Color color={color.orange2} />
          <Color color={color.purple2} />
          <Color color={color.red2} />
          <Color color={color.yellow2} />
        </GridWrapper>
        <h3>Color 3</h3>
        <GridWrapper columns="7">
          <Color color={color.babyblue3} />
          <Color color={color.blue3} />
          <Color color={color.green3} />
          <Color color={color.orange3} />
          <Color color={color.purple3} />
          <Color color={color.red3} />
          <Color color={color.yellow3} />
        </GridWrapper>
        <h3>Gradient 2</h3>
        <GridWrapper columns="7">
          <Color color={gradient.babyblue3} />
          <Color color={gradient.blue3} />
          <Color color={gradient.green3} />
          <Color color={gradient.orange3} />
          <Color color={gradient.purple3} />
          <Color color={gradient.red3} />
          <Color color={gradient.yellow3} />
        </GridWrapper>
        <h3>Gradient 3</h3>
        <GridWrapper columns="7">
          <Color color={gradient.babyblue3} />
          <Color color={gradient.blue3} />
          <Color color={gradient.green3} />
          <Color color={gradient.orange3} />
          <Color color={gradient.purple3} />
          <Color color={gradient.red3} />
          <Color color={gradient.yellow3} />
        </GridWrapper>
        <h2>Shadows</h2>
        <h3>White</h3>
        <GridWrapper columns="7">
          <Color color={gradient.white} shadow={shadow.white1} />
          <Color color={gradient.white} shadow={shadow.white2} />
        </GridWrapper>
        <h3>Color 1</h3>
        <GridWrapper columns="7">
          <Color color={color.babyblue1} shadow={shadow.babyblue1} />
          <Color color={color.blue1} shadow={shadow.blue1} />
          <Color color={color.green1} shadow={shadow.green1} />
          <Color color={color.orange1} shadow={shadow.orange1} />
          <Color color={color.purple1} shadow={shadow.purple1} />
          <Color color={color.red1} shadow={shadow.red1} />
          <Color color={color.yellow1} shadow={shadow.yellow1} />
        </GridWrapper>
        <h3>Color 2</h3>
        <GridWrapper columns="7">
          <Color color={color.babyblue2} shadow={shadow.babyblue2} />
          <Color color={color.blue2} shadow={shadow.blue2} />
          <Color color={color.green2} shadow={shadow.green2} />
          <Color color={color.orange2} shadow={shadow.orange2} />
          <Color color={color.purple2} shadow={shadow.purple2} />
          <Color color={color.red2} shadow={shadow.red2} />
          <Color color={color.yellow2} shadow={shadow.yellow2} />
        </GridWrapper>
        <h2>Buttons</h2>
        <h3>Primary</h3>
        <FlexWrapper>
          <Button theme="primary40" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0">
            Subscribe
          </Button>
          <Button theme="primary48" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0">
            Start Now
          </Button>
          <Button theme="primary56" arrow="yes">
            Start Now
          </Button>
        </FlexWrapper>
        <h3>Secondary</h3>
        <FlexWrapper>
          <Button theme="secondary40" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0">
            Subscribe
          </Button>
          <Button theme="secondary48" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0">
            Start Now
          </Button>
          <Button theme="secondary56" arrow="yes">
            Start Now
          </Button>
        </FlexWrapper>
        <h3>Text</h3>
        <FlexWrapper>
          <ArrowLink>Learn more</ArrowLink>
        </FlexWrapper>
        <h3>Path</h3>
        <FlexWrapper>
          <PathLink to="#">Form a Business Today</PathLink>
        </FlexWrapper>
        <h3>Additional</h3>
        <FlexWrapper>
          <ArrowButton />
        </FlexWrapper>
        <h2>Icons</h2>
        <h3>Statuses</h3>
        <GridWrapper columns="7">
          <IconWrapper>
            <IconCircle transform="scale(-1)" circleColor={color.blue3} iconColor={color.blue1}>
              <ArrowSVG />
            </IconCircle>
          </IconWrapper>
          <IconWrapper>
            <IconCircle transform="rotate(-90deg)" circleColor={color.orange3} iconColor={color.orange1}>
              <ArrowSVG />
            </IconCircle>
          </IconWrapper>
          <IconWrapper>
            <CheckBlueSVG />
          </IconWrapper>
          <IconWrapper>
            <IconCircle circleColor={color.blue1} iconColor={color.white}>
              1
            </IconCircle>
          </IconWrapper>
          <IconWrapper>
            <IconCircle circleColor={color.grey5} border={color.grey3} />
          </IconWrapper>
          <IconWrapper>
            <IconCircle theme="empty" circleColor={color.grey3} />
          </IconWrapper>
          <IconWrapper>
            <IconCircle>Lorem</IconCircle>
          </IconWrapper>
          <IconWrapper>
            <CheckSVG />
          </IconWrapper>
          <IconWrapper>
            <ExSVG />
          </IconWrapper>
        </GridWrapper>
        <h3>State</h3>
        <GridWrapper columns="7">
          <IconWrapper>
            <State />
          </IconWrapper>
        </GridWrapper>
        <h3>Rating</h3>
        <GridWrapper columns="7">
          <IconWrapper>
            <Rating>icon</Rating>
          </IconWrapper>
          <IconWrapper>
            <Rating>icon</Rating>
          </IconWrapper>
        </GridWrapper>
        <h2>Sections</h2>
        <h3>Header</h3>
      </Wrapper>
    </Container>

    <Section>
      <Top
        headline="Starting a nonprofit can truly help make the world better"
        text="Start for $0 + state fee. Learn how forming an LLC, an
                S-Corporation, an C-Corporation, or a Non Profit will impact
                both your liability and taxation."
        imageName="MrsBulbNonprofit"
        imageAlt="Mr Bulb with seedling"
      />
    </Section>

    <Container>
      <Wrapper>
        <h3>Footer</h3>
      </Wrapper>
    </Container>

    <Section>
      <Footer />
    </Section>

    <Container>
      <Wrapper>
        <h3>Navigation Tab</h3>
        <GreyWrapper>
          <NavigationTabs />
        </GreyWrapper>
        <h3>Tab</h3>
        <h4>Column</h4>
        <GreyWrapper>
          <AboutTabs />
        </GreyWrapper>
        <h4>Grid</h4>
        <GreyWrapper>
          <AboutTabs layout="grid" columns="3" />
        </GreyWrapper>

        <h3>FAQ</h3>
        <GreyWrapper>
          <Accordion />
        </GreyWrapper>

        <h3>Search</h3>
        <GridWrapper columns="2">
          <GreyWrapper>
            <Searchbox />
          </GreyWrapper>
        </GridWrapper>

        <h3>Form</h3>
        <h4>Input</h4>
        <GridWrapper columns="2">
          <GreyWrapper>
            <InputField className="FormInput" label="label" linkText="link" linkUrl="#" placeholder="text" />
          </GreyWrapper>
        </GridWrapper>
        <h4>Radio</h4>
        <GridWrapper columns="2">
          <GreyWrapper>
            <Label align="center" margin="0 16px 0 0">
              <Radio name="1" checked />
              Radio 1
            </Label>
            <Label align="center">
              <Radio name="1" />
              Radio 2
            </Label>
          </GreyWrapper>
        </GridWrapper>
        <h4>Checkbox</h4>
        <GridWrapper columns="2">
          <GreyWrapper>
            <Label align="center" margin="0 16px 0 0">
              <Checkbox checked />
              Checkbox
            </Label>

            <Label align="center" margin="0 16px 0 0">
              <Checkbox />
              Checkbox
            </Label>
          </GreyWrapper>
        </GridWrapper>
        <h4>Dropdown</h4>
        <GridWrapper columns="2">
          <GreyWrapper>
            <Dropdown placeholder="text" options={["option1", "option2", "option3"]} />
          </GreyWrapper>
        </GridWrapper>
        <h3>Static Check</h3>
        <h4>Text only</h4>
        <GridWrapper columns="2">
          <GreyWrapper>
            <CheckText>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.</p>
            </CheckText>
          </GreyWrapper>
          <DarkGreyWrapper>
            <CheckText theme="dark">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.</p>
            </CheckText>
          </DarkGreyWrapper>
        </GridWrapper>
        <h4>Text boxed</h4>
        <GridWrapper columns="2">
          <GreyWrapper>
            <CheckBox>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.</p>
            </CheckBox>
          </GreyWrapper>
          <GreyWrapper>
            <CheckBox isRed>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.</p>
            </CheckBox>
          </GreyWrapper>
        </GridWrapper>
        <h3>Checklist</h3>
        <GreyWrapper>{/* <Checklist title="Workforce" icon={ChecklistIcon} iconBgColor="#faefc8"/> */}</GreyWrapper>
        <h3>Top Image Box</h3>
        <GreyWrapper>
          <TopImageBox image="clock-691" content={topimagebox} />
        </GreyWrapper>

        <h3>Text Box With Absolute Image</h3>
        <GreyWrapper>
          <TextBlockWithImage SvgImage={OkIcon} imageBackgroundColor="#fce7d0" imageShadowColor="#fce7d0">
            <Heading size={4}>Understand your market</Heading>
            <Paragraph>
              You might want to target your listings to a particular type of guest, so if you know there’s a market, make sure your accommodation reflects what might be of value to them. For example, younger people might want vibrant nightlife and a very modern place to stay, while older people
              could want more peace and quiet, with natural outside space.
            </Paragraph>
          </TextBlockWithImage>
        </GreyWrapper>

        <h3>Adventages</h3>
        <GridWrapper columns="2">
          <GreyWrapper>
            <Adventages headline="File an Annual Report" text="Depending on the state you’re located in, you will probably have to file a report every year. This report tells the state about any major changes to your daycare business, and we can file your Annual Report on your behalf." />
          </GreyWrapper>
          <GreyWrapper>
            <Adventages
              style={{ marginLeft: "15px" }}
              url="/manage-your-company/annual-report"
              urlText="Annual Report"
              headline="File an Annual Report"
              circleText="1"
              circlePosition="center"
              circleBackgroundShadow={shadow.blue1}
              circleBackgroundColor={color.blue1}
              className="center"
              text="Depending on the state you’re located in, you will probably have to file a report every year. This report tells the state about any major changes to your daycare business, and we can file your Annual Report on your behalf."
            />
          </GreyWrapper>
        </GridWrapper>

        <h3>Counting Box</h3>
        <GreyWrapper>
          <CountingTextBoxed number={1}>
            <Paragraph bottomMargin={0}>An executive summary with the most important points from your business plan</Paragraph>
          </CountingTextBoxed>
        </GreyWrapper>

        <h3>Article on Blog Page</h3>
        <GridWrapper columns="2">
          <GreyWrapper>
            <BlogArticleCard content={articles[2]} />
          </GreyWrapper>
        </GridWrapper>

        <h3>Info Cards Section</h3>
        <GreyWrapper>
          <InfoCardsSection cards={InfoCards.items} />
        </GreyWrapper>

        <h3>Circle with Text Block</h3>
        <GreyWrapper>
          <CircleWithText withBg={true} textInsideCircle="70" symbol="%" textLine="Of teens trust influencers more than traditional celebrities" />
        </GreyWrapper>
      </Wrapper>
    </Container>
    <Container>
      <Wrapper>
        <h3>Easily Compare State Filing Times</h3>
        {/*<CompareTable headers={CompareStateFilingTimes.headers} entries={CompareStateFilingTimes.entries}/>*/}
      </Wrapper>
    </Container>
    <Container>
      <Wrapper>
        <h3>Which States Are Fast?</h3>
        <StatesTable entries={WhichStatesAreFast} />
      </Wrapper>
    </Container>
    <Container>
      <Wrapper>
        <h3>Want to learn more about LLCs in your state?</h3>
        <StatesMap />
      </Wrapper>
    </Container>
    <Container>
      <Wrapper>
        <h3>Incfile.com Reviews</h3>
      </Wrapper>
    </Container>
    <Reviews reviews={ReviewsData} />
    <Container>
      <Wrapper style={{ width: "435px" }}>
        <h3>Amount slider</h3>
        <AmountSlider initValue={72000} maxValue={100000} description="Estimated yearly income" onChange={() => {}} />
      </Wrapper>
    </Container>
  </Layout>
);

export default ComponentsPage;
