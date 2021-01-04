import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import OvalSvg from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import { gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";

const ContainerWrapper = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.green3};
  padding-bottom: 100px;
  position: relative;
  padding-top: 120px;
`;

const GridSection = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  width: 100%;
  position: relative;
  max-width: 750px;

  @media (min-width: 750px) {
    margin: 0 auto;
  }

  h2 {
    color: #1d1d1d;
    font-size: 40px;
    text-align: left;
    margin-bottom: 24px;
  }
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

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 160px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const AbsoluteCurve = styled.div`
  position: absolute;
  left: -27px;
  top: -16px;
  transform: rotate(-90deg);
`;

const ValidatingBusinessIdea = () => (
  <ContainerWrapper>
    <OvalCenter>
      <OvalSvg />
    </OvalCenter>

    <Container>
      <GridSection>
        <TitleBox>
          <AbsoluteCurve>
            <Curve color={color.blue1} />
          </AbsoluteCurve>
          <Heading size={2} left>
            Validating Your Teen Business Idea
          </Heading>
          <Paragraph big>
            Remember, the ideas above are just a starting point. You can define
            and tweak exactly what type of teen business you want to run by
            conducting your own research.
          </Paragraph>
          <Paragraph big style={{ fontWeight: "bold" }}>
            But don’t assume that just because it’s a teen business, running it
            will be easy.
          </Paragraph>
          <Paragraph big>
            You will need to be polite, reliable and prompt. You should complete
            services as you say you will, and make sure people are happy with
            the result. This will help to build up your reputation and can
            generate good word of mouth and more sales.
          </Paragraph>
          <Paragraph big>Here are some further tips:</Paragraph>
        </TitleBox>

        <GridSectionList>
          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={IdetifyIcon}
            imageBackgroundColor={color.green2}
            imageShadowColor={color.green2}
          >
            <Heading size={3} template={4}>
              Identify your unique selling points (USPs)
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              This might be surprising, but even though you "only" have a teen
              business, you still need to offer something unique. Whether that’s
              what you do, your reliability and speed, or your unique approach,
              figure out what makes you stand out so you can capitalize on it.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={InvolvedIcon}
            imageBackgroundColor={color.babyblue2}
            imageShadowColor={color.babyblue2}
          >
            <Heading size={3} template={4}>
              Understand your market
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Clearly identify exactly who your customers are likely to be,
              where they hang out and how you’re going to reach them. If you’re
              running a local business, this could be as simple as talking to
              your neighbors; if you’re online, you’ll need to do a little more
              research.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={TalkIcon}
            imageBackgroundColor={color.orange2}
            imageShadowColor={color.orange2}
          >
            <Heading size={3} template={4}>
              Talk to clients
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Speak with potential customers to understand what they want from
              you, and validate this by asking if they would commit to spending
              real money on it.
            </Paragraph>
          </TextBlockWithImage>
        </GridSectionList>
        <TitleBox>
          {" "}
          <Paragraph big>
            The thing to learn here is that it’s okay to say “no” to your first,
            second or third teen business ideas. Very few teen entrepreneurs get
            it right the first time. In fact, getting it wrong is often a badge
            of honor! Still, you don’t want to waste too much time, energy or
            money on the wrong initiatives, so ask and answer these questions
            honestly to find the right way forward.
          </Paragraph>
        </TitleBox>
      </GridSection>
    </Container>
  </ContainerWrapper>
);

export default ValidatingBusinessIdea;
