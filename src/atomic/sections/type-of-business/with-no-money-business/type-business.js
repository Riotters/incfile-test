import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Link } from "gatsby";

const TypeBusiness = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg />
    </Oval2>

    <TextCenterLayout
      headlineWidth={770}
      textWidth={770}
      headline="Low or No Cost Business Ideas"
      text="Here are some great examples of business ideas with low investment. There are many other great lists with ideas for low cost startup businesses"
    />

    <Container>
      <Service>
        <AdventagesBox>
          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={1}
            title="Creative Businesses"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="with-no-money-business-2"
            width="100%"
          >
            <Paragraph mixed={true}>
              You can sell your creative services. If you’re a painter,
              illustrator, writer or designer, you can make money providing
              products and services to individuals and businesses. Whether you
              work on a freelance basis or you sell products, neither needs much
              capital to set up. You can sell crafted items through portals like{" "}
              <a
                href="https://www.etsy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Etsy
              </a>
              , sell freelance services through{" "}
              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork
              </a>{" "}
              or{" "}
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </a>{" "}
              or sell your designs through print-on-demand services like{" "}
              <a
                href="https://www.cafepress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cafepress
              </a>{" "}
              or{" "}
              <a
                href="https://www.zazzle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zazzle
              </a>
              .
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={2}
            title="Home Help and Trade Services"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="yard-work-and-chores"
            width="100%"
          >
            <Paragraph mixed={true}>
              People always need help around their homes, and they’re happy to
              pay for it. You could try dog walking, with-no-money, yard work,
              babysitting, landscaping and more. You’ll only need to put a
              little money out for basic supplies; if you're great at your job,
              you’ll soon have repeat clients. If you have a trade you’re
              trained in, you can leverage that into a business too. You could
              become an interior designer, carpenter, builder, plumber,
              electrician or another type of tradesperson.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={3}
            title="Selling Goods Online"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="online-shop-icon"
            width="100%"
          >
            <Paragraph mixed={true}>
              While most retail requires you to buy stock and inventory up
              front, you still have a couple of options for getting into
              ecommerce.{" "}
              <a
                href="https://www.thecurrencyshop.com.au/business"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dropshipping
              </a>{" "}
              allows you to sell products that are shipped directly from
              manufacturers to end customers - you don’t pay until the order is
              made. You can also get into{" "}
              <a
                href="https://neilpatel.com/what-is-affiliate-marketing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                affiliate marketing
              </a>
              , where you send people to another website to purchase something
              and get a commission on any sales you refer.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={3}
            title="Using Your Knowledge"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="using-your-knowledge-02"
            width="100%"
          >
            <Paragraph mixed={true}>
              You may have other types of knowledge you can turn into a small
              business. Perhaps you know how to code and develop, or you can
              design and build websites. You might be a social media expert or a
              great blogger. You could look into tutoring and teaching. The
              internet has lowered the barriers to starting knowledge-based
              businesses, and they are a great place to start if you're low on
              capital.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={4}
            title="Consulting and Expert Advice"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="talk-to-incorporation-specialist-not-a-salesperson-01"
            width="100%"
          >
            <Paragraph mixed={true}>
              If you have insight, expertise and experience that’s useful to
              others, you could get work as a consultant. If you have an
              extensive background in a particular field, think about the type
              of advice and services other people would be willing to pay for.
            </Paragraph>
          </AdventagesWithLongText>

          <AdventagesWithLongText
            style={{ textAlign: "left" }}
            circleText={5}
            title="The Gig Economy"
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
            imageName="the-gig-economy"
            width="100%"
          >
            <Paragraph mixed={true}>
              The gig economy also provides plenty of opportunity for starting a
              small business without much capital. If you have a spare room, you
              can rent it through{" "}
              <a
                href="https://www.airbnb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Airbnb
              </a>
              . If you want to drive, there’s{" "}
              <a
                href="https://www.lyft.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lyft
              </a>{" "}
              or{" "}
              <a
                href="https://www.uber.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Uber
              </a>
              . For local tasks, you can try out{" "}
              <a
                href="https://www.taskrabbit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TaskRabbit
              </a>{" "}
              or set yourself up as a personal concierge.
            </Paragraph>
          </AdventagesWithLongText>
        </AdventagesBox>
      </Service>
      <TextCenterLayout
        textWidth={770}
        text="There are many other great lists with <a href='https://www.theworkathomewoman.com/businesses-start-no-money/' target='_blank'>ideas for low cost startup
      businesses.</a>"
      />
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  background-image: ${gradient.blue3};
  padding-top: 100px;
  position: relative;
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

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 412px;
  width: 100%;
  transform: rotate(180deg);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 173px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default TypeBusiness;
