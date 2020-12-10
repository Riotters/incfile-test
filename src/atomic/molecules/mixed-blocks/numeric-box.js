import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import Whitebox from "../../atoms/boxes/white-box-li";
import Circle from "../../atoms/icons/circle";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import Button from "../../molecules/buttons/button";
import {PHeading} from "../../atoms/typography/p-to-heading";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled(ArrowLink)`
  margin-top: 24px;
`;

const ExternalLink = styled.a`
  margin-top: 24px;
`;

const Flex = styled.li`
  display: flex;
`;

const ChooseHeadingType = ({ paragraphHeader, headerSize, headerTemplateSize, content, ...rest }) => {
    return (
        <>
            {paragraphHeader && (
                <PHeading size={headerSize} template={headerTemplateSize} {...rest}>{parse(content)}</PHeading>
            )}
            {!paragraphHeader && (
                <Heading size={headerSize} template={headerTemplateSize} {...rest}>{parse(content)}</Heading>
            )}
        </>
    );
};

const NumericBox = ({ className, id, item, noBox, paragraphHeader = false }) =>
  !noBox ? (
    <Whitebox className={className}>
      <Circle>{item?.number ?? id + 1}</Circle>
      <TextWrapper>
        {item.header && (
            <ChooseHeadingType paragraphHeader={paragraphHeader} headerSize={4} headerTemplateSize={5} bottomMargin={36} content={item.header} />
        )}
        {item.text && (
          <Paragraph bottomMargin="0" mixed>
            {parse(item.text)}
          </Paragraph>
        )}
        {item.url && <Link content={item.url} bottomMargin="0" />}
        {item.externalUrl && <Link content={item.externalUrl} bottomMargin="0" external />}
        {!item.header && !item.text && !item.url && (
          <Paragraph bottomMargin="0" mixed>
            {parse(item)}
          </Paragraph>
        )}

        {item.button && <Button content={item.button} theme={item.button.theme} arrow width={item.button.width ?? `350px`} margin="16px 0 0 0" marginMD="32px 0 0 0" />}
      </TextWrapper>
    </Whitebox>
  ) : (
    <Flex className={className}>
      <Circle>{item?.number ?? id + 1}</Circle>
      <TextWrapper>
        {item.header && (
          <Heading size="5" bottomMargin="36">
            {item.header}
          </Heading>
        )}
        {item.text && (
          <Paragraph bottomMargin="0" mixed>
            {parse(item.text)}
          </Paragraph>
        )}
        {item.url && <Link content={item.url} bottomMargin="0" />}
        {item.externalUrl && <Link content={item.externalUrl} bottomMargin="0" external />}
        {!item.header && !item.text && !item.url && <Paragraph bottomMargin="0">{item}</Paragraph>}

        {item.button && <Button content={item.button} theme={item.button.theme} arrow width={item.button.width ?? `350px`} margin="16px 0 0 0" marginMD="32px 0 0 0" />}
      </TextWrapper>
    </Flex>
  );

export default NumericBox;
