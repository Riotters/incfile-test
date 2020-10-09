import NavigationTabs from "../../../../components/tabs/navigation-tabs"
import styled from "styled-components";
import React from "react";
import ContentCenter from "../../../partials/content-center";
import Container from "../../../container";
import { Tabs, Panel, useTabState } from "@bumaga/tabs"
import StatesTable from "../../../../components/states-table/states-table";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import {Heading} from "../../../atoms/typography/heading";

const TabsWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 24px;
    margin-right: auto;
    overflow: hidden;
    margin-bottom: 56px;

    @media(min-width: 992px) {
      width: auto;
    }

    button {
      margin-right: 4px;

      &:first-child {
        margin-left: 4px;
      }
    }
`;

const PanelsWrapper = styled.div`
    display: block;
`;

const Scroller = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  border-radius: 24px;
  width: 100%;
  
  &::-webkit-scrollbar, &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 140px;
  background-color: ${color.white};
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: background-color .3s ease, color .2s ease;
  color: ${color.grey1};
  font-family: Avenir, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background-color: ${color.blue3};
  }

  &.active {
    background-color: ${color.blue1};
    color: ${color.white};
    font-weight: 900;
  }
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: state-between;
`;

const FlexColumn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-content: space-between;
`;

const cn = (...args) => args.filter(Boolean).join(" ");
const Tab = ({ children }) => {
    const { isActive, onClick } = useTabState();

    return (
        <Button
            className={cn("accordion-tab", isActive && "active")}
            onClick={onClick}
        >
            {children}
        </Button>
    )
};
const Wrapper = styled.section`
`;

const WhichStatesAreFast = ({ className, content }) => {
    return (
        <Wrapper>
            <Container>
                <ContentCenter className={className} contentWidth={970}>
                    <Heading size={2} bottomMargin={104}>{content.header}</Heading>
                    <Tabs>
                        <Wrapper>
                            <TabsWrapper>
                                <Scroller>
                                    {content.tabs.headers.map((header) => (
                                        <Tab>{header}</Tab>
                                    ))}
                                </Scroller>
                            </TabsWrapper>
                            <PanelsWrapper>
                                {content.tabs.panels.map(function(panel) {
                                    return (
                                        <Panel>
                                            <StatesTable width="970px" entries={panel}/>
                                        </Panel>
                                    );
                                })}
                            </PanelsWrapper>
                        </Wrapper>
                    </Tabs>
                </ContentCenter>
            </Container>
        </Wrapper>
    );
};


export default WhichStatesAreFast;