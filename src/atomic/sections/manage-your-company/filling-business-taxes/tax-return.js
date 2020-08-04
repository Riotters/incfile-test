import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import TaxReturnTable from "../../../organisms/tables/tax-return-table";

import Link from "../../../atoms/links/link";
import ArrowLink from "../../../molecules/buttons/text";
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

const TaxReturn = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  p {
    color: ${color.grey2};
  }
`;

const TaxReturnSection = ({ className, content }) => (
    <TaxReturn className={className}>
        <HeadingCenter headline={content.header} />
        <ContentCenter>
          <TaxReturnTable content={content.table} />
        </ContentCenter>
    </TaxReturn>
  );
  
  export default TaxReturnSection;