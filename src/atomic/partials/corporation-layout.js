import React from "react";
import styled from "styled-components";

// Components
import WrapperContent from "../states-llc/wrapper-content";
// Content
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

const CorporationLayout = ({ children }) => {
    return (
        <>
            <WrapperContent>
                <Wrapper>
                    {children}
                </Wrapper>
            </WrapperContent>
        </>
    );
};

export default CorporationLayout;
