import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

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
import { getReviews } from '../../../../api/Api';
import Pagination from '../../../../components/Pagination';

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

const optionsSort = [
    { value: `highest`, label: `High to Low` },
    { value: `lowest`, label: `Lowest to Highest` },
    { value: `newest`, label: `Newsest to Oldest` },
    { value: `oldest`, label: `Oldest to Newest` },
];

const ListReviews = () => {
    const [total, setTotal] = useState(70);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _currentPage: 1,
        _limit: 10,
        _sort: 'highest'
    });

    const setCurrentPage = (pageNum) => {
        setFilters((prevState) => ({
            ...prevState,
            _currentPage: pageNum
        }));
    }

    const formatDate = (date) => {
        if (!date) {
            return null;
        }
        
        const myDate = new Date(date);
        const newDate = new Intl.DateTimeFormat('en-US', {
            year: "numeric",
            month: "short",
            day: "numeric"
            }).format(myDate);

        return newDate;
    }

    React.useEffect(() => {
        getReviews(filters._currentPage, filters._limit, filters._sort).then(data => {
            const res = [];

            Object.keys(data).forEach(key => {
                const vKey = data[key];
                if (vKey.display_name) {
                    return res.push({
                        rate: vKey.overall,
                        verified: true,
                        author: vKey.display_name,
                        date: vKey.review_date,
                        address: vKey.location,
                        text: vKey.comments,
                    })
                }
            })
            
            setReviews(res);
            setLoading(false);
            
            const el = document.getElementById('js_reviews_list');
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    }, [filters]);

    return (
        <Wrapper>
            <Oval className="oval" height="420" width="460" top="7" left="0" y="-20">
                <OvalSVG />
            </Oval>

            <Oval className="oval" height="570" width="570" bottom="0" right="0" y="20">
                <OvalSVG2 />
            </Oval>
            
            {!loading && (
                <Container id="js_reviews_list">
                    <RelativeElement>
                        <AbsoluteShapCure rotate={0} right="-25px" top="-25px">
                            <ShapeCurve color={color.blue} />
                        </AbsoluteShapCure>

                        {reviews.map((item, key) => (
                            <Fragment key={key}>
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
                                    {typeof item.text != 'undefined' && item.text &&
                                        <Paragraph big mixed={true} bottomMargin={0}>"{parse(item.text)}"</Paragraph>
                                    }
                                </Whitebox>
                            </Fragment>
                        ))}

                        <Footer>
                            <div className="left">
                                <Pagination totalRecords={total} perPage={filters._limit} setCurrentPage={setCurrentPage} />
                                <Drop
                                    options={optionsSort}
                                    placeholder="Featured Reviews"
                                    onChange={option => setFilters((prevState) => ({
                                        ...prevState,
                                        _sort: option.value
                                    }))}
                                />
                            </div>

                            <div className="right">
                                <a href="https://www.shopperapproved.com/reviews/IncFile.com/" target="_blank" rel="noreferrer">
                                    <Image filename="widgetfooter-darklogo-eng" alt="Incfile review in Shopper Approved" />
                                </a>
                            </div>
                        </Footer>

                    </RelativeElement>
                </Container>
            )}
        </Wrapper>
    );
};

export default ListReviews;