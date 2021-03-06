import Container from "../../../container";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import { color } from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import SkillsIcon from "../../../../images/icons/additionals-skills.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import BusinessSkillsIcon from "../../../../images/icons/business-skills-icon.inline.svg";
import EssentialIcon from "../../../../images/icons/essential-icon.inline.svg";
import CompetitionIcon from "../../../../images/icons/competition-icon.inline.svg";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

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
  padding-bottom: 80px;

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

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 466px;
  width: 100%;
  opacity: 0.5;
  transform: rotate(-180deg);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const QuestionToAsk = () => (
  <ContainerWrapper>
    <Oval>
      <OvalSvg />
    </Oval>

    <Container>
      <GridSection>
        <TitleBox>
          <Heading size={2} left>
            Questions to Ask Before You Start a Photography Business
          </Heading>
          <Heading size={3} left>
            Is Photography Entrepreneurship For You?
          </Heading>
          <Paragraph big>
            Running your own photography business could be a great choice as
            long as you are aware of a few different areas.
          </Paragraph>
        </TitleBox>

        <GridSectionList>
          <TextBlockWithImage
            SvgImage={CompetitionIcon}
            imageBackgroundColor={color.green2}
            imageShadowColor={color.green2}
          >
            <Heading size={3} template={4}>
              Competition is fierce
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              There are generally more photographers than there are jobs to
              support them.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={BusinessSkillsIcon}
            imageBackgroundColor={color.babyblue2}
            imageShadowColor={color.babyblue2}
          >
            <Heading size={3} template={4}>
              You need a lot of business skills
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              It’s not just about taking photographs. You must be able to manage
              your business well, market yourself, deal with people and
              administer effectively.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={EssentialIcon}
            imageBackgroundColor={color.orange2}
            imageShadowColor={color.orange2}
          >
            <Heading size={3} template={4}>
              The hustle is essential
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              You will likely always be chasing down work and filling up your
              pipeline.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={SkillsIcon}
            imageBackgroundColor={color.purple2}
            imageShadowColor={color.purple2}
          >
            <Heading size={3} template={4}>
              Additional skills can make the difference
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Being an expert at secondary photography skills like image
              editing, photographic manipulation and other areas can help you
              stand out.
            </Paragraph>
          </TextBlockWithImage>
        </GridSectionList>
        <Paragraph
          big
          style={{
            justifyContent: "center",
            width: "100%",
            maxWidth: "750px",
            margin: "auto",
          }}
        >
          If you can tick all these boxes, the chances are you would be both a
          great photographer and run a successful photography business. You’ll
          get to impress people with amazing visuals and capture memories that
          clients will always treasure.
        </Paragraph>
      </GridSection>
    </Container>
  </ContainerWrapper>
);

export default QuestionToAsk;
