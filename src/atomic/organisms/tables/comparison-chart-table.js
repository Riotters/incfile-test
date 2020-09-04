import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { motion } from "framer-motion";
import { color } from "../../atoms/styles/colors";
import GridTableRow from "../../molecules/blocks/grid-table-row";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import CurveSVG from "../../../images/orange-curve.inline.svg";
import VisibilitySensor from "../../../components/VisibilitySensor";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: ${(props) => (props.tab ? "" : "80")};

  @media (min-width: 769px) {
    padding: ${(props) => (props.tab ? "" : "25px 29px 0")};
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
      fill: ${props => props.curveColor ? props.curveColor : ""};
    }
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabBox = styled.div`
  box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
  margin-bottom: 8px;

  .accordion-panel {
    overflow: hidden;
  }
`;

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  z-index: 1;

  @media (min-width: 769px) {
    padding: 16px 40px 40px 80px;
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
      color: ${color.orange1};
      font-size: inherit;
      line-height: inherit;
      text-decoration: none;
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
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  border: none;

  &.active {
    border-radius: 5px 5px 0 0;
    font-weight: 900;
    margin-bottom: 8px;

    svg {
      transform: rotate(0deg);
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  .row {
      box-shadow: none;
  }

  span {
    color: #4e4e4e;
    font-family: Avenir;
    font-size: 16px;
    text-align: left;
    width: 100%;
    line-height: 24px;
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
  width: 100%;
  background-color: ${color.blue3};
  margin-bottom: 8px;
  padding: 12px;

  span {
      font-family: Avenir, sans-serif;
      font-weight: 900;
      color: ${color.blue1};
      text-transform: uppercase;
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
    const columnsNo = content.headers.length;

    return (
        <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
            <Wrapper className={isVisible ? "slideUp enter" : "slideUp"} tab={tab}>
                {curve && (
                    <Curve curveRight={curveRight} curveRightBottom={curveRightBottom} curveLeft={curveLeft} curveLeftBottom={curveLeftBottom} curveColor={curveColor}>
                    <CurveSVG />
                    </Curve>
                )}
                <GridTableRow className="head" content={content.headers} header headerSize="5" columns={columnsNo} />
                <Tabs>
                    <TabsWrapper>
                    {content.items.map((item) => (
                        <TabBox>
                            {item.separator && (
                                <Separator>
                                    <span>
                                        {item.separator}
                                    </span>
                                </Separator>
                            )}
                        <Tab>
                            <Icon>
                            <ArrowSVG />
                            </Icon>
                            <Content>
                                <GridTableRow className="row" content={item.row} columns={columnsNo} />
                            </Content>
                        </Tab>
                        <Panel>
                            <PanelWrapper>
                            {typeof item.answer === "string" ? <p>{item.answer}</p> : null}
                            {typeof item.answer === "object" ? <p>{item.answer.map((el, id) => (id % 2 ? <Link to={el.url}>{` ${el.text} `}</Link> : el.text))}</p> : null}
                            {/* <p>{item.answer}</p> */}
                            {item.list && (
                                <ul>
                                {item.list.map((listitem) => (
                                    <li>{listitem}</li>
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
