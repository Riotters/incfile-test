import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import ContentHeader from "../../atomic/states-llc/taxes-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import FeeFilingRequirementSection from "../../atomic/states-llc/new-york/fee-filing-requirement";

// Content
import { filingFeeAndRequirementContent } from "../../static/states-llc/new-york/filingFeeAndRequirement";
import { tabPages } from "../../static/states-llc/new-york/general";
import { getFullPricesAndFilings } from '../../api/Api';
import { Helmet } from "react-helmet";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`;

const FilingFeeAndRequirementPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('New York').then(data => {
            setDataApi(data);
        });
    }, []);
  
    return (
        <Layout>
            <SEO title="Filing Requirements & Fees for New York LLCs | Incfile.com" description="Make sense of the required forms, fees, and filing procedures for your New York LLC with Incfile's easy-to-use guide. Read more." />

            <LinearBgHeader position="to top" imageMapName="tx-map-2x">
                <ContentHeader content={filingFeeAndRequirementContent.header} />
            </LinearBgHeader>

            <WrapperContent>
                <Wrapper>
                    <LeftTabPages content={tabPages} />
                    <MainPageContent>
                        <FeeFilingRequirementSection content={filingFeeAndRequirementContent.content} data={dataApi} />
                    </MainPageContent>
                </Wrapper>
            </WrapperContent>

            <Rocket url="?entityType=LLC&entityState=NY" />

            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What Happens to the State Fees That I Am Charged When Forming My New York LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your New York business.</p>"}},{"@type":"Question","name":"Do I Need to Pay an Annual Report Fee Every Year?","acceptedAnswer":{"@type":"Answer","text":"<p>Usually, yes. Most states require you file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require annual reports. You can find out more on the <a href='https://www.incfile.com/compliance-filing-requirement/'>compliance page for your state.</a></p>"}},{"@type":"Question","name":"Who Will I Need to Get Business Licenses and Permits From for My New York LLC?","acceptedAnswer":{"@type":"Answer",
                        "text":"<p>It depends on various factors including:</p><ul>    <li>The type of business you run</li>    <li>Where you are located</li>    <li>Governing organizations in your industry</li>    <li>Federal, state and local regulations</li></ul><p>That’s why our <a href='https://www.incfile.com/business-license-research-package/'>business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your New York LLC needs to be compliant.</p>"}}]
                    }`}
                </script>
            </Helmet>
        </Layout>
    );
}

export default FilingFeeAndRequirementPage;
