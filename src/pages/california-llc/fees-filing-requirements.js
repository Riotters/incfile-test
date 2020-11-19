import React, { useEffect, useState } from "react";
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
import FeeFilingRequirementSection from "../../atomic/states-llc/california/fee-filing-requirement";

// Content
import { filingFeeAndRequirementContent } from "../../static/states-llc/california/filingFeeAndRequirement";
import { tabPages, rocket } from "../../static/states-llc/california/general";

import { getFullPricesAndFilings } from '../../api/Api';

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
    const [dataApi, setDataApi] = useState({});

    useEffect(() => {
        getFullPricesAndFilings('California').then(data => {
            setDataApi(data);
        });
    }, []);
    
    return (
        <Layout>
            <SEO title="Filing Requirements & Fees for California LLCs | Incfile.com" description="Make sense of the required forms, fees, and filing procedures for your California LLC with Incfile's easy-to-use guide. Read more." />

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

            <Rocket url="?entityType=LLC&entityState=CA" />
        </Layout>
    );
}

export default FilingFeeAndRequirementPage;
