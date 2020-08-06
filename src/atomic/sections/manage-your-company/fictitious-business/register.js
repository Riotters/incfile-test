import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";
import CircleCheckmarkText from "../../../molecules/static-check/circle-checkmark-text";

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
    }

    .red {
        padding-top: 48px;
    }
`;

const RegisterSection = ({ className, content }) => (
    <Register className={className}>
        <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} />
        <ContentCenter>
            <NumericBoxedList className="list" content={content.list} />
            <CircleCheckmarkText className="red" content={content.red} isRed />
        </ContentCenter>
    </Register>
  );
  
  export default RegisterSection;