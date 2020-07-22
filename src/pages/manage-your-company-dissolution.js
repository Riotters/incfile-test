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
import Help from "../components/partials/blocks/left-content-right-object";
import Accordion from "../components/accordion";
import Benefits from "../components/partials/sections/benefits";
import Card from "../components/certificate-card";
import TopImageBox from "../components/top-image-box";
import ArrowCircleOrangeSVG from "../images/icons/arrow-circle-orange.inline.svg";
import Image from "../components/image_nobase64";
import CheckBlueSVG from "../images/circle-status-check-blue.inline.svg";
import { states } from "../components/states"
import CircleIcon from "../components/icons/circle";

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

  .colorbox {
    margin-bottom: 48px;
  }

  a {
    margin-bottom: 72px;
  }

  .numericlist {
    list-style: none;
    margin-bottom: 72px;

    li {
      position: relative;
      padding: 28px 8px 28px 80px;
      background-color: ${color.white};
      box-shadow: ${shadow.white1};

      &:first-child {
        margin-top: 8px;
      }

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      .circleicon {
        position: absolute;
        top: 24px;
        left: 24px;
      }

      h5 {
          margin-bottom: 24px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
          padding: 0;
      }

      a {
        margin-top: 24px;
      }
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

const FAQ = styled.div`
  padding-top: 75px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        &:first-child {
            width: 100%;

            h2 {
                max-width: 100%;
            }
        }
    }
  }
`;

const faqs = {
  items: [
    {
      question: "What are Articles of Distribution exactly?",
      answer: "The articles formalize the cessation of activity as an incorporated entity. They define parameters surrounding the dissolution of a company. This could include the distribution or sale of assets, how shareholders will be compensated and responsibilities divided among management."    
    },
    {
      question: "How much will it cost to file Articles of Dissolution?",
      answer: "The state fee varies by state our service fee to file Articles of Dissolution is $149. To review the fee in your state click on the “order now” button and select the state and entity type.",
    },
    {
      question: "What contingencies would prohibit me from filing a dissolution?",
      answer: "The only stipulation that would prohibit the owners of an entity from filing a dissolution is if the company owes outstanding taxes or has annual reports outstanding. In this event the company would need to bring the itself to good standing with the state before filing the dissolution.",
    },
    {
      question: "How long will it take to have the Articles of Dissolution filed?",
      answer: "The filing time is dependent on the governing state agency and varies by state.",
    },
    {
        question: "What will I receive when the Articles of Dissolution are filed?",
        answer: "The governing state agency will return a copy of the filed articles which are then mailed to the client.",
      },
  ],
};

const CTA = styled.div`
  padding-top: 75px;
`;

const dropdownOneOptions = [
    'LCC', 'Corporation', 'Nonprofit'
];
  
const dropdownTwoOptions = states.state.map(state => (state.name))

const CertificateCard = <Card headline="Dissolution" price="149" dropdownOnePlaceholder="Select Entity Type" dropdownOneOptions={dropdownOneOptions} dropdownTwoPlaceholder="Select State" dropdownTwoOptions={dropdownTwoOptions} />;

const Dissolution = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-dissolution" imageAlt="Mrs Bulb with closed sign">
      <h1>Filing Articles of Dissolution</h1>
      <p>From $199 + Federal Fee</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Order now
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="dissolation" paddingTop="60">
        <p>
          A corporation or LLC can come to a place of dissolution for several reasons. It can simply be a decision you've made for your company because it is no longer successful, 
          you are moving on to a new adventure or your shareholders wish to dissolve its assets. This will, fortunately, stop the necessary tax filings and other requirements that come 
          with having a record of operation on file with the secretary of state. But, the emotional decision to dissolve your company can be tough at times, if you put your heart and sweat into building your own business.
        </p>
        <ArrowLink>Let Incfile do the dissolution paperwork for you</ArrowLink>
        <h3>How to Close an LLC or Corporation</h3>
        <p>
            A company begins with Articles of Incorporation when it is formed, therefore it makes sense that Articles must be filed to dissolve a company that has been in operation. 
            Without filing the proper paperwork, the business owner will continue to be liable for taxes and other state requirements. Fortunately, closing a company is really a matter of paperwork.
        </p>
        <Colorbox className="colorbox" theme="icon" Icon={IDCardSVG} color={color.orange3} curve curveColor={color.blue1}>
          <h4>Closing Your Business</h4>
          <p>
            In order to properly close a corporation or LLC that is no longer transacting business, the company must file Articles of Dissolution with the state of incorporation. 
            Neglecting to file Articles of Dissolution for a company that is no longer active may expose the corporation or LLC to unnecessary recurring fees or taxes.
          </p>
        </Colorbox>
        <p>
            Business dissolution is primarily an act of filing Articles of Dissolution with your secretary of state. 
            However, if a business is not in a sound position with the state to dissolve, other legal matters may complicate the process.
        </p>
        <h3>How to Close an LLC or Corporation</h3>
        <p>
            A company begins with Articles of Incorporation when it is formed, therefore it makes sense that Articles must be filed to dissolve a company that has been in operation. 
            Without filing the proper paperwork, the business owner will continue to be liable for taxes and other state requirements. Fortunately, closing a company is really a matter of paperwork.
        </p>
        <ul className="numericlist">
          <li>
            <CircleIcon className="circleicon" circleColor={color.blue1} iconColor={color.white}>
              1
            </CircleIcon>
            <h5>Hold a meeting with the Board of Directors</h5>
            <p>
                In this case, you want the minutes of your meeting to reflect that a vote was taken and appropriate majority (as outlined in your incorporation papers) was achieved. 
                Those companies with shareholders will want a written documentation of this decision signed by all company owners. Some companies, such as single-member LLCs will not need to complete this step.
            </p>
          </li>
          <li>
            <CircleIcon className="circleicon" circleColor={color.blue1} iconColor={color.white}>
              2
            </CircleIcon>
            <h5>File the Articles of Dissolution</h5>
            <p>
                The paperwork must be completed and signed by the Registered Agent of your company. You will be issued a Certificate of Dissolution that formalizes the termination of business activity in your state. 
                Once dissolution is properly documented, all branches in other states will automatically be dissolved as well. The dissolution of a company must take place in the state where incorporation took place.
            </p>
          </li>
          <li>
            <CircleIcon className="circleicon" circleColor={color.blue1} iconColor={color.white}>
              3
            </CircleIcon>
            <h5>Notify the IRS</h5>
            <p>
                This step is important because it will provide you with a "consent to dissolution" or "tax clearance" that makes the process a smooth one. 
                It will be necessary to pay all federal and state taxes due at this time to receive this consent. This document(s) will be required by the secretary of state to achieve a formal dissolution. 
                While we'll help you file your Articles of Dissolution, you will be responsible for contacting the IRS to receive any tax clearances, etc.
            </p>
          </li>
        </ul>
        <p>
            An additional step often recommended at this point is the closing of all credit lines and accounts that pertain to your business. Letting your creditors know that you have dissolved a company 
            will set you up for more favorable circumstances should debt still be present. Finally, if you have any fictitious names in other states, you'll want to cancel those as well.
        </p>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <Help className="help" headlineWidth="450" object={CertificateCard}>
            <h2>Save your time. We'll handle the paperwork.</h2>
            <h4>Requirements to file Articles of Dissolution:</h4>
            <p>
                The company must be in good standing with the state of incorporation and cannot be in arrears of franchise taxes or annual reporting requirements. 
                In the event that the entity is not in good standing reinstatement would be required in order to proceed with the dissolution.
            </p>
          </Help>
        </div>
      </Container>
    </RequirementsByState>
    <FAQ>
      <Container>
        <div className="wrapper">
          <TextCenterLayout headline="Common questions on filing Dissolution" />
          <Accordion faq={faqs} />
        </div>
      </Container>
    </FAQ>
    <Benefits />
    <Articles />
  </Layout>
);

export default Dissolution;
