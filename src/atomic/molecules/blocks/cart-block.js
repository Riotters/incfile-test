import React from "react";
import Rating from "../../atoms/icons/rating-icon";
import RatingDescription from "../../atoms/boxes/rating-description";
import CartInline from "../../../images/shopper-star.inline.svg";
import Star from "../../../images/icons/star.inline.svg";
import { getAggregrateReviews } from "../../../api/Api";
import { formatNumber } from "../../../helpers/utils";
import { color } from "../../atoms/styles/colors";
import styled from "styled-components";

const RatingBox = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    margin-left: 0px;
    margin-right: 42px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }

  &:hover {
    div {
      p {
        &:first-child {
          color: ${color.orange1};
        }
      }
    }
  }
`;

const TextWrapper = styled.div`
    display flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12px;
`;

const RatingHeader = styled.div`
  font-family: Avenir, sans-serif;
  font-size: 15px;
  font-weight: 900;
  line-height: 1.6;
  color: #4e4e4e;
  padding-bottom: 2px;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${color.blue1};
  }
`;

const CartBlock = () => {
  const [fiveStarsNumber, setFiveStarsNumber] = React.useState(0);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            let _totalReviews = 15858;

            if (sessionStorage.getItem('__total_reviews')) {
                _totalReviews = sessionStorage.getItem('__total_reviews');
            } else {
                getAggregrateReviews().then((data) => {
                    _totalReviews = data['5_star'];
                    sessionStorage.setItem('__total_reviews', _totalReviews);
                });
            }

            setFiveStarsNumber(formatNumber(_totalReviews));

            if (document.getElementById('js_dynamic_total_review')) {
                const jsDynamicTotalReviews = document.getElementById('js_dynamic_total_review');
                jsDynamicTotalReviews.innerHTML = formatNumber(_totalReviews);
            }
        }
    }, []);

  return (
    <RatingBox href="https://www.shopperapproved.com/reviews/IncFile.com" target="_blank" rel="noopener noreferrer">
      <Rating>
        <CartInline />
      </Rating>
      <TextWrapper>
        <RatingHeader>More trusted, Verifed Reviews</RatingHeader>
        <RatingDescription>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span>{fiveStarsNumber}</span> ratings
          </div>
        </RatingDescription>
      </TextWrapper>
    </RatingBox>
  );
};

export default CartBlock;
