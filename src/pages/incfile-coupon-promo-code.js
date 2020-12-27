import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

//Sections
import Top from "../atomic/partials/simple-top";
import Save from "../atomic/sections/other/incfile-coupon-promo-code/save";
import Get from "../atomic/sections/other/incfile-coupon-promo-code/get";
import Incorporating from "../atomic/sections/other/incfile-coupon-promo-code/incorporating";
//Texts
import { top, save, get, incorporating } from "../static/other/incfile-coupon-promo-code";

const IncfileCouponPromoCode = () => (
  <Layout>
    <SEO title="Incfile Coupon Promo Code" description="Incfile Coupon Promo Code" />
    <Top headline={top.header} text={top.text} />
    <Save content={save} />
    <Get content={get} />
    <Incorporating content={incorporating} />
  </Layout>
);

export default IncfileCouponPromoCode;
