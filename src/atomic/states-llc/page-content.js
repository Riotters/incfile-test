import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"
import parse from 'html-react-parser'

// Components
import ArrowLink from "../../components/arrow-link"
import ContentButton from "../molecules/buttons/button";
import ArrowSVG from "../../images/arrow.inline.svg"
import { color } from "../../components/styles/colors"
import IconListColorBox from "../molecules/text-blocks/icon-h4-list-color"
import AcccordionCounting from '../organisms/accordion/accordion-with-counting'
import NumericBoxedList from '../organisms/lists/numeric-boxed-list'
import { Heading } from "../atoms/typography/heading"
import { Paragraph } from "../atoms/typography/paragraph"
import TextCheck from "../../components/static-check/text-only";
import EmbedVideo from './embed-video'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 24px;

  // p {
  //   margin: 0 0 24px 0;
  // }
`

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

const PageContent = ({content}) => (
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
    <EmbedVideo>
      <iframe width="720" height="350"
        src="https://www.youtube.com/embed/wGAzGRmy6m8?rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </EmbedVideo>

  </Wrapper>
)

export default PageContent