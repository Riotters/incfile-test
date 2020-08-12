import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { color, gradient } from "../../components/styles/colors";
import { states } from "../../components/states";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import Top from "../../atomic/partials/top";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import Container from "../../components/container";
import Help from "../../components/partials/blocks/left-content-right-object"
import Benefits from "../../components/partials/sections/benefits";
import Card from "../../components/certificate-card";
import TopImageBox from "../../components/top-image-box";
import { top, about, help, faq } from "../../static/manage-your-company/annual-report"
import About from "../../atomic/sections/manage-your-company/annual-report/about"

const RequirementsByState = styled.section`
  background-image: ${gradient.blue3};
  padding-top: 100px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .help {
    padding-bottom: 150px;
  }
`;

const Imageboxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const dropdownOneOptions = [
  'LCC', 'Corporation', 'Nonprofit'
];

const dropdownTwoOptions = states.state.map(state => (state.name))

const CertificateCard = <Card headline="Annual Report" price="88" dropdownOnePlaceholder="Select Entity Type" dropdownOneOptions={dropdownOneOptions} dropdownTwoPlaceholder="Select State" dropdownTwoOptions={dropdownTwoOptions} />;

const CertificateOfGoodStanding = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-annual-report" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <Help className="help" headlineWidth="450" object={CertificateCard}>
            <h2>Help File My Annual Report</h2>
            <h4>Save your time. We'll handle the paperwork.</h4>
            <p>
            If you would like to use our services to facilitate the filing of your annual report please place the order and a representative from IncFile will contact you to obtain specific information required to complete and file the annual report in your state of formation.
            </p>
          </Help>
          <TextCenterLayout headline="Common questions about filing a Certificate of Good Standing" headlineWidth="700" />
          <Imageboxes>
            <TopImageBox image="clock" color={color.orange3}>
                <h4>How Long does it take to file an Annual Report?</h4>
                <p>
                    The filing time is dependent on the governing state agency. Filing times vary by state it is therefore important that the report is filed well in advance of the due date in order to avoid any potential late filing fees.
                </p>
            </TopImageBox>
            <TopImageBox image="refuse" color={color.red3}>
                <h4>What happens if the Annual Report cannot be filed?</h4>
                <p>
                    In the event that the entity has been administratively revoked or otherwise dissolved or the report is not due within a close proximity to the order being placed our policy is to contact and inform the client and issue a full refund.
                </p>
            </TopImageBox>
            <TopImageBox image="cost" color={color.green3}>
                <h4>How much does it cost to file an Annual Report?</h4>
                <p>
                    The state fee varies by state our service fee to file the report is $88. To review the fee in your state click on the “order now” button and select the state and entity type.
                </p>
            </TopImageBox>
            <TopImageBox image="receive" color={color.blue3}>
                <h4>What will I receive when the Annual Report is filed?</h4>
                <p>
                  The governing state agency will typically return a filed copy of the Annual Report which is then mailed to the client.
                </p>
            </TopImageBox>
          </Imageboxes>
        </div>
      </Container>
    </RequirementsByState>
    <Benefits />
    <Articles />
  </Layout>
);

export default CertificateOfGoodStanding;
