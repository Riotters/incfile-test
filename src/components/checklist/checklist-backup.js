import React from "react"
import styled from "styled-components"
import Box from "./box"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Checklist = ({ className }) => (
    <Wrapper className={className}>
        <Box>Lorem ipsum 1</Box>
        <Box>Lorem ipsum 2</Box>
        <Box>Lorem ipsum 3</Box>
        <h4>Done</h4>
        <Box>Lorem ipsum 3</Box>
    </Wrapper>
)

export default Checklist