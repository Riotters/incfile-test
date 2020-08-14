import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import Top from "../../atomic/partials/top";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import ArrowLink from "../../components/arrow-link";
import { color } from "../../components/styles/colors";
import { shadow } from "../../components/styles/shadows";
import CircleIcon from "../../components/icons/circle";
import Container from "../../components/container";
import { states } from "../../components/states";
import Image from "../../components/image_nobase64";
import LeftImageRightContent from "../../components/partials/blocks/left-content-right-image";

import BusinessLicenseSVG from "../../images/icons/business-license.inline.svg";
import ArrowSVG from "../../images/arrow-circle.inline.svg";
import CurveSVG from "../../images/orange-curve.inline.svg";
import LicenseSVG from "../../images/icons/license.inline.svg";
import PermitSVG from "../../images/icons/permit.inline.svg";
import TaxRegistrationSVG from "../../images/icons/tax-registration.inline.svg";
import ApplicationFormSVG from "../../images/icons/application-form.inline.svg";
import ArrowCircleOrangeSVG from "../../images/icons/arrow-circle-orange.inline.svg";

//Sections
import About from "../../atomic/sections/manage-your-company/business-license/about";
//Texts
import { top, about } from "../../static/manage-your-company/business-license";

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
      padding-top: 72px;
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

  .get-license-btn {
    font-size: 8px;

    @media (min-width: 425px) {
      font-size: 12px;
    }

    @media (min-width: 576px) {
      font-size: 16px;
    }
  }

  .bluebox,
  .orangebox {
    margin-bottom: 48px;
  }

  .bluebox {
    margin-top: 48px;
  }

  .numericlist {
    list-style: none;

    li {
      position: relative;
      padding: 28px 8px 28px 80px;
      background-color: ${color.white};
      box-shadow: ${shadow.white1};
      font-family: Avenir, sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: ${color.balck};

      &:first-child {
        margin-top: 8px;
      }

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      .circleicon {
        position: absolute;
        top: 28px;
        left: 24px;
      }

      a {
        margin-top: 24px;
      }
    }
  }
`;

const RequirementsByState = styled.section`
  background-color: ${color.blue3};
  padding-top: 148px;
  padding-bottom: 120px;
`;

const States = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  position: relative;
  margin-top: 50px;
  padding: 30px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  & > svg {
    position: absolute;
    top: 5px;
    left: 1px;

    path {
      fill: ${color.blue1};
    }
  }
`;

const ArrowButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 670px;
  padding: 24px 24px 24px 40px;
  border-radius: 5px;
  background-color: ${color.white};
  box-shadow: ${shadow.white1};
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: 900;
  color: ${color.grey1};
  text-decoration: none;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const WhatYouGet = styled.section`
  padding-top: 88px;

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    margin-bottom: 48px;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }

    .box {
      background-color: ${color.green3};
      position: relative;
      padding: 35px 35px 35px 88px;
      border-radius: 5px 5px 5px 5px;

      @media (min-width: 769px) {
        &:nth-child(1) {
          border-radius: 20px 5px 5px 5px;
        }

        &:nth-child(2) {
          border-radius: 5px 20px 5px 5px;
        }

        &:nth-child(3) {
          border-radius: 5px 5px 5px 20px;
        }

        &:nth-child(4) {
          border-radius: 5px 5px 20px 5px;
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
  }
`;

const ResearchPackage = styled.section`
  @media (min-width: 769px) {
    padding: 72px;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

    p {
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey1};
    }
  }

  .circle {
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

const OrderNow = styled.section`
  background-color: ${color.orange3};
  position: relative;
  padding: 64px 0;
`;

const BusinessLicence = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-license" imageAlt="Mr Bulb with business license" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <BusinessOwnerResponsibilities>
      <ImageContent image="registered-agents" paddingTop="60">
        <h3>Business Owner Responsibilities</h3>
        <p>
          As a business owner, you are responsible for making sure your business has the proper federal, state and local licenses and permits to operate legally. A business license ensures you are legitimately doing business in a particular locale. Every new business must apply for a business
          license. But, don't be fooled, your corporation or LLC may need more than one license, or permit, to fully operate at the state level.
        </p>
        <p className="pb40">At Incfile we take the guesswork out of how to obtain a business license and the necessary permits. Not only do we inform you of the necessities, we offer to do the paperwork for you.</p>
        <Button className="get-license-btn" href="#" theme="primary56" margin="0 auto 0" marginMD="0 auto 0 0" arrow>
          Get the Business License Research package
        </Button>
        <Colorbox className="bluebox" theme="icon" Icon={BusinessLicenseSVG} color={color.babyblue3} curve curveColor={color.babyblue1}>
          <h4>What is a Business License?</h4>
          <p>A business license authorizes a company to "do business" in a certain geographical jurisdiction. It is a certificate that authenticates your company is properly registered with the particular county or city in which your office(s) are located.</p>
        </Colorbox>
        <p className="pb32">The cost and policies governing an LLC do vary from state to state. Check out our LLC State Information resource for additional info on your state.</p>
        <ArrowLink>Incfile's Business License Search Tool</ArrowLink>
        <h3 className="pt48">What Licenses Does My Business Need?</h3>
        <p>There are two categories of business licenses, namely federal and state. This is just the first step in operating legally in both your jurisdiction and in the country.</p>
        <p>The federal government often requires a license to be obtained when you have a very specialized industry or one with a high level of liability. Some examples include serving alcohol, running a fishery, opening a gun shop, or transporting live animals across state lines.</p>
        <p>
          The state government always requires a license to operate within your particular locale and rules can differ based on whether your LLC or corporation is inside city limits or not. For example, you'll need to research whether you can have particular types of home businesses, especially when
          living in the city or a multi-family dwelling.
        </p>
        <h3>What Licenses Does My Business Need?</h3>
        <p>There are two categories of business licenses, namely federal and state. This is just the first step in operating legally in both your jurisdiction and in the country.</p>
        <Colorbox className="orangebox" color={color.orange3} dotsColor={color.orange1}>
          <h4>You might need a permit if...</h4>
          <ul>
            <li>Your LLC or corporation plans to serve alcohol or food</li>
            <li>You will need to build or add a structure to your company's building.</li>
            <li>Your business is going to construct a building or structure on new land.</li>
            <li>Your LLC plans to put up an exterior sign.</li>
            <li>You want to designate street parking for your business.</li>
            <li>Your industry is governed by a state association.</li>
          </ul>
        </Colorbox>
        <p>This is not an exhaustive list by any means, therefore, working with Incfile to identify every situation is a key factor in starting your business off right.</p>
        <Buttonsbox>
          <Button to="#" theme="primary56" arrow margin="0 auto 16px" marginMD="0 16px 0 0">
            Have Incfile research for you
          </Button>
          <Button to="#" theme="secondary56" arrow margin="0 auto 0" marginMD="0">
            Do the research yourself
          </Button>
        </Buttonsbox>
        <h3 className="pt48">How Do I Apply For A Business License?</h3>
        <ul className="numericlist">
          <li>
            <CircleIcon className="circleicon" circleColor={color.blue1} iconColor={color.white}>
              1
            </CircleIcon>
            You'll need to get a license for a small fee to operate a business at the address of location.
          </li>
          <li>
            <CircleIcon className="circleicon" circleColor={color.blue1} iconColor={color.white}>
              2
            </CircleIcon>
            Next, your company will need an Assumed Name under which to register, or you can incorporate your business and use your formal name.
          </li>
          <li>
            <CircleIcon className="circleicon" circleColor={color.blue1} iconColor={color.white}>
              3
            </CircleIcon>
            Then, if you operate from home or plan to remodel a space, for example, you'll need to obtain permits to do so. Other permits covering serving alcohol, displaying a sign on the building exterior and even parking for your business might also be a requirement. A great place to research
            your local zoning and operating laws is the nearest Small Business Development Center (SBDC).
            <ArrowLink>Nearest Small Business Development Center (SBDC).</ArrowLink>
          </li>
          <li>
            <CircleIcon className="circleicon" circleColor={color.blue1} iconColor={color.white}>
              4
            </CircleIcon>
            Finally, a business must register with the state tax office and submit appropriate taxes on the schedule indicated by your secretary of state.
          </li>
        </ul>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
      <Container>
        <TextCenterLayout
          headline="Business License and Permit Requirements by State"
          text="Every state has different licensing needs based on the type of business you've incorporated, where it's located and the government rules in that state. 
                We will research your business license needs for you with our Business License Research Package, but you can also do initial research yourself with the following resources:"
          headlineWidth="700"
          linkText="Business License Research Package"
          linkUrl="#"
        />
        <States>
          <CurveSVG />
          {states.state.map((state) => (
            <ArrowButton to={state.url}>
              {state.name}
              <CircleIcon transform="rotate(90deg)" circleColor={color.orange3} iconColor={color.orange1}>
                <ArrowSVG />
              </CircleIcon>
            </ArrowButton>
          ))}
        </States>
      </Container>
    </RequirementsByState>
    <WhatYouGet>
      <Container>
        <TextCenterLayout headline="What comes with the Business License Research Package?" headlineWidth="770" />
        <ImageContent image="registered-agents-2" paddingTop="60">
          <p>To make it easier, our trusted licensing partner will provide you with a comprehensive package of all the licenses, permits and tax registrations required for your business as well as the application forms to file with the appropriate licensing authorities.</p>
          <h3>What you'll get</h3>
          <div className="grid">
            <div className="box">
              <LicenseSVG />
              <h4>Licenses</h4>
            </div>
            <div className="box">
              <PermitSVG />
              <h4>Permits</h4>
            </div>
            <div className="box">
              <TaxRegistrationSVG />
              <h4>Tax Registrations</h4>
            </div>
            <div className="box">
              <ApplicationFormSVG />
              <h4>Application Forms</h4>
            </div>
          </div>
          <p>Your customized Business License Research Package will be emailed to you within 5 business days of your company being filed by the state. Remember that operating your business without the required licenses can expose you to risks and fines from state and local governments.</p>
        </ImageContent>
      </Container>
    </WhatYouGet>
    <ResearchPackage>
      <Container>
        <TextCenterLayout headline="As part of the Business License Research Package, a licensing expert will..." headlineWidth="890" />
        <Boxes>
          <div className="box">
            <div className="icon">
              <Image filename="determine-all-business-licenses" />
            </div>
            <p>Determine all business licenses and permits required at the federal, state, county and municipal level.</p>
          </div>
          <div className="circle">
            <span>
              <ArrowCircleOrangeSVG />
            </span>
          </div>
          <div className="box">
            <div className="icon">
              <Image filename="select-a-package" />
            </div>
            <p>Provide you with the proper license/permit applications.</p>
          </div>
          <div className="circle">
            <span>
              <ArrowCircleOrangeSVG />
            </span>
          </div>
          <div className="box">
            <div className="icon">
              <Image filename="what-you-need" />
            </div>
            <p>List filing instructions, supporting document requirements, and fees.</p>
          </div>
        </Boxes>
      </Container>
    </ResearchPackage>
    <OrderNow>
      <Container>
        <LeftImageRightContent image="registered-agents-3" imageWidth="515" textWidth="570">
          <h2>Incfile's Business License Research Package</h2>
          <p>With Incfile's Business License Research Package, you'll have everything you need to apply for your licenses and meet the requirements for your business.</p>
          <Buttonsbox>
            <Button theme="primary56" marginMD="0 24px 0 0" arrow>
              Order Now
            </Button>
          </Buttonsbox>
        </LeftImageRightContent>
      </Container>
    </OrderNow>
    <Articles />
  </Layout>
);

export default BusinessLicence;
