import React from "react";
import {Link} from "gatsby";
import Container from "../../container";
import styled from "styled-components";
import {shadow} from "../../atoms/styles/shadows";
import IconSvg from "../../../images/icon-32-status-x.inline.svg";
import ExSVG from "../../../images/circle-status-x.inline.svg"
import {Paragraph} from "../../atoms/typography/paragraph";

const FeesTable = () => {
    const [prices, setPrices] = React.useState([  ]);
    const [llcSort, setLLCSort] = React.useState(false);
    const [ccorpSort, setCCorpSort] = React.useState(false);
    const [scorpSort, setSCorpSort] = React.useState(false);
    const [nonSort, setNonSort] = React.useState(false);
    const [visible, setVisible] = React.useState([  ]);

    const fetchData = async () => {
        const response = await fetch(`${process.env.INCFILE_API_URL}/getStatePrices`).then(response => response.json());
        return response;
    };

    const handleSortPrice = (entity) => {
        let reSort = [...prices].sort((a, b) => {
            if (entity === 'LLC') {
                return llcSort ? a.LLC - b.LLC : b.LLC - a.LLC;
            }

            if (entity === 'CCorp') {
                return ccorpSort ? a.CCorporation - b.CCorporation : b.CCorporation - a.CCorporation;
            }

            if (entity === 'SCorp') {
                return scorpSort ? a.SCorporation - b.SCorporation : b.SCorporation - a.SCorporation;
            }

            if (entity === 'non') {
                return nonSort ? a.nonprofit - b.nonprofit : b.nonprofit - a.nonprofit;
            }
        });

        setPrices(reSort);
    };

    React.useEffect(() => {
        fetchData().then((data) => {
            setPrices(data);
        })
    }, []);

    const setItemState = (i) => {
        let state = visible;
        state[i] = false;

        return state;
    };

    return (
        <Wrapper>
            <Container>
                <FeesTableWrapper>
                    <TableRow>
                        <TableCell>State</TableCell>
                        <TableCell style={{ cursor:`pointer` }} onClick={() => {setLLCSort(!llcSort); handleSortPrice(`LLC`)}}>LLC</TableCell>
                        <TableCell style={{ cursor:`pointer` }} onClick={() => {setCCorpSort(!ccorpSort); handleSortPrice(`CCorp`)}}>C-Corp</TableCell>
                        <TableCell style={{ cursor:`pointer` }} onClick={() => {setSCorpSort(!scorpSort); handleSortPrice(`SCorp`)}}>S-Corp</TableCell>
                        <TableCell style={{ cursor:`pointer` }} onClick={() => {setNonSort(!nonSort); handleSortPrice(`non`)}}>Non-Profit</TableCell>
                    </TableRow>

                    {prices.length && prices.map((price, i) => {

                        return (
                            <TableRow key={i} className={visible[i] === false ? "hidden" : ""}>
                                <TableCell>
                                    <IconWrapper onClick={ function() { setVisible(setItemState(i)); } }>
                                        <ExSVG/>
                                    </IconWrapper>
                                    {price.state}
                                </TableCell>
                                <TableCell>
                                    <Price>${price.LLC}</Price>
                                </TableCell>
                                <TableCell>
                                    <Price>${price.CCorporation}</Price>
                                </TableCell>
                                <TableCell>
                                    <Price>${price.SCorporation}</Price>
                                </TableCell>
                                <TableCell>
                                    <Price>${price.nonprofit}</Price>
                                </TableCell>
                            </TableRow>
                        );
                    })}
            
                </FeesTableWrapper>

                <Paragraph mixed big>
                    Compare state filing times side by side using our <Link to={`/compare-state-filing-times/`}>comparison tool</Link>.
            </Paragraph>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
   
`;

const FeesTableWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 8px;
    margin-bottom: 48px;
    
    @media (max-width: 768px) {
        overflow: auto;
    }
`;

const TableRow = styled.div`
    display: grid;
    grid-template-columns: auto 160px 160px 160px 160px;
    align-items: center;
    box-shadow: ${shadow.white1};
    background-color: white;
    font-family: 'Avenir';
    font-size: 16px;
    line-height 24px;
    border-radius: 5px;
        
    &:first-child{
        font-family: 'Avenir';
        font-weight: 700;       
    }
    
    &.hidden {
        display: none;
    }
`;

const TableCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    border-right: 1px solid #f4f4f4;
    
    &:first-child{
        justify-content: flex-start;
    }
    
    &:last-child{
        border-right: none;
    }
`;

const Price = styled.span`
    padding: 8px 26px;
    border-radius: 20px;
    background-color: #f2f8f3;
`;

const Button = styled.button`
    width: 32px;
    height: 32px;
    margin-right: 24px;
    border: 0;
    background: none;
`;

const IconWrapper = styled.div`
    margin-right: 15px;
    cursor: pointer;
`;

export default FeesTable;
