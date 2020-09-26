import React, {Component, Fragment, useState} from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { Link } from 'gatsby';
import { color } from '../../../../components/styles/colors';

import Container from '../../../container';
import Image from '../../../atoms/image/image_nobase64';
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalSVG2 from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import StarSVG from "../../../../images/icons/star.inline.svg"
import ShapeCurve from "../../../atoms/shapes/curve";
import RelativeElement from '../../../elements/relative-e';
import AbsoluteShapCure from '../../../elements/absolute-shape-curve-e';
import Whitebox from "../../../atoms/boxes/white-box";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Drop from '../../../../components/form/dropdown';



const Wrapper = styled.div`
    position: relative;
    background-color: #f2f6ff;
    padding: 80px 0 150px 0;

    .review__item{
        padding: 32px;
        display: flex;
        flex-direction: column;
        font-family: 'Avenir';

        div{
            flex: 1;
        }
        
        &-top{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
            .verified{
                font-size: 12px;
                color: #7a7a7a;
                text-align: right;
                font-weight: bold;
            }
        }

        &-date-author{
            font-size: 16px;
            color: #4e4e4e;
            margin: 16px 0 32px;
        }
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;

    .left{
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .right{
        width: 186px;
    }
`

const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-right: 15px;

    a{
        width: 42px;
        height: 42px;
        padding: 24px;
        font-family: 'Avenir';
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: #4e4e4e;
        background: ${color.grey5};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        transition: all  0.3s ease-out;

        &.active, &:hover{
            background-color: #5089fd;
            color: #fff;
        }
    }
`

const optionsSort = [
    { value: `high_to_low`, label: `High to Low` },
    { value: `low_to_high`, label: `Lowest to Highest` },
    { value: `desc_date`, label: `Newsest to Oldest` },
    {value: `asc_date`, label: `Oldest to Newest`},
];

const ListReviews = ({ content }) => {
    const [reviews, setReviews] = useState(content);

    const handleSortingReviews = (option) => {
        let value = option.value;
        
        let reSort = [...reviews].sort((a, b) => {
            if (value === 'desc_date') {
                return new Date(b.date) - new Date(a.date);
            }

            if (value === 'asc_date') {
                return new Date(a.date) - new Date(b.date);
            }

            if (value === 'high_to_low') {
                return b.rate - a.rate;
            }

            if (value === 'low_to_high') {
                return a.rate - b.rate;
            }
            return '';
        });

        setReviews(reSort);
    }

    const formatDate = (date) => {
        const myDate = new Date(date);
        const newDate = new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "short",
        day: "numeric"
        }).format(myDate);

        return newDate;
    }

    return (
        <Wrapper>
            <Oval className="oval" height="420" width="460" top="7" left="0" y="-20">
            <OvalSVG />
            </Oval>

            <Oval className="oval" height="570" width="570" bottom="0" right="0" y="20">
            <OvalSVG2 />
            </Oval>
            
            <Container>
                <RelativeElement>
                    <AbsoluteShapCure rotate={0} right="-25px" top="-25px">
                        <ShapeCurve color={color.blue} />
                    </AbsoluteShapCure>

                    {reviews.map(item => (
                        <Fragment>
                            <Whitebox className="review__item" flex style={{ marginBottom: `8px` }}>
                                <div className="review__item-top">
                                    <div>
                                        {Array(...Array(item.rate)).map((v, i) => <span><StarSVG /></span>)}
                                    </div>
                                    {item.verified && (
                                        <div className="verified">VERIFIED BUYER</div>
                                    )}        
                                </div>
                                <div className="review__item-date-author">
                                    {formatDate(item.date)} by {item.author} ({item.address})
                                </div>
                                <Paragraph big mixed={true} bottomMargin={0}>"{parse(item.text)}"</Paragraph>
                            </Whitebox>
                        </Fragment>
                    ))}

                    <Footer>
                        <div className="left">
                            <Pagination>
                                <Link to="#" className="active">1</Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <Link to="#" className="next__page">{`>`}</Link>
                            </Pagination>

                            <Drop options={optionsSort} placeholder="Featured Reviews" onChange = {handleSortingReviews}/>
                        </div>

                        <div className="right">
                            <Image filename="widgetfooter-darklogo-eng" alt=""/>
                        </div>
                    </Footer>

                </RelativeElement>
            </Container>
        </Wrapper>
    )
};

export default ListReviews;