import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";

//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/amendment/about";
import Requirements from "../../atomic/sections/manage-your-company/amendment/requirements";
import Faq from "../../atomic/sections/manage-your-company/amendment/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";

//Texts
import { seo, top, about, requirements, faq } from "../../static/manage-your-company/amendment";
import ProductSchema from "../../components/product-schema";
import { servicePrice } from "../../helpers/global-variables";

const Amendment = () => (
    <Layout>
        <SEO title={seo.title} description={seo.desc} />
        <ProductSchema
            productUrl={`${process.env.ORDER_URL}/amendment.php`}
            productName="Articles of Amendment for LLCs or Corporations"
            productPrice={servicePrice.amendment}
            productDescription="File an official amendment to change members, your business address, authorized shares, or to alter business activities."
        />
        <Top
            imageName="mr-amendment-name-change"
            imageWidth="948"
            imagePositionRight="50%"
            imageAlt="Articles of Amendment for LLCs or Corporations"
            ovalColor="orange"
            imageMobilePosition={0}
            tabletVariantClass="tablet--shopper"
            tabletImgScale={1}
            tabletImgPosX={40}
            tabletImgPosY={-450}
        >
            <h1>{top.header}</h1>
            <Buttonsbox>
                <Button
                    externalLink
                    content={{ text: `Order Now`, url: `${process.env.ORDER_URL}/amendment.php` }}
                    theme="primary56"
                    width="200px"
                    arrow
                />
            </Buttonsbox>
            <RatingRow>
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>
        <About content={about} />
        <Requirements content={requirements} />
        <Faq content={faq} />
        <Benefits bgImage="linear-gradient(to top, rgba(255, 255, 255, 0) 36%, #f2f6ff);" page="amendment" />
        <Articles categoryId={1858} />
    </Layout>
);

export default Amendment;
