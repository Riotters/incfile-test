import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import VariantsCards from "../../../organisms/cards/variants-cards.js";
import { packagePrice } from "../../../../helpers/global-variables";
import { shortState } from "../../../../helpers/utils";
import PropTypes from "prop-types";

const Variants = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  position: relative;
`;

const VariantsSection = ({ data, entityType }) => {
  let stateFee = data?.prices ? data.prices.statefee : 0;
  let entityState = data?.prices ? data.prices.state : "";
  const headerSection = {
    header: `See how easy it can be to get your business incorporated`,
    link: {
      text: ``,
      url: ``,
    },
  };
  const cards = [
    {
      variant: ``,
      header: `Silver`,
      text: ``,
      price: `${packagePrice.silver + stateFee}`,
      button: {
        text: `Get the Silver package`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=${entityType}&entityState=${shortState(entityState)}`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `${packagePrice.silver}`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `${stateFee}`,
        },
      ],
      include: `The sliver services includes:`,
      list: [`Prepare & Filing the Articles of Organization`, `Unlimited Name Searches`, `FREE Registered Agent for a year!`],
    },
    {
      variant: `Most popular`,
      header: `Gold`,
      text: `Everything from sliver+`,
      price: `${packagePrice.gold + stateFee}`,
      button: {
        text: `Get the Gold package`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=${entityType}&entityState=${shortState(entityState)}`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `${packagePrice.gold}`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `${stateFee}`,
        },
      ],
      include: `The sliver package, and:`,
      list: [`EIN Business Tax Number`, `IRS Form 2553`, `Operating Agreement`, `Banking Resolution`, `Lifetime Company Alerts`, `Online Access Dashboard`, `Unlimited Phone & Email Support`, `Business Banking Account`, `Business Tax Consultation`],
    },
    {
      variant: `Best value`,
      header: `Platinum`,
      text: `Everything from sliver & gold+`,
      price: `${packagePrice.platinum + stateFee}`,
      button: {
        text: `Get the Platinum package`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=${entityType}&entityState=${shortState(entityState)}`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `${packagePrice.platinum}`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `${stateFee}`,
        },
      ],
      include: `The gold package, and:`,
      list: [`Business Contract Templates`, `Expedited Filing`, `Domain Name + Business Email`],
    },
  ];

  return (
    <Variants>
      <HeadingCenter headline={headerSection.header} headlineWidth="640" linkText={headerSection.link.text} linkUrl={headerSection.link.url} />
      <ContentCenter>
        <VariantsCards content={cards} />
      </ContentCenter>
    </Variants>
  );
};

export default VariantsSection;

VariantsSection.propTypes = {
    entityType: PropTypes.string
}

VariantsSection.defaultProps = {
    entityType: 'LLC'
}
