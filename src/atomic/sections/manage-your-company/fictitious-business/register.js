import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";
import CircleCheckmarkText from "../../../molecules/static-check/circle-checkmark-text";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const Register = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

    &::before {
        content: '';
        height: 2160px;
        width: 100%;
        background-image: ${gradient.blue3};
        position: absolute;
        top: 0;
        left: 0;
    }

    .list, .red {
        max-width: 770px;
    }

    .list {
        padding-top: 104px;

        & > div {
            top: 80px;
        }
    }

    .red {
        padding-top: 48px;
    }
`;

const RegisterSection = ({ className, content }) => (
    <Register className={className}>
        <Oval height="720" width="720" top="0" right="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} />
        <ContentCenter>
            <NumericBoxedList className="list" content={content.list} curve/>
            <CircleCheckmarkText className="red" content={content.red} isRed />
        </ContentCenter>
    </Register>
  );
  
  export default RegisterSection;