import React from "react";
import styled from "styled-components";
import Link from "../../../atoms/links/link";
import ArrowLink from "../../../molecules/buttons/text";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ObjectContent from "../../../partials/left-object-right-content";
import ContactMe from "../../../organisms/cards/contact-me";
import Circle from "../../../atoms/icons/circle";
import TaxesSVG from "../../../../images/icons/taxes.inline.svg";
import Taxes2SVG from "../../../../images/icons/taxes2.inline.svg";
import Taxes3SVG from "../../../../images/icons/taxes3.inline.svg";
import DocumentSVG from "../../../../images/icons/application-form.inline.svg";
import DottedList from "../../../molecules/colored-blocks/dotted-list-inside";
import IconTextColoredList from "../../../organisms/lists/icon-text-colored-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";

const TypesOfTaxes = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  p {
    color: ${color.grey2};
  }
`;

const TypesOfTaxesSection = ({ className, content }) => (
    <TypesOfTaxes className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <ObjectContent object={<ContactMe content={content.card}/>}>
            <Heading size="3" bottomMargin="24">{content.header}</Heading>
            <Paragraph big bottomMargin="40">{content.text}</Paragraph>
            <ArrowLink bottomMargin="72" content={content.link} />
            <Paragraph big>{content.text2}</Paragraph>
            <Paragraph big bottomMargin="72">{content.text3}</Paragraph>
            <Circle height="80" width="80" circleColor={color.babyblue2} bottomMargin="32">
              <TaxesSVG />
            </Circle>
            <Heading size="3" bottomMargin="24">{content.llcTAxes.header}</Heading>
            <Paragraph big>{content.llcTAxes.text}</Paragraph>
            <Paragraph big bottomMargin="48">{content.llcTAxes.text2}</Paragraph>
            <IconTextColoredList color={color.yellow3} Icon={DocumentSVG} content={content.llcTAxes.list} />
            <Paragraph big>{content.llcTAxes.text3}</Paragraph>
            <DottedList grid columns="3" content={content.llcTAxes.list2} color={color.blue3} bottomMargin="48" curve />
            <Paragraph big>{content.llcTAxes.text4}</Paragraph>
            <Paragraph big bottomMargin="72">{content.llcTAxes.text5}</Paragraph>
            <Circle height="80" width="80" circleColor={color.green2} bottomMargin="32">
              <Taxes2SVG />
            </Circle>
            <Heading size={3} bottomMargin="24">{content.sCorpTaxes.header}</Heading>
            <Paragraph big>{content.sCorpTaxes.text}</Paragraph>
            <IconTextColoredList color={color.orange2} Icon={DocumentSVG} content={content.sCorpTaxes.list} withOr lightFirst/>
            <Paragraph big>{content.sCorpTaxes.text2}</Paragraph>
            <Heading size={4} bottomMargin="24">{content.sCorpTaxes.header2}</Heading>
            <ArrowLink bottomMargin="72" content={content.sCorpTaxes.link} />
            <Circle height="80" width="80" circleColor={color.yellow2} bottomMargin="32">
              <Taxes3SVG />
            </Circle>
            <Heading size={3} bottomMargin="24">{content.cCorporationTaxes.header}</Heading>
            <Paragraph big>{content.cCorporationTaxes.text}</Paragraph>
            <IconTextColoredList color={color.babyblue3} Icon={DocumentSVG} content={content.cCorporationTaxes.list} />
            <Paragraph big>{content.cCorporationTaxes.text2}</Paragraph>
            <Paragraph big>{content.cCorporationTaxes.text3}</Paragraph>
            <Paragraph big>{content.cCorporationTaxes.text4}</Paragraph>
        </ObjectContent>
    </TypesOfTaxes>
  );
  
  export default TypesOfTaxesSection;