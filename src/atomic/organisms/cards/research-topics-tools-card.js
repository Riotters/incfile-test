import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box";
import Texts from "../../molecules/text-blocks/blog-follow-us-text";
import Button from "../../molecules/buttons/blog-follow-us-btn";
import FacebookSVG from "../../../images/icons/facebook32.inline.svg";
import TwitterSVG from "../../../images/icons/twitter32.inline.svg";
import YoutubeSVG from "../../../images/icons/youtube32.inline.svg";

const Wrapper = styled.div`
    width: 100%;

    .tools {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 32px 32px;
    }
`

const Linksbox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
        font-size: 16px;
        line-height: 24px;
        color: ${color.orange1};

        &:not(:last-child) {
            margin-bottom: 16px;
        }

        &:hover {
            color: ${color.blue1};
        }
    }
`;

const ResearchTopicsTools = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="tools" overflow>
            <Texts content="Helpful tools for decision making" leftAlign />
            <Linksbox>
                <Link to="/business-entity-comparison/">Entity Comparison Chart</Link>
                <Link to="/compare-state-filing-times/">State Filing Times</Link>
                <Link to="/llc-state-information/">LLC State Information</Link>
                <Link to="/corporation-state-information/">Corporation State Information</Link>
                <Link to="/s-corporation-tax-calculator/">S Corporation Tax Calculator</Link>
                <Link to="/compliance-filing-requirement/">Ongoing Filing Requirements</Link>
                <Link to="/state-filing-fees/">State Filing Fees</Link>
            </Linksbox>
        </Whitebox>
    </Wrapper>
  )
}

export default ResearchTopicsTools;
