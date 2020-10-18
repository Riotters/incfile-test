import React from "react";
import {Link} from "gatsby";
import Container from "../../container";
import styled from "styled-components";
import {shadow} from "../../atoms/styles/shadows";
import IconSvg from "../../../images/icon-32-status-x.inline.svg";
import {Paragraph} from "../../atoms/typography/paragraph";

const FeesTable = () => (
    <Wrapper>
        <Container>
            <FeesTableWrapper>
                <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell>LLC</TableCell>
                    <TableCell>C-Corp</TableCell>
                    <TableCell>S-Corp</TableCell>
                    <TableCell>Non-Profit</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Alabama</TableCell>
                    <TableCell>
                        <Price>$212</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$175</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$163</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$202</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Alaska</TableCell>
                    <TableCell>
                        <Price>$250</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$250</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$250</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Arizona</TableCell>
                    <TableCell>
                        <Price>$85</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$95</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$95</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Arkansas</TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>California</TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$30</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Colorado</TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Connecticut</TableCell>
                    <TableCell>
                        <Price>$250</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$250</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$250</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Delaware</TableCell>
                    <TableCell>
                        <Price>$110</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$109</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$109</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$105</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Florida</TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$70</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$70</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$79</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Georgia</TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Hawaii</TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$26</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Idaho</TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$31</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Illinois</TableCell>
                    <TableCell>
                        <Price>$154</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$179</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$179</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$52</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Indiana</TableCell>
                    <TableCell>
                        <Price>$98</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$98</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$98</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$98</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Iowa</TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$20</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Kansas</TableCell>
                    <TableCell>
                        <Price>$160</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$80</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$80</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$20</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Kentucky</TableCell>
                    <TableCell>
                        <Price>$40</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$55</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$55</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$8</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Louisiana</TableCell>
                    <TableCell>
                        <Price>$105</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$80</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Maine</TableCell>
                    <TableCell>
                        <Price>$175</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$145</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$145</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$40</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Maryland</TableCell>
                    <TableCell>
                        <Price>$197</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$218</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$218</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$270</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Massachusetts</TableCell>
                    <TableCell>
                        <Price>$520</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$265</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$265</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$41</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Michigan</TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$60</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$60</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$20</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Minnesota</TableCell>
                    <TableCell>
                        <Price>$155</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$155</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$155</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$90</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Mississippi</TableCell>
                    <TableCell>
                        <Price>$53</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$53</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$53</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$53</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Missouri</TableCell>
                    <TableCell>
                        <Price>$52</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$60</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$60</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$27</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Montana</TableCell>
                    <TableCell>
                        <Price>$70</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$70</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$70</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$20</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Nebraska</TableCell>
                    <TableCell>
                        <Price>$109</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$68</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$68</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$22</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Nevada</TableCell>
                    <TableCell>
                        <Price>$425</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$725</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$725</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>New Hampshire</TableCell>
                    <TableCell>
                        <Price>$102</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$165</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$27</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>New Jersey</TableCell>
                    <TableCell>
                        <Price>$130</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$130</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$130</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$79</Price>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell><Button><IconSvg /></Button>New Mexico</TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$25</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>New York</TableCell>
                    <TableCell>
                        <Price>$205</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$130</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$130</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>North Carolina</TableCell>
                    <TableCell>
                        <Price>$127</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$127</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$127</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$62</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>North Dakota</TableCell>
                    <TableCell>
                        <Price>$135</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$40</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Ohio</TableCell>
                    <TableCell>
                        <Price>$99</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$99</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Oklahoma</TableCell>
                    <TableCell>
                        <Price>$104</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$52</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$52</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$35</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Oregon</TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Pennsylvania</TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Rhode Island</TableCell>
                    <TableCell>
                        <Price>$156</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$230</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$238</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$65</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>South Carolina</TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$310</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$310</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>South Dakota</TableCell>
                    <TableCell>
                        <Price>$150</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$150</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$150</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$30</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Tennessee</TableCell>
                    <TableCell>
                        <Price>$308</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$108</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$108</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$103</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Texas</TableCell>
                    <TableCell>
                        <Price>$300</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$300</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$300</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$25</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Utah</TableCell>
                    <TableCell>
                        <Price>$76</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$76</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$76</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$20</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Vermont</TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Virginia</TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$75</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$175</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Washington</TableCell>
                    <TableCell>
                        <Price>$200</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$200</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$200</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$50</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Washington DC</TableCell>
                    <TableCell>
                        <Price>$220</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$220</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$220</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$80</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>West Virginia</TableCell>
                    <TableCell>
                        <Price>$125</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$135</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$55</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Wisconsin</TableCell>
                    <TableCell>
                        <Price>$130</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$100</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$35</Price>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button><IconSvg /></Button>Wyoming</TableCell>
                    <TableCell>
                        <Price>$102</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$102</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$102</Price>
                    </TableCell>
                    <TableCell>
                        <Price>$27</Price>
                    </TableCell>
                </TableRow>
            </FeesTableWrapper>

            <Paragraph mixed big>
                Compare state filing times side by side using our <Link to={`/`}>comparison tool</Link>.
            </Paragraph>
        </Container>
    </Wrapper>
);

const Wrapper = styled.section`
   
`;

const FeesTableWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 8px;
    margin-bottom: 48px;
    overflow-y: scroll;
`;

const TableRow = styled.div`
    display: grid;
    grid-template-columns: auto 160px 160px 160px 160px;
    align-items: center;
    box-shadow: ${shadow.white1};
    background-color: white;
    font-family: Avenir-Roman;
    font-size: 16px;
    line-height 24px;
    border-radius: 5px;
        
    &:first-child{
        font-family: Avenir-Heavy;       
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

export default FeesTable;
