import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Colorbox from "../components/color-box";
import TextCenterLayout from "../components/partials/blocks/text-center";
import styled from "styled-components";
import Top from "../components/partials/sections/top";
import ImageContent from "../components/partials/blocks/left-image-right-content";
import Articles from "../components/partials/sections/articles";
import { color, gradient } from "../components/styles/colors";
import { shadow } from "../components/styles/shadows";
import Container from "../components/container";
import IDCardSVG from "../images/icons/idcard.inline.svg";
import Help from "../components/partials/blocks/left-content-right-object"
import Accordion from "../components/accordion"
import Benefits from "../components/partials/sections/benefits";
import Card from "../components/certificate-card";
import TopImageBox from "../components/top-image-box";
import ArrowCircleOrangeSVG from "../images/icons/arrow-circle-orange.inline.svg";
import Image from "../components/image_nobase64";
import CheckBlueSVG from "../images/circle-status-check-blue.inline.svg"

import ArrowLink from "../components/arrow-link";

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

  .purplebox {
    margin-bottom: 48px;
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

  .numericlist {
    display: grid;
    grid-template-columns: 270px 270px;
    grid-gap: 30px;
    list-style: none;
    margin-top: 24px;

    li {
      position: relative;
      padding-left: 52px;
      font-family: Avenir, sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey2};

      svg {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

const Buttonsbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 72px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .box {
    width: 100%;
    box-shadow: ${shadow.white1};
    padding: 40px 48px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
      width: 120px;
      margin: 0 auto 60px;

      .gatsby-image-wrapper {
        height: 100%;
        width: 100%;

        img {
          object-fit: contain !important;
        }
      }
    }

    h4 {
        padding-bottom: 16px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey1};
    }
  }

  .circle {
    align-self: center;
    height: 30px;
    width: 100%;
    max-width: 30px;
    position: relative;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      width: 96px;
      background-color: ${color.white};
      box-shadow: inset ${shadow.white1};
      box-shadow: inset 0 0 32px 0 rgba(236, 236, 236, 0.4);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);

      @media (min-width: 768px) {
        transform: translate(-50%, -50%) rotate(0);
      }
    }
  }
`;

const dropdownOneOptions = [
  'LCC', 'Corporation', 'Nonprofit'
];

const FAQ = styled.div`
    padding-top: 75px;

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const faqs = {
    items: [
        {
        question: "How broad is my trademark protection?",
        answer:
            "In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae.",
        },
        {
        question: "Can I cancel my order?",
        answer: "The trademark will be filed within 3 business days upon receiving the desired trademark and performing a search. If it's determined after the search that the name has a low likelihood for approval, you can request a refund before the application is filed.",
        },
        {
        question: "How long will it take for my trademark to be filed?",
        answer:
            "Trademark approval times can vary based on demand but generally fall in the window of 3-4 months. Despite the delayed approval time, you will be able to monitor the status of the trademark online as it's going through the approval process.",
        },
        {
        question: "What level of support can I expect through this process?",
        answer: "Once you have submitted your business name or logo, an attorney will conduct the initial search and discuss the results via email or phone. The attorney will then prepare the filing application and submit to the United States Patent and Trademark Office. You will be able to track the approval status and contact us with any questions you may have while awaiting for the approval.",
        },
    ],
};

const CTA = styled.div`
    padding-top: 75px;
`;


const CertificateCard = <Card headline="TAX ID / EIN" price="70" image="table" />;

const ChangeOfRegisteredAgent = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-tax-number" imageAlt="Mrs Bulb with numbers">
      <h1>Federal Employer Identification Number (EIN) / Tax ID Number</h1>
      <p>Understanding What, Where, When & Hows of Your Business EIN</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Order now
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="envelope" paddingTop="60">
        <p>
            The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. 
            It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company. 
            IncFile will obtain your federal EIN electronically and have it back to you via email within one business day.
        </p>
        <Colorbox className="purplebox" theme="icon" Icon={IDCardSVG} color={color.orange3} curve curveColor={color.blue1}>
          <h4>What is an Employer Identification Number (EIN)?</h4>
          <p>
            Also known as a “Tax ID number,” the EIN is a business federal tax ID that works like a Social Security Number for your business. Your EIN helps you file tax returns for your business, is typically required to 
            open a business bank account under the name of your business, helps you properly pay and account for wages and payroll for your company’s employees, and otherwise helps establish credit for your business and maintain 
            your business’s official standing as a legal business entity.
          </p>
        </Colorbox>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <Help className="help" headlineWidth="450" object={CertificateCard}>
            <h2>Help Obtain a EIN / Tax ID Number</h2>
            <h4>Save your time. We'll handle the paperwork.</h4>
            <p>
                If you would like to use our services to facilitate the filing of your Tax ID / EIN please place the order and a representative from 
                IncFile will contact you to obtain specific information required to complete and file the Tax ID / EIN in your state of formation.
            </p>
          </Help>
        </div>
      </Container>
    </RequirementsByState>  
    <FAQ>
        <Container>
            <div className="wrapper">
                <TextCenterLayout headline="Common questions about filing a Certificate of Good Standing" />
                <Accordion faq={faqs}/>
            </div>
        </Container>
    </FAQ>
    <Benefits />
    <Articles />
  </Layout>
);

export default ChangeOfRegisteredAgent;
