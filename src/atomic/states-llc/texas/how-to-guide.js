import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"
import parse from 'html-react-parser'

// Components
import ArrowLink from "../../../components/arrow-link"
import Circle from "../../atoms/icons/circle";
import Button from "../../molecules/buttons/button";
import ArrowSVG from "../../../images/arrow.inline.svg"
import { color } from "../../../components/styles/colors"
import {shadow} from "../../atoms/styles/shadows";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color"
import AcccordionCounting from '../../organisms/accordion/accordion-with-counting'
import NumericBoxedList from '../../organisms/lists/numeric-boxed-list'
import TextBlockWithNumberCounting from "../../molecules/mixed-blocks/text-block-with-absolute-number";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading"
import { Paragraph } from "../../atoms/typography/paragraph"
import TextCheck from "../../../components/static-check/text-only";
import EmbedVideo from '../embed-video'
import BoxedButton from "../../molecules/buttons/boxed"
import BoxCTA from '../box-cta';

// Bg box CTA
import BgBoxBusinessNameSearchTool from '../../../images/icons/states/business-name-search-tool.inline.png'
import BgBoxHandlePaperWorks from '../../../images/icons/states/handle-paperwork.inline.png'
import BgBoxPersonalOA from '../../../images/icons/states/personal-oa.inline.png'

const Wrapper = styled.div``

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
    max-width: calc(50% - 30px);

    p{
      width:100%;
    }
  }
`;

const WrapperLink = styled(Link)`
  margin-bottom: 8px;

  .box {
    display: flex;
    align-items: flex-started;
    border-radius: 5px;
    padding: 24px;

    .circle{
      transform: rotate(90deg);
      margin-right: 24px;
    }

    p{
      margin-bottom: 0;
    }
  }
`;

const BoxButtonLinks = styled.div`
	.article-link:not(:last-child) {
		display: block;
		margin-bottom: 8px;
	}
`

const HowToGuide = ({content}) => (
  <Wrapper>

    {/* Why choose section */}
    <Heading size={3}>{content.whyChoose.heading}</Heading>
    <Paragraph big>{content.whyChoose.text1}</Paragraph>
    <Paragraph big>{content.whyChoose.text2}</Paragraph>

    <Heading size={4}>{content.whyChoose.heading4}</Heading>
    <ListFlex>
      {content.whyChoose.lists.map(item => (
        <TextCheck>
          <p>{item}</p>
        </TextCheck>
      ))}
    </ListFlex>
    <Paragraph big mixed={true}>{parse(content.whyChoose.learnmore)}</Paragraph>
    <Paragraph big>{content.whyChoose.text3}</Paragraph>

    {/* Main Steps */}
    <Heading size={3} bottomMargin="40" style={{ marginTop: `48px` }}>{content.mainSteps.heading3}</Heading>
    <EmbedVideo style={{ marginBottom: `55px` }}>
		<iframe width="720" height="350"
			src="https://www.youtube.com/embed/wGAzGRmy6m8?rel=0"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen>
		</iframe>
    </EmbedVideo>

    {content.mainSteps.navSteps.map(step => (
		<WrapperLink href={`/`}>
			<Whitebox className="box">
				<Circle circleColor={color.orange3} iconColor={color.orange1} className="circle">
					<ArrowSVG />
				</Circle>
				<Paragraph mixed={true}>{parse(step)}</Paragraph>
			</Whitebox>
		</WrapperLink>
    ))}

    <TextBlockWithNumberCounting
		numberCounting="1"
		borderRadius="0"
		boxShadow={false}
		textBackgroundColor="transparent"
		imageBackgroundColor={color.white}
		imageShadowColor={shadow.white2}
		imageShadowOpacity={0.5}
		boxShadow={false}
		paddingLeft={0}
		style={{marginTop: "70px"}}
		circleShadowY={40}
		circleShadowBlure={80}
		width={100}
		widthUnit="%">
			<Heading size={3}>{content.mainSteps.step1.heading1}</Heading>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step1.text1)}</Paragraph>
            <Paragraph big mixed={true}>{parse(content.mainSteps.step1.text2)}</Paragraph>
            <BoxCTA bgColor={color.purple3} bgImage={BgBoxBusinessNameSearchTool} content={content.mainSteps.step1.cta} />
    </TextBlockWithNumberCounting>

    <TextBlockWithNumberCounting
		numberCounting="2"
		borderRadius="0"
		boxShadow={false}
		textBackgroundColor="transparent"
		imageBackgroundColor={color.white}
		imageShadowColor={shadow.white2}
		imageShadowOpacity={0.5}
		boxShadow={false}
		paddingLeft={0}
		style={{marginTop: "70px"}}
		circleShadowY={40}
		circleShadowBlure={80}
		width={100}
		widthUnit="%">
      		<Heading size={3}>{content.mainSteps.step2.heading1}</Heading>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step2.text1)}</Paragraph>
	</TextBlockWithNumberCounting>
		
	<TextBlockWithNumberCounting
		numberCounting="3"
		borderRadius="0"
		boxShadow={false}
		textBackgroundColor="transparent"
		imageBackgroundColor={color.white}
		imageShadowColor={shadow.white2}
		imageShadowOpacity={0.5}
		boxShadow={false}
		paddingLeft={0}
		style={{marginTop: "70px"}}
		circleShadowY={40}
		circleShadowBlure={80}
		width={100}
		widthUnit="%">
      		<Heading size={3}>{content.mainSteps.step3.heading1}</Heading>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step3.text1)}</Paragraph>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step3.text2)}</Paragraph>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step3.text3)}</Paragraph>

			<BoxButtonLinks>
				{content.mainSteps.step3.groupBtn1.map(button => (
					<BoxedButton className="article-link" content={button} ellipsis />
				))}
			</BoxButtonLinks>	
	</TextBlockWithNumberCounting>
		
	<TextBlockWithNumberCounting
		numberCounting="4"
		borderRadius="0"
		boxShadow={false}
		textBackgroundColor="transparent"
		imageBackgroundColor={color.white}
		imageShadowColor={shadow.white2}
		imageShadowOpacity={0.5}
		boxShadow={false}
		paddingLeft={0}
		style={{marginTop: "70px"}}
		circleShadowY={40}
		circleShadowBlure={80}
		width={100}
		widthUnit="%">
      		<Heading size={3}>{content.mainSteps.step4.heading1}</Heading>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step4.text1)}</Paragraph>
			<IconListColorBox color={color.blue3} content={content.mainSteps.step4.lists} rounded />
			<Button content={content.mainSteps.step4.dowload_205_button} theme="secondary56" arrow width="240px" margin="16px 0 0 0" marginMD="42px 0 42px 0" />
			<Paragraph big mixed={true}>{parse(content.mainSteps.step4.text2)}</Paragraph>
            <Paragraph big mixed={true}>{parse(content.mainSteps.step4.text3)}</Paragraph>	
            <BoxCTA bgColor={color.orange3} bgImage={BgBoxHandlePaperWorks} content={content.mainSteps.step4.cta} />
    </TextBlockWithNumberCounting>

    <TextBlockWithNumberCounting
		numberCounting="5"
		borderRadius="0"
		boxShadow={false}
		textBackgroundColor="transparent"
		imageBackgroundColor={color.white}
		imageShadowColor={shadow.white2}
		imageShadowOpacity={0.5}
		boxShadow={false}
		paddingLeft={0}
		style={{marginTop: "70px"}}
		circleShadowY={40}
		circleShadowBlure={80}
		width={100}
		widthUnit="%">
      		<Heading size={3}>{content.mainSteps.step5.heading1}</Heading>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step5.text1)}</Paragraph>
    </TextBlockWithNumberCounting>

    <TextBlockWithNumberCounting
		numberCounting="6"
		borderRadius="0"
		boxShadow={false}
		textBackgroundColor="transparent"
		imageBackgroundColor={color.white}
		imageShadowColor={shadow.white2}
		imageShadowOpacity={0.5}
		boxShadow={false}
		paddingLeft={0}
		style={{marginTop: "70px"}}
		circleShadowY={40}
		circleShadowBlure={80}
		width={100}
		widthUnit="%">
      		<Heading size={3}>{content.mainSteps.step6.heading1}</Heading>
			<Paragraph big mixed={true}>{parse(content.mainSteps.step6.text1)}</Paragraph>
            <Paragraph big mixed={true}>{parse(content.mainSteps.step6.text2)}</Paragraph>
            <Button content={content.mainSteps.step6.button1} theme="secondary56" arrow width="450px" margin="16px 0 0 0" marginMD="42px 0 42px 0" />
            <BoxCTA bgColor={color.orange3} bgImage={BgBoxPersonalOA} content={content.mainSteps.step6.cta} />
    </TextBlockWithNumberCounting>
  
  </Wrapper>
)

export default HowToGuide