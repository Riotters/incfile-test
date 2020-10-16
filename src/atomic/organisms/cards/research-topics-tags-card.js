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

    .tags {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 32px 32px;
    }
`

const Tagsbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const Tag = styled(Link)`
    font-size: 16px;
    line-height: 24px;
    background-color: ${color.blue3};
    color: ${color.blue1};
    border-radius: 15px;
    padding: 4px 12px;
    margin-right: 8px;
    margin-bottom: 12px;
    transition: background-color .3s ease, color .3s ease;

    &:hover {
        background-color: ${color.orange3};
        color: ${color.orange1};
    }
`;

const ResearchTopicsTags = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="tags" overflow>
            <Texts content="More answers to your questions" leftAlign />
            <Tagsbox>
                <Tag to="/research-topics/general-research-topics/">General</Tag>
                <Tag to="/research-topics/llc-info/">LLC</Tag>
                <Tag to="/research-topics/s-corporation-info/">S - Corporation</Tag>
                <Tag to="/research-topics/c-corporation-info/">C - Corporation</Tag>
                <Tag to="/research-topics/registered-agent-help/">Registered Agent</Tag>
                <Tag to="/research-topics/nonprofit-info/">Nonprofit</Tag>
                <Tag to="/research-topics/ein-info/">EIN</Tag>
                <Tag to="/research-topics/video-library/"> Video Library</Tag>
                <Tag to="/research-topics/business-taxes/">Business Taxes</Tag>
            </Tagsbox>
        </Whitebox>
    </Wrapper>
  )
}

export default ResearchTopicsTags;
