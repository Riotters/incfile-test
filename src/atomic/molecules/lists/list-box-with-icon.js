import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {color} from "../../../components/styles/colors";
import RegisteredAgentIcon from "../../../images/icons/registered-agent-service.inline.svg";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";

const ListBoxWithIcon = ({title, text, SvgIcon, backgroundColor, ...rest}) => (
    <SpecialBox backgroundColor={backgroundColor} {...rest}>
        <Icon>
            <SvgIcon />
        </Icon>
        <Text>
            <Heading size={3} style={{marginBottom: 0, paddingBottom: 0}}>{title}</Heading>
            {text &&
                <Paragraph style={{paddingBottom: 0, marginBottom: 0, paddingTop: "8px"}}>{text}</Paragraph>
            }
        </Text>
    </SpecialBox>
);

ListBoxWithIcon.defaultProps = {
    SvgIcon: RegisteredAgentIcon,
    backgroundColor: color.blue3
}

ListBoxWithIcon.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    SvgIcon: PropTypes.object.isRequired
}

const SpecialBox = styled.div`
    width: 100%;
    background-color: ${props => props.backgroundColor};
    margin-bottom: 8px;
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 5px;
    
    ${props => props.radiusTop &&
    "border-top-left-radius: 30px;" +
    "border-top-right-radius: 30px;"
}
        
    ${props => props.radiusBottom &&
    "border-bottom-left-radius: 30px;" +
    "border-bottom-right-radius: 30px;"
}
`;

const Icon = styled.div`
    width: 49px;
`;

const Text = styled.div``;
export default ListBoxWithIcon;
