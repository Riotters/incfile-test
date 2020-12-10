import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/manage-your-company/fictitious-business/about";
import BusinessesChoose from "../atomic/sections/manage-your-company/fictitious-business/businesses-choose";
import OtherTerms from "../atomic/sections/manage-your-company/fictitious-business/other-terms";
import Register from "../atomic/sections/manage-your-company/fictitious-business/register";
import Behalf from "../atomic/sections/manage-your-company/fictitious-business/behalf";
import Protect from "../atomic/sections/manage-your-company/fictitious-business/protect";
import States from "../atomic/sections/manage-your-company/fictitious-business/states";
import Help from "../atomic/sections/manage-your-company/fictitious-business/help";
import Faq from "../atomic/sections/manage-your-company/fictitious-business/faq";
import Articles from "../atomic/sections/articles";
//texts
import { top, about, businessesChoose, otherTerms, register, behalf, protect, states, help, faq } from "../static/fictitious-business";
import { Helmet } from "react-helmet";
import ProductSchema from "../components/product-schema";

const FictitiousBusiness = () => (
    <Layout>
        <SEO title="DBA Filing | Create a Fictitious Business or Trade Name" description="If you want to do business with a name other than your legal business name, you might need to file an assumed business name with your state. Learn more." />

        <ProductSchema
            productDescription="File a fictitious business or assumed business name to do business under a name other than your legal business name."
            productPrice="99"
            productName="File a Fictitious Business Name or DBA"
            productUrl="https://orders.incfile.com/fictitious-business-name"
        />

        <Top imageName="mrs-bulb-dba" imageAlt="fictitious business name" ovalColor="purple">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <About content={about} />
        <BusinessesChoose content={businessesChoose} />
        <OtherTerms content={otherTerms} />
        <Register content={register} />
        <Behalf content={behalf} />
        <Protect content={protect} />
        <States content={states} />
        <Help content={help} />
        <Faq content={faq} />
        <Articles categoryId={317} />

        <Helmet>
            <script type="application/ld+json">{`
            {
                "@context": "http://schema.org",
                "@type": "VideoObject",
                "name": "What Does DBA Mean? by Incfile",
                "description": "A DBA, which stands for doing business as, is often used by sole proprietors who want to operate their business under a different name. In some states, a DBA is referred to as a fictitious business name, an assumed name, or a trade name. In most states, registering a DBA gives your business the ability to use this alternate name—but using a DBA doesn’t give you official rights to your business name or any protections. If you haven’t registered your business as an LLC, anyone who registers a legal business entity can take your chosen DBA name.   To learn more, visit the following link:  https://www.incfile.com/fictitious-business-or-trade-name/.",
                "thumbnailUrl": "https://i.ytimg.com/vi/jPE31BJPUeY/default.jpg",
                "uploadDate": "2020-06-19T14:53:35Z",
                "duration": "PT1M11S",
                "embedUrl": "https://www.youtube.com/embed/jPE31BJPUeY",
                "interactionCount": "8"
                }
            `}
        </script>
        </Helmet>
    </Layout>
);

export default FictitiousBusiness;
