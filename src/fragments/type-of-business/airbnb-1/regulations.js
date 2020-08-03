import React from "react";
import {Heading} from "../../../atomic/atoms/typography/heading";
import {Paragraph} from "../../../atomic/atoms/typography/paragraph";
import Container from "../../../atomic/container";
import OvalSvg from "../../../images/oval-blue-5.inline.svg";
import styled from "styled-components";

const Regulations = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Container style={{paddingTop: "100px", paddingBottom: "100px"}} width={750}>
            <Heading size={4} style={{fontSize: "40px"}}>
                Rules, Regulations, and Licenses for Airbnbs
            </Heading>
            <Paragraph big>
                Even though you’re running an Airbnb business, you can’t escape real-world licenses, permits and
                regulations. You will need to explore local, state and federal licenses and permits, and  <span
                className="blue big">we can also help out with researching your business licensing needs.</span>
            </Paragraph>
            <Paragraph big>
                It’s also very important to consider local zoning laws, ordinances and permits. Some municipalities
                don’t allow just anyone to set themselves up as an Airbnb host, and if you do, you could be fined. Check
                with your local and regional authorities what their requirements are for Airbnb hosts.
            </Paragraph>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    position: relative;
`;

const Oval = styled.div`
    position: absolute; 
    bottom: 0;
    left: 0;
`;
export default Regulations;
