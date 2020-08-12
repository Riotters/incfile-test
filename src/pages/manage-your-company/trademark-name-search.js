import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../components/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import styled from "styled-components";
import Top from "../../atomic/partials/top";
import ImageContent from "../../atomic/partials/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import { color, gradient } from "../../components/styles/colors";
import { shadow } from "../../components/styles/shadows";
import Container from "../../components/container";
import ShieldSVG from "../../images/icons/shield.inline.svg";
import Help from "../../components/partials/blocks/left-content-right-object";
import Accordion from "../../components/accordion";
import Benefits from "../../components/partials/sections/benefits";
import Card from "../../components/certificate-card";
import ArrowCircleOrangeSVG from "../../images/icons/arrow-circle-orange.inline.svg";
import Image from "../../components/image_nobase64";
import CheckBlueSVG from "../../images/circle-status-check-blue.inline.svg";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

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

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 72px;

  @media (min-width: 769px) {
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
      height: 140px;
      width: 140px;
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

      @media (min-width: 769px) {
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
      answer: "Trademark approval times can vary based on demand but generally fall in the window of 3-4 months. Despite the delayed approval time, you will be able to monitor the status of the trademark online as it's going through the approval process.",
    },
    {
      question: "What level of support can I expect through this process?",
      answer:
        "Once you have submitted your business name or logo, an attorney will conduct the initial search and discuss the results via email or phone. The attorney will then prepare the filing application and submit to the United States Patent and Trademark Office. You will be able to track the approval status and contact us with any questions you may have while awaiting for the approval.",
    },
  ],
};

const CTA = styled.div`
  padding-top: 75px;
`;

const CertificateCard = <Card headline="Register a Trademark" price="199" />;

const TrademarkNameSearch = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-trademark" imageAlt="Mr Bulb holding a certificate and tossing an orginal and a trademark sign">
      <h1>Register a Trademark</h1>
      <p>Only $199 + Federal fee</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Get started
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="shieldo" paddingTop="60" imageAlt="a shield icon with a TM sign ">
        <Heading size="3" bottomMargin="24">Protect your business name with a trademark</Heading>
        <Paragraph big bottomMargin="24">
          Protecting your trademark can really pay dividends. Not only is it a valuable property asset, but it’s also your brand, your reputation. The reputation you have established is associated with these different brand elements - your name, logo, and tagline - and the reason why people buy from
          you.
        </Paragraph>
        <Colorbox className="purplebox" theme="icon" Icon={ShieldSVG} color={color.orange3} curve curveColor={color.yellow1}>
          <h4>Enterpreneur 360 (2019)</h4>
          <p>It’s important to take steps to protect these company assets. Our partnered attorneys will do the research to make sure the mark isn't already taken, ensure the filing gets accepted by the government office, and provide sound legal advice throughout the entire process.</p>
        </Colorbox>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <Help className="help" headlineWidth="450" object={CertificateCard}>
            <h2>Help with trademark registration</h2>
            <h4>What’s included in the package?</h4>
            <ul className="numericlist">
              <li>
                <CheckBlueSVG />A registered trademark with the USPTO
              </li>
              <li>
                <CheckBlueSVG />A thorough search of existing trademarks
              </li>
              <li>
                <CheckBlueSVG />
                Legal counsel from an experienced trademark attorney
              </li>
              <li>
                <CheckBlueSVG />
                Handling all correspondence with the USPTO until the name is approved.
              </li>
            </ul>
          </Help>
          <TextCenterLayout headline="Trademark Searches & Registration: How it works?" headlineWidth="770" />
          <Boxes>
            <div className="box">
              <div className="icon">
                <Image filename="needs" imageAlt="an comic speech bubble icon" />
              </div>
              <h4>Tell us what you need</h4>
              <p>Tell us what you need. A trademark attorney will follow up with you to get a better understanding of your needs and provide guidance on how the process works.</p>
            </div>
            <div className="circle">
              <span>
                <ArrowCircleOrangeSVG />
              </span>
            </div>
            <div className="box">
              <div className="icon">
                <Image filename="trademark" imageAlt="a papersheet with a trademark icon" />
              </div>
              <h4>We will file your trademark wih the Patent and Trademark office</h4>
              <p>The attorney will file the trademark with the US Patent and Trademark office and deliver the approved trademark documentation.</p>
            </div>
            <div className="circle">
              <span>
                <ArrowCircleOrangeSVG />
              </span>
            </div>
            <div className="box">
              <div className="icon">
                <Image filename="work" imageAlt="a papersheet icon with a magnifire" />
              </div>
              <h4>We get to work</h4>
              <p>The trademark attorney will conduct a trademark search to ensure the availability, then provide the search results along with a plan of action.</p>
            </div>
          </Boxes>
        </div>
      </Container>
    </RequirementsByState>
    <Benefits />
    <FAQ>
      <Container>
        <div className="wrapper">
          <TextCenterLayout headline="Common questions about Registering a Trademark" />
          <Accordion faq={faqs} />
        </div>
      </Container>
    </FAQ>
    <CTA>
      <Container>
        <TextCenterLayout headline="Protect your name, logo, or phrase with a U.S trademark registration." headlineWidth="770" linkText="Order now" linkUrl="#" />
      </Container>
    </CTA>
    <Articles />
  </Layout>
);

export default TrademarkNameSearch;
