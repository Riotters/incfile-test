import parse from "html-react-parser";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Button from "../../molecules/buttons/button";
import ArrowLink from "../../molecules/buttons/text";
import TextBoxed from "../../molecules/static-check/circle-checkmark-text-boxed";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import Accordion from "../../organisms/accordion/accordion";
import NumericList from "../../organisms/lists/numeric-boxed-list";
// Components
import BoxCTA from "../box-cta";
import AcccordionCounting from "../tab-acccordion-with-counting";


const Wrapper = styled.div``;

const BusinessNames = ({ content }) => {
  return (
    <Wrapper>
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

          {item.type === "arrow-link" && <ArrowLink content={item.content} bottomMargin={item.marginBottom} externalLink={item.externalLink} styles={item.styles} />}

          {item.type === "list-dot" && <IconListColorBox color={item.color} content={item.content} curve={item.curve} curveColor={item.curveColor} rounded bottomMargin={item.marginBottom} />}

          {item.type === "button" && <Button content={item.content} theme={item.theme} arrow width="350px" margin="16px 0 0 0" marginMD="42px 0 42px 0" />}

          {item.type === "accordion" && <Accordion tab content={item.content} bottomMargin={item.marginBottom} />}
          {item.type === "numeric-list" && <NumericList content={item.content} bottomMargin={item.marginBottom} />}

          {item.type === "accordingTabWithCountingLeft" && <AcccordionCounting content={item.content} tab />}

          {item.type === "iconListColorBox" && <IconListColorBox color={item.boxColor} content={item.content} rounded />}

          {item.type === "textBoxWithCheckIcon" &&
            item.content.map((i) => (
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>{i}</Paragraph>
              </TextBoxed>
            ))}

          {item.type === "box-cta" && <BoxCTA bgColor={item.color} bgImage={item.bgImage[0]} style={item.styles} content={item.content} />}
        </>
      ))}
    </Wrapper>
  );
};

export default BusinessNames;
