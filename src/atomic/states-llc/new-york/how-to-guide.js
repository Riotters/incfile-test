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

const WhiteBoxColumn = styled(Whitebox)`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  p {
    &:first-child {
      font-weight: bold;
      min-width: 50%;
    }
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
      <Heading size={3}>{parse(content.whyChoose.heading)}</Heading>
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
      <Paragraph big>{content.whyChoose.text4}</Paragraph>

      {/* Main Steps */}
      <Heading size={3} bottomMargin="40" style={{ marginTop: `48px` }}>
        {content.mainSteps.heading3}
      </Heading>

      <div id="video">
        <LightBoxVideo
          thumbnailVideo="ny-llc-video-thumbnail-01"
          videoID="8ddZw2R7Hig"
          bottomMargin="32"
          videoSchema={{
              name: "\"Forming an LLC in NY\" by Incfile",
              description: "\n" +
                  "New York is home to some big-time industries and has the population to support almost any market, making it an excellent choice for starting an LLC. \n" +
                  "\n" +
                  "How to Start a New York LLC: \n" +
                  "When you're ready to start a new business, forming an LLC is your best bet for creating a quick, legal and protected company in the Empire State. It usually only takes about six steps to get you from start to finish.\n" +
                  "\n" +
                  "1) Compile your business member information. Gather a list of everyone involved with your LLC, including their names, addresses and the roles they’ll fulfill.\n" +
                  "\n" +
                  "2) Name your LLC. Pick a name for your LLC that’s unique to your business. Incfile offers a business name search tool that can help you find a name that’s legally available (link below).\n" +
                  "\n" +
                  "3) Pick a Registered Agent: That’s just a fancy term for the person you’ll designate to handle your business’s legal and tax documentation. The Registered Agent could be you or another member of the LLC, or we can appoint one for you. In fact, with a $0 LLC formation, Incfile offers one full year of Registered Agent service for free!\n" +
                  "\n" +
                  "4) File for a Tax ID number/EIN. You’ll need to apply for an EIN. This is used to identify your business when you pay your employees and file taxes.\n" +
                  "\n" +
                  "5) File your Articles of Organization. Every LLC must file Articles of Organization with the New York Department of State. These are the official documents that declare your business name and who’s in charge of the nitty-gritty details.\n" +
                  "\n" +
                  "6) Make it official. New York State has an extra LLC publication requirement that you need to make sure you meet within 120 days of filing your Articles of Organization. To meet this requirement, publish your Articles of Organization in two newspapers designated by your county clerk. You get a Certificate of Publication to hold onto as a testament to this momentous achievement. \n" +
                  "\n" +
                  "Ready to form your LLC? Here are a few resources to get you started:\n" +
                  "\n" +
                  "- Read a detailed guide to starting an LLC in New York: https://www.incfile.com/new-york-llc/\n" +
                  "- Check to see if your business name is available in New York: https://www.youtube.com/redirect?v=8ddZw2R7Hig&redir_token=QUFFLUhqbFB6R25sUGxwSjE4RGtIX1R0eEJrb0RXZVVPZ3xBQ3Jtc0tsamV2elFsRnVFOG5yUzhPNHFhRW01LVNkN2JmekZSaEFWQ1Z5WWF1LVh3OWYySWFiMlYyVDFmb2VWY1RHWDlVaHQtWlVveFJhRnhRYk8tUWh1dDdobUFBYWxDTU00WkZEWDlJalgtaW55bUw2ZGVHOA%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fbusiness-name-search%2F&event=video_description\n" +
                  "- Get a Registered Agent: https://www.youtube.com/redirect?v=8ddZw2R7Hig&redir_token=QUFFLUhqbFpmNG41UGNvT3M5ZWE4a1JWS1BIalhQVWthZ3xBQ3Jtc0trTXJXNnVKZlczbW4wckdSVVNMdjdVOC1qUHotWmdFNThqNjVSUGFla3QyNVdsaDRlS0lBRkNGSXp4c1BleEs5TTh0TXNIYi11QmNVMDU0alZtbE0yLVNUQlFoMWNkOFg0aUV0TWRaWWp3bEFPX0ZDZw%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Fregistered-agent%2F&event=video_description \n" +
                  "- Get a Federal Tax ID / EIN Number: https://www.youtube.com/redirect?v=8ddZw2R7Hig&redir_token=QUFFLUhqbjFIVjY0aXdXYVN4MUtHbldkOFhGVVJGZUJVZ3xBQ3Jtc0trNURKSTF2QnowUUpJS2E4ZHlHYmNrWGU5R1p1RGtYX0k3c3Q4TlVjRE5oXzJMTUhFeFVEbk9fNy1zUjJwcEFNZmMxenVZSHJuelhWbkw0NTA3cFRZcm94WFNPcF81NzN5ckdHaFd2Y1lwN21MUm1oRQ%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Ftax-id-ein%2F&event=video_description\n",
              uploadDate: "2020-09-20",
              duration: "1:46",
              interactionCount: "104",
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
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step1.text3)}
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
          content={content.mainSteps.step4.download_205_button}
          theme="secondary56"
          arrow
          margin="16px 0 0 0"
          marginMD="42px 0 42px 0"
        />
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step4.text2)}
        </Paragraph>

        <RelativeElement margin="40px 0">
          <AbsoluteShapeCurveElement right="0" top="-30px">
            <ShapeCurve color={color.purple1} />
          </AbsoluteShapeCurveElement>
          {content.mainSteps.step4.certificate_info.map((item) => (
            <WhiteBoxColumn padding="24px" bottomMargin="8px">
              <Paragraph
                mixed={true}
                bottomMargin={0}
                style={{ fontWeight: `bold`, minWidth: `50%` }}
              >
                {item.text1}
              </Paragraph>
              <Paragraph mixed={true} bottomMargin={0}>
                {parse(item.text2)}
              </Paragraph>
            </WhiteBoxColumn>
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
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step6.text3)}
        </Paragraph>
        <Button
          content={content.mainSteps.step4.download_205_button}
          theme="secondary56"
          arrow
          margin="16px 0 0 0"
          marginMD="16px 0 42px 0"
        />
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step6.text4)}
        </Paragraph>
        {/* <BoxCTA bgColor={color.orange3} bgImage={BgBoxPersonalOA} content={content.mainSteps.step6.cta} /> */}
      </TextBlockWithNumberCounting>

      <TextBlockWithNumberCounting
        blockId="step7"
        numberCounting="7"
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
        <Heading size={3}>{content.mainSteps.step7.heading1}</Heading>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step7.text1)}
        </Paragraph>
        <Paragraph big mixed={true}>
          {parse(content.mainSteps.step7.text2)}
        </Paragraph>
        <Button
          content={content.mainSteps.step7.button1}
          theme="secondary56"
          arrow
          width="450px"
          margin="16px 0 0 0"
          marginMD="42px 0 42px 0"
        />
        <BoxCTA
          bgColor={color.orange3}
          bgImage={BgBoxHandlePaperWorks}
          content={content.mainSteps.step7.cta}
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
