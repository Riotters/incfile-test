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
import AbsoluteShapeCurveElement from "../../elements/absolute-shape-curve-e";

// Bg box CTA
import BgBoxPersonalOA from "../../../images/icons/states/personal-oa.inline.png";
import BgBoxHandlePaperWorks from "../../../images/icons/states/handle-paperwork.inline.png";
import BgBoxBusinessNameSearchTool from "../../../images/icons/states/business-name-search-tool.inline.png";

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

const HowToGuide = ({ content }) => {
  return (
    <Wrapper>
      {/* Why choose section */}
      <Heading size={3}>{parse(content.whyChoose.heading)}</Heading>
      <Paragraph big mixed>
        {parse(content.whyChoose.text1)}
      </Paragraph>
      <Paragraph big mixed>
        {parse(content.whyChoose.text2)}
      </Paragraph>

      <Heading size={4}>{content.whyChoose.heading4}</Heading>
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
      <Paragraph big>{content.whyChoose.text3}</Paragraph>

      {/* Main Steps */}
      <Heading size={3} bottomMargin="40" style={{ marginTop: `48px` }}>
        {content.mainSteps.heading3}
      </Heading>

      <div id="video">
        <LightBoxVideo
          thumbnailVideo="comparison-chart-video-3611"
          videoID="gXFjp7S_Fsw"
          bottomMargin="32"
          videoSchema={{
              name: "\"Forming an LLC in Florida\" by Incfile",
              description: "\n" +
                  "Florida is home to some of the biggest businesses in America—but is it the best place to form your LLC? \n" +
                  "\n" +
                  "Starting an LLC in Florida means you get the advantages and protections of larger Florida corporations, but with much simpler rules and regulations. Your Florida LLC will: \n" +
                  "- Separate your personal assets from business liability or debt\n" +
                  "- Be easy to maintain and keep compliant \n" +
                  "- Pass tax benefits to you \n" +
                  "\n" +
                  "How to Form an LLC in Florida: \n" +
                  "1. Gather your members’ info\n" +
                  "2. Pick a name that's available in Florida\n" +
                  "3. Provide an official address\n" +
                  "4. Pick a Florida Registered Agent\n" +
                  "5. Get an EIN / federal tax ID number\n" +
                  "6. File a Certificate of Formation with the Florida Secretary of State\n" +
                  "\n" +
                  "\n" +
                  "Here are some additional links you might find useful for your Florida LLC:\n" +
                  "\n" +
                  "https://www.incfile.com/florida-llc/ - Our \"How To\" Guide All About Florida LLCs\n" +
                  "https://www.youtube.com/redirect?event=video_description&v=gXFjp7S_Fsw&q=https%3A%2F%2Fwww.incfile.com%2Fbusiness-name-search%2F&redir_token=QUFFLUhqbVJrY0ZFSUgwNzFtcVJ2VjJHODdCODZTY1hoQXxBQ3Jtc0trMy1lVmlNek5JSVhmV3c3QzFpalpvN0FmeXp0T2pVYnBlZXdIZ25Ud0k5SEw0WGt2dFpISE4tUEprWmNCaWpjbWNEeWFLd0QzbXBLcnQ3VEF5enZ0NGZlNE5kZGJKMm5rNWxOemlCdnhSRjhFRGpSOA%3D%3D - Conduct a business entity search with the Florida Sunbiz / Secretary of State\n" +
                  "https://www.youtube.com/redirect?event=video_description&v=gXFjp7S_Fsw&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Fregistered-agent%2F&redir_token=QUFFLUhqbngwVnJiTEwtZlA4RDk1RTdWaXExYy1mYkRQd3xBQ3Jtc0tsS0hmMjBpa3pMWnJfZk5FNk9wWm90WHFwQjR4S3lVWE4yNm95VHRLc0JNS3FqbXBLZ3hERTdmRHA2LUc0Q3NLWEIyd25uVk9zcUxKR0xKOXJXVnNjNDE2WE1wUXVoSU5FQ2gxM0tMcXRrajFTNEZzcw%3D%3D - Get a Florida Registered Agent\n" +
                  "https://www.youtube.com/redirect?event=video_description&v=gXFjp7S_Fsw&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Ftax-id-ein%2F&redir_token=QUFFLUhqbU1oZWpUOWp1Z1JRY09zbGxaeXJaZTlmWmhMZ3xBQ3Jtc0ttdi0xMFBnU3h6UHJIVXJJMW5KcTZnYndiQmlmQXdwVU1yYl90VDhIaWNMaHZZZXVadnF5bkxsYnJKbGhCZDdRSDV4WmtMV2hlOTNTdFJJMHp3cmo5WUozR3NJVGRqLUhwMW1rd2t6OVFwVkNzSjNCVQ%3D%3D - Get an EIN for your Florida LLC\n" +
                  "https://www.incfile.com/ - Start an LLC in Florida for Free\n",
              uploadDate: "2020-07-28",
              duration: "1:22",
              interactionCount: "362",
          }}
        />
      </div>

      {content.mainSteps.navSteps.map((step) => (
        <Link to="/#" onClick={(e) => handleMenuStepClick(step.blockID, e)}>
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
        boxShadow={false}
        paddingLeft={0}
        style={{ marginTop: "100px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3}>{content.mainSteps.step1.heading1}</Heading>
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
        boxShadow={false}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3}>{content.mainSteps.step2.heading1}</Heading>
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
        boxShadow={false}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3}>{content.mainSteps.step3.heading1}</Heading>
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
        boxShadow={false}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3}>{content.mainSteps.step4.heading1}</Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text1)}
        </Paragraph>
        <IconListColorBox
          color={color.blue3}
          content={content.mainSteps.step4.lists}
          rounded
        />
        <Button
          content={content.mainSteps.step4.dowload_205_button}
          theme="secondary56"
          arrow
          margin="16px 0 0 0"
          marginMD="42px 0 42px 0"
        />
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text2)}
        </Paragraph>

        <RelativeElement margin="40px 0">
          <AbsoluteShapeCurveElement right="-25px" top="-30px">
            <ShapeCurve color={color.purple1} />
          </AbsoluteShapeCurveElement>
          {content.mainSteps.step4.certificate_info.map((item) => (
            <Whitebox flex padding="24px" bottomMargin="8px">
              <Paragraph
                mixed={true}
                bottomMargin={0}
                style={{ fontWeight: `bold`, minWidth: `300px` }}
              >
                {item.text1}
              </Paragraph>
              <Paragraph mixed={true} bottomMargin={0}>
                {parse(item.text2)}
              </Paragraph>
            </Whitebox>
          ))}
        </RelativeElement>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text3)}
        </Paragraph>
        <BoxCTA
          bgColor={color.orange3}
          bgImage={BgBoxHandlePaperWorks}
          content={content.mainSteps.step4.cta}
        />

        <Heading size={4} style={{ marginTop: `40px` }}>
          {parse(content.mainSteps.step4.annualReport[0].title)}
        </Heading>
        {content.mainSteps.step4.annualReport[0].items.map((item) => (
          <Whitebox flex padding="24px" bottomMargin="8px">
            <Paragraph
              mixed={true}
              bottomMargin={0}
              style={{ fontWeight: `bold`, minWidth: `300px` }}
            >
              {item.text1}
            </Paragraph>
            <Paragraph mixed={true} bottomMargin={0}>
              {parse(item.text2)}
            </Paragraph>
          </Whitebox>
        ))}

        <Heading size={4} style={{ marginTop: `40px` }}>
          {parse(content.mainSteps.step4.annualReport[1].title)}
        </Heading>
        {content.mainSteps.step4.annualReport[1].items.map((item) => (
          <Whitebox flex padding="24px" bottomMargin="8px">
            <Paragraph
              mixed={true}
              bottomMargin={0}
              style={{ fontWeight: `bold`, minWidth: `300px` }}
            >
              {item.text1}
            </Paragraph>
            <Paragraph mixed={true} bottomMargin={0}>
              {parse(item.text2)}
            </Paragraph>
          </Whitebox>
        ))}
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
        boxShadow={false}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3}>{content.mainSteps.step5.heading1}</Heading>
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
        boxShadow={false}
        paddingLeft={0}
        style={{ marginTop: "70px" }}
        circleShadowY={40}
        circleShadowBlure={80}
        width={100}
        widthUnit="%"
      >
        <Heading size={3}>{content.mainSteps.step6.heading1}</Heading>
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
            <Heading size={item.size} style={{ marginTop: `42px` }}>
              {item.content}
            </Heading>
          )}

          {item.type === "paragraph" && (
            <Paragraph big mixed={true}>
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
