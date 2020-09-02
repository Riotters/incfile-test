import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Card from "../../molecules/mixed-blocks/download-pdf-box";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  max-width: 570px;
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

  return (
    <Button className={cn("accordion-tab", isActive && "active")} onClick={onClick}>
      {children}
    </Button>
  );
};

const pdfs = ["pdf-1-6822", "pdf-2-4373", "pdf-3-3897", "pdf-4-9814", "pdf-5-0102", "pdf-6-3847", "pdf-7-6293", "pdf-8-8476"]

const BusinessResourcesTabs = ({ content }) => (
  <Tabs>
    <Wrapper>
      <TabsWrapper>
        <Scroller>
            {content.switchers.map((switcher) => (
                <Tab>{switcher}</Tab>
            ))}
        </Scroller>
      </TabsWrapper>
      <PanelsWrapper>
      {content.panels.map((panel) => (
        <Panel>
          <Grid>
            {panel.cards.map((card, i) => (
                <Card content={card} image={pdfs[i]} />
            ))}
          </Grid>
        </Panel>
      ))}
      </PanelsWrapper>
    </Wrapper>
  </Tabs>
);

export default BusinessResourcesTabs;
