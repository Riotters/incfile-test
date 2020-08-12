import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { color, gradient } from "../../components/styles/colors";
import { shadow } from "../../components/styles/shadows";
import Top from "../../atomic/partials/top";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../components/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import styled from "styled-components";
import ImageContent from "../../atomic/partials/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import Container from "../../components/container";
import IDCardSVG from "../../images/icons/idcard.inline.svg";
import ContentObject from "../../atomic/partials/left-content-right-object";
import Accordion from "../../components/accordion";
import Benefits from "../../components/partials/sections/benefits";
import CircleIcon from "../../components/icons/circle";
import ArrowLink from "../../atomic/molecules/buttons/text";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Heading } from "../../atomic/atoms/typography/heading";
import About from "../../atomic/sections/manage-your-company/dissolution/about";
import Requirements from "../../atomic/sections/manage-your-company/dissolution/requirements";
import Faq from "../../atomic/sections/manage-your-company/dissolution/faq";
import { top, about, requirements, faq } from "../../static/manage-your-company/dissolution";

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

const Dissolution = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-dissolution" imageAlt="Mrs Bulb holding a closed sign" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Order now
        </Button>
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Requirements content={requirements} />
    <Faq content={faq} />
    <Benefits />
    <Articles />
  </Layout>
);

export default Dissolution;
