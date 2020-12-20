import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
//Sections
import { rocket, top, compare, states } from "../static/manage-your-company/compare-state-filing-time";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import { gradient } from "../atomic/atoms/styles/colors";
import Top from "../atomic/sections/manage-your-company/compare-state-filling-time/top";
import WhichStatesAreFast from "../atomic/sections/manage-your-company/compare-state-filling-time/which-states-are-fast";
import ComparisonStateFillingTime from "../atomic/sections/manage-your-company/compare-state-filling-time/comparison-chart";
import OvalSVG from "../images/ovals/easily-compare-state-filling-time-fast-top-left.inline.svg";
import Oval from "../atomic/atoms/icons/oval";

const GradientWrapper = styled.section`
  background: ${gradient.blue3};
  padding-top: 100px;
  position: relative;

  .oval {
    overflow: hidden;
    max-width: 100%;
  }
`;

const CompareStateTimes = () => {
  let [stateList, setStateList] = useState([]);

  const getStateList = async () => {
    const data = await fetch(`${process.env.INCFILE_API_URL}/getStateFilingTimesToCompare`).then((response) => response.json());
    return data;
  };

  useEffect(() => {
    getStateList().then((data) => {
      setStateList(data);
    });
  }, []);

  return (
    <Layout>
      <SEO title="Filing Times" description="Easily Compare State Filing Times" />
      <Top content={top} />
      <ComparisonStateFillingTime content={compare} stateList={stateList} />
      <GradientWrapper>
        <Oval width={570} height={570} className="oval" top="0" left="0">
          <OvalSVG />
        </Oval>
        <WhichStatesAreFast content={states} stateListCompare={stateList} />
        <Rocket content={rocket} />
      </GradientWrapper>
    </Layout>
  );
};

export default CompareStateTimes;
