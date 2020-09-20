import React from "react";
import {InfoCards} from "../../../../static/type-of-business/bookstore";
import InsuranceBusiness from "../../general/insurance-business";

const InsuranceBusinessSection = () => (
    <InsuranceBusiness title={InfoCards.title} description={InfoCards.description} InfoCards={InfoCards.items}/>
);

export default InsuranceBusinessSection;
