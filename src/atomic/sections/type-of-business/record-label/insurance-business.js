import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/record-label";
import InsuranceBusiness from "../../general/insurance-business";

const InsuranceBusinessSection = () => (
    <InsuranceBusiness title={InfoCards.title} description={InfoCards.description} InfoCards={InfoCards.items} bgColor={`white`} />
);

export default InsuranceBusinessSection;
