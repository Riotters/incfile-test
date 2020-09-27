import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";

const GridSectionList = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 70px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const AdvantagesSection = styled.section`
  position: relative;
  padding: 120px 0;
  overflow: hidden;
`;

const VirtualMailboxesMoreInfo = ({ className, content }) => (
    <AdvantagesSection className={className}>
        <ContentCenter>
            <Heading size={2}>{content.header}</Heading>
            <Paragraph>{content.text}</Paragraph>
        </ContentCenter>
    </AdvantagesSection>
);

export default VirtualMailboxesMoreInfo;
