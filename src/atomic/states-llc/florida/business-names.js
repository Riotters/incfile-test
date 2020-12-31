import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

// Components
import BoxCTA from "../box-cta";
import Button from "../../molecules/buttons/button";
import ArrowLink from "../../../components/arrow-link";
import { Heading } from "../../atoms/typography/heading";
import { color } from "../../../components/styles/colors";
import { Paragraph } from "../../atoms/typography/paragraph";
import NumericBoxedList from "../../organisms/lists/numeric-boxed-list";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import AcccordionCounting from "../tab-acccordion-with-counting";
import Accordion from "../../organisms/accordion/accordion";
import TextBoxed from "../../molecules/static-check/circle-checkmark-text-boxed";
import ActionButton from "../../molecules/buttons/button-action";

const Wrapper = styled.div``;

const BusinessNames = ({ content, modalAction }) => {
  return (
    <Wrapper>
      {content.map((item, i) => (
        <div>
          {item.type === "heading" && (
            <Heading size={item.size} style={{ marginTop: `42px` }} template={item.template} center={item.center} left={item.left}>
              {item.content}
            </Heading>
          )}

          {item.type === "paragraph" && (
            <Paragraph big mixed={true} style={item.styles}>
              {parse(item.content)}
            </Paragraph>
          )}
          {item.type === "modal-trigger" && (typeof modalAction === "function") && (
              <ActionButton
                  content={item.content}
                  theme={item.theme ?? "primary48"}
                  arrow={item.arrow ?? true}
                  onClick={modalAction}
                  margin={
                    item.marginBottom ? `0 auto ${item.marginBottom}px 0` : false
                  }
                  marginSM={item.marginBottom ? false : "24px auto 24px 0"}
                  marginMD={item.marginBottom ? false : "42px auto 56px 0"}
              />
          )}
          {item.type === "arrow-links" &&
            item.content.map((link, i) => (
              <ArrowLink key={i} url={link.url} style={link.style}>
                {link.text}
              </ArrowLink>
            ))}

          {item.type === "list-dot" && <IconListColorBox color={color.blue3} content={item.content} rounded />}

          {item.type === "button" && <Button content={item.content} theme={item.theme} arrow width={item.width ?? `350px`} margin="16px 0 0 0" marginMD="42px 0 42px 0" />}

          {item.type === "accordingTabWithCountingLeft" && <AcccordionCounting content={item.content} tab header={item.header} />}

          {item.type === "numberBoxList" && <NumericBoxedList content={item.content} style={item.styles} />}

          {item.type === "iconListColorBox" && <IconListColorBox color={item.boxColor} content={item.content} rounded />}

          {item.type === "textBoxWithCheckIcon" &&
            item.content.map((i) => (
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>{i}</Paragraph>
              </TextBoxed>
            ))}

          {item.type === "box-cta" && <BoxCTA bgColor={item.color} bgImage={item.bgImage[0]} style={item.styles} content={item.content} />}

          {item.type === "accordion" && <Accordion content={item.content} tab />}
        </div>
      ))}
    </Wrapper>
  );
};

export default BusinessNames;
