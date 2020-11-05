import React from "react";
import styled from "styled-components";

// Components
import Top from "../../partials/top";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import Button from "../../molecules/buttons/button";
import WrapperContent from "../../states-llc/wrapper-content";
import Rocket from "../../sections/review-entity-types/c-corporation/rocket";
import Requirements from "../../sections/learning-center-entity/state-information-california/requirements";
import Compare from "../../sections/learning-center-entity/state-information-california/compare";
import Variants from "../../sections/learning-center-entity/state-information-california/variants";
import Subscription from "../../sections/learning-center-entity/state-information-california/subscription";
import Articles from "../../sections/articles";
// Content
import { top, compare, requirements } from "../../../static/states-llc/arizona/home";
import { rocket } from "../../../static/states-llc/arizona/general";
import { subscription } from "../../../static/learning-center-entity/state-information-california";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }

  .accordion-panel {
    overflow: hidden;
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
    }
  }

  h2 {
      text-align: left;
  }
`;

const LLCLayout = ({ children, data }) => {
    return (
        <>
            <Top imageName="mr-bulb-state-information-llc-7342" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" textWidth="530">
                <h1>{top.header}</h1>
                <p>{top.text}</p>
                <Buttonsbox>
                    <Button content={top.buttons[0]} theme="primary56" arrow />
                </Buttonsbox>
            </Top>
            <WrapperContent>
                <Wrapper>
                    {children}
                </Wrapper>
            </WrapperContent>
            <Rocket content={rocket} />
            <Requirements content={requirements} data={data} />
            <Variants data={data} />
            <Compare content={compare} data={data} />
            <Subscription content={subscription} />
            <Articles />
        </>
    );
}

export default LLCLayout;
