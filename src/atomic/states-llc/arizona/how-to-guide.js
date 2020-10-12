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
import ArrowLink from "../../molecules/buttons/text";
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
import Accordion from "../../organisms/accordion/accordion";
import NumericList from "../../organisms/lists/numeric-boxed-list";

// Bg box CTA
import BgBoxPersonalOA from "../../../images/icons/states/personal-oa.inline.png";
import BgBoxHandlePaperWorks from "../../../images/icons/states/handle-paperwork.inline.png";
import BgBoxBusinessNameSearchTool from "../../../images/icons/states/business-name-search-tool.inline.png";

const Wrapper = styled.div`
  h2 {
    text-align: left;
  }
`;

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

const HowToGuide = ({ content }) => {
  return (
    <Wrapper>
      {console.log(content)}
      {content.map((item, i) => (
        <>
          {item.type === "header" && (
            <Heading size={item.size} bottomMargin={item.marginBottom}>
              {item.content}
            </Heading>
          )}

          {item.type === "text" && (
            <Paragraph big mixed bottomMargin={item.marginBottom}>
              {parse(item.content)}
            </Paragraph>
          )}

          {item.type === "arrow-link" && <ArrowLink content={item.content} bottomMargin={item.marginBottom} />}

          {item.type === "list-dot" && <IconListColorBox color={item.color} content={item.content} curve={item.curve} curveColor={item.curveColor} rounded bottomMargin={item.marginBottom} />}

          {item.type === "button" && <Button content={item.content} theme={item.theme} arrow width="350px" margin="16px 0 0 0" marginMD="42px 0 42px 0" />}

          {item.type === "accordion" && <Accordion tab content={item.content} bottomMargin={item.marginBottom} />}
          {item.type === "numeric-list" && <NumericList content={item.content} bottomMargin={item.marginBottom} />}
        </>
      ))}
    </Wrapper>
  );
};

export default HowToGuide;
