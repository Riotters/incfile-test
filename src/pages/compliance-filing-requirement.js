import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/ongoing-filing-requirements/about";
import EntityTypeAndState from "../atomic/sections/learning-center-entity/ongoing-filing-requirements/entity-type-and-state";
import TextCenterLayout from "../components/partials/blocks/heading-center";
import Rocket from "../atomic/sections/rocket";
import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import ContentCenter from "../atomic/partials/content-center";

//Texts
import { top, about, entityTypeAndState, rocket } from "../static/learning-center-entity/ongoing-filing-requirements";

const OngoingFilingRequirements = () => {
  const [dataApi, setDataApi] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [header, setHeader] = React.useState("");
  const renderComplianceSection = (data) => {
    setDataApi(data);
    setIsLoading(false);
    setHeader(`Mandatory ${data.prices.state} Compliance Requirements`);
  };
  return (
    <Layout>
      <SEO title="Research State by State Compliance Filing Requirements" description="Research State by State Compliance Filing Requirements" />
      <Top imageName="mrs-bulb-ongoing-filing-requirements-7487" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
        <h1>{top.header}</h1>
        <p>{top.text}</p>
      </Top>
      <About content={about} />
      <EntityTypeAndState content={entityTypeAndState} getDataApi={renderComplianceSection} />
      {!isLoading && dataApi && (
        <ContentCenter contentWidth="970">
          <TextCenterLayout headline={header} headlineWidth="700" style={{ marginBottom: `52px` }} />
          <FilingTimeAndPriceBox data={dataApi} />
          <ComplianceRequirementBox data={dataApi} />
        </ContentCenter>
      )}
      <Rocket />
    </Layout>
  );
};

export default OngoingFilingRequirements;
