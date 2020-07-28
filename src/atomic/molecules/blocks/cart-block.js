import React from "react";
import RatingBox from "../../atoms/boxes/cart-box";
import Rating from "../../atoms/icons/rating-icon";
import RatingDescription from "../../atoms/boxes/rating-description";
import CartInline from "../../../images/cart.inline.svg";

const CartBlock = () => (
    <RatingBox>
        <Rating>
            <CartInline style={{marginRight: "-10px"}}/>
        </Rating>
        <RatingDescription>
            <span style={{display: "block"}}>stars here</span>
            <span style={{fontWeight: "bold", color: "black"}}>1400</span> ratings
        </RatingDescription>
    </RatingBox>
);

export default CartBlock;
