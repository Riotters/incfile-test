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

                    {item.type === "button" && <Button content={item.content} theme={item.theme} arrow marginSM="24px auto 24px 0" marginMD="42px auto 42px 0" />}

                    {item.type === "accordion" && <Accordion tab content={item.content} bottomMargin={item.marginBottom} />}
                    {item.type === "numeric-list" && <NumericList content={item.content} bottomMargin={item.marginBottom} />}
                    {item.type === "image" && <Image filename={item.content} bottomMargin={item.marginBottom} />}
                </>
            ))}
        </Wrapper>
    );
};

export default Content;