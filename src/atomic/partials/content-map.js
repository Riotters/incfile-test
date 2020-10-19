import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

// Components
import Button from "../molecules/buttons/button";
import ArrowLink from "../molecules/buttons/text";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";
import IconListColorBox from "../molecules/text-blocks/icon-h4-list-color";
import Accordion from "../organisms/accordion/accordion";
import NumericList from "../organisms/lists/numeric-boxed-list";
import Image from "../atoms/image/image";
import {IconTextBox} from "../molecules/text-blocks/icon-text-box";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import {TextSpacedBox} from "../molecules/text-blocks/text-spaced-box";
import AccordionWithCheckmark from "../organisms/acccordion-with-checkboxes";
import BusinessNameSearchForm from "../organisms/forms/business-name-search-form";
import ToolsList from "../organisms/lists/tools-list";
import Mobile from "../../images/icons/mobile-compatibility.inline.svg";
import {moreInfo} from "../../static/learning-center-entity/virtual-mailboxes";
import TextBlockWithImage from "../../pages/virtual-mailbox";
import GenericTable from "../organisms/tables/generic-table";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 

  h2 {
    text-align: left;
  }
`;


const Content = ({ content }) => {
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

          {item.type === "arrow-link" && <ArrowLink content={item.content} bottomMargin={item.marginBottom} />}

          {item.type === "list-dot" && <IconListColorBox color={item.color} content={item.content} curve={item.curve} curveColor={item.curveColor} rounded bottomMargin={item.marginBottom} />}
          {item.type === "boxes" && (
              <div style={{"margin-bottom": item.marginBottom + "px"}}>
                {
                  item.content.map((box) => (
                      <IconTextBox content={box} />
                  ))
                }
              </div>
          )}
          {item.type === "taxes" && (
              <div style={{"margin-bottom": item.marginBottom + "px"}}>
                {
                  item.content.map((box) => (
                      <TextSpacedBox content={box} />
                  ))
                }
              </div>
          )}
          {item.type === "button" && <Button content={item.content} theme={item.theme} arrow={item.arrow ?? true} marginSM="24px auto 24px 0" marginMD="42px auto 56px 0" />}
          {item.type === "buttons" && (
              <div style={{"margin-bottom": item.marginBottom + "px"}}>
                <Buttonsbox>
                  {item.content.map((button) => (
                      <Button content={button.content} theme={button.theme} arrow={button.arrow ?? true} margin="0 16px 0 0" />
                  ))}
                </Buttonsbox>
              </div>
          )}
          {item.type === "tabbed-checklist" && (
              <AccordionWithCheckmark content={item.content} tab curve={item.curve} listColor={item.listColor} curveRight={item.curveRight} bottomMargin={item.marginBottom} />
          )}
          {item.type === "business-name-search" && (
              <div style={{"margin-bottom": item.marginBottom + "px"}}>
                <BusinessNameSearchForm noMaxWidth content={item.content} />
              </div>
          )}
          {item.type === "accordion" && <Accordion tab content={item.content} bottomMargin={item.marginBottom} />}
          {item.type === "numeric-list" && <NumericList noBox={item.noBox ?? false} content={item.content} bottomMargin={item.marginBottom} />}
          {item.type === "image" && <Image filename={item.content} bottomMargin={item.marginBottom} />}
          {item.type === "tools-list" && <ToolsList tools={item.content} tab={item.tab} />}
          {item.type === "svg-color-text-box" && (
              <div style={{"margin-bottom": item.marginBottom + "px"}}>
                {item.content.map((box) => (
                    <TextBlockWithImage SvgImage={box.svg}
                                        imageBackgroundColor={box.backgroundColor}
                                        imageShadowColor={box.shadowColor}
                                        width={100}
                                        widthUnit="%">
                      <Heading size={4}>
                        {box.header}
                      </Heading>
                      <Paragraph>
                        {box.text}
                      </Paragraph>
                    </TextBlockWithImage>
                ))
                }
              </div>
          )}
          {item.type === "table" && (
              <GenericTable responsive={item.responsive} settings={item.settings} style={item.style} content={item.content} />
          )}
        </>
      ))}
    </Wrapper>
  );
};

export default Content;