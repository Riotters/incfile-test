import React from "react";
import styled from "styled-components";

// Components
import Top from "../partials/top";
import WrapperContent from "../states-llc/wrapper-content";
// Content
import { top } from "../../static/choose-business-name";
import RatingRow from "../atoms/boxes/rating-row";
import CartBlock from "../molecules/blocks/cart-block";
import RatingBlock from "../molecules/blocks/rating-block";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

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

const ChapterLayout = ({ children }) => {
  return (
    <>
      <Top imageName="mrs-bulb-laptop-4059" imageAlt="Mrs Bulb with laptop" ovalColor="sun" textWidth="700" headlineWidth={700}>
        <h1>{top.header}</h1>
        <p>{top.text}</p>
          <RatingRow>
              <CartBlock />
              <RatingBlock />
          </RatingRow>
      </Top>
      <WrapperContent>
          <Wrapper>
            {children}
          </Wrapper>
      </WrapperContent>
    </>
  );
};

export default ChapterLayout;
