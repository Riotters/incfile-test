import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import BehalfCards from "../../../organisms/cards/behalf-cards";
import Table from "../../../organisms/tables/states-allow-table";

const States = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const StatesSection = ({ className, content }) => (
    <States className={className}>
        <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" />
        <ContentCenter>
            <Table content={content.table} />
        </ContentCenter>
    </States>
  );
  
  export default StatesSection;