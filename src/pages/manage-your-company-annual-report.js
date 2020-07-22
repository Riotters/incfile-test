import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Colorbox from "../components/color-box";
import TextCenterLayout from "../components/partials/blocks/heading-center";
import styled from "styled-components";
import Top from "../components/partials/sections/top";
import ImageContent from "../components/partials/blocks/left-image-right-content";
import Articles from "../components/partials/sections/articles";
import { color, gradient } from "../components/styles/colors";
import Container from "../components/container";
import EnterprenourSVG from "../images/icons/enterprenour.inline.svg";
import Help from "../components/partials/blocks/left-content-right-object"
import Benefits from "../components/partials/sections/benefits";
import Card from "../components/certificate-card";
import TopImageBox from "../components/top-image-box";
import { states } from "../components/states"

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  h3,
  p {
    max-width: 100%;
    padding-bottom: 24px;
  }

  h3 {
    &.pt32 {
      padding-top: 32px;
    }

    &.pt48 {
      padding-top: 48px;
    }
  }

  p {
    &.pb32 {
      padding-bottom: 32px;
    }

    &.pb40 {
      padding-bottom: 40px;
    }
  }

  .yellowbox,
  .orangebox,
  .greenbox,
  .bluebox,
  .babybluebox {
    margin-bottom: 48px;
  }

  .boxes {
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;

    .box {
        background-color: ${color.babyblue3};
        position: relative;
        padding: 35px 35px 35px 88px;
        border-radius: 5px 5px 5px 5px;
  
        @media (min-width: 768px) {
          &:nth-child(1) {
            border-radius: 20px 20px 5px 5px;
          }
  
          &:nth-child(2) {
            border-radius: 5px 5px 5px 5px;
          }
  
          &:nth-child(3) {
            border-radius: 5px 5px 20px 20px;
          }

          &:not(:last-child) {
              margin-bottom: 8px;
          }
        }
  
        svg {
          position: absolute;
          top: 50%;
          left: 40px;
          transform: translateY(-50%);
        }
  
        h3 {
          padding: 0;
        }
    }
`;

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

const Buttonsbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Imageboxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;

  @media(min-width: 768px) {
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
    <Top imageName="mrs-bulb-annual-report" imageAlt="Mrs Bulb and with checklist">
      <h1>Prepare and File an Annual LLC or Corporate Report</h1>
      <p>Formal Corporate Annual Reports — Required by Your Secretary of State</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Get started
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="annual-reports" paddingTop="60">
        <h3>What is an annual report?</h3>
        <p>
          An Annual report is a filing that details a company’s activities throughout the prior year. 
          Annual reports are intended to give state governing authorities information regarding the names and 
          addresses of directors or managing members of a corporation or LLC as well as the company and registered agent address. 
          In some state the annual report is filed at a pre determined date for all entities regardless of the date of 
          formation while other states require that the annual report is filed on the anniversary date of formation.
        </p>
        <Colorbox className="bluebox" theme="icon" Icon={EnterprenourSVG} color={color.blue3} curve curveColor={color.yellow1}>
          <h4>Enterpreneur 360 (2019)</h4>
          <p>
            If you’re a business manager, director, or owner, you have a requirement to follow certain rules and regulations. 
            One of those is filing an annual report for your business. We’ll explore what an annual report is, 
            how to file it, what it should contain, and other useful information.
          </p>
        </Colorbox>
        <p>
          One important point — When we discuss annual reports, we’re talking about formal requirements to produce a report and file it with your Secretary of State. 
          However, you may also produce additional annual reports for your investors, shareholders, and other stakeholders. We cover those later in this piece.
        </p>
        <h3 className="pt48">Formal LLC & Corporate Annual Reports — Required by Your Secretary of State</h3>
        <p>
          If you’ve incorporated as a business — As an LLC, LLP, S-Corp or C-Corp, you must file an annual report, normally with your state’s Secretary of State. 
          This applies no matter how big or small your business is. Typically, sole proprietors and partnerships do not have to file an annual report.
        </p>
        <h3 className="pt48">What is Contained in an Annual LLC or Corporate Report?</h3>
        <Colorbox className="yellowbox" color={color.yellow3} dotsColor={color.yellow1}>
          <h4>Annual reports vary in complexity and typically include the following:</h4>
          <ul>
            <li>The principal business (head office) address of the company.</li>
            <li>The names and addresses of the managers of the business (directors and officers in a corporation, members and managers in an LLC).</li>
            <li>Important identification numbers for your business.</li>
            <li>The purpose of your business.</li>
            <li>Authorized signatories and registered agents.</li>
            <li>The number of shares of stock issued by the business.</li>
          </ul>
        </Colorbox>
        <p>
          The purpose of an annual report is to keep your state informed on any changes to the details or ownership of your business — For example if the business has changed locations or has new directors or managers.
        </p>
        <h3 className="pt48">How to File Your Annual Report</h3>
        <p>
          If you do need to file an annual report for your LLC or corporation, you can normally do so online, through your state’s website. 
          In addition to filing your annual report, you will also need to pay a fee — These fees do vary from state to state and could range between $50 and $400.
        </p>
        <h3 className="pt32">Due Dates for Your Annual Report</h3>
        <p>
          In some states, the annual report is filed on a predetermined date for all entities regardless of the date of formation. 
          Other states require the annual report is filed on the anniversary date of formation. The due dates for corporate annual reports 
          do vary from state to state, so find your filing date from your state’s website and put it in your calendar.
        </p>
        <Colorbox className="orangebox" color={color.orange3} dotsColor={color.orange1}>
          <h4>When is an Annual Report Not an Annual Report?</h4>
          <ul>
            <li>Some states only require you to file a report every two years, so that’s a “Biennial report.”</li>
            <li>Some states call annual reports from LLCs “Statements of Information.”</li>
            <li>Some states will also require you to file other business documentation if important details of your business have changed.</li>
          </ul>
        </Colorbox>
        <h3>Business and Financial Annual Reports</h3>
        <p>
          In addition to formally filing a corporate annual report, you may also produce business and financial reports for investors, directors, managers and other stakeholders. 
          Although there are no “legal” requirements for what these reports should contain, there are certain conventions for what’s included.
        </p>
        <h3>Business Financial Reports</h3>
        <p>
          Every business exists to make a profit, so finances are most often at the heart of a business annual report. Ways to present this information include:
        </p>
        <Colorbox className="greenbox" color={color.green3} dotsColor={color.green1}>
          <h4>When is an Annual Report Not an Annual Report?</h4>
          <ul>
            <li>Balance sheet: Information on the various financial assets, liabilities, cash-n-hand and other key factors of the finances of a business at a particular point in time.</li>
            <li>Profit and Loss (P&L): The income, outgoings, revenue, expenses, and profits of a business.</li>
            <li>Shares and stock issued: The volume and value of stock that’s been issued, either privately or publicly.</li>
            <li>Financial projections and forecasts: Likely projected revenue and profits.</li>
          </ul>
        </Colorbox>
        <h3>Other Business Reports</h3>
        <p>
          An annual business report can also include several other areas:
        </p>
        <Colorbox className="babybluebox" color={color.babyblue3} dotsColor={color.babyblue1}>
          <h4>When is an Annual Report Not an Annual Report?</h4>
          <ul>
            <li>An executive summary: All the key financial and other important information about the business, on one page.</li>
            <li>Letter from the chairman / board of directors: A short message on business performance, outlook, and other important areas.</li>
            <li>Opportunities: Any major opportunities for growth and expansion.</li>
            <li>Risks: Any potential threats or issues to the business and how they’re being addressed.</li>
          </ul>
        </Colorbox>
        <p>
          The purpose of an annual report is to keep your state informed on any changes to the details or ownership of your business — For example if the business has changed locations or has new directors or managers.
        </p>
      </ImageContent>
    </BusinessOwnerResponsibilities>
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
