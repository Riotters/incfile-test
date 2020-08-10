import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Table from "../../../organisms/tables/states-allow-table";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import Oval3SVG from "../../../../images/ovals/top-left-transparent-babyblue.inline.svg";

const States = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  overflow: hidden;
`;

const StatesSection = ({ className, content }) => (
    <States className={className}>
        <Oval className="oval" height="720" width="720" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Oval className="oval" height="570" width="570" top="37" right="0" opacity="0.5">
            <Oval2SVG />
        </Oval>
        <Oval className="oval" height="420" width="420" top="78" left="0">
            <Oval3SVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" />
        <ContentCenter>
            <Table content={content.table} />
        </ContentCenter>
    </States>
  );
  
  export default StatesSection;