import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../components/styles/colors";
import { states } from "../../components/states";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../components/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import Top from "../../components/partials/sections/top";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import Container from "../../components/container";
import Help from "../../components/partials/blocks/left-content-right-object"
import Accordion from "../../components/accordion";
import Benefits from "../../components/partials/sections/benefits";
import ArrowLink from "../../components/arrow-link";
import Card from "../../components/certificate-card";

import ExistenceSVG from "../../images/icons/certificate-of-existence.inline.svg";
import AuthorizationSVG from "../../images/icons/certificate-of-authorization.inline.svg";
import StatusSVG from "../../images/icons/certificate-of-status.inline.svg";

const faq = {
  items: [
    {
      question: "Why do I need a Certificate of Good Standing?",
      answer:
        "A Certificate of Good Standing is typically needed in the normal course of business by another organization (business partner, bank, lender, investor or regulatory authority) to prove that your business entity is legally registered with the state and is in good standing. The Certificate of Good Standing proves that you have paid any necessary fees and filed required paperwork to keep your business chartered, registered and in compliance with your state authorities.",
    },
    {
      question: "How long is a Certificate of Good Standing valid?",
      answer: "The validity of a certificate in terms of age is determined by the organization that has requested it. Under most circumstances a requesting organization will require that the document is not older than 30 days.",
    },
    {
      question: "What will happen if my entity is not in good standing?",
      answer:
        "If the entity that the certificate is being requested for is not in good standing, we will contact you and provide details as to the status of the corporation or LLC and issue a full refund or provide assistance in bringing the entity back to good standing. This process is usually referred to as reinstatement.",
    },
    {
      question: "How long does it take to obtain a Certificate of Good Standing?",
      answer: "The filing time depends on the governing state agency and varies by state.",
    },
  ],
};

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
  .orangebox {
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

const dropdownOneOptions = [
  'LCC', 'Corporation', 'Nonprofit'
];

const dropdownTwoOptions = states.state.map(state => (state.name))

const CertificateCard = <Card headline="Filing Your Certificate of Good Standing" price="88" dropdownOnePlaceholder="Select Entity Type" dropdownOneOptions={dropdownOneOptions} dropdownTwoPlaceholder="Select State" dropdownTwoOptions={dropdownTwoOptions} />;

const CertificateOfGoodStanding = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-buildings" imageAlt="Mr Bulb and buildings">
      <h1>Filing Your Certificate of Good Standing</h1>
      <p>$0 + State Fee & FREE Registered Agent.</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Order Now
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="certificate" paddingTop="60">
        <h3>What is a Certificate of Good Standing?</h3>
        <p>
          A Certificate of Good Standing is an official document issued by your state’s secretary of state office to verify that your business is compliant within the state of incorporation and therefore is in “good standing.” Just like having a driver’s license or other forms of personal ID, a
          Certificate of Good Standing proves that your LLC or corporation is officially registered and authorized to operate in your home state.
        </p>
        <h3>Other names for a Certificate of Good Standing</h3>
        <div className="boxes">
          <div className="box">
            <ExistenceSVG />
            <h4>Certificate of Existence</h4>
          </div>
          <div className="box">
            <AuthorizationSVG />
            <h4>Certificate of Authorization</h4>
          </div>
          <div className="box">
            <StatusSVG />
            <h4>Certificate of Status</h4>
          </div>
        </div>
        <p>
          Also known as a Certificate of Existence, Certificate of Authorization, or a Certificate of Status, the Good Standing Certificate is a one-page document provided by the secretary of state and provides conclusive evidence of the status of your business entity. In many cases it can be valid
          up to three months.
        </p>
        <h3 className="pt48">When do you need a Certificate of Good Standing?</h3>
        <p>
          In certain situations, you may be required to prove that your business exists and is in compliance with relevant laws and regulations. A Certificate of Good Standing from your state serves as this proof. A Certificate of Good Standing is often required in order to obtain a loan, renew a
          business license or to file your business taxes. There are a few key reasons why your company might need a Certificate of Good Standing. Sometimes this document is requested by:
        </p>
        <Colorbox className="yellowbox" color={color.yellow3} dotsColor={color.yellow1}>
          <h4>When is an Annual Report Not an Annual Report?</h4>
          <ul>
            <li>Other state governments as part of the process of applying for Foreign Qualification for your business to register to do business in states other than your home state</li>
            <li>Lenders or banks that want to get proof of your business’s existence and business history as part of evaluating your creditworthiness for a loan or when carrying out certain types of transactions</li>
            <li>Investors or business partners who want to make sure your business is legitimate and in compliance with laws and regulations</li>
            <li>Licensing agencies and regulators — in order to renew or obtain certain permits and licenses</li>
            <li>Business brokers or buyers — if you are seeking to sell your business and need to show proof of its existence, history and compliance</li>
          </ul>
        </Colorbox>
        <p>
          Simply put, the Certificate of Good Standing helps you prove that your business exists, and that you are a law-abiding business owner who complies with the rules. It helps enhance your trustworthiness and credibility with potential partners, investors and lenders. Obtaining a Certificate
          of Good Standing is a simple but sometimes necessary step in maintaining your business’s good reputation and branching out your business operations into new areas.
        </p>
        <h3 className="pt48">How do I get a Certificate of Good Standing?</h3>
        <p>
          After you form your LLC or corporation, it’s important to stay up-to-date on filing your annual report, biennial report, or other required forms and compliance paperwork. To stay in good standing, your business needs to meet a few key requirements, depending on your company’s home state.
          These typically include:
        </p>
        <Colorbox className="orangebox" color={color.orange3} dotsColor={color.orange1}>
          <h4>When is an Annual Report Not an Annual Report?</h4>
          <ul>
            <li>Being up-to-date on annual or biennial fees to the secretary of state to register or renew your business</li>
            <li>Filing annual or biennial reports</li>
            <li>Paying any other necessary business fees or franchise taxes to state regulators</li>
          </ul>
        </Colorbox>
        <p>To get a Certificate of Good Standing, you’ll need to file the appropriate form with your state, or you can have Incfile file for you.</p>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <Help className="help" headlineWidth="450" object={CertificateCard}>
            <h2>Help to Obtain a Certificate of Good Standing</h2>
            <h4>Save your time. We'll handle the paperwork.</h4>
            <p>
            If you would like to use our services to facilitate the filing of your annual report please place the order and a representative from IncFile will contact you to obtain specific information required to complete and file the annual report in your state of formation.
            </p>
            <ArrowLink>
              We can handle the paperwork
            </ArrowLink>
          </Help>
          <TextCenterLayout headline="Common questions about filing a Certificate of Good Standing" headlineWidth="700" />
          <Accordion faq={faq} />
        </div>
      </Container>
    </RequirementsByState>
    <Benefits />
    <Articles />
  </Layout>
);

export default CertificateOfGoodStanding;
