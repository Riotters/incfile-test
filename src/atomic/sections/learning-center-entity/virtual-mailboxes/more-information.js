import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";

const AdvantagesSection = styled.section`
  position: relative;
  padding: 100px 0 104px;
  overflow: hidden;
`;

const VirtualMailboxesMoreInfo = ({ className, content }) => (
    <AdvantagesSection className={className}>
        <ContentCenter>
            <Heading size={2}>{content.header}</Heading>
            <Paragraph big>{content.text}</Paragraph>
        </ContentCenter>
    </AdvantagesSection>
);

export default VirtualMailboxesMoreInfo;
