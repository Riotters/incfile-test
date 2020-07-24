import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../atomic/molecules/buttons/button";
import TextCenterLayout from "../components/partials/blocks/heading-center";
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
import H3Text from "../atomic/molecules/text-blocks/header-3-text";
import H4Color from "../atomic/molecules/text-blocks/header-4-text-color";
import ArrowLink from "../components/arrow-link";
import { h3Texts, h4ColorTexts, faqs } from "../static/llc-s-corp-election"

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
  }
`;

const CertificateCard = <Card headline="TAX ID / EIN" price="70" image="clock" />;

const CorpElection = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-taxes" imageAlt="Mrs Bulb checking forms on notebook">
      <h1>Prepare and File an S Corporation Tax Election with Form 2553</h1>
      <p>Reduce the Tax You Pay by Having Your LLC Treated as an S Corp for Tax Purposes</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" arrow>
          File your S Corp tax election
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="envelope" paddingTop="60">
        <H3Text content={h3Texts.items[0]} />
        <H4Color className="colorbox" icon={IDCardSVG} color={color.orange3} curve curveColor={color.blue1} content={h4ColorTexts.items[0]} />
        <H3Text content={h3Texts.items[1]} />
        <H4Color className="colorbox" color={color.green3} dotsColor={color.green1} content={h4ColorTexts.items[1]} />
        <H3Text content={h3Texts.items[2]} />        
        <H3Text content={h3Texts.items[3]} />
        <ArrowLink>Apply for an EIN online to obtain your EIN number quickly</ArrowLink>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <Help className="help" headlineWidth="450" object={CertificateCard}>
            <h2>Help Obtain a EIN / Tax ID Number</h2>
            <h4>Save your time. We'll handle the paperwork.</h4>
            <p>If you would like to use our services to facilitate the filing of your Tax ID / EIN please place the order and a representative from IncFile will contact you to obtain specific information required to complete and file the Tax ID / EIN in your state of formation.</p>
          </Help>
        </div>
      </Container>
    </RequirementsByState>
    <FAQ>
      <Container>
        <div className="wrapper">
          <TextCenterLayout headline="Common questions about filing a Certificate of Good Standing" />
          <Accordion faq={faqs} />
        </div>
      </Container>
    </FAQ>
    <Benefits />
    <Articles />
  </Layout>
);

export default CorpElection;
