import React from "react";
import styled from "styled-components";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalSVG2 from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import ArrowLink from "../../../molecules/buttons/text";

const Wrapper = styled.div`
  position: relative;
  
  .oval {
    display: none;
  
    @media (min-width: 576px) {
        display: block;
    }
  }
  
  h2 {
    align-self: flex-start;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 56px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
  
  @media (min-width: 992px) {
    width: calc(100% / 3);
  }

  a {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Lists = ({ content }) => (
  <Wrapper>
    <Oval className="oval" height="420" width="460" top="7" left="0" y="-20">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="570" width="570" bottom="0" right="0" y="20">
      <OvalSVG2 />
    </Oval>
    <ContentCenter>
      {content.sections.map((section) => (
        <>
          <Heading size="2" template={3} left maxWidth="1170" bottomMargin="32">
            {section.header}
          </Heading>
          {section.rows.map((row, index) => (
            <Row key={index}>
              {row.header ? (
                <Heading size="3" template={5} maxWidth="1170" bottomMargin="12">
                  {row.header}
                </Heading>
              ) : null}
              <Grid>
                {row.columns.map((column, i) => (
                  <Column key={i}>
                    {column.links.map((link, _i) => (
                      <ArrowLink content={link} bottomMargin="12" key={_i} />
                    ))}
                  </Column>
                ))}
              </Grid>
            </Row>
          ))}
        </>
      ))}
    </ContentCenter>
  </Wrapper>
);

export default Lists;
