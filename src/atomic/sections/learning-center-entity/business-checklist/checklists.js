import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Form from "../../../organisms/forms/business-name-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Checklist from "../../../../components/checklist/checklist";
import NameIcon from "../../../../images/icons/your-business-name.inline.svg";
import FormationtIcon from "../../../../images/icons/company-formation.inline.svg";
import FinancialsIcon from "../../../../images/icons/financials.inline.svg";
import OperationsIcon from "../../../../images/icons/operations.inline.svg";
import WorkforceIcon from "../../../../images/icons/workforce.inline.svg";
import MarketingIcon from "../../../../images/icons/marketing.inline.svg";

const Checklists = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  background-color: ${color.blue3};
`;

const ChecklistsSection = ({ className, content }) => (
  <Checklists className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <ContentCenter>
      <Checklist title="Your Business Name" icon={NameIcon} iconBgColor={color.orange2} iconShadowColor={shadow.orange2} />
      <Checklist title="Company Formation" icon={FormationtIcon} iconBgColor={color.purple2} iconShadowColor={shadow.purple2} />
      <Checklist title="Financials" icon={FinancialsIcon} iconBgColor={color.yellow2} iconShadowColor={shadow.yellow2} />
      <Checklist title="Operations" icon={OperationsIcon} iconBgColor={color.babyblue2} iconShadowColor={shadow.babyblue2} />
      <Checklist title="Workforce" icon={WorkforceIcon} iconBgColor={color.red2} iconShadowColor={shadow.red2} />
      <Checklist title="Marketing" icon={MarketingIcon} iconBgColor={color.green2} iconShadowColor={shadow.green2} />
    </ContentCenter>
  </Checklists>
);

export default ChecklistsSection;
