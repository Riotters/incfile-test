import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import ContentCenter from "../../partials/content-center";
import Table from "../../organisms/tables/state-filing-times-table";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 104px;
`;

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  max-width: 770px;
  background-color: ${color.white};
  box-shadow: ${shadow.white1};
  border-radius: 24px;
  margin: 0 auto 80px;
  overflow: hidden;

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Scroller = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  border-radius: 24px;
  width: 100%;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 252px;
  background-color: ${color.white};
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.2s ease;
  color: ${color.grey1};
  font-family: Avenir, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  flex-grow: 1;

  &:hover {
    background-color: ${color.blue3};
  }

  &.active {
    background-color: ${color.blue1};
    color: ${color.white};
    font-weight: 900;
  }
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  const scrollTop = (l) => {
    const el = document.getElementById(l);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    if (typeof window !== "undefined") {
      window.scrollTo({
        top: offsetPosition,
      });
    }
  };

  return (
    <Button
      className={cn("accordion-tab", isActive && "active")}
      onClick={() => {
        onClick();
        scrollTop("tabs-wrapper");
      }}
    >
      {children}
    </Button>
  );
};

const StateFilingTimesTabs = ({ content }) => (
  <Tabs>
    <Wrapper id="tabs-wrapper">
      <TabsWrapper>
        <Scroller>
          <Tab>LLC</Tab>
          <Tab>Corporation</Tab>
          <Tab>Nonprofit</Tab>
        </Scroller>
      </TabsWrapper>
      <PanelsWrapper>
        {content.map((table, index) => (
          <Panel key={index}>
            <ContentCenter className="content">
              <Table content={table} />
            </ContentCenter>
          </Panel>
        ))}
      </PanelsWrapper>
    </Wrapper>
  </Tabs>
);

export default StateFilingTimesTabs;
