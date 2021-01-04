import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import Icon5 from "../../../../images/icons/body-clothes-icon.inline.svg";
import Icon4 from "../../../../images/icons/flexibility.inline.svg";
import Icon3 from "../../../../images/icons/freedom-icon.inline.svg";
import Icon1 from "../../../../images/icons/schedule.inline.svg";
import Icon2 from "../../../../images/icons/start-up-icon.inline.svg";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import { gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-center";

const TypeBusiness = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>

    <Oval2>
      <OvalSvg />
    </Oval2>

    <Oval3>
      <OvalSvg />
    </Oval3>

    <TextCenterLayout
      headline="The Concerns of Female Founders - Moms and Women Entrepreneurs"
      headlineWidth={770}
      textWidth={770}
      text="The pressures on women are unique, especially if you’re a mom. When you’re deciding on the right
                          business idea, it’s important to take these areas into account."
    />

    <ContentCenter>
      <GridSection>
        <GridSectionList>
          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon1}
            imageBackgroundColor={color.purple2}
            imageShadowColor={color.purple2}
          >
            <Heading size={3} template={4}>
              A business that fits with your schedule
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              If you have kids, you’ll want a business you can organize around
              childcare needs, school runs and the endless chores that children
              create.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon2}
            imageBackgroundColor={color.orange2}
            imageShadowColor={color.orange2}
          >
            <Heading size={3} template={4}>
              A business that doesn’t cost much to start up
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              You don’t want too much risk in your business, so that means
              limiting both up-front and ongoing costs as much as possible.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon3}
            imageBackgroundColor={color.yellow2}
            imageShadowColor={color.yellow2}
          >
            <Heading size={3} template={4}>
              A business that gives you freedom
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Independent female entrepreneurs want to retain and expand on
              their freedom, which is why it can be useful to run a business
              that gives you independence.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon4}
            imageBackgroundColor={color.babyblue2}
            imageShadowColor={color.babyblue2}
          >
            <Heading size={3} template={4}>
              A business that gives you flexibility
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Even if you don’t have a set schedule, flexibility is vital, so
              choose a business that supports it.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon5}
            imageBackgroundColor={color.red2}
            imageShadowColor={color.red2}
          >
            <Heading size={3} template={4}>
              A business that fits around caregiving needs
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Many women have care commitments to elders and other loved ones,
              so ideally you'll want a business that integrates with those needs
              as well.
            </Paragraph>
          </TextBlockWithImage>
        </GridSectionList>
      </GridSection>
    </ContentCenter>
    <TextCenterLayout
      textWidth={770}
      text="Finally, you may want a business that helps you stay active in your industry, keeping you up-to-date with the latest skills and thinking."
      bottomMargin={100}
    />

    <TextCenterLayout
      textWidth={770}
      headlineWidth={770}
      headline="Business Ideas for Women and Moms"
      text="Whether you’re looking for a home-based business idea perfect for moms, a small business idea, or a unique startup, there are plenty of ideas out there. Let’s get into some good ideas for your woman-owned business."
    />

    <Container>
      <Service>
        <AdventagesBox>
          <CurveWrapper>
            <Curve color={color.orange1} />
          </CurveWrapper>
          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={1}
            title="Start Blogging and Writing"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="start-blogging-and-writing"
            width="100%"
          >
            <Paragraph mixed={true}>
              You can complete blogging and writing at your own pace. These
              businesses are low-effort to start and will easily fit around your
              schedule. You can write when you have time wherever you are, and
              monetize your blog through advertising, affiliate marketing or
              selling products you’ve created yourself.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={2}
            title="Provide Freelance Services Through a Marketplace"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="freelancing-from-home"
            width="100%"
          >
            <Paragraph mixed={true}>
              The road to being a full-time freelancer can be difficult but
              rewarding. If you have a creative skill you can sell, you can use
              a freelance marketplace like Upwork, Fiverr and People Per Hour.
              On these sites, you can pick up as much work as you want, and
              setting up a profile will allow you to list your services and
              attract potential clients.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={3}
            title="Sell Products Via a Marketplace"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="online-shop-icon"
            width="100%"
          >
            <Paragraph mixed={true}>
              If you’d rather sell products than services, a third-party
              marketplace like Amazon or eBay could be ideal. You’ll need to
              find the right niche, understand profit margins and ship products,
              but this can be a great way to get started with ecommerce and
              online retail.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={4}
            title="Create and Sell Products"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="business-licence-search-copy-5"
            width="100%"
          >
            <Paragraph mixed={true}>
              If you have artistic talent, you can even sell products that you
              make yourself. You can do this through a marketplace like{" "}
              <Link to="/start-a-business/etsy-business/">Etsy</Link>, or create
              your own store to sell art, prints and other creations. Websites
              like CafePress and Zazzle will even put your designs onto items
              and take care of everything else for you.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={5}
            title="Provide Services From Home"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="red-home"
            width="100%"
          >
            <Paragraph mixed={true}>
              Home-based businesses aren’t just about selling products and
              skills, you can also provide other services. For example, you
              might have skills as an instructor, coach,{" "}
              <Link to="/start-a-business/consulting-business/">consultant</Link>
              , complementary therapist or counselor.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={6}
            title="Offer Tutoring and Coaching"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="leadership-coaching-2"
            width="100%"
          >
            <Paragraph mixed={true}>
              If you’ve got some skill at helping others, tutoring and coaching
              are in demand. You’ll need to demonstrate some experience and
              expertise in your topic, but it’s another low-cost business to
              start - all you really need is yourself.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={7}
            title="Provide Childcare Services"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="provide-childcare-services"
            width="100%"
          >
            <Paragraph mixed={true}>
              With the right certifications, you can offer childcare, nursery or
              babysitting services from your home.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={8}
            title="Provide Professional Services From Home"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="purple-home"
            width="100%"
          >
            <Paragraph mixed={true}>
              If you have professional qualifications, they can be a great basis
              for a home-based business as well. Perhaps you're a business
              coach, bookkeeper or accountant who can take client appointments
              around your own schedule.
            </Paragraph>
          </AdventagesWithLongText>
        </AdventagesBox>
      </Service>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  background-image: ${gradient.orange3};
  padding-top: 100px;
  position: relative;
  overflow: hidden;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 20px;

  @media (min-width: 490px) {
    grid-template-columns: 470px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 470px 470px;
  }
`;

const CurveWrapper = styled.div`
  position: absolute;
  right: -24px;
  top: 0px;
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 774px;
  transform: scaleY(-1);
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: scaleX(-1);
  width: 100%;
  opacity: 0.5;

  svg {
    transform: scaleY(-1);
  }

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval3 = styled.div`
  position: absolute;
  right: 0;
  bottom: 723px;
  width: 100%;
  opacity: 0.5;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const GridSection = styled.div`
  width: 100%;
`;

const GridSectionList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 70px;
  margin-top: 76px;
  margin-bottom: 76px;

  @media (min-width: 490px) {
    grid-template-columns: 470px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 470px 470px;
  }
`;

export default TypeBusiness;
