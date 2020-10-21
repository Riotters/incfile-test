import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import GenericGridTableRow from "../../molecules/blocks/generic-grid-table-row";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 772px) {
    &.responsive {
      width: 100%;
      overflow-x: scroll;
    }
  }

  h5 {
    font-family: Avenir, sans-serif;
  }

  &.blue3 {
    .highlight {
      background-color: ${color.blue3};
    }
  }

  &.align-left {
  }

  &.green3 {
    .highlight {
      background-color: ${color.green3};
      padding: 8px 16px;
    }
  }

  &.left {
    .row {
      & > div:not(first-child) {
        justify-content: flex-start;
      }
    }
  }

  &.headers-start {
    .row {
      div:first-child {
        align-items: flex-start;
      }
    }
  }

  .head,
  .row {
    & > div {
      &:not(:first-child) {
        justify-content: center;

        h5,
        p:not(.left) {
          text-align: center;
        }
      }
    }
  }

  .row {
    & > div {
      &:last-child {
        p {
          border-radius: 20px;
        }
      }
    }
  }

  p {
    &.highlight {
      background-color: ${color.green3};
    }

    font-size: 16px;
    line-height: 24px;
    color: ${color.black};
  }

  .flex {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const ResponsiveWrapper = styled.div`
  @media screen and (max-width: ${(props) => props.maxWidth ?? 772}px) {
    &.responsive {
      width: ${(props) => props.width ?? 200}%;
    }
  }
`;

const GenericTable = ({ className, content, style, settings, responsive }) => {
  return (
    <Wrapper className={className + " " + (responsive ? " responsive" : "")} style={style}>
      <ResponsiveWrapper width={250} className={+" " + (responsive ? " responsive" : "")}>
        {content.headers && <GenericGridTableRow content={content.headers} settings={settings} columns={content.headerColumnsDef} />}
        {content.rows.map((row) => (
          <GenericGridTableRow className="row" content={row} columns={content.rowColumnsDef} settings={settings} />
        ))}
      </ResponsiveWrapper>
    </Wrapper>
  );
};

export default GenericTable;
