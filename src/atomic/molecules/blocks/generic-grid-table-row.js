import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import Checkbox from "../../atoms/controls/checkbox-with-events";
import Image from "../../atoms/image/image";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { motion } from "framer-motion";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import CheckSVG from "../../../images/circle-status-check.inline.svg";
import ExSVG from "../../../images/circle-status-x.inline.svg";
;
const Wrapper = styled(Whitebox)`
  display: grid;
  grid-template-columns: ${(props) => (props.columns && props.columns.length === 1 ? `repeat(${props.columns}, 1fr)` : props.columns ? props.columns : "1fr 160px 160px 160px 160px;")};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 24px;
  ${(props) => (props.textCenter ? "justify-content: center" : "")};
  
  .accordion-panel {
    overflow: hidden;
    text-align: left;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 769px) {
    min-width: auto;
  }

  &:not(:last-child) {
    border-right: 2px solid ${color.grey4};
  }
  
  .gatsby-image-wrapper {
    align-self: center;
    width: 32px;
    height: auto;
  }
  
  .highlight {
    border-radius: 20px;
    padding: 8px 16px;
  }
  
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const ListItem = styled(Paragraph)`
  color: ${color.black};
  padding-left: 26px;
  position: relative;

  &::before {
    content: "";
    height: 4px;
    width: 4px;
    background-color: ${color.purple1};
    border-radius: 50%;
    position: absolute;
    top: 9px;
    left: 6px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 40px;
  width: 40px;
  opacity: 0.75;

  svg {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`;

const FlexRowCell = styled.div`
  flex-direction: row;
  justify-content: ${props => props?.justifyContent ?? "space-between"};
  width: 100%;
  display: flex;
  align-items: center;
`;

const RightParagraph = styled(Paragraph)`
  align-self: flex-end;
  color: ${props => props?.color ?? "#000"};
`;

const Checkmark = styled.p`
  position: relative;
  width: 100%;
  height: 100%;
  
  svg {
    position: absolute;
    stroke-dashoffset: 0;
    height: 20px;
    width: 20px;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    fill: none;
    stroke: ${color.blue1};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 18;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
    z-index: 99;
  }
`;

const IconWrapper = styled.p`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Minus = styled.span`
  display: block;
  position: absolute;
  top: calc(50% - 1px);
  left: calc(50% - 7px);
  width: 14px;
  height: 2px;
  border-radius: 1px;
  border: solid 1px ${color.grey2};
  background-color: ${color.grey2};
`;

const VariantWrapper = styled.p`
  display: flex;
  flex-direction: row;
`;

const ImageWrapper = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  position: relative;
  
  .gatsby-image-wrapper {
    position: absolute;
    top: -5px;
  }
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
    p {
        text-align: left;
    }
`;

const FlexRow = styled.div`
    display: flex;
    width: 100%;
    padding-left: 10px;
    justify-content: space-between;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  &.active {
    svg {
      transform: rotate(0deg);
    }
  }
`;

const UlListItem = styled.li`
    font-size: 16px;
    font-family: Avenir, sans-serif;
    line-height: 24px;
    color: ${color.black};
    list-style: disc inside;
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
    const { isActive, onClick } = useTabState();

    return (
        <Button className={cn("accordion-tab", isActive && "active")} onClick={onClick}>
            {children}
        </Button>
    );
};

const panel = {
  hidden: { height: 0, "margin-top": 0 },
  visible: { height: "auto", "margin-top": "20px" },
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return (
      <motion.div className="accordion-panel" animate={isActive ? "visible" : "hidden"} transition={{ ease: "easeOut", duration: 0.3 }} variants={panel}>
        {children}
      </motion.div>
  );
};

const GenericGridTableRow = ({ className, content, settings, columns }) => (
  <Wrapper className={className} columns={columns}>
          {content.map((item) => (
          <Cell textCenter={item.textCenter ?? false} style={item.style ?? {}}>
            {item.header && (
              <Heading size={item.headerSize ?? "5"} bottomMargin="0" style={{}}>
                {item.label}
              </Heading>
            )}
            {!item.header && item.type === "list" && <ListItem bottomMargin="0">{item.label}</ListItem>}
            {item.subcontent && (
                <Tab>{!item.header && item.type === "label" && (
                    <FlexRowCell>
                        {item.subcontent && (
                            <Icon>
                                <ArrowSVG />
                            </Icon>
                        )}
                        <FlexRow>
                            <Paragraph bottomMargin={0} className={item?.className ?? ""}>{item.label}</Paragraph>
                            {item.variant && (
                                <VariantWrapper>
                                    {item.variant.icon && (
                                        <ImageWrapper>
                                            <Image filename={item.variant.icon} />
                                        </ImageWrapper>
                                    )}
                                    <Paragraph bottomMargin={0} style={item.variant.style}>
                                        {item.variant.label}
                                    </Paragraph>
                                </VariantWrapper>
                            )}
                        </FlexRow>
                    </FlexRowCell>
                )}
                </Tab>
            )}
            {!item.subcontent && !item.header && item.type === "label" && (
                <FlexRowCell>
                    <Paragraph bottomMargin={0} className={item?.className ?? ""}>{item.label}</Paragraph>
                    {item.variant && (
                    <VariantWrapper>
                        {item.variant.icon && (
                            <ImageWrapper>
                                <Image filename={item.variant.icon} />
                            </ImageWrapper>
                        )}
                        <Paragraph bottomMargin={0} style={item.variant.style}>
                            {item.variant.label}
                        </Paragraph>
                    </VariantWrapper>
                    )}
                </FlexRowCell>
                )}
            {!item.header && item.type === "checkmark" && (
                <Checkmark>
                  <svg viewBox="-1 0 16 12">
                    <polyline points="2 6 4.5 9 10.5 3"></polyline>
                  </svg>
                </Checkmark>
            )}
              {!item.header && item.type === "true" && (
                  <IconWrapper>
                      <CheckSVG />
                  </IconWrapper>
              )}
              {!item.header && item.type === "false" && (
                  <IconWrapper>
                      <ExSVG />
                  </IconWrapper>
              )}
            {!item.header && item.type === "minus" && (
                <IconWrapper>
                  <Minus/>
                </IconWrapper>
            )}
            {!item.header && item.type === "label-boxed" && <Paragraph bottomMargin="0" className={item?.className ?? ""}>{item.label}</Paragraph>}
            {!item.header && item.type === "content" && (
                item.content
            )}
            {!item.header && item.type === "icon" && (
                <div className="flex-center">
                  {item.icon && (
                      <Image filename={item.icon} alt={item.label} />
                  )}
                </div>
            )}
            {!item.header && item.type === "checkbox" && (
                <FlexRowCell justifyContent="center">
                  <Checkbox onChange={ (function(e) { if(settings != null) settings.onChange(e, item); }) } />
                  <Paragraph bottomMargin={0} topMargin={4}>{item.label}</Paragraph>
                </FlexRowCell>
            )}
            {(item.subcontent && (
                <Panel>
                    {item.subcontent.items && item.subcontent.items.map((subitem) => (
                        <FlexColumn>
                            {subitem.header && (
                                <Heading size={5}>{subitem.header}</Heading>
                            )}
                            {subitem.text && (
                                <Paragraph className="left">{subitem.text}</Paragraph>
                            )}
                            {subitem.items && (
                                <ul>
                                    {subitem.items.map((listItem) => (
                                        <UlListItem>{listItem}</UlListItem>
                                    ))}
                                </ul>
                            )}
                        </FlexColumn>
                    ))}
                </Panel>
            ))}
          </Cell>
        ))}
  </Wrapper>
);

export default GenericGridTableRow;
