import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../partials/heading-center";
import ContentCenter from "../../partials/content-center";
import Image from '../../atoms/image/image_nobase64';
import Oval from "../../atoms/icons/oval";
import { color } from '../../../components/styles/colors';
import OvalSVG from "../../../images/ovals/bottom-left-transparent-orange3.inline.svg";
import OvalSVG2 from "../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import ShapeCurve from "../../atoms/shapes/curve";
import RelativeElement from '../../elements/relative-e';
import AbsoluteShapCure from '../../elements/absolute-shape-curve-e';
import FormControl from "../../molecules/form/form-control";
import Row from "../../molecules/helpers/row";
import InputField from "../../molecules/form/input-field";
import Button from "../../../components/button";

const Wrapper = styled.section`
  position: relative;
  padding: 120px 0 64px;

  @media (min-width: 992px) {
    padding: 0 0 64px;
  }

//   .heading {
//     p {
//       padding-bottom: 48px;
//     }
//   }

`;

const FormContent = styled.div`
    @media screen and (min-width: 769px) {
        min-width: 706px;
    }
`

const AlignCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
`

const SupportForm = ({ className, content, isNewSale }) => (
    <Wrapper className={className}>
        <Oval className="oval" height="136" width="136" top="20" left="0" y="-78">
            <OvalSVG />
        </Oval>

        <Oval className="oval" height="420" width="420" top="20" right="0" y="-65">
            <OvalSVG2 />
        </Oval>

        <HeadingCenter
            className="heading"
            headline={`Client Support Request`}
            headlineWidth="770"
            text={`Please provide contact information`}
        />
        
        <ContentCenter>
            <FormContent>
                <Row>
                    <FormControl column={2}>
                        <InputField label="Name *" isRequired={true}/>
                    </FormControl>

                    <FormControl column={2}>
                        <InputField label="Email Address *" isRequired={true}/>
                    </FormControl>
                </Row>
                <Row>
                    <FormControl column={2}>
                        <InputField label="Phone Number (optional)"/>
                    </FormControl>

                    {!isNewSale && (
                        <FormControl column={2}>
                            <InputField label="Order Number *" isRequired={true}/>
                        </FormControl>
                    )}
                </Row>
                <Row>
                    <FormControl column={1}>
                        <InputField label="Your Message *" isRequired={true}/>
                    </FormControl>
                </Row>

                <AlignCenter>
                    <Button to="/" theme="primary56" width="160px" arrow>Submit</Button>
                </AlignCenter>
            </FormContent>
        </ContentCenter>
    </Wrapper>
);

export default SupportForm;