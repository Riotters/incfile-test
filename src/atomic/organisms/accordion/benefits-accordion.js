import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Card from "../../molecules/mixed-blocks/top-image-box";

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

  @media (min-width: 768px) {
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

const BenefitsAccordion = () => (
  <Tabs>
    <Wrapper>
      <TabsWrapper>
        <Scroller>
          <Tab>Company Changes</Tab>
          <Tab>Compiliance</Tab>
          <Tab>Registered Agent</Tab>
          <Tab>IRS Filings</Tab>
        </Scroller>
      </TabsWrapper>
      <PanelsWrapper>
        <Panel>
          <Grid>
            <Card content={{ header: "Amendment", text: "Filed if a company requires changes to membership, addresses or  company name." }} color={color.purple3} image={"bc-01"} />
            <Card content={{ header: "Dissolution", text: "Used to formally terminate the existence of a entity." }} color={color.babyblue3} image={"bc-20"} />
            <Card content={{ header: "Used to formally terminate the existence of a entity.", text: "Filed when you need to expand your entity to new states." }} color={color.blue3} image={"bc-03"} />
            <Card content={{ header: "Fictitious Business Name", text: "Filed if a company requires assumed business/fictitious name." }} color={color.orange3} image={"bc-19"} />
          </Grid>
        </Panel>
        <Panel>
          <Grid>
            <Card content={{ header: "File Annual Report", text: "The majority of states require that companies file periodic reports that affirm the current information of the companies members, directors, and business address." }} color={color.babyblue3} image={"bc-05"} />
            <Card content={{ header: "Order Registered Agent", text: "Order registered agent service and receive your new registered agent information immediately." }} color={color.orange3} image={"bc-11"} />
            <Card content={{ header: "Certificate of Good Standing", text: "Required by governmental and private agencies to validate a companies status in order to facilitate specified transactions." }} color={color.blue3} image={"bc-10"} />
            <Card content={{ header: "Business License Search", text: "Determine all business licenses and permits required at the federal, state, county, and municipal level." }} color={color.yellow3} image={"bc-17"} />
            <Card content={{ header: "Trademark Name Search", text: "Take steps to protect your brand and valuable company assets such as your name, logo, and tagline." }} color={color.purple3} image={"bc-07"} />
          </Grid>
        </Panel>
        <Panel>
          <Grid>
            <Card content={{ header: "Order Registered Agent", text: "Order registered agent service and receive your new registered agent information immediately." }} color={color.orange3} image={"bc-11"} />
            <Card content={{ header: "Renew Registered Agent", text: "Click here if you have existing registered agent service and would like to renew it." }} color={color.green3} image={"bc-18"} />
            <Card content={{ header: "Change Registered Agent", text: "Use to update the registered agent on file with the state of formation." }} color={color.blue3} image={"bc-16"} />
          </Grid>
        </Panel>
        <Panel>
          <Grid>
            <Card content={{ header: "EIN / Tax ID #", text: "An EIN is required to open a bank account, file taxes and submit payroll taxes." }} color={color.red3} image={"bc-12"} />
            <Card content={{ header: "File Business Taxes", text: "Work with a tax professional to file your federal business tax return." }} color={color.blue3} image={"bc-13"} />
            <Card content={{ header: "File S Corp Tax Election", text: "Reduce the Tax You Pay by Having Your LLC Treated as an S Corp for Tax Purposes." }} color={color.babyblue3} image={"bc-15"} />
          </Grid>
        </Panel>
      </PanelsWrapper>
    </Wrapper>
  </Tabs>
);

export default BenefitsAccordion;
