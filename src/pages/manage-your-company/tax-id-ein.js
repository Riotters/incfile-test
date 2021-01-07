import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/tax-id-ein/about";
import Help from "../../atomic/sections/manage-your-company/tax-id-ein/help";
import Faq from "../../atomic/sections/manage-your-company/tax-id-ein/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Texts
import {
  top,
  about,
  help,
  faq,
} from "../../static/manage-your-company/ein-tax-id";
import ProductSchema from "../../components/product-schema";
import { Helmet } from "react-helmet";
import { servicePrice } from "../../helpers/global-variables";
import { HeadingP } from "../../atomic/atoms/typography/heading-to-p";

const TaxIdEin = () => (
  <Layout>
    <SEO
      title="EIN / Tax ID Number | How to Apply for a Federal EIN"
      description="Also known as a “Tax ID number,” the EIN is a business federal tax ID that works like a Social Security Number for your business. Learn more. "
    />
    <ProductSchema
      productUrl={`${process.env.ORDER_URL}/ein-form.php`}
      productName="Business EIN / Tax ID Number"
      productPrice={servicePrice.ein}
      productDescription="Obtain a federal employer identification number for your business."
    />
    <Top
      imageName="mrs-bulb-tax-number"
      imageAlt="Employer Identification Number"
      ovalColor="blackpink"
    >
      <h1 style={{ maxWidth: "520px" }}>{top.header}</h1>
      <HeadingP size={2} big>
        {top.text}
      </HeadingP>
      <Buttonsbox>
        <Button
          externalLink
          content={top.button[0]}
          theme="primary56"
          width="200px"
          arrow
        />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Help content={help} />
    <Faq content={faq} />
    <Benefits page="tax-id-ein" />
    <Articles categoryId={313} />

    <Helmet>
      <script type="application/ld+json">
        {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How to Get an EIN / Tax ID Number for your Business by Incfile",
                    "description": "Your EIN or Tax ID number tells the IRS who you are. It’s used for just about everything, including filing taxes, opening a bank account for your business, applying for credit and loans, and properly documenting payroll for your employees.  Turns out, there are a lot of abbreviations for Tax IDs. You might see people refer to Tax ID numbers as an EIN ('employer identification number'). You might also notice people pop an “F” in front of EIN for an FEIN number. In this case, the ‘F’ stands for 'federal.'  To get a Tax ID for your business, you can apply online through the EIN application system on the IRS website. Or if you'd rather not go through the hassle of applying directly with the IRS, then Incfile can obtain one on your behalf.   The service is included for free as part of Incfile's Gold and Platinum business formation packages. And if you need it as a standalone service, Incfile can offer you that as well. We handle all the paperwork and the interaction with the IRS so you can focus on building your business.  We can even check your Tax ID off of your to-do list in ONE business day. How’s that for simple?   Additional Resources:  https://www.incfile.com/manage-your-company/tax-id-ein/ https://www.incfile.com/blog/post/need-purchase-ein-incfile-can-file-ein/ https://www.incfile.com/blog/post/behind-scenes-incfile-obtaining-ein/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/8AuLOTqFHQ4/default.jpg",
                    "uploadDate": "2020-08-27T15:48:08Z",
                    "duration": "PT1M12S",
                    "embedUrl": "https://www.youtube.com/embed/8AuLOTqFHQ4",
                    "interactionCount": "33"
                }`}
      </script>
    </Helmet>
  </Layout>
);

export default TaxIdEin;
