import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import styled from "styled-components";
import Top from "../../atomic/partials/top";
import ContentCenter from "../../atomic/partials/content-center";
import ImageContent from "../../atomic/partials/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import { color, gradient } from "../../components/styles/colors";
import { shadow } from "../../components/styles/shadows";
import Container from "../../components/container";
import GlobeSVG from "../../images/icons/globe.inline.svg";
import Help from "../../atomic/partials/left-object-right-content";
import Accordion from "../../components/accordion";
import Benefits from "../../components/partials/sections/benefits";
import Card from "../../components/certificate-card";
import CheckBlueSVG from "../../images/circle-status-check-blue.inline.svg";
import { states } from "../../components/states"
import { top } from "../../static/manage-your-company/foreign-qualification"
import ArrowLink from "../../components/arrow-link";

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

    &.pb32 {
      padding-bottom: 32px;
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

    &.pb48 {
      padding-bottom: 48px;
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

    ul {
      display: grid;
      grid-template-columns: 270px 270px;
      grid-gap: 30px;
      list-style: none;
      margin: 24px 0;
  
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

const Basics = styled.div`
  padding: 75px 0;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
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

const dropdownOneOptions = [
    'LCC', 'Corporation', 'Nonprofit'
];
  
const dropdownTwoOptions = states.state.map(state => (state.name))

const CertificateCard = <Card className="card" headline="Dissolution" price="199" dropdownOnePlaceholder="Select Entity Type" dropdownOneOptions={dropdownOneOptions} dropdownTwoPlaceholder="Select State" dropdownTwoOptions={dropdownTwoOptions} />;

const ForeignQualification = () => (
  <Layout>
    <SEO title="Foreign Qualification" description="Filling a Foreign Qualification to do Business Out of State." />
    <Top imageName="mrs-bulb-foreign-qualification" imageAlt="Mrs Bulb choosing a destination of his next business on a map of USA" headlineWidth="515" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="fqualification" paddingTop="60">
        <h3>Your business is expanding beyond your local region.</h3>
        <p>
          Or perhaps you are an Internet business with fulfillment centers in multiple locations. This may mean you are doing business in a “foreign” state. 
          What do you do? We have the answers to all your questions regarding what constitutes doing business in another state and how to get the proper paperwork done to be legitimate.
        </p>
        <Colorbox className="colorbox" theme="icon" Icon={GlobeSVG} color={color.babyblue3} curve curveColor={color.blue1}>
          <h4>Enterpreneur 360 (2019)</h4>
          <p>
            Many confuse foreign qualification with the idea of operating outside the United States. This really has to do with how you perform within the borders of the United States. 
            “Foreign,” in this case, refers to the fact that each state has operating rules that are different from one another; and, in turn, must insist on proper registration to do business in that locale.
          </p>
        </Colorbox>
        <p className="pb48">
          Therefore, it is important that when your company is located in or operates within a state other than the place of original incorporation, 
          you are given the proper rights to conduct business there. This actually means you need to obtain a Certificate of Authority.
        </p>
        <h3 className="pb32">We can take care of the details.</h3>
        <ArrowLink>Let Incfile help you file your Foreign Qualification today!</ArrowLink>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <Basics>
        <TextCenterLayout headline="Foreign Qualification Basics" />
        <ContentCenter>
          <Accordion faq={faqs} />
        </ContentCenter>
    </Basics>
    <RequirementsByState>
      <Help className="help" headlineWidth="450" object={CertificateCard}>
        <h2>Help file my Foreign Qualification</h2>
        <h4>Save your time. We'll handle the paperwork.</h4>
        <p>Typical criteria include but are not limited to:</p>
        <ul className="numericlist">
          <li><CheckBlueSVG />Does the company has a physical presence in the state?</li>
          <li><CheckBlueSVG />Does the entity have employees working within the state?</li>
          <li><CheckBlueSVG />Does the company conduct banking within state?</li>
        </ul>
        <p>Requirements to obtain or a Foreign Qualification / Certificate of Authority:</p>
        <ul className="numericlist">
          <li><CheckBlueSVG />Must file appropriate state document and pay the corresponding state fee.</li>
          <li><CheckBlueSVG />Must obtain a Certificate of Good Standing from state of origin to verify status of business formation.</li>
        </ul>
      </Help>
    </RequirementsByState>
    <Benefits />
    <FAQ>
      <Container>
        <div className="wrapper">
          <TextCenterLayout headline="Providing everything you need when you need it" text="As your business grows we’ll be there every step of the way to make sure that you have the resources at hand to serve your companies ongoing needs." />
          <Accordion faq={faqs} />
        </div>
      </Container>
    </FAQ>
    <Articles />
  </Layout>
);

export default ForeignQualification;