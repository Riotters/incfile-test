import React from "react";
import styled from "styled-components";
//import { Link } from "gatsby";
import Link from "../../../atoms/links/link";
import Image from "../../../atoms/image/image"
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ObjectContent from "../../../partials/left-object-right-content";

const TypesOfTaxes = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const TypesOfTaxesSection = ({ className, content }) => (
    <TypesOfTaxes className={className}>
        <ObjectContent>
            <Heading size="3" bottomSpace="24">{content.header}</Heading>
            <Paragraph bottomSpace="40">{content.text}</Paragraph>
            <Link linkUrl={content.link.url} linkText={content.link.text} />
            <Paragraph>{content.text2}</Paragraph>
            <Paragraph>{content.text3}</Paragraph>
            <Heading size={3}>{content.llcTAxes.header}</Heading>
            <Paragraph>{content.llcTAxes.text}</Paragraph>
            <Paragraph>{content.llcTAxes.text2}</Paragraph>
            <Paragraph>{content.llcTAxes.text3}</Paragraph>
            <Paragraph>{content.llcTAxes.text4}</Paragraph>
            <Paragraph>{content.llcTAxes.text5}</Paragraph>
            <Heading size={3}>{content.sCorpTaxes.header}</Heading>
            <Paragraph>{content.sCorpTaxes.text}</Paragraph>
            <Paragraph>{content.sCorpTaxes.text2}</Paragraph>
            <Heading size={4}>{content.sCorpTaxes.header2}</Heading>
            <Link linkUrl={content.sCorpTaxes.link.url} linkText={content.sCorpTaxes.link.text} />
        </ObjectContent>
    </TypesOfTaxes>
  );
  
  export default TypesOfTaxesSection;