import React from "react";
import styled from "styled-components";
import Container from "../../container";
import TextCenterLayout from "../blocks/text-center";
import Benefit from "../../benefit";
import Icon1 from "../../../images/icons/icon.inline.svg";
import Icon2 from "../../../images/icons/icon2.inline.svg";
import Icon3 from "../../../images/icons/icon3.inline.svg";
import Icon4 from "../../../images/icons/icon4.inline.svg";
import Icon5 from "../../../images/icons/icon5.inline.svg";
import Icon6 from "../../../images/icons/icon6.inline.svg";
import Icon7 from "../../../images/icons/icon7.inline.svg";
import Icon8 from "../../../images/icons/icon8.inline.svg";
import Icon9 from "../../../images/icons/icon9.inline.svg";

const Wrapper = styled.div`
  padding-top: 50px;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 105px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 56px;
  padding-top: 76px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Benefits = () => {
  return (
    <Wrapper>
      <Container>
        <TextCenterLayout
            headline="Providing everything you need when you need it"
            text="As your business grows we'll be there every step of the way to make sure that you
                have the resources at hand to serve your companies ongoing needs."
            headlineWidth="700"
        />
        <Grid>
          <Benefit
            Icon={Icon1}
            headline="File Annual Report"
            text="The majority of states require that companies file periodic reports that affirm 
                    the current information of the companies memebrs, directors, and business address."
          />
          <Benefit
            Icon={Icon2}
            headline="Certificate of Good Standing"
            text="Required by govermental and private agencies to validate a companies status in 
                    order to facilitate specified transactions."
          />
          <Benefit Icon={Icon3} headline="Foreign Qualification" text="Filed when you need to expand your entity to new states." />
          <Benefit Icon={Icon4} headline="Amendment" text="Filed if a company requires changes to membership, addresses or company name." />
          <Benefit Icon={Icon5} headline="Dissolution" text="Used to formally terminate the existence of an entity." />
          <Benefit Icon={Icon6} headline="Order Registered Agent" text="Order registered agent service and receive your new registered agent information immediately." />
          <Benefit
            Icon={Icon7}
            headline="Corporate LLC Kit"
            text="The Corporate/LLC Kit is a professional binder enclosed in a matching slip case, customized 
                    with the name of your company on the spine insert. Click the icon to view the full contents."
            textWidth="298"
          />
          <Benefit
            Icon={Icon8}
            headline="Business License Search"
            text="Determine all business licenses and permits required at the federal, state, county and 
                    municipal level"
          />
          <Benefit Icon={Icon9} headline="EIN/TAX ID#" text="An EIN is required to open a bank account, file taxes and sumbit payroll taxes." />
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Benefits;
