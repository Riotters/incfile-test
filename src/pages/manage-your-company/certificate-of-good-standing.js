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
import About from "../../atomic/sections/manage-your-company/certificate-of-good-standing/about";
import Help from "../../atomic/sections/manage-your-company/certificate-of-good-standing/help";
import Faq from "../../atomic/sections/manage-your-company/certificate-of-good-standing/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, help, faq } from "../../static/manage-your-company/certificate-of-good-standing";
import ProductSchema from "../../components/product-schema";
import { servicePrice } from "../../helpers/global-variables";
import { Helmet } from "react-helmet";

const CertificateOfGoodStanding = () => (
    <Layout>
        <SEO title="Certificate of Good Standing for LLCs & Corporations" description="Learn why your business might need a Certificate of Good Standing and how to easily get one from your Secretary of State. Read more." />
        <ProductSchema
            productUrl={`${process.env.ORDER_URL}/cert-good-standing.php`}
            productName="File a Certificate of Good Standing"
            productPrice={servicePrice.cgs}
            productDescription="Also known as a Certificate of Existence, Certificate of Authorization, or a Certificate of Status, the Good Standing Certificate is a one-page document provided by the secretary of state and provides conclusive evidence of the status of your business entity."
        />
        <Top imageName="mrs-bulb-buildings" imageAlt="File a Certificate of Good Standing" ovalColor="blue">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button externalLink content={top.button[0]} theme="primary56" width="200px" arrow />
            </Buttonsbox>
            <RatingRow>
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>
        <About content={about} />
        <Help content={help} />
        <Faq content={faq} />
        <Benefits page="certificate-of-good-standing" />
        <Articles categoryId={335} />

        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "What Is a Certificate of Good Standing? by Incfile",
                    "description": "A Certificate of Good Standing, sometimes known as a Certificate of Existence, is an official document issued by your Secretary of State that proves your business is in good standing with the state.   Having a Certificate of Good Standing shows that your business entity is active and up-to-date on all required paperwork, licenses and fees. You may need a Certificate of Good Standing to open a bank account, get a loan, or buy real estate.   Learn more about Certificates of Good Standing, including how to get one, in this video—and then check out the links below to get started.   What Is a Certificate of Good Standing, and Why Does It Matter?: https://www.incfile.com/blog/post/certificate-good-standing-why-matters/ Get a Certificate of Good Standing: https://www.incfile.com/manage-your-company/certificate-of-good-standing/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/dDySCoYAh5Q/default.jpg",
                    "uploadDate": "2020-12-21T19:50:47Z",
                    "duration": "PT1M1S",
                    "embedUrl": "https://www.youtube.com/embed/dDySCoYAh5Q",
                    "interactionCount": "0"
                }`}
            </script>
        </Helmet>
    </Layout>
);

export default CertificateOfGoodStanding;
