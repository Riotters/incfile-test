import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../atomic/molecules/buttons/button";
import TextCenterLayout from "../components/partials/blocks/heading-center";
import styled from "styled-components";
import Top from "../components/partials/sections/top";
import ImageContent from "../components/partials/blocks/left-image-right-content";
import ContentObject from "../atomic/partials/left-content-right-object";
import Articles from "../components/partials/sections/articles";
import { color, gradient } from "../components/styles/colors";
import { shadow } from "../components/styles/shadows";
import Container from "../components/container";
import IDCardSVG from "../images/icons/idcard.inline.svg";
import Accordion from "../components/accordion";
import Benefits from "../components/partials/sections/benefits";
import Card from "../components/certificate-card";
import ArrowLink from "../components/arrow-link";
import H2Text from "../atomic/molecules/text-blocks/h2-text";
import H3Text from "../atomic/molecules/text-blocks/h3-text";
import { top, reducingTax, llcsTax, howSaveMoney, taxCalculator, fairSalary, administrativeOverhead, fileForm, incfileFile, help, faq } from "../static/llc-s-corp-election"
import NumericBoxedList from "../atomic/organisms/lists/numeric-boxed-list";
import CircleCheckmarkText from "../atomic/molecules/static-check/circle-checkmark-text";

const ReducingTax = styled.section`
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
`;

const LLCsTax = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
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

const List = <NumericBoxedList content={llcsTax}/>;
const NoImpact = <CircleCheckmarkText isRed content={llcsTax.red}/>;

const CorpElection = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-taxes" imageAlt="Mrs Bulb checking forms on notebook">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <ReducingTax>
      <ImageContent image="calculator" paddingTop="60">
        <H3Text content={reducingTax} />
        <Button content={reducingTax.button[0]} theme="secondary56" arrow margin="0 auto 0 0" />
      </ImageContent>
    </ReducingTax>
    <LLCsTax>
      <ContentObject contentWidth="400" headlineWidth="450" object={[List, NoImpact]}>
        <H2Text content={llcsTax} />
      </ContentObject>
    </LLCsTax>
    <Benefits />
    <Articles />
  </Layout>
);

export default CorpElection;