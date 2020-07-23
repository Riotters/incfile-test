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

const dropdownOneOptions = ["LCC", "Corporation", "Nonprofit"];

const FAQ = styled.div`
  padding-top: 75px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const h3Texts = {
  items: [
    {
      text: "The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company. IncFile will obtain your federal EIN electronically and have it back to you via email within one business day."
    },
    {
      header: "Do You Need a Federal EIN for Your Business Entity?",
      text: "In general, unless your business is a sole proprietorship with no employees and no separate legal entity for your business, you need to get an EIN. Sometimes if you own an LLC and it is a single-member LLC with simple accounting, you can get by just using your personal Social Security Number for tax purposes and for receiving payments from clients. But even the simplest businesses can generally benefit from using an EIN – the EIN serves as a tax ID for your LLC or other corporate entity."
    },
    {
      header: "Where & When You'll Use an EIN",
      text: `Your EIN is necessary for several situations in running your business. 
      You will need to use your EIN for certain tax forms, such as filing your tax returns for your business, 
      and filling out W9 forms for clients (if you run a service business), and other forms related to managing payroll for your employees. 
      Your EIN is also necessary to set up a business bank account and apply for business loans. 
      The same types of reasons for needing a Social Security Number in your personal life are also the reasons to use an EIN in managing your business.`
    },
    {
      header: "How Do You Get an EIN? Apply for an EIN Online",
      text: `Business owners can get an EIN by filing IRS Form SS-4. IncFile offers a convenient service to help you apply for an EIN online to obtain your EIN number quickly and efficiently. 
      If you're looking for a way to get an EIN, whether in Texas, Florida, Michigan or anywhere in the United States, IncFile can provide one for you in one day. Apply for an EIN online with IncFile, 
      and we'll obtain your federal tax ID electronically and have your new EIN back to you via email within one business day.`
    },
  ]
}

const h4ColorTexts = {
  items: [
    {
      header: "What is an Employer Identification Number (EIN)?",
      text: "Also known as a “Tax ID number,” the EIN is a business federal tax ID that works like a Social Security Number for your business. Your EIN helps you file tax returns for your business, is typically required to open a business bank account under the name of your business, helps you properly pay and account for wages and payroll for your company’s employees, and otherwise helps establish credit for your business and maintain your business’s official standing as a legal business entity."
    },
    {
      header: "What is an Employer Identification Number (EIN)?",
      list: [
        "Partnerships: an EIN is required for all general partnerships and limited partnerships.",
        "Multiple-member LLCs: This type of business entity needs an EIN regardless of whether you have employees.",
        "Single-member LLCs: If you plan to hire employees within the next 12 months, you will need to get an EIN. And even if your single-member LLC has no employees, and even if you can get by with using your own individual Social Security Number for tax purposes, it’s still a good idea to get an EIN because many banks and lenders will prefer to use an EIN to do business with you.",
        "LLC taxed as a Corporation: If your LLC chooses to be taxed as a Corporation (for example, by electing to be treated as an S-Corporation for tax purposes), you will need to get an EIN.",
        "Sole proprietorship with employees: Even if you do not have an LLC or any other legal entity for your business and you run a simple sole proprietorship, you still need to get an EIN if you have employees or plan to hire employees in the next 12 months.",
      ],
    }
  ]
}

const faqs = {
  items: [
    {
      question: "Will I need an EIN in order to obtain a business account with a bank?",
      answer: "Yes, under most circumstances business entities other than DBA's must present an EIN along with the filed Articles of Organization or Incorporation in order for an account to be opened."    
    },
    {
      question: "What circumstances require me to change my EIN?",
      answer: "If you already have an EIN, and the organization or ownership of your business changes, you may need to apply for a new number. Some of the circumstances under which a new number is required are as follows:",
    },
    {
      question: "When will I receive my Federal Employer Identification Number?",
      answer: "If it is a stand alone order for an existing entity we can obtain and email the EIN within 1 business day.",
      list: [
          "An existing business is purchased or inherited by an individual who will operate it as a sole proprietorship.",
          "A sole proprietorship changes to an LLC, corporation, or partnership.",
          "A partnership changes to an LLC, corporation, or sole proprietorship.",
          "A corporation changes to an LLC, partnership, or sole proprietorship.",
          "An LLC changes to a corporation, partnership, or sole proprietorship.",
          "An individual owner dies, and the estate takes over the business.",
        ],
    },
    {
      question: "What is the SS4/EIN/Tax ID Number?",
      answer:
        "The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company.",
    },
  ],
};

const CertificateCard = <Card headline="TAX ID / EIN" price="70" image="clock" />;

const TaxIdEin = () => (
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

export default TaxIdEin;
