import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Card from "../../molecules/mixed-blocks/top-image-box";
import BoxedButton from "../../molecules/buttons/boxed";

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

const colors = [color.yellow3, color.blue3, color.purple3, color.orange3, color.babyblue3, color.red3, color.yellow3, color.green3, color.blue3, color.red3, color.purple3, color.purple3, color.yellow3, color.orange3];
const icons = [
  "corporation-state-information",
  "s-corp-tax-calculator-01",
  "entity-comparison-chart",
  "state-filling-fees",
  "ongoing-filling-requirements-02",
  "clock-691",
  "corporation-state-information",
  "s-corp-tax-calculator-01",
  "entity-comparison-chart",
  "state-filling-fees",
  "ongoing-filling-requirements-02",
  "clock-691",
  "corporation-state-information",
  "s-corp-tax-calculator-01",
];

const colors2 = [color.green3, color.red3, color.red3, color.yellow3, color.babyblue3, color.orange3];
const icons2 = ["s-corp-tax-calculator-01", "entity-comparison-chart", "state-filling-fees", "ongoing-filling-requirements-02", "clock-691"];

const CheckTypesTabs = ({ content }) => (
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
        {/* {content.panels.map((panel) => ( */}
        <Panel>
          <Grid>
            {content.panels[0].buttons.map((button, i) => (
              <BoxedButton content={button} icon={icons[i]} iconColor={colors[i]} />
            ))}
          </Grid>
        </Panel>
        <Panel>
          <Grid>
            {content.panels[1].buttons.map((button, i) => (
              <BoxedButton content={button} icon={icons2[i]} iconColor={colors2[i]} />
            ))}
          </Grid>
        </Panel>
        {/* ))} */}
      </PanelsWrapper>
    </Wrapper>
  </Tabs>
);

export default CheckTypesTabs;
