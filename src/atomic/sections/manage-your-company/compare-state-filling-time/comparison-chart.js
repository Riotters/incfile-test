import styled from "styled-components";
import React from "react";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import CompareTable from "../../../../components/compare-table/compare-table";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import MegafonSVG from "../../../../images/icons/megafon.inline.svg";

const Wrapper = styled.section`
    position: relative;
    
    .announcement {
        width: 100%;
    }
`;

const MobileWrapper = styled.div`
    width: 100%;
    
    @media screen and (max-width: 768px) {
        overflow-x: auto;
    }
`;

const MobileInnerContainer = styled.div`
    @media screen and (max-width: 768px) {
        width: ${props => props.width ?? "100"}%;
    }
`;

const ComparisonStateFillingTime = ({ className, content }) => (
    <Wrapper>
        <Container>
            <ContentCenter contentWidth={1170}>
                <IconTextColorBox className="announcement" rounded Icon={MegafonSVG} content={content.announcement.content} color={content.announcement.color} bottomMargin={32} />
                <MobileWrapper>
                    <MobileInnerContainer width={300}>
                        <CompareTable width="100%" headers={content.headers} entries={content.entries} />
                    </MobileInnerContainer>
                </MobileWrapper>
            </ContentCenter>
        </Container>
    </Wrapper>
);

export default ComparisonStateFillingTime;