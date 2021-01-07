import React from "react";
import Layout from "../../components/layout";
import Top from "../../atomic/partials/top";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import BlueContainer from "../../atomic/sections/type-of-business/boutique-clothing-business/blue-container";
import SettingBusiness from "../../atomic/sections/type-of-business/boutique-clothing-business/setting-business";
import Regulations from "../../atomic/sections/type-of-business/boutique-clothing-business/regulations";
import BoutiqueTaxes from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-taxes";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/boutique-clothing-business/insurance-business";
import UseFulTools from "../../atomic/sections/type-of-business/boutique-clothing-business/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BoutiqueClothingTabs from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-clothing-tabs";
import TypeOfBusiness from "../../atomic/sections/type-of-business/boutique-clothing-business/type-of-business";
import BoutiqueBusinessPlan from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-business-plan";
import BoutiqueBusinessStructure from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-business-structure";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Helmet } from "react-helmet";
import CompleteCheckListSection from "../../atomic/sections/type-of-business/general/complete-checklist-section";

const BoutiqueClothingBusiness = () => (
  <Layout>
    <SEO
      title="How to Start a Traditional or Online Boutique Clothing Business"
      description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."
    />

    <Top
      ovalColor="purple"
      imageName="bouthique-clothing-main"
      imageAlt="set up a boutique clothing business"
      headlineWidth={700}
    >
      <h1>How to Start a Traditional or Online Boutique Clothing Business</h1>
      <p>
        Fashion and beautiful clothing have always been in demand, and if you
        have an eye for style, a boutique clothing business could be ideal for
        you.
      </p>
      <ButtonsBox>
            <Button
                externalLink
                theme="primary56"
                marginMD="0 24px 0 0"
                arrow
                content={{
                    url: `${process.env.ORDER_URL}/form-order-now.php`,
                    text: "Start Now",
                }}
            />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <BoutiqueClothingTabs />

    <TypeOfBusiness />

    <BlueContainer />

    <BoutiqueBusinessPlan />

    <BoutiqueBusinessStructure />

    <SettingBusiness />

    <CompleteCheckListSection />

    <Regulations />

    <BoutiqueTaxes />

    <InsuranceBusinessSection />

    <UseFulTools />

    <Conclusion
      to={`${process.env.ORDER_URL}/form-order-now.php`}
      buttonTitle="Start your Boutique Clothing Business with us, today"
      width="490px"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>
      <Paragraph big>
        With a strong eye for style and good business acumen, you can start a
        successful retail clothing company. If you can find a great niche,
        understand your competitors and put together a solid business plan, you
        will have every chance for success.
      </Paragraph>
        </Conclusion>
        
        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How to Start a Retail Business by Incfile",
                    "description": "Starting a retail business is a dream that many people have. In fact, 1 in 4 jobs in the U.S. are retail, and 98% of those jobs are in small shops that employ fewer than 50 people.  Before you jump in, there’s a lot to think about. But we’re here to help!  Incfile has business ideas and in-depth guides to teach you how to open a retail business.   And with a $0 LLC plus state fee business formation package, taking that first step is even easier.   Click the links in the box below to get started.  - File an LLC for free: https://www.incfile.com/free-llc/ - The complete guide to starting a business: https://www.incfile.com/guides-start-business/ - How to start an LLC: https://www.incfile.com/form-an-llc/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/F336c6HKzXM/default.jpg",
                    "uploadDate": "2020-12-11T18:56:05Z",
                    "duration": "PT1M32S",
                    "embedUrl": "https://www.youtube.com/embed/F336c6HKzXM",
                    "interactionCount": "8"
                }`}
            </script>
        </Helmet>
  </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export default BoutiqueClothingBusiness;
