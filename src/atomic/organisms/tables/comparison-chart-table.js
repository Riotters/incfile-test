import React from "react";
import styled from "styled-components";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { motion } from "framer-motion";
import { shadow } from "../../atoms/styles/shadows";
import { color } from "../../atoms/styles/colors";
import GridTableRow from "../../molecules/blocks/grid-table-row";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import CurveSVG from "../../../images/orange-curve.inline.svg";
import VisibilitySensor from "../../../components/VisibilitySensor";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow-x: scroll;
  margin-top: ${(props) => (props.tab ? "" : "80")};

  @media (min-width: 769px) {
    padding: ${(props) => (props.tab ? "" : "25px 29px 40px")};
    overflow-x: auto;
  }
`;

const Curve = styled.div`
  display: none;
  height: 25px;
  width: 25px;
  position: absolute;

  @media (min-width: 769px) {
    display: block;
    top: ${(props) => (!props.curveRightBottom && !props.curveLeftBottom ? "0" : "")};
    left: ${(props) => (props.curveLeft || props.curveLeftBottom ? "0" : "")};
    right: ${(props) => (props.curveRight || props.curveRightBottom ? "0" : "")};
    bottom: ${(props) => (props.curveRightBottom || props.curveLeftBottom ? "-25px" : "")};
    transform: ${(props) => (props.curveRight ? "rotate(90deg)" : props.curveRightBottom ? "sacle(-1)" : props.curveLeftBottom ? "rotate(-90deg)" : "")};
  }

  svg {
    path {
      fill: ${(props) => (props.curveColor ? props.curveColor : "")};
    }
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabBox = styled.div`
  margin-bottom: 8px;

  .accordion-panel {
    box-shadow: ${shadow.white1};
    overflow-y: hidden;
    
    @media (max-width: 1094px) {
      min-width: 1008px;
    }
  }
`;

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  z-index: 1;

  @media (min-width: 769px) {
    padding: 32px 40px;
  }

  h3 {
    margin-bottom: 48px;
  }

  p,
  li {
    color: ${color.grey1};
    font-family: Avenir, sans-serif;
    max-width: 650px;
    text-align: left;
  }

  p {
    font-size: 16px;
    line-height: 24px;

    a {
      color: ${color.blue1};
      font-size: inherit;
      line-height: inherit;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${color.orange1};
      }
    }
  }

  li {
    font-size: 14px;
    line-height: 19px;
  }

  ul {
    //list-style: none;
    padding-left: 16px;

    li {
      padding-top: 16px;
    }
  }
`;

const Button = styled.button`
  min-width: 80px;
  width: 100%;
  color: #4e4e4e;
  align-items: center;
  background: #fff;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
  border: none;

  p {
    color: ${color.black};
  }

  &.active {
    border-radius: 5px 5px 0 0;
    font-weight: 900;
    margin-bottom: 8px;

    svg {
      transform: rotate(0deg);
    }
  }
`;

const Column = styled.div`
  min-width: 160px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  .row {
    box-shadow: none;

    & > div {
      &:not(:first-child) {
        max-width: 160px;
        justify-content: center;

        p {
          font-weight: 400;
          background-color: ${color.green3};
          border-radius: 50px;
          padding: 8px 26px;
        }
      }
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  min-height: 80px;
  min-width: 80px;
  max-height: 80px;
  max-width: 80px;
  opacity: 0.75;

  svg {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`;

const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: ${color.blue3};
  margin-bottom: 8px;

  span {
    font-family: Avenir, sans-serif;
    font-weight: 900;
    font-size: 12px;
    line-height: 12px;
    color: ${color.blue1};
    text-transform: uppercase;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 180px 180px 180px 180px;
  grid-gap: 70px;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  
  & > div {
    @media (max-width: 991px) {
      min-width: 180px;
    }
  }
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
  hidden: { height: 0 },
  visible: { height: "auto" },
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return (
    <motion.div className="accordion-panel" animate={isActive ? "visible" : "hidden"} transition={{ ease: "easeOut", duration: 0.3 }} variants={panel}>
      {children}
    </motion.div>
  );
};

const Accordion = ({ content, curve, curveRight, curveRightBottom, curveLeft, curveLeftBottom, curveColor, tab }) => {
  
  return (
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Wrapper className={isVisible ? "slideUp enter" : "slideUp"} tab={tab}>
          {curve && (
            <Curve curveRight={curveRight} curveRightBottom={curveRightBottom} curveLeft={curveLeft} curveLeftBottom={curveLeftBottom} curveColor={curveColor}>
              <CurveSVG />
            </Curve>
          )}
          <GridTableRow className="head" content={content.headers} header headerSize="5" columns="minmax(368px, 1fr) 160px 160px 160px 160px" />
          <Tabs>
            <TabsWrapper>
              {content.items.map((item, index) => (
                <TabBox key={index}>
                  {item.separator && (
                    <Separator>
                      <span>{item.separator}</span>
                    </Separator>
                  )}
                  <Tab>
                    <Icon>
                      <ArrowSVG />
                    </Icon>
                    <Content>
                      <GridTableRow className="row" content={item.row} columns="minmax(288px, 1fr) 160px 160px 160px 160px" />
                    </Content>
                  </Tab>
                  <Panel>
                    <PanelWrapper>
                      {typeof item.answer === "string" ? <p>{item.answer}</p> : null}
                      {typeof item.answer === "object" ? (
                        <Grid>
                          {item.answer.map((el, i) => (
                            <Column key={i}>
                              <Heading size="5">{el.header}</Heading>
                              <Paragraph bottomMargin="0">{el.text}</Paragraph>
                            </Column>
                          ))}
                        </Grid>
                      ) : null}
                      {item.list && (
                        <ul>
                          {item.list.map((listitem, i) => (
                            <li key={i}>{listitem}</li>
                          ))}
                        </ul>
                      )}
                    </PanelWrapper>
                  </Panel>
                </TabBox>
              ))}
            </TabsWrapper>
          </Tabs>
        </Wrapper>
      )}
    </VisibilitySensor>
  );
};
export default Accordion;
