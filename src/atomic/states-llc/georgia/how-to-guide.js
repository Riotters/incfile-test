import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import parse from "html-react-parser";

// Components
import BoxCTA from "../box-cta";
import Circle from "../../atoms/icons/circle";
import Whitebox from "../../atoms/boxes/white-box";
import { shadow } from "../../atoms/styles/shadows";
import Button from "../../molecules/buttons/button";
import ShapeCurve from "../../atoms/shapes/curve";
import BoxedButton from "../../molecules/buttons/boxed";
import ArrowLink from "../../../components/arrow-link";
import { Heading } from "../../atoms/typography/heading";
import RelativeElement from "../../elements/relative-e";
import ArrowSVG from "../../../images/arrow.inline.svg";
import LightBoxVideo from "../../../components/LightBox";
import { color } from "../../../components/styles/colors";
import { Paragraph } from "../../atoms/typography/paragraph";
import TextCheck from "../../../components/static-check/text-only";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import TextBlockWithNumberCounting from "../../molecules/mixed-blocks/text-block-with-absolute-number";
//import AbsoluteShapeCurveElement from "../../elements/absolute-shape-curve-e";
import AbsoluteShapeCurveElement from "../../atoms/icons/curve";

// Bg box CTA
import BgBoxPersonalOA from "../../../images/icons/states/personal-oa.inline.png";
import BgBoxHandlePaperWorks from "../../../images/icons/states/handle-paperwork.inline.png";
import BgBoxBusinessNameSearchTool from "../../../images/icons/states/business-name-search-tool.inline.png";
import AnnualReportFilingBox from "../annual-report-and-filing-box";

const Wrapper = styled.div``;

const ListFlex = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 15px;
  margin: 40px 0;

  @media (min-width: 400px) {
    flex-flow: row wrap;
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  & > div {
    width: 100%;

    @media (min-width: 769px) {
      max-width: calc(50% - 30px);
    }

    p {
      max-width: 100%;
    }
  }
`;

const BoxButtonLinks = styled.div`
  .article-link:not(:last-child) {
    display: block;
    margin-bottom: 8px;
  }
`;

const WhiteBoxLink = styled(Whitebox)`
  align-items: center;

  p {
    transition: color 0.3s ease;

    &:hover {
      color: ${color.blue1};
    }
  }
`;

const HowToGuide = ({ content, data }) => {
  return (
    <Wrapper>
      {/* Why choose section */}
      <Heading size={2} template={2} left={true} bottomMargin={48}>
        {parse(content.whyChoose.heading)}
      </Heading>
      <Paragraph big mixed>
        {parse(content.whyChoose.text1)}
      </Paragraph>
      <Paragraph big mixed>
        {parse(content.whyChoose.text2)}
      </Paragraph>
      <Paragraph big mixed>
        {parse(content.whyChoose.text3)}
      </Paragraph>
      <ListFlex>
        {content.whyChoose.lists.map((item) => (
          <TextCheck>
            <p>{item}</p>
          </TextCheck>
        ))}
      </ListFlex>
      <Paragraph big mixed={true}>
        {parse(content.whyChoose.learnmore)}
      </Paragraph>
      <Paragraph big bottomMargin={56}>
        {content.whyChoose.text4}
      </Paragraph>

      {/* Main Steps */}
      <Heading size={2} template={3} left={true} bottomMargin={40}>
        {content.mainSteps.heading3}
      </Heading>

      <div id="video">
        <LightBoxVideo
                  thumbnailVideo="ga-llc-video-thumbnail-01"
                  alt="how to start an llc in georgia"
          videoID="teObxHzLcxE"
          bottomMargin="32"
        />
      </div>

      {content.mainSteps.navSteps.map((step, i) => (
        <Link key={i} to="/#" onClick={(e) => handleMenuStepClick(step.blockID, e)}>
          <WhiteBoxLink bottomMargin="8px" padding="24px" flex>
            <Circle
              circleColor={color.orange3}
              iconColor={color.orange1}
              rightMargin="24"
              transform="rotate(90deg)"
              className="circle"
            >
              <ArrowSVG />
            </Circle>
            <Paragraph mixed={true} bottomMargin="0">
              {parse(step.text)}
            </Paragraph>
          </WhiteBoxLink>
        </Link>
      ))}

      <TextBlockWithNumberCounting
        blockId="step1"
        numberCounting="1"
        borderRadius="0"
        boxShadow={false}
        textBackgroundColor="transparent"
        imageBackgroundColor={color.white}
        imageShadowColor={shadow.white2}
        imageShadowOpacity={0.5}
        paddingLeft={0}
        style={{ marginTop: "100px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3} template={3} left={true}>
          {content.mainSteps.step1.heading1}
        </Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step1.text1)}
        </Paragraph>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step1.text2)}
        </Paragraph>
        <BoxCTA
          bgColor={color.purple3}
          bgImage={BgBoxBusinessNameSearchTool}
          content={content.mainSteps.step1.cta}
        />
      </TextBlockWithNumberCounting>

      <TextBlockWithNumberCounting
        blockId="step2"
        numberCounting="2"
        borderRadius="0"
        boxShadow={false}
        textBackgroundColor="transparent"
        imageBackgroundColor={color.white}
        imageShadowColor={shadow.white2}
        imageShadowOpacity={0.5}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3} template={3} left={true}>
          {content.mainSteps.step2.heading1}
        </Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step2.text1)}
        </Paragraph>
      </TextBlockWithNumberCounting>

      <TextBlockWithNumberCounting
        blockId="step3"
        numberCounting="3"
        borderRadius="0"
        boxShadow={false}
        textBackgroundColor="transparent"
        imageBackgroundColor={color.white}
        imageShadowColor={shadow.white2}
        imageShadowOpacity={0.5}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3} template={3} left={true}>
          {content.mainSteps.step3.heading1}
        </Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step3.text1)}
        </Paragraph>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step3.text2)}
        </Paragraph>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step3.text3)}
        </Paragraph>

        <BoxButtonLinks>
          {content.mainSteps.step3.groupBtn1.map((button) => (
            <BoxedButton className="article-link" content={button} ellipsis />
          ))}
        </BoxButtonLinks>
      </TextBlockWithNumberCounting>

      <TextBlockWithNumberCounting
        blockId="step4"
        numberCounting="4"
        borderRadius="0"
        boxShadow={false}
        textBackgroundColor="transparent"
        imageBackgroundColor={color.white}
        imageShadowColor={shadow.white2}
        imageShadowOpacity={0.5}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3} template={3} left={true}>
          {content.mainSteps.step4.heading1}
        </Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text1)}
        </Paragraph>
        <Button
          content={content.mainSteps.step4.dowload_205_button}
          theme="secondary56"
          arrow
          margin="16px auto 0 0"
          marginMD="42px auto 42px 0"
        />
        <ArrowLink
          url={content.mainSteps.step4.link.url}
          externalLink={content.mainSteps.step4.link.externalLink}
        >
          {content.mainSteps.step4.link.text}
        </ArrowLink>
        <ArrowLink
          url={content.mainSteps.step4.link2.url}
          externalLink={content.mainSteps.step4.link.externalLink}
        >
          {content.mainSteps.step4.link2.text}
        </ArrowLink>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text4)}
        </Paragraph>

        <RelativeElement>
          <AbsoluteShapeCurveElement right="0" top="-30px">
            <ShapeCurve color={color.purple1} />
          </AbsoluteShapeCurveElement>
        </RelativeElement>

        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text5)}
        </Paragraph>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text6)}
        </Paragraph>
        <BoxCTA
          bgColor={color.orange3}
          bgImage={BgBoxHandlePaperWorks}
          content={content.mainSteps.step4.cta}
        />

        <AnnualReportFilingBox data={data} />
      </TextBlockWithNumberCounting>

      <TextBlockWithNumberCounting
        blockId="step5"
        numberCounting="5"
        borderRadius="0"
        boxShadow={false}
        textBackgroundColor="transparent"
        imageBackgroundColor={color.white}
        imageShadowColor={shadow.white2}
        imageShadowOpacity={0.5}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3} template={3} left={true}>
          {content.mainSteps.step5.heading1}
        </Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step5.text1)}
        </Paragraph>
      </TextBlockWithNumberCounting>

      <TextBlockWithNumberCounting
        blockId="step6"
        numberCounting="6"
        borderRadius="0"
        boxShadow={false}
        textBackgroundColor="transparent"
        imageBackgroundColor={color.white}
        imageShadowColor={shadow.white2}
        imageShadowOpacity={0.5}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3} template={3} left={true}>
          {content.mainSteps.step6.heading1}
        </Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step6.text1)}
        </Paragraph>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step6.text2)}
        </Paragraph>
        <Button
          content={content.mainSteps.step6.button1}
          theme="secondary56"
          arrow
          width="450px"
          margin="16px 0 0 0"
          marginMD="42px 0 42px 0"
        />
        <BoxCTA
          bgColor={color.orange3}
          bgImage={BgBoxPersonalOA}
          content={content.mainSteps.step6.cta}
        />
      </TextBlockWithNumberCounting>

      {content.otherInfo.map((item, i) => (
        <div>
          {item.type === "heading" && (
            <Heading
              size={item.size}
              template={item.template}
              bottomMargin={item.bottomMargin}
              left={item.left}
            >
              {item.content}
            </Heading>
          )}

          {item.type === "paragraph" && (
            <Paragraph big mixed={true} bottomMargin={item.bottomMargin}>
              {parse(item.content)}
            </Paragraph>
          )}

          {item.type === "arrow-links" &&
            item.content.map((link) => (
              <ArrowLink url={link.url} style={link.style}>
                {link.text}
              </ArrowLink>
            ))}

          {item.type === "list-dot" && (
            <IconListColorBox
              color={color.blue3}
              content={item.content}
              rounded
            />
          )}

          {item.type === "button" && (
            <Button
              content={item.content}
              theme={item.theme}
              arrow
              width="350px"
              margin="16px 0 0 0"
              marginMD="42px 0 42px 0"
            />
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default HowToGuide;

export function handleMenuStepClick(l, e) {
  e.preventDefault();

  const el = document.getElementById(l);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
