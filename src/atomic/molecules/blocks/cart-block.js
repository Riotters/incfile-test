import React from "react";
import RatingBox from "../../atoms/boxes/cart-box";
import Rating from "../../atoms/icons/rating-icon";
import RatingDescription from "../../atoms/boxes/rating-description";
import CartInline from "../../../images/cart.inline.svg";
import Star from "../../../images/icons/star.inline.svg";
import { getAggregrateReviews } from '../../../api/Api';
import { formatNumber } from '../../../helpers/utils';

const CartBlock = () => {
    const [fiveStarsNumber, setFiveStarsNumber] = React.useState(0);

    React.useEffect(() => {
        getAggregrateReviews().then(data => {
            setFiveStarsNumber(formatNumber(data['5_star']));
        })
    }, []);
    
    return (
        <RatingBox>
            <Rating>
                <CartInline style={{ marginRight: "-10px" }} />
            </Rating>
            <RatingDescription>
                <span style={{ display: "block" }}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </span>
                <span style={{ fontWeight: "bold", color: "black" }}>{fiveStarsNumber}</span> ratings
        </RatingDescription>
        </RatingBox>
    );
};

export default CartBlock;
