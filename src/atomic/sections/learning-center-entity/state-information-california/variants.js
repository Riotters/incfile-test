import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import VariantsCards from "../../../organisms/cards/variants-cards.js";
import { packagePrice } from '../../../../helpers/global-variables'; 

const Variants = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  position: relative;
`;

const VariantsSection = ({ content, data }) => {
    const cards = [
        {
            variant: ``,
            header: `Silver`,
            text: `Our core features for the lowest price`,
            price: `${packagePrice.silver + data.prices?.LLC}`,
            button: {
                text: `Get the Silver package`,
                url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=${data.prices?.state}`,
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
                    price: `${data.prices?.LLC}`,
                },
            ],
            include: `The sliver services includes:`,
            list: [`Prepare & Filing the Articles of Organization`, `Unlimited Name Searches`, `FREE Registered Agent for a year!`],
        },
        {
            variant: `Most popular`,
            header: `Gold`,
            text: `Comprehensive features to get your business started`,
            price: `${packagePrice.gold + data.prices?.LLC}`,
            button: {
                text: `Get the Gold package`,
                url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=${data.prices?.state}`,
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
                    price: `${data.prices?.LLC}`,
                },
            ],
            include: `The sliver package, and:`,
            list: [`EIN Business Tax Number`, `IRS Form 2553`, `Operating Agreement`, `Banking Resolution`, `Express Shipping`, `Lifetime Company Alerts`, `Online Access Dashboard`, `Unlimited Phone & Email Support`, `Business Banking Account`, `Business Tax Consultation`],
        },
        {
            variant: `Best value`,
            header: `Platinum`,
            text: `Full service features at the best value`,
            price: `${packagePrice.platinum + data.prices?.LLC}`,
            button: {
                text: `Get the Platinum package`,
                url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=${data.prices?.state}`,
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
                    price: `${data.prices?.LLC}`,
                },
            ],
            include: `The gold package, and:`,
            list: [`Business Contract Templates`, `Expedited Filing`, `FedEx Delivery`, `Domain Name + Business Email`],
        },
    ];
    
    return (
        <Variants>
            <HeadingCenter headline={content.header} headlineWidth="640" linkText={content.link.text} linkUrl={content.link.url} />
            <ContentCenter>
                <VariantsCards content={cards} />
            </ContentCenter>
        </Variants>
    );
}

export default VariantsSection;
